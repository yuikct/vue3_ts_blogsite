import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global',  {
//动作
    actions:{},
    //状态
    state(){
        return{
            showMainCon:false
        }
    },
    //计算
    getters:{

    }
})
