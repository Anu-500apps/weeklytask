<template>
  <div>
    <h1 align="center">This is Question-6</h1>
    <b-dropdown  text="Country" class="m-md-2">
      <b-dropdown-item @click="India()">India</b-dropdown-item>

      <b-dropdown-item @click="china()">china</b-dropdown-item>

      <b-dropdown-item @click="canada()">canada</b-dropdown-item>
    </b-dropdown>
    <b-card>
      <!-- {{posts}} -->
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
  name: "QuestioN6",

  data() {
    return {
      posts: " ",
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=India"
        );

        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async china() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=china"
        );

        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
    async canada() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=canada"
        );

        this.posts = await response.json();
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
    this.china();
    this.canada();
  },
};
</script>