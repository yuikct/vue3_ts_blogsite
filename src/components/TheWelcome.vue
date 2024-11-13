<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import GithubIcon from './icons/IconGithub.vue'
import EmailIcon from './icons/IconEmail.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon/>
    </template>
    <template #heading>简介</template>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon/>
    </template>
    <template #heading>动态</template>
    待开发
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon/>
    </template>
    <template #heading>作品展示</template>
      <ul>
        <li>可视化大屏：<a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">可视化大屏</a></li>
        <li>响应式官网：<a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">响应式官网</a></li>
      </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon/>
    </template>
    <template #heading>联系我</template>
    <a href="https://github.com/yuikct" target="_blank" class="inline">
<!--      <GithubIcon/>-->
      <i class="layui-icon layui-icon-github" style="font-size: 24px; color: #333333;"></i>
    </a>
    <a href="mailto:yuikct@163.com" target="_blank" class="inline">
      <i class="layui-icon layui-icon-email" style="font-size: 24px; color: #333333;"></i>
<!--      <EmailIcon/>-->
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon/>
    </template>
    <template #heading>关于我</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
<style lang="scss" scoped>
.inline {
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
}
</style>
