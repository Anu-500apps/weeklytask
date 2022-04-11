<template>
  <div>
    <b-dropdown  text="Country" class="m-md-2" id="anu">
      <b-dropdown-item @click="India()">India</b-dropdown-item>

      <b-dropdown-item @click="srilanka()">srilanka</b-dropdown-item>

      <b-dropdown-item @click="us()">us</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
export default {
  name: "QuestioN6",

  data() {
    return {
       countries: [],
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch(
          "http://universities.hipolabs.com/search?country=" + this.anu
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