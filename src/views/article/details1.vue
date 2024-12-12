<template>
  222
  <VMdPreview :text="markdownContent"></VMdPreview>
</template>

<script setup lang="ts" name="ArticleDetails">
import { ref, onMounted } from 'vue';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
const markdownContent = ref('');
onMounted(async () => {
  // 这里同样需要一个函数来读取文件内容
  markdownContent.value = await fetchMarkdownFile('/src/contents/demo/demo.md');
});
// 示例函数来读取文件
async function fetchMarkdownFile(filePath: string): Promise<string> {
  const response = await fetch(filePath);
  return await response.text();
}
</script>

<style scoped lang="scss">

</style>