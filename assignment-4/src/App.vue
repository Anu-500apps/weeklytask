<template>
  <div id="app">
   <!-- // <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Que4 />
    <Que3 />
    <Que6 />
    <Que5 />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Que4 from './components/Que4.vue'
import Que3 from './components/Que3.vue'
import Que6 from './components/Que6.vue'
import Que5 from './components/Que5.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    Que4,
    Que3,
    Que6,
    Que5
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
