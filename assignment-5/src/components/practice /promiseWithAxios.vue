<template>
  <div>
    <h1>Axios using in promise</h1>
    <!-- {{ res }} -->
    <b-table :items="res" :fields="fields">
    </b-table>
    <button @click="promisee()">ClickMe</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ProM",
  data() {
    return {
      res: [],
      fields: ["country", "web_pages","name"],
    };
  },
  methods: {
    promisee() {
      new Promise((rejection) => {
        axios.get("http://universities.hipolabs.com/search?country=india")
          .then((response) => {
            this.res = response;
            console.log("responseresponse",response);  
            this.res = response.data;
          })
          .catch((error) => {
            rejection(error);
          });
      });
    },
  },
};
</script>