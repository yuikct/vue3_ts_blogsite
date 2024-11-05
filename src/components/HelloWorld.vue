<script setup lang="ts">
import {ref , onMounted} from 'vue'
// @ts-ignore
import { load } from 'jinrishici';
let label = ref('')
defineProps<{
  msg: string
}>()
onMounted(()=>{
  load((result:any) => {
    label.value = result.data.content
  });
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{label}}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
