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
       <!-- <Question76 ref="name"></Question76>
     <button type="submit" @click="parent()">Click!</button> -->
    <!-- <button-submit type="submit" @click="result()">Your Profile</button-submit>  -->
<Question77 />
<Question78 />
<Question79 />
<Question72 />
<Question74 />
 <!-- <Q84 :msg="Messege" :name="Name" :number="number" :email="email"></Q84><br />
 <h2>Name:{{name}}</h2>
<Q85  @action="emitfun"/>   -->
<Q1 />
 </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import Que4 from './components/Que4.vue'
// import Que3 from './components/Que3.vue'
// import Que6 from './components/Que6.vue'
// import Que5 from './components/Que5.vue'
//import Que52 from './components/Que52.vue'
//import Question76 from './components/Assignment-7/Question76.vue'
//import Question77 from './components/Assignment-7/Question77.vue'
//import Question78 from './components/Assignment-7/Question78.vue'
//import Question79 from './components/Assignment-7/Question79.vue'
//import Question72 from './components/Assignment-7/Question71.vue'
//import Question74 from './components/Assignment-7/Question74.vue'
 //import Q84 from './components/Assignment-8/Q84.vue'
//import Q85 from './components/Assignment-8/Q85.vue'
//import Q1 from './components/10-5-2022/Question1.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    // Que4,
    // Que3,
    // Que6,
    // Que5
   // Que52
   //Question76,
   //Question77,
   //Question78,
   //Question79,
   //Question72,
   //Question74
   // Q84,
   //Q85
   //Q1

  },
  data(){
    return{
      Messege:"Welcome to Assignmnet-8",
      Name:"Anuradha",
      number:7330797147,
      email:"Anuradhataddi@gmail.com",
      name:"change your name"
    }
  },
  methods:{
    emitfun(change){
      this.name=change.name;

    },
  parent(){
    this.$refs.name.child();
    console.log("I am parent")
  },
//   result(){
// document.write("Hellooo");
// }
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
