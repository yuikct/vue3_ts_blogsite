<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script setup lang="ts" name="MarkdownDetail">
import { marked } from 'marked';
import {computed, onMounted} from 'vue'
const props = defineProps({
  markdown: Object
})
onMounted( () =>{
  console.log('----',props.markdown)
})
const compiledMarkdown = computed(() => {
 return  marked(props.markdown, { sanitize: true });
})
</script>

<style scoped lang="scss">

</style>