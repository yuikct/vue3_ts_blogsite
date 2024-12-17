<template>
  <div class="detail-content">
    详情
    <!--  <MarkdownDetail :markdown="markdown"></MarkdownDetail>-->
    <div v-html="markdownContent"></div>
  </div>
</template>

<script setup lang="ts" name="ArticleDetails">
import {ref, onMounted} from 'vue';
import {marked} from 'marked';

const markdownContent = ref('');
const compiledMarkdown = ref('');

onMounted(async () => {
  // 假设你有一个函数来读取指定目录下的 Markdown 文件
  const content = await fetchMarkdownFile('/src/contents/demo/demo.md');
  markdownContent.value = marked.parse(content);
  // marked.setOptions({
  //   renderer: new marked.Renderer(),
  //   gfm: true, // GitHub-flavored markdown
  //   tables: true, // 支持表格
  //   breaks: false, // 换行符是否转换为 <br>
  //   pedantic: false, // 是否严格遵守 markdown 规范
  //   sanitize: false, // 清理输出内容以防止 XSS 攻击
  //   smartLists: true, // 更智能的列表行为
  //   smartypants: false // 使用 SmartyPants 排版
  // });
  // compiledMarkdown.value = marked.parse(content);
})

// 示例函数来读取文件
async function fetchMarkdownFile(filePath: string): Promise<string> {
  const response = await fetch(filePath);
  return await response.text();
}

// import MarkdownDetail from '@/components/MarkdownViewer/detail.vue'
// import {onMounted, ref} from 'vue'
// import {useRoute,useRouter} from 'vue-router'
// const route = useRoute()
// const router = useRouter()
// console.log('route:',route.params)
// let filePath = ref('')
// filePath.value = route.params.path
// let mdFileArr = ref([])
// onMounted(()=>{
//   metaGlob(filePath.value)
// })
// let markdown = ref({})
// const metaGlob = (value: any) =>{
//   //获取src/md目录下的所有.md文件
  const mdFiles = import.meta.glob('@/contents/**/*.md',{ eager: true });
//   Object.keys(mdFiles).forEach((key,index) =>{
//       mdFileArr.value.push({
//         path: key,
//         data: mdFiles[key]
//       })
//   })
//   console.log(mdFileArr.value)
//   markdown = mdFileArr.value.filter(item =>item.path ==value)[0]
//   console.log('markdown:',markdown)
// }
</script>

<style scoped lang="scss">

</style>