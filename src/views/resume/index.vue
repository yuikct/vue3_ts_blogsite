<template>
  <el-affix :offset="35" style="display:none">
    <el-button @click="handleDrawer" :disabled="editorInfo.btnEditDisabled"><i class="layui-icon layui-icon-edit"></i>编辑</el-button>
    <el-button @click="exportHPdf('#paper',editorInfo.pdfFileName,3,'')" :disabled="editorInfo.btnExportDisabled"><i class="layui-icon layui-icon-export"></i>导出PDF</el-button>
  </el-affix>
  <div class="resume-container " :contenteditable="editorInfo.editable" :style="editorInfo.editable?'-webkit-user-modify: read-write-plaintext-only':''">
    <div ref="paper" class="paper decollator" id="paper" :style="newObj.paperPadding" >
      <div class="apply-job-container">
        <div id="job" >前端开发工程师
<!--          <a href="http://47.119.183.239/" target="_blank" class="link">(http://47.119.183.239/)</a>-->
        </div>
        <div id="status">随时到岗</div>
      </div>
      <div class="jianli-title" :style="newObj.jianliTitle">
        <div class="title">个人资料</div>
      </div>
      <div class="user-base-container">
        <div class="photo-container" :style="newObj.avatar">
          <el-image id="photo" src="http://47.119.183.239:7791/i/2024/11/13/67347150b65b1.jpg" ></el-image>
          <div class="edit-photo-model" id="edit-photo-model" style="display: none;">
            <i class="layui-icon" style="color: white; font-size: 25px"></i><br>
            <span style="font-size: 14px; color: white">修改头像</span>
          </div>
        </div>
        <div id="name" >余泽伟</div>
        <div id="address" > 28岁 男 广州 天河</div>
        <div id="desc" >5年前端，能独立开发后台管理系统、可视化大屏及企业官网等PC端，移动端uni-App、微信小程序等项目</div>

        <div class="contact-container">
          <div class="contact-item">
            <!--              <img src="/img/icon/jianli/phone.png">-->
            <i class="layui-icon layui-icon-cellphone-fine"></i>
            <div id="phone" ><span style="letter-spacing: 0.16065px;">17820578612（微信同号）</span><span
                style="color: rgb(0, 0, 0); border-radius: 2px;"></span></div>
          </div>
          <div class="contact-item">
            <!--              <img src="/img/icon/jianli/email.png">-->
            <i class="layui-icon layui-icon-email"></i>
            <div id="email"> yuikct@163.com</div>
          </div>
        </div>
        <div class="education" id="educationCard1">
          <div id="school"  style="padding-left: 0px">广东岭南职业技术学院<span
              style="background-color: rgb(38, 38, 38);"></span></div>
          <div class="education-info">
            <div id="education"  style="padding-left: 0px">大专</div>
            <div id="speciality" >软件技术专业</div>
            <div id="graduation-time"  style="border-right: none">2016-09 ~ 2019-06</div>
          </div>
          <i id="ctrlEducationCard1" class="layui-icon ctrl-education" style="display: none;"></i>
        </div>
        <div class="education" id="educationCard2" style="display: none;">
          <div id="school2"  style="padding-left: 0px;">学校名称</div>
          <div class="education-info">
            <div id="education2"  style="padding-left: 0px;">学历</div>
            <div id="speciality2" >专业</div>
            <div id="graduation-time2" >毕业时间</div>
          </div>
          <i id="ctrlEducationCard2" class="layui-icon ctrl-education" style="display: none;"></i>
        </div>
      </div>
      <div class="jl-item">
        <div class="jianli-title" :style="newObj.jianliTitle">
          <div class="title" >专业技能</div>
        </div>
        <div class="tech" >1. 熟练掌握<b class="bold">HTML/HTML5、Css/Css3、JavaScript/ES6</b>等Web标准技术，解决各类页面布局，还原设计稿；
        </div>
        <div class="tech" >2. 熟悉 <b class="bold">Vue、React</b>等前端框架，如底层原理、生命周期，掌握setup函数，掌握插槽slot实现，封装公用组件；
        </div>
        <div class="tech" >3. 熟练使用<b class="bold">Element-UI、vViewUI、Ant-Design、Vant、Electron</b>等技术栈，具备独立开发项目能力；
        </div>
        <div class="tech" >4. 熟悉使用<b class="bold">ECharts、AntV/G6、DataV、Swiper</b>等数据可视化库，具有真实企业项目开发经验；
        </div>
        <div class="tech" >5. 熟悉<b class="bold">微信小程序、微信公众号</b>开发流程，比如实现组件封装、直播商城、微信支付，聊天室等；</div>
        <div class="tech" >6. 熟悉<b class="bold">Uni-App、Taro、Electron</b>等前端应用框架，具备独立开发移动端APP能力；
        </div>
        <div class="tech" >7. 熟悉<b class="bold">HTTP、Websocket</b>通信协议，掌握<b
            class="bold">Node.js、Npm</b>、解决多浏览器兼容性有一定经验；
        </div>
        <div class="tech" >8. 掌握前端常用工程化组件、编译和构建工具，如<b class="bold">Webpack/Vite，Babel、Eslint</b>，能够配置和优化前端项目；
        </div>
        <div class="tech" >9. 熟悉版本控制工具<b class="bold">Git</b>的协作开发、分支管理、版本管理，能进行良好的团队协作以及有良好的编码习惯；
        </div>
        <i class="sort-item layui-icon"></i>
      </div>
      <div class="jl-item">
        <div class="jianli-title" id="lvli" :style="newObj.jianliTitle">
          <div class="title" >工作履历</div>
          <button id="addLvLi" style="display: none;"><i class="layui-icon"></i> 添加履历</button>
        </div>
        <div class="company-times">
          <ul class="layui-timeline" style="text-align: left; margin-bottom: -5px" id="companys">

            <li class="companyItem layui-timeline-item" :style="newObj.companyItem">
              <i class="layui-icon layui-timeline-axis"></i>
              <div class="layui-timeline-content layui-text">
                <div class="company_con">
                  <div class="company_con_tit"><h3 class="layui-timeline-title" >2023.12 ~ 2024.10</h3><span class="company_name">广州呵哦猴二手商品贸易有限公司 - 前端开发工程师</span></div>
                  <p class="companyJobDesc" >负责<b class="bold-font">睐回官网、睐回后台管理系统、睐回二手奢饰品APP产品</b>的研发工作</p>
                </div>
                <el-image class="company-logo" src="http://47.119.183.239:7791/i/2024/11/13/67346f7785a0a.png"></el-image>
              </div>
            </li>
            <li class="companyItem layui-timeline-item" :style="newObj.companyItem">
              <i class="layui-icon layui-timeline-axis"></i>
              <div class="layui-timeline-content layui-text">
                <div class="company_con">
                  <div class="company_con_tit"><h3 class="layui-timeline-title" >2021.03 ~ 2023.9</h3><span class="company_name">广州新赫信息科技有限公司 - 前端开发工程师</span></div>
                  <p class="companyJobDesc" >负责<b class="bold-font">数据可信生态、微信小程序、监控大屏</b>等多款产品的研发工作，任职期间<b class="bold-font">连续两年获得公司年度奉献奖</b></p>
                </div>
                <el-image class="company-logo"  src="http://47.119.183.239:7791/i/2024/11/13/67346f74cb0df.png"></el-image>
              </div>
            </li>
            <li class="companyItem layui-timeline-item" :style="newObj.companyItem">
              <i class="layui-icon layui-timeline-axis"></i>
              <div class="layui-timeline-content layui-text">
                <div class="company_con">
                  <div class="company_con_tit"><h3 class="layui-timeline-title" >2019.6 ~ 2021.01</h3><span class="company_name">广东中科云健康科技有限公司 - 前端开发工程师</span></div>
                  <p class="companyJobDesc" >负责<b class="bold-font">云慧康家庭端、医生端、医助端</b>等产品的研发工作</p>
                </div>
                <el-image class="company-logo"  src="http://47.119.183.239:7791/i/2024/11/13/67346f7785b09.png"></el-image>
              </div>
            </li>
          </ul>
        </div>
        <i class="sort-item layui-icon"></i>
      </div>
      <div class="jl-item">
        <div class="jianli-title" id="jingyan" :style="newObj.jianliTitle">
          <div class="title" >项目经验</div>
          <button id="addJingYan" style="display: none;"><i class="layui-icon"></i> 添加经验</button>
        </div>
        <div id="jingyans" class="">
          <div class="jl-jy-item">
            <div class="jingyan-item" >
              <div class="jingyan-header">
                <div class="jingyan-time" >2013.12 ~ 2024.10</div>
                <div class="jingyan-name" >睐回二奢平台APP + 睐回官网 + 后台管理系统</div>
                <div class="jingyan-role" >前端项目主程</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title float_left" >技术栈：</span>
                <div class="jingyan-content projectTech" >uni-app + vue3 + TypeScript + uView-ui + ant-design + 保利威polyv + 腾讯云IM即时通讯</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title" >项目简介：</span>
                <div class="jingyan-content projectDesc" >睐回平台致力解决商家和用户们的二手奢饰品闲置问题，提供全面的解决方案包括知名度提升、优化进货与清货渠道，以及最新的行业洞察和专业工具。打造一个以“高品质真品”为核心的二手奢饰品交易平台</div>
              </div>
              <div class="jingyan_list">
                <div class="jingyan-title" >我的职责：</div>
                <div class="jingyan-content projectWorkContent" >担任项目中的前端主要负责人，负责官网及APP产品的功能开发，修复测试问题。</div>
              </div>
              <div class="jinyan_list">
                <div class="jingyan-title" >难点与成长：</div>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <div class="jingyan-content projectIncome" >负责公司响应式官网的搭建与开发，和移动端APP产品核心业务的开发，完成了电商直播间动效交互与实现、社交聊天室的即时通讯，收银台支付等功能。</div>
              </div>
            </div>
            <i class="sort-item-jy layui-icon"></i>
          </div>

          <div class="jl-jy-item">
            <div class="jingyan-item" >
              <div class="jingyan-header">
                <div class="jingyan-time" >2021-03 ~ 2023-09</div>
                <div class="jingyan-name" >新赫数据可信生态系统</div>
                <div class="jingyan-role" >前端项目主程</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title float_left" >技术栈：</span>
                <div class="jingyan-content projectTech" >React + TypeScript + redux + hooks + ant-design + Echarts + AntV-G6 + 腾讯地图WebMap + Vue-PDF + 表单CrateForm</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title" >项目简介：</span>
                <div class="jingyan-content projectDesc" > 这是一个比较综合的大型项目，涵盖了数据可信、文件可信、可信监管、传输服务子系统，旨在对节点、用 户、部门及应用四大对象之间进行的数据信息包括（源点、传输、及交易）的全流程进行跟踪和处理，对数据的交易过程进行全面的追溯。</div>
              </div>
              <div class="jingyan_list">
                <div class="jingyan-title" >我的职责：</div>
                <div class="jingyan-content projectWorkContent" >担任项目中的前端项目负责人，负责数据可信、文件可信、可信监管等生态系统的开发以及修复线上测试问题。</div>
              </div>
              <div class="jinyan_list">
                <div class="jingyan-title" >难点与成长：</div>
                <div class="jingyan-content projectIncome" >负责数据可信生态系统的搭建、数据传输过程中产生的追溯链路图开发，开发低代码平台，完成了链路追踪平台、低代码平台等业务模块。</div>
              </div>
            </div>
            <i class="sort-item-jy layui-icon"></i></div>
          <div class="jl-jy-item">
            <div class="jingyan-item" >
              <div class="jingyan-header">
                <div class="jingyan-time" >2022-08 ~ 2023-02</div>
                <div class="jingyan-name" >可信链监控可视化大屏</div>
                <div class="jingyan-role" >前端项目主程</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title float_left" >技术栈：</span>
                <div class="jingyan-content projectTech" >Vue3+TypeScript+Pinia+Vite+Element-Plus+Axios+Websocket+Echarts+DataV+Swiper</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title" >项目简介：</span>
                <div class="jingyan-content projectDesc" >基于区块链的服务管理平台而开发的一个echart可视化监控大屏，统计用户数据、区块链应用数据。</div>
              </div>
              <div class="jingyan_list">
                <div class="jingyan-title" >我的职责：</div>
                <div class="jingyan-content projectWorkContent" >从0到1负责可视化大屏项目的搭建及开发。</div>
              </div>
              <div class="jinyan_list">
                <div class="jingyan-title" >难点与成长：</div>
                <div class="jingyan-content projectIncome" >基于Websocket实现了可视化大屏数据信息的即时通讯以及数据交互Canvas动画渲染。</div>
              </div>
            </div>
            <i class="sort-item-jy layui-icon"></i></div>
          <div class="jl-jy-item">
            <div class="jingyan-item" >
              <div class="jingyan-header">
                <div class="jingyan-time" >2019-06 ~ 2021-01</div>
                <div class="jingyan-name" >中科云慧康监护后台管理系统 + 中科云慧康小程序</div>
                <div class="jingyan-role" >前端开发工程师</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title float_left" >技术栈：</span>
                <div class="jingyan-content projectTech" >Vue2 + Antd + Axios + ES6 + Webpack + e-chart + Websocket</div>
              </div>
              <div class="jingyan_list">
                <span class="jingyan-title" >项目简介：</span>
                <div class="jingyan-content projectDesc" >该项目旨在实现医疗协同，方便医患信息能够快速访问到指定的终端，利用智能设备对患者的血糖血压等 身体指标进行采集，并自动上传数据到家庭端小程序，对信息进行管理，实现持续监测、智能预警。</div>
              </div>
              <div class="jingyan_list">
                <div class="jingyan-title" >我的职责：</div>
                <div class="jingyan-content projectWorkContent" >与1名前端和2名后端同事一起开展该项目，负责可视化平台、微信支付、商城购物车、聊天室、健康报告、订单管理、e-chart图形等模块。</div>
              </div>
              <div class="jinyan_list">
                <div class="jingyan-title" >难点与成长：</div>
                <div class="jingyan-content projectIncome" >实现菜单权限和封装全局自定义组件，实现不同用户按钮权限控制；通过引入editor富文本编辑器插件二次封装，实现图文混排，限制图片上传格式，解决跨域问题。</div>
              </div>
            </div>
            <i class="sort-item-jy layui-icon"></i></div>
        </div>
      </div>

      <div class="jl-item">
        <div class="jianli-title" :style="newObj.jianliTitle">
          <div class="title" >个人总结</div>
        </div>
        <div class="summary" ><b class="bold-font">5年前端经验，软件开发专业</b>：熟悉前端技术栈，具备一定后端java知识，职业规划是全栈；</div>
        <div class="summary" ><b class="bold-font">独立开发能力</b>：做过PC端、移动端、微信小程序、数据大屏、H5等类型项目，具备独立开发项目的能力；</div>
        <div class="summary" ><b class="bold-font">踏实奉献</b>：连续两年获得奉献奖，工作态度端正，做事细心并有耐心，团队沟通融洽，抗压能力强；</div>
        <div class="summary" ><b class="bold-font">积极上进</b>：查漏补缺，更新自身技术栈，专注技术，提升专业技术水平和学历；</div>
        <i class="sort-item layui-icon"></i>
      </div>
    </div>
  </div>
  <drawer-box ref="drawerBox"
              :title="'编辑样式'"
              direction="btt"
              :size="'30%'"
              :modal="false"/>

</template>

<script setup lang="ts" name="resume">
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";
import {ref, onMounted, toRaw, watch,reactive,computed,watchEffect} from 'vue'
import {useGlobalStore} from "@/stores/global";
import {deepClone} from "@/utils/index.js"
import { storeToRefs } from 'pinia'
import { ElLoading } from 'element-plus'
import DrawerBox from "@/components/drawer/drawerBox.vue";
const globalStore = useGlobalStore()
let {editorInfo} = storeToRefs(globalStore)
onMounted(() => {
  let obj = deepClone(toRaw(editorInfo.value)) as Object
  handleAddPxToObject(obj)
});

watch(editorInfo.value,(value:object)=>{
  let obj = deepClone(toRaw(value)) as Object
  handleAddPxToObject(obj)
})

let newObj = reactive({})
const handleAddPxToObject = (obj: Object) =>{
  Object.assign(newObj,addPxToObject(obj))
}
/**
 * 递归处理成css样式
 * 给属性值加 px
 */
const addPxToObject = (obj: any) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] += 'px';
    } else if (typeof obj[key] === 'object' && obj[key]!== null) {
      addPxToObject(obj[key]); // 递归处理子对象
    }
  }
  return obj;
}


