<template>
  <div class="ArticleList">
    <div class="list" v-for="item in fileList" :key="index" @click="toViewer(item)">
      {{item}}
    </div>
  </div>
</template>

<script setup lang="ts" name="Article">
import {useRoute,useRouter} from 'vue-router'
const route = useRoute()
const router = useRouter()
const props = defineProps({
  fileList:{
    type:Array,
    default:[],
    required: true,
  }
})
console.log(props)
const toViewer = (item) =>{
  console.log(item)
  // 命名的路由，并加上参数，让路由建立 url
  router.push({ name: 'fileMdDetail', params: { filePath: item } })

}
</script>

<style scoped lang="scss">

</style>