<template>
  <div>
      <h3 align="center">This is Question-5</h3>
      <center>
      <button @click="fullnames">Click!</button>
    </center>
  </div>
</template>
<script>
export default {
  name: "quesT5",
    data() {
    return {
      first_name: "Mantra",
      last_name: "Technologies",
    };
  },

  methods: {
    fullnames() {
      var fullname = this.first_name + this.last_name;
      console.log(fullname);
    },
  },
};
</script>