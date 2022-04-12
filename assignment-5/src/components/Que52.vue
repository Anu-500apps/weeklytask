<template>
  <div>
    <b-form-input v-model="text" placeholder="Enter country" required>
    </b-form-input><br>
    <b-button @click="getData1()" variant="info">Click here!</b-button><br><br>
      <b-card>
        <b-card v-for="data1 in posts" :key="data1.id">
          <b-container class="bv-example-row">
          <b-row>
            <b-col cols="3.5">University Name:{{ data1.name }}</b-col>
          </b-row>
          <b-row>
            <b-col cols="1.5">Domains:{{ data1.domains }}</b-col>

            <b-col cols="10">Website :{{ data1.web_pages[0] }}</b-col>
          </b-row>
          </b-container>
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
    async getData1() {
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
    this.getData1();
  },
};
</script>