    import {ref, onMounted, toRaw, watch, reactive, computed, watchEffect} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import {ElLoading} from "element-plus";
    import html2Canvas from "html2canvas";
    import JsPDF from "jspdf";

    const route = useRoute()
    const router = useRouter()
    export default function () {
        onMounted(() => {

        })

        /**
         * 导出PDF
         * @param nodeName DOM节点
         * @param fileName 文件名
         * @param scale 放大倍数，默认3
         * @param style PDF样式
         */
        const exportPDF = (nodeName: string, fileName: string, scale: number, style: string) => {
            // 要转化的数据
            let html2Pdf = nodeName ? document.querySelector(nodeName) : document.body;// 要转换的数据（没有传入指定节点，则默认转换整个页面）
            if (style) { // 如果传入自定义样式
                html2Pdf.style.cssText = style;
            }
            // 参数配置
            let opts = {
                allowTaint: false,//允许加载跨域的图片
                taintTest: true, //检测每张图片都已经加载完成
                scale: scale || 3, // 添加的scale 参数
                logging: false, //日志开关，发布的时候记得改成false
                useCORS: false
            };
            const loading = ElLoading.service({
                lock: true,
                text: '正在导出PDF...',
                background: 'rgba(0, 0, 0, 0.7)',
            })
            if (html2Pdf) {
                html2Canvas(<HTMLElement>html2Pdf, opts).then((canvas) => {
                    const contentWidth = canvas.width;
                    const contentHeight = canvas.height;
                    const pageHeight = contentWidth / 592.28 * 841.89;//一页pdf显示html页面生成的canvas高度
                    let leftHeight = contentHeight;
                    let position = 0;
                    let imgWidth = 595.28;// A4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    let imgHeight = 592.28 / contentWidth * contentHeight;
                    console.log('pageHeight', pageHeight, 'imgWidth:', imgWidth, 'imgHeight:', imgHeight)
                    const imgData = canvas.toDataURL('image/JPEG', 1.0);
                    setTimeout(() => {
                        // pageData = canvas.toDataURL('image/jpeg', 1.0);
                        let PDF = new JsPDF('p', 'pt', 'a4');
                        PDF.setProperties({
                            isEvalSupported: true,
                        });
                        if (leftHeight < pageHeight) {
                            PDF.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
                        } else {
                            while (leftHeight > 0) {
                                PDF.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                                leftHeight -= pageHeight;
                                position -= 841.89;
                                if (leftHeight > 0) {
                                    PDF.addPage();
                                }
                            }
                        }
                        // setTimeout(downloadPdfMsg, 500);// 关闭loading提示
                        PDF.save((fileName ? fileName : new Date().getTime()) + '.pdf',{ useCompactFonts: true,isCompressed: true });// 如果没有传入要生成的文件名，则默认使用当前时间戳作为文件名
                    }, 1000);
                }).catch(() => {
                    setTimeout(() => {
                        loading.close()
                    }, 2000)

                }).finally(() => {
                    setTimeout(() => {
                        loading.close()
                    }, 2000)
                })

            }
        }
        /**
         * 导出图片
         * @param nodeName DOM节点
         * @param fileName 文件名
         */
        const exportImage =async (nodeName,fileName) =>{
                const loading = ElLoading.service({
                    lock: true,
                    text: '正在导出图片...',
                    background: 'rgba(0, 0, 0, 0.7)',
                })
            try {
                // 要转化的数据
                let html2Pdf = nodeName ? document.querySelector(nodeName) : document.body;// 要转换的数据（没有传入指定节点，则默认转换整个页面）

                const canvas = await html2Canvas(html2Pdf);
                const img = canvas.toDataURL('image/png');

                // 创建一个a标签模拟点击进行下载
                const downloadLink = document.createElement('a');
                downloadLink.href = img;
                downloadLink.download = (fileName ? fileName : new Date().getTime()) + '.png';
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
                setTimeout(() => {
                    loading.close()
                }, 2000)
            } catch (error) {
                setTimeout(() => {
                    loading.close()
                }, 2000)
                console.error('Error exporting to image:', error);
            }
        }
        return {exportPDF, exportImage}
    }