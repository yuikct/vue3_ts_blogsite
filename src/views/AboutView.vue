<template>
  <div class="about">
    <ul>
      <li class="module_li" @click="showMain">
        <div class="con">
          <div class="title">GitHub.Build and ship software on a single</div>
          <div class="detail">The repository provides code for running inference with the SegmentAnything Model (SAM), links for downloading the trained model checkpoints, and example notebooks that show how to use the model.</div>
          <div class="tags">
            <div class="tag">#Vue</div>
            <div class="tag">#TypeScript</div>
          </div>
        </div>
        <div class="img">
          <img src="https://api.r10086.com/樱道随机图片api接口.php?自适应图片系列=赛马娘" alt="图片">
        </div>

      </li>
      <li class="module_li">
        <div class="con">
          <div class="title">GitHub.Build and ship software on a single</div>
          <div class="detail">The repository provides code for running inference with the SegmentAnything Model (SAM), links for downloading the trained model checkpoints, and example notebooks that show how to use the model.</div>
          <div class="tags">
            <div class="tag">#Vue</div>
            <div class="tag">#TypeScript</div>
          </div>
        </div>
        <div class="img">
          <img src="https://api.r10086.com/樱道随机图片api接口.php?自适应图片系列=为美好世界献上祝福" alt="图片">
        </div>

      </li>
      <li class="module_li">
        <div class="con">
          <div class="title">GitHub.Build and ship software on a single</div>
          <div class="detail">The repository provides code for running inference with the SegmentAnything Model (SAM), links for downloading the trained model checkpoints, and example notebooks that show how to use the model.</div>
          <div class="tags">
            <div class="tag">#Vue</div>
            <div class="tag">#TypeScript</div>
          </div>
        </div>
        <div class="img">
          <img src="https://api.r10086.com/樱道随机图片api接口.php?图片系列=为美好世界献上祝福横屏系列1" alt="图片">
        </div>

      </li>
      <li class="module_li">
        <div class="con">
          <div class="title">GitHub.Build and ship software on a single</div>
          <div class="detail">The repository provides code for running inference with the SegmentAnything Model (SAM), links for downloading the trained model checkpoints, and example notebooks that show how to use the model.</div>
          <div class="tags">
            <div class="tag">#Vue</div>
            <div class="tag">#TypeScript</div>
          </div>
        </div>
        <div class="img">
          <img src="https://api.r10086.com/樱道随机图片api接口.php?图片系列=为美好世界献上祝福横屏系列1" alt="图片">
        </div>

      </li>

    </ul>
  </div>
</template>
<script lang="ts" setup name="AboutView">
import {useGlobalStore} from "@/stores/global";
import { useRouter } from 'vue-router'
const globalStore = useGlobalStore()
let $router = useRouter()
function showMain(){
  globalStore.showMainCon = !globalStore.showMainCon
  // $router.push({path:'/article',query:{id:'23'}})
  $router.push({path:'/resume',query:{id:'23'}})
}
</script>
<style lang="scss" scoped>
li.module_li {
  list-style: none;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  .con{
    margin-right: 10px;
    .title{
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
    .detail {
      color: #999;
      font-size: 0.8rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5rem;
    }
    .tags {
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      .tag {
        color: #2365c4;
        margin-right: 1rem;
        border-radius: 0.4rem;
        padding: 0px 6px;
        font-size: 0.7rem;
        //border: 1px solid #2365c4;
      }
    }
  }
  .img{
    flex: 0 0 180px;
    img{
      width: 180px;
      height: 110px;
      background-size: contain;
      background-origin: border-box;
      background-position: center;
    }
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
