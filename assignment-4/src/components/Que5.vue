<template>
  <div>
    <h1 align="center">This is Question-5</h1>
    <h5>Creating APIs</h5>

    <div>
      <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
    </div>

    <b-button @click="getData()" class="btn btn-success">Click Me!</b-button>

    <div>
      <center>
        <table border="2px">
          <tr>
            <th>name</th>

            <th>domains</th>

            <th>country</th>

            <th>web_pages</th>
          </tr>

          <tbody>
            <tr v-for="data in searchData.data" :key="data.id">
              <td>{{ data.name }}</td>

              <td>{{ data.domains }}</td>

              <td>{{ data.country }}</td>

              <td>{{ data.web_pages }}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  </div>
</template>


<script>
var axios = require("axios").default;
export default {
  name: "sampleApis",

  data() {
    return {
      options: {
        //method: "POST",

        url: "http://universities.hipolabs.com/search?country="+this.text,


        Fetchdata: { search: "" },
      },

      text: "",

      searchData: "",
    };
  },

  methods: {
    async getData() {
      this.options.data.search = this.text;

      this.searchData = await axios.request(this.options);
    },
  },
};
</script>

