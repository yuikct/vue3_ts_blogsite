<template>
  <el-drawer
      :title="drawerTitle"
      v-model="isVisible"
      :direction="drawerDirection"
      :size="drawerSize"
      @open="onOpen"
      @close="onClose"
      :lock-scroll="false"
  >
    <div class="drawer_content">
      <!--      整体样式-->
      <div class="tool_list">
        <label class="t_label">整体样式：</label>
        <div class="t_li">
          <span class="lab">内边距：</span>
          <el-slider class='slider-demo-block' size="small" v-model="editorInfo.paperPadding.padding"
                     placement="left"/>
        </div>
      </div>
      <!--      模块标题-->
      <div class="tool_list">
        <label class="t_label">模块标题：</label>
        <div class="t_li">
          <span class="lab">行高：</span>
          <el-slider class='slider-demo-block' size="small" v-model="editorInfo.jianliTitle.lineHeight"
                     placement="left"/>
        </div>
        <div class="t_li">
          <span class="lab">上外边距：</span>
          <el-slider class='slider-demo-block' size="small" v-model="editorInfo.jianliTitle.marginTop"
                     placement="left"/>
        </div>
        <div class="t_li">
          <span class="lab">下外边距：</span>
          <el-slider class='slider-demo-block' size="small" v-model="editorInfo.jianliTitle.marginBottom"
                     placement="left"/>
        </div>
      </div>
      <!--      整体样式-->
      <div class="tool_list">
        <label class="t_label">履历：</label>
        <div class="t_li">
          <span class="lab">下内边距：</span>
          <el-slider class='slider-demo-block' size="small" v-model="editorInfo.companyItem.paddingBottom"
                     placement="left"/>
        </div>
      </div>


    </div>
  </el-drawer>
</template>

<script setup lang="ts">
import {ElDrawer} from 'element-plus';
import {ref, watch, defineExpose, toRaw} from 'vue';
import {useGlobalStore} from "@/stores/global";
import {deepClone} from "@/utils";

const globalStore = useGlobalStore()
let {editorInfo, setEditor} = globalStore
console.log(globalStore)
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
  console.log('抽屉已打开');
};

// 当抽屉关闭时触发的事件
const onClose = () => {
  console.log('抽屉已关闭');
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
  }
});

// 当外部传入的标题改变时，更新内部的抽屉标题
watch(() => props.title, (newValue) => {
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
  console.log('di')
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
// const getStyles = (styleData:object) => {
//   let obj = deepClone(toRaw(styleData))
//   obj.lineHeight = styleData.lineHeight+'px'
//   obj.marginTop = styleData.marginTop+'px'
//   obj.marginBottom = styleData.marginBottom+'px'
//   return obj
// }
// 定义要向外暴露的属性和方法
defineExpose({
  openDrawer,
  closeDrawer,
  getDrawerVisible
});

</script>
<style lang="scss">
.el-drawer__header {
  margin-bottom: 0px;
}

.drawer_content {
  height: 100%;
  width: 100%;

  .tool_list {
    display: flex;
    width: 100%;
    align-items: center;
    line-height: 36px;

    label.t_label {
      font-size: 16px;
      font-weight: 600;
      padding-right: 1rem;
    }

    .t_li {
      flex: 1;
      margin-right: 30px;
      display: flex;
      align-items: center;

      .lab {
        white-space: nowrap;
        font-size: 13px;
      }
    }
  }

}
</style>