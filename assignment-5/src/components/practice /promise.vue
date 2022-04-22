<template>
  <div>
    <h1>Using Axios</h1>
    <button @click="fun()">clickme</button>
    <p>{{ result }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AxiOs",
  data() {
    return {
      response: " ",
    };
  },
  methods: {
    fun() {
      let response = axios.get("https://jsonplaceholder.typicode.com/todos/");
      let mypromise = new Promise((myResolve, myReject) => {
        myResolve(response);
        myReject("error");
      });
      mypromise.then((response) => console.log(response.data));
      mypromise.then(function (error) {
        console.log(error.config);
      });
    },
  },
};
</script>