/**
 * 打开抽屉
 */
const drawerBox = ref({})
const handleDrawer = () => {
  drawerBox.value.openDrawer()
}
/**
 * 导出PDF
 * @param nodeName
 * @param fileName
 * @param scale
 * @param style
 */
const exportHPdf = (nodeName:string, fileName:string, scale:number, style:object) => {
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
    html2Canvas(html2Pdf, opts).then((canvas) => {
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      const pageHeight = contentWidth / 592.28 * 841.89;//一页pdf显示html页面生成的canvas高度
      let leftHeight = contentHeight;
      let position = 0;
      let imgWidth = 595.28;// A4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      let imgHeight = 592.28 / contentWidth * contentHeight;
      console.log('pageHeight', pageHeight, 'imgWidth:', imgWidth, 'imgHeight:', imgHeight)
      const imgData = canvas.toDataURL('image/png', 1.0);
      setTimeout(() => {
        // pageData = canvas.toDataURL('image/jpeg', 1.0);
        let PDF = new JsPDF('p', 'pt', 'a4');
        if (leftHeight < pageHeight) {
          PDF.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        // setTimeout(downloadPdfMsg, 500);// 关闭loading提示
        PDF.save((fileName ? fileName : new Date().getTime()) + '.pdf');// 如果没有传入要生成的文件名，则默认使用当前时间戳作为文件名
      }, 1000);
    }).catch(() =>{
    setTimeout(() => {
      loading.close()
    }, 2000)

    }).finally(() =>{
      setTimeout(() => {
        loading.close()
      }, 2000)
    })

  }
}
</script>

<style scoped lang="scss">
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.resume-container {
  //height: 100vh;

  //.base_tools {
  //  position: fixed;
  //  top: 80px;
  //  left: calc((100% - 795px) / 2);
  //  width: 794px;
  //  height: 50px;
  //  line-height: 29px;
  //  padding: 0px 60px 0px 60px;
  //  border-radius: 3px;
  //  z-index: 999;
  //  background-color: rgba(255, 255, 255, 0.9);
  //
  //  .toolbar {
  //    position: relative;
  //    width: 100%;
  //    height: 100%;
  //    margin-left: 0px;
  //    display: flex;
  //    align-items: center;
  //    justify-content: space-between;
  //  }
  //}

  //.paper {
  //  position: relative;
  //  margin: 0px auto 20px auto;
  //  width: 794px;
  //  min-height: 500px;
  //  height: auto;
  //  background-color: white;
  //  border-radius: 3px;
  //  padding: 60px;
  //  margin-top: 120px;
  //  margin-bottom: 100px;
  //  background-image: linear-gradient(0deg, #fff, #f9fbff);
  //}
}
</style>
