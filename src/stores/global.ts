import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useGlobalStore = defineStore('global', {
//动作
    actions: {
        setArticleConShow(value:boolean){
            this.showArticleCon = value
        }
    },
    //状态
    state: () => ({
        showArticleCon: false,
        editorInfo: {
            pdfFileName:'0 5年前端 余泽伟 17820578612',
            editable: false,//简历是否可编辑
            openPaging: true,//开启分页
            btnEditDisabled:false,
            btnExportDisabled:false,
            //页面整体
            paperPadding: {
                padding: 40
            },
            //模块标题
            jianliTitle: {
                lineHeight: 30,
                marginTop: 0,
                marginBottom: 12
            },
            //工作经验模块
            companyItem: {
                paddingBottom: 10
            },
            avatar: {
                width: 137,
                height: 172
            }
        }

    }),
    //计
    getters: {
        SET_EDITOR_DATA: (state => {
            console.log(state)
        })
    }
})
