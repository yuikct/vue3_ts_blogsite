<template>
  <el-main class="ArticleList">
    <MarkdownView v-for="md in mdFileArr"  :key="md.path" :path="md.path" :markdown="md.data"></MarkdownView>
  </el-main>
</template>

<script setup lang="ts" name="Article">
import MarkdownView from "@/components/MarkdownViewer/index.vue"
import {useRoute,useRouter} from 'vue-router'

import {onMounted, ref,onBeforeMount,onUnmounted} from "vue";
const route = useRoute()
const router = useRouter()
// const props = defineProps({
//   fileList:{
//     type:Array,
//     default:[],
//     required: true,
//   }
// })
// console.log(props)
// const toViewer = (item) =>{
//   console.log(item)
//   // 命名的路由，并加上参数，让路由建立 url
//   router.push({ name: 'fileMdDetail', params: { filePath: item } })
//
// }
onMounted(()=>{
  metaGlob()
})
let mdFileArr = ref([])
const metaGlob = () =>{
  //获取src/md目录下的所有.md文件
  const mdFiles = import.meta.glob('@/contents/**/*.md',{ eager: true });
  let aaa = Object.values(mdFiles);
  console.log('aaa:',aaa)
  Object.keys(mdFiles).forEach((key,index) =>{
      mdFileArr.value.push({
        path: key,
        data: mdFiles[key]
      })

  })
  console.log(mdFileArr.value)
}

</script>

<style scoped lang="scss">
.ArticleList{
  ::v-deep{
    .article-list{
      margin-bottom: 1rem;
    }
  }
}
</style>