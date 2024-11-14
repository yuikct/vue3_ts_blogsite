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
        <li><a href="http://47.119.183.239:81/" target="_blank" rel="noopener">可视化大屏</a></li>
        <li><a href="http://47.119.183.239:83/" target="_blank" rel="noopener">睐回官网</a></li>
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
    <a href="mailto:yuikct@163.com" target="_blank" class="inline">
      <i class="layui-icon layui-icon-login-wechat" style="font-size: 24px; color: #333333;"></i>
<!--      <EmailIcon/>-->
    </a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon/>
    </template>
    <template #heading>关于我</template>

    <RouterLink to="/resume" class="a_event">个人简历</RouterLink>

  </WelcomeItem>
</template>
<style lang="scss" scoped>
.inline {
  display: inline-flex;
  align-items: center;
  margin-right: 5px;
}
.a_event{
  padding-bottom: 2px;
  border-bottom: 1px solid #333333;
}
</style>
