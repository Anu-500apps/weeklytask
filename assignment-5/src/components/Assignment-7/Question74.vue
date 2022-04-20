<template>
  <div>
    <h3>Fetch data from API</h3>
    <!-- <button @click="getData()">click</button> -->
    <b-card v-for="value in user" :key="value.domains" class="mb-2">
      <b-card-text>name: {{ value.name }} </b-card-text>
      <p>Email: {{ value.email }}</p>
    </b-card>
  </div>
</template>
<script>
import userdata from '../Assignment-7/Users.json'
export default {
  name: "QUe4",
  data() {
    return {
     user:userdata,
      value: "",
    //   items: [],
    //   posts: " ",
      fields: ["name", "email"],
    };
  },
//   methods: {
//     async getData() {
//       let response = await fetch(
//         "http://www.json-generator.com/api/json/get/bSldINskRK" + this.value);
//       this.posts = await response.json();
//     },
//   },
//   created() {
//     this.getData();
//   },
};
</script>