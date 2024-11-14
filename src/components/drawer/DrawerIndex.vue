<template>
  <el-drawer
      :title="drawerTitle"
      v-model="isVisible"
      :direction="drawerDirection"
      :size="drawerSize"
      @open="onOpen"
      @close="onClose"
      :lock-scroll="false"
      :modal="modal"
  >
  <div class="drawer_content">
    <slot></slot>
  </div>
  </el-drawer>
</template>
<script setup lang="ts" name="DrawerIndex">
import {ref, watch, defineExpose, toRaw} from 'vue';
import {useGlobalStore} from "@/stores/global";
const globalStore = useGlobalStore()
let {editorInfo} = globalStore
// 抽屉标题，默认为空字符串
const drawerTitle = ref('');
// 是否可见，默认为false
const isVisible = ref(false);
// 抽屉打开方向，默认为'rtl'，可根据需要修改
const drawerDirection = ref('btt');
// 抽屉大小，默认为'30%'，可根据需要修改
const drawerSize = ref('30%');

// 当抽屉打开时触发的事件
const onOpen = () => {
  // console.log('抽屉已打开');
};

// 当抽屉关闭时触发的事件
const onClose = () => {
  // console.log('抽屉已关闭');
};

const props = defineProps({
// 接收外部传入的标题属性
  title: {
    type: String,
    default: ''
  },
  // 接收外部传入的可见性属性
  visible: {
    type: Boolean,
    default: false
  },
  // 接收外部传入的打开方向属性
  direction: {
    type: String,
    default: 'btt'
  },
  // 接收外部传入的大小属性
  size: {
    type: String,
    default: '30%'
  },
  // 是否需要遮罩层
  modal: {
    type: Boolean,
    default: false
  },
});

// 当外部传入的标题改变时，更新内部的抽屉标题
watch(() => props.title, (newValue:string) => {
  drawerTitle.value = newValue;
}, {immediate: true});

// 当外部传入的可见性改变时，更新内部的是否可见状态
watch(() => props.visible, (newValue) => {
  isVisible.value = newValue;
}, {immediate: true});

// 当外部传入的打开方向改变时，更新内部的抽屉打开方向
watch(() => props.direction, (newValue) => {
  drawerDirection.value = newValue;
}, {immediate: true});

// 当外部传入的大小改变时，更新内部的抽屉大小
watch(() => props.size, (newValue) => {
  drawerSize.value = newValue;
}, {immediate: true});

// 向外暴露打开抽屉的方法
const openDrawer = () => {
  isVisible.value = true;
};

// 向外暴露关闭抽屉的方法
const closeDrawer = () => {
  isVisible.value = false;
};

// 向外暴露获取抽屉当前可见性的方法
const getDrawerVisible = () => {
  return isVisible.value;
};

// 定义要向外暴露的属性和方法
defineExpose({
  openDrawer,
  closeDrawer,
  getDrawerVisible
});
</script>
<style scoped lang="scss">

.el-drawer__header {
  margin-bottom: 0px;
}
.drawer_content{
  height: 100%;
  width: 100%;
}
</style>