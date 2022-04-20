<template>
  <div id="app">
    <router-view/>
   <!-- // <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Que4 />
    <Que3 />
    <Que6 />
    <Que5 />
    <Que52 />
    <Question76 ref="name" name="Anu">{{name}}></Question76>
    <button type="submit" @click="parent()">Click!</button>
<Question77 />
<Question78 />
<Question79 />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import Que4 from './components/Que4.vue'
// import Que3 from './components/Que3.vue'
// import Que6 from './components/Que6.vue'
// import Que5 from './components/Que5.vue'
//import Que52 from './components/Que52.vue'
import Question76 from './components/Assignment-7/Question76.vue'
import Question77 from './components/Assignment-7/Question77.vue'
import Question78 from './components/Assignment-7/Question78.vue'
import Question79 from './components/Assignment-7/Question79.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    // Que4,
    // Que3,
    // Que6,
    // Que5
   // Que52
   Question76,
   Question77,
   Question78,
   Question79
   
  },
  methods:{
  parent(){
    this.$refs.name.child();
    console.log("I am parent")
  }
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
