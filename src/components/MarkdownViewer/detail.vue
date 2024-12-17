<template>

  <div v-html="renderedMarkdown" class="markdown-body"></div>
</template>

<script setup lang="ts" name="MarkdownPreview">
import {ref, computed, onMounted} from 'vue'
import marked from '@/utils/markdownRenderer';
import {Renderer} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

const props = defineProps({
  markdown: Object,
  markdownContent: {
    type: String,
    required: true,
  },
})

onMounted(() => {

})

const renderedMarkdown = computed(() => {
  return marked(props.markdownContent);
})
</script>

<style scoped lang="scss">
.markdown-body {
  font-family: Arial, sans-serif;
  line-height: 1.6;

  ::v-deep {
    .hljs {
      //background: none;
      //color: inherit;
    }

    aside {
      background-color: #faf1f5;
      padding: 1em;
      margin-bottom: 1rem;
    }

    code {
      padding: 0.2em;
      border-radius: 3px;
      background: #f6f8fa;
      font: unset;
    }

    pre {
      padding: 1em;
      background: #f7f6f3;
      overflow: auto;
    }

    body {
      //width: 1000px;
      //margin: 0 auto;
      //text-align: center;
    }

    table {
      margin: 1rem 0;
      thead, tr, th, td {
        color: inherit;
        border: 1px solid rgb(233, 233, 231);
        isolation: auto;
        position: relative;
        vertical-align: top;
        text-align: start;
        min-width: 120px;
        max-width: 240px;
        min-height: 32px;
      }
    }

    ul, ol, li {
      list-style: inside !important;
    }

    a {
      //text-decoration:none;
      //color:red;
      border-bottom: 0.05em solid;
      border-color: rgba(55, 53, 47, .4);
      opacity: 0.7;
    }

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      font: revert;
    }

  }
}

//.markdown-body pre {
//  background-color: #f6f8fa;
//  padding: 16px;
//  border-radius: 8px;
//  overflow-x: auto;
//}

</style>