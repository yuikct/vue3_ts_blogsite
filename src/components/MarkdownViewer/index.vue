<template>
<!--  <div class="markdown-viewer" v-html="compiledMarkdown"></div>-->
  <div class="article-list" @click="toDetail">
    <div class="image"></div>

    <div class="details">
      <div class="category">
        <ul>
          <li v-for="(item,index) in markdown.frontmatter.tags" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="title-wrapper">
        <div class="title">{{markdown.frontmatter.title}}</div>
        <div class="subtitle">{{markdown.frontmatter.description}}</div>
      </div>

      <div class="time-module">
        <div class="time--published">{{markdown.frontmatter.date}}</div>
<!--        <div class="time&#45;&#45;reading">阅读时长：</div>-->
      </div>
    </div>
  </div>

</template>

<script setup lang="ts" name="MarkdownView">
// import MarkdownIt from 'markdown-it';
import {useRoute,useRouter} from 'vue-router'
const router = useRouter()
import { ref, onMounted } from 'vue';
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  markdown: {
    type: Object,
    required: true,
  },
})
const compiledMarkdown = ref('');
// const md = new MarkdownIt();
onMounted( async () =>{
  console.log(props.markdown)

  // try {
  //   const response = await fetch(props.filePath);
  //   console.log('props.filePath;',props.filePath)
  //   const text = await response.text();
  //   console.log('text:',text)
  //   compiledMarkdown.value = md.render(text);
  // }catch (error) {
  //   console.error('Error loading Markdown file:', error)
  // }
})
const toDetail = () =>{
  router.push({ name: 'ArticleDetail', params: { path: props.path } })
}

</script>

<style scoped lang="scss">
/* 你可以根据需要添加更多的样式 */
.article-list {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow .3s ease;
  cursor: pointer;
    .image {
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 25px;
      gap: 5px;
        .title-wrapper {
            .title {
              //font-family: var(--article-font-family);
              font-weight: 600;
              margin: 0;
              color: #000;
              font-size: 1.2rem;
            }
            .subtitle {
              font-weight: 400;
              color: #747474;
              line-height: 1.5;
              margin: 0;
              font-size: 0.75rem;
            }
        }
        .category {
            ul {
                li {
                  font-size: 0.75rem;
                  padding: 5px;
                  display: inline-block;
                  border-radius: 5px;
                  margin: 0px 0 5px 0;
                  background-color: #2a9d8f;
                  color: #fff;
                }
            }
        }
        .time-module {
            .time--published {
              font-size: 0.75rem;
            }
        }
    }
}
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
</style>