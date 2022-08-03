<template>
  <div id="app">
    <!-- <textarea v-model="content" id="editor"></textarea>
    <CodeMirror />
    <ES6/> -->
    <Events/>
  <RequestCall />
  </div>
</template>

<script>
// import CodeMirror from "codemirror";
// import 'codemirror/dist/codemirror.css'
// import "codemirror/lib/codemirror.css";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/css/css.js";
// import "codemirror/mode/htmlmixed/htmlmixed";
// import "codemirror/theme/base16-light.css";
//import functions from "../src/components/practice /functions.vue"
//import ES6 from "../src/components/practice /ES6"
//import RequestCall from"../src/components/practice /RequestCall"
import Events from '../src/components/practice /EventHandlers'
export default {
  name: "App",
  components: {
    // CodeMirror,
    // ES6,
    //RequestCall,
    Events
  },
};
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
