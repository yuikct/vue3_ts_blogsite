import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global',  {
//动作
    actions:{
        setEditor(key:string,value:number){
            console.log(this)
            this.editorInfo.jianliTitle[key] = value
        }
    },
    //状态
    state:() =>({
            showMainCon:false,
            editable:false,//简历是否可编辑
            editorInfo:{
                //页面整体
                paperPadding:{
                    padding:50
                },
                //模块标题
                jianliTitle:{
                   lineHeight:35,
                    marginTop:10,
                    marginBottom:12
                },
                //
                companyItem:{
                    paddingBottom:10
                }
            }

    }),
    //计
    getters:{
        SET_EDITOR_DATA:(state => {
            console.log(state)
        })
    }
})
