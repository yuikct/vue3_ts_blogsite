<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>简介</template>
    <div class="content-text">
      <expandMore :text="config.abstract"></expandMore>
<!--      {{ config.abstract }}-->
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>最新动态</template>
    <MarkdownView v-for="md in mdFileArr"  :key="md.path" :path="md.path" :markdown="md.data"></MarkdownView>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon/>
    </template>
    <template #heading>作品展示</template>

    <!--    <ArticleItem v-for="item in worksShowData" :title="item.title" :description="item.description"></ArticleItem>-->
    <Carousel :interval="5000" :carouselData="config.worksShowData" :autoplay="true"></Carousel>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon/>
    </template>
    <template #heading>关于我</template>
    <a href="https://github.com/yuikct" target="_blank" class="inline" alt="github" title="github">
      <i class="layui-icon layui-icon-github" style="font-size: 24px; color: #333333;"></i>
    </a>
    <!--    <i class="layui-icon layui-icon-login-wechat" style="font-size: 24px; color: #333333;" @click="handleDialog"></i>-->
    <a href="mailto:yuikct@163.com" target="_blank" class="inline" alt="邮箱" title="邮箱">
      <i class="layui-icon layui-icon-email" style="font-size: 24px; color: #333333;"></i>
    </a>


  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon/>
    </template>
    <template #heading>关于网站</template>
    <section class="powerby">
      Copyright © 2024 <a href="https://yuikct.cn" target="_blank" rel="noopener">Yuikct</a> All Rights Reserved.
<!--      <a href="https://yuikct.cn" target="_blank" rel="noopener">Yuikct</a> 版权所有 -->
      <br>
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">粤ICP备2024343518号-1</a>
    </section>


  </WelcomeItem>

  <DialogIndex
      ref="dialogIndex"
      :visible="visible"
      :title="'tan'"
      :width="'500'"
      :align="true">
    <el-image src="http://47.119.183.239:7791/i/2024/11/14/6735a83231aee.jpg"></el-image>
  </DialogIndex>
</template>
<script setup lang="ts" name="TheWelcome">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import GithubIcon from './icons/IconGithub.vue'
import EmailIcon from './icons/IconEmail.vue'
import expandMore from '@/components/expandMore/index.vue'
import {ref, onMounted} from 'vue'
import DialogIndex from './dialog/DialogIndex.vue'
import useExport from "@/hooks/useExport";
import Carousel from "@/components/carousel/Carousel.vue";
import MarkdownView from "@/components/MarkdownViewer/index.vue"
// import MarkdownDetail from "@/components/MarkdownViewer/detail.vue"
// let {exportPDF,exportImage} = useExport()
let visible = ref(false)
import config from '@/utils/config'
onMounted(()=>{
  metaGlob()
})
/**
 * 打开抽屉
 */
const dialogIndex = ref()
const handleDialog = () => {
  console.log(dialogIndex);
  visible.value = !dialogIndex.value.getDialogVisible()
}

// /**
//  * 调用hook导出Image函数
//  */
// const handleExportImage =() =>{
//   exportImage('#paper',editorInfo.value.pdfFileName)
// }
let mdFileArr = ref([])
const metaGlob = () =>{
  //获取src/md目录下的所有.md文件
  const mdFiles = import.meta.glob('@/contents/**/*.md',{ eager: true });
  let aaa = Object.values(mdFiles);
  console.log('aaa:',aaa)
  Object.keys(mdFiles).forEach((key,index) =>{
    if(Object.keys(mdFiles).length-1==index){//取最后一个
      mdFileArr.value.push({
        path: key,
        data: mdFiles[key]
      })

    }
  })
  console.log(mdFileArr.value)
}
</script>
<style lang="scss" scoped>
.inline {
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
}

.a_event {
  padding-bottom: 2px;
  border-bottom: 1px solid #333333;
}

.content-text {
  letter-spacing: 3px;
  text-indent: 2em;
  color: #666666;
}
.powerby{
  color: #666666;
  font-size: .9rem;
  a{
    color: #666666;
  }
}
</style>
