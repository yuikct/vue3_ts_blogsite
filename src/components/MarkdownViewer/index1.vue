<template>
  <div class="markdown-viewer" v-html="compiledMarkdown"></div>
</template>

<script setup lang="ts" name="MarkdownDetail">
import MarkdownIt from 'markdown-it';

import { ref, onMounted } from 'vue';
const props = defineProps({
  // fileName:{
  //   type: String,
  //   required: true,
  // },
  filePath: {
    type: String,
    required: true,
  },
})
const compiledMarkdown = ref('');
const md = new MarkdownIt();
onMounted( async () =>{
  try {
    const response = await fetch(props.filePath);
    console.log('props.filePath;',props.filePath)
    const text = await response.text();
    console.log('text:',text)
    compiledMarkdown.value = md.render(text);
  }catch (error) {
    console.error('Error loading Markdown file:', error)
  }
})

</script>

<style scoped lang="scss">
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #f40;
  margin: 0;
  padding: 20px;
}

h1, h2, h3 {
  color: #2c3e50;
}

p {
  margin-bottom: 1em;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* 你可以根据需要添加更多的样式 */

</style>