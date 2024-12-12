<template>
  <el-carousel class="carousel-con" :interval="interval" :autoplay="autoplay" pause-on-hover height="150px"
               trigger="click">
    <el-carousel-item @click="toDetail(item)" v-for="item in carouselData" :key="item">
      <!--      <h3 text="2xl" justify="center">{{ item }}</h3>-->
      <!--      <img class="image" src="https://api.r10086.com/樱道随机图片api接口.php?自适应图片系列=赛马娘" alt="图片">-->
      <img class="image" :src="item.imageUrl" alt="作品展示图">
      <!--      <el-image :src="item.imageUrl"></el-image>-->
      <!--      <el-image class="image" :src="item.imageUrl" fit="contain" lazy/>-->
      <div class="con">
        <div class="title">{{ item.title }}</div>
        <div class="description">{{ item.description }}</div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts" name="Carousel">
const props = defineProps({
  interval: {
    type: Number,
    default: 5000
  },
  carouselData: {
    type: Array,
    default: []
  },
  autoplay: {
    type: Boolean,
    default: true
  }
})
const toDetail = (item) => {
  console.log(item)
  // location.href=item.link
  window.open(item.link)

}

</script>

<style scoped lang="scss">
.carousel-con {
  transition: all .5s;
  cursor: pointer;

  .image {
    border-radius: 10px;
    object-fit: contain;
    width: 100%;
    height: auto;
    opacity: .9;
    transition: all .5s;
  }

  &:hover {
    .image {
      opacity: .2;
      transform: scale(1.2);
    }

    .con {
      display: block;

      .title {
        font-size: 24px;
        font-weight: bold;

      }
    }

  }

  .con {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    bottom: 0;
    right: 0;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;

    .title {
      transition: all .5s;
      font-size: 20px;
      padding-bottom: 10px;

    }
  }
}
</style>
<style scoped>
.el-carousel {
  /*box-shadow: 0px 1px 0px 0px rgba(55, 99, 170, .1);*/

  /*height: 150px !important;*/
}

.el-carousel__item {
  border-radius: 5px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  /*line-height: 100px;*/
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(255, 255, 255, .1);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgba(255, 255, 255, .1);
}
</style>