<template>
  <el-dialog v-model="isVisible" :title="dialogTitle" :width="dialogWidth" :align-center="dialogAlign"
    close-on-click-modal destroy-on-close @open="onOpen" @close="onClose">
    <div class="dialog_content">
      <slot></slot>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="isVisible = false">Cancel</el-button>
        <el-button type="primary" @click="isVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup name="DialogIndex">
import { ref, watch, defineExpose } from "vue";
const isVisible = ref(false);
const dialogTitle = ref('');
const dialogWidth = ref('500');
const dialogAlign = ref(true)
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
  width: {
    type: String,
    default: '500'
  },
  // 接收外部传入的大小属性
  align: {
    type: Boolean,
    default: false
  },
  // 是否需要遮罩层
  modal: {
    type: Boolean,
    default: false
  },
});

// 当外部传入的标题改变时，更新内部的抽屉标题
watch(() => props.title, (newValue: string) => {
  dialogTitle.value = newValue;
}, { immediate: true });

// 当外部传入的可见性改变时，更新内部的是否可见状态
watch(() => props.visible, (newValue) => {
  console.log('---');
  isVisible.value = newValue;
}, { immediate: true });

// 当外部传入的打开方向改变时，更新内部的抽屉打开方向
watch(() => props.width, (newValue) => {
  dialogWidth.value = newValue;
}, { immediate: true });

// 当外部传入的大小改变时，更新内部的抽屉大小
watch(() => props.align, (newValue) => {
  dialogAlign.value = newValue;
}, { immediate: true });

// 向外暴露打开抽屉的方法
const openDialog = () => {
  isVisible.value = true;
};

// 向外暴露关闭抽屉的方法
const closeDialog = () => {
  isVisible.value = false;
};

// 向外暴露获取抽屉当前可见性的方法
const getDialogVisible = () => {
  return isVisible.value;
};
// 定义要向外暴露的属性和方法
defineExpose({
  openDialog,
  closeDialog,
  getDialogVisible
});

</script>
<style lang="scss" scoped></style>