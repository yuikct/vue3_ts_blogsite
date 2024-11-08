<script setup lang="ts">
import { RouterView } from 'vue-router'
// import {useGlobalStore} from "@/stores/global";
// let globalStore = useGlobalStore()
</script>

<template>
<!--<div id="app" :class="globalStore.showMainCon?'active_con':''">-->
  <RouterView />
<!--</div>-->
</template>
<style lang="scss">
//.active_con {
//  header{
//    padding-right: 0 !important;
//    .logo{
//      margin: 0 auto 0rem !important;
//      width: 5rem !important;
//      height: 5rem !important;
//      transition: all .3s;
//    }
//    .wrapper{
//      .greetings {
//        h1 {
//          font-size: 2rem;
//          transition: all .3s;
//        }
//        h3{
//          font-size: 1rem;
//          transition: all .3s;
//        }
//      }
//    }
//  }
//
//}
</style>
