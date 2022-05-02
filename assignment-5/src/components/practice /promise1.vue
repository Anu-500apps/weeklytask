<template>
  <div>
    <h1>AXIOS using promises</h1>
    <button @click="fun()">ClickHere!</button>
    <p>{{ result }}</p>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "AxiOs",

  data() {
    return {
      result: " ",
    };
  },

  methods: {
    async fun() {
      this.result = await axios.get("https://jsonplaceholder.typicode.com/todos/")
  }
}
}
  </script>