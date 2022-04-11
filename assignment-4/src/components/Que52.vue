<template>
  <div>
    <b-form-input v-model="text" placeholder="Enter country" required>
    </b-form-input><br>
    <button @click="getData()" class="btn btn-success">Click here!</button><br><br>
      <b-card>
        <b-card v-for="data1 in posts" :key="data1.id">
          <b-row>
            <b-col cols="3.5">University Name:{{ data1.name }}</b-col>
          </b-row>
          <b-row>
            <b-col cols="1.5">Domains:{{ data1.domains }}</b-col>

            <b-col cols="9">Website :{{ data1.web_pages[0] }}</b-col>
          </b-row>
        </b-card>
      </b-card>
  </div>
</template>


<script>
export default {
  name: "queS4",

  data() {
    return {
      posts: " ",
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.text
        );

        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>