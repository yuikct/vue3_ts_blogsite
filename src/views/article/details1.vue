<template>
  <el-main>

    <MarkdownPreview :markdownContent="markdownContent"/>
  </el-main>
</template>

<script setup lang="ts" name="ArticleDetails">
import {ref, onMounted, onBeforeMount, onUnmounted} from 'vue';
import MarkdownPreview from '@/components/MarkdownViewer/detail.vue'
// import VMdPreview from '@kangc/v-md-editor/lib/preview';
// import '@kangc/v-md-editor/lib/style/preview.css';
import {useGlobalStore} from "@/stores/global";
const globalStore = useGlobalStore()
// let {showArticleCon} = globalStore
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log('route:', route.params)
let filePath = ref('')
filePath.value = route.params.path
const markdownContent = ref('');
onMounted(async () => {
  console.log('0000')
  globalStore.setArticleConShow(true)
  // 这里同样需要一个函数来读取文件内容
  markdownContent.value = await fetchMarkdownFile(filePath.value);
});
// 示例函数来读取文件
//   const mdFiles = import.meta.glob('/src/contents/demo3/demo.md',{ eager: true });
// console.log(matter(mdFiles))
async function fetchMarkdownFile(filePath: string): Promise<string> {
  const response = await fetch(filePath);
  const text = await response.text()
  return text;
}
onBeforeMount(()=>{
  // console.log('挂载之前')
  globalStore.setArticleConShow(true)
})
onUnmounted(()=>{
  // console.log('卸载完毕')
  globalStore.setArticleConShow(false)
})
</script>

<style scoped lang="scss">

</style>