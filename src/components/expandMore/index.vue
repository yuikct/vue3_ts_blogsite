<template>
  <div v-if="!isExpanded" >
    {{ text.slice(0, maxLength) }}...
    <span class="expanedBtn" @click="isExpanded = true">展开</span>
  </div>
  <div v-else >
    {{ text }}
    <span class="expanedBtn" @click="isExpanded = false">收起</span>
  </div>
</template>

<script setup lang="ts" name="ExpandMore">
import {ref} from 'vue'
const props = defineProps({
  text:{
    type:String,
    default:''
  },
  maxLength:{
    type:Number,
    default:65
  }

})
let isExpanded = ref(false)
</script>

<style scoped lang="scss">
.expanedBtn{
  color:#2365c4;
  cursor:pointer;
}

</style>