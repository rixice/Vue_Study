<template>
  <button @click="isShowDemo = !isShowDemo">显示/隐藏</button>
  <Demo v-if="isShowDemo">
  </Demo>

  <Test></Test>
</template>

<script>
  import {ref} from 'vue'
  import Demo from "./components/Demo.vue";
import Test from './components/Test.vue';
  export default {
    name: 'App',
    components: { Demo, Test },
    setup(){
      let isShowDemo = ref(true)

      return { isShowDemo }
    }
  }
</script>

<style>

</style>
