<template>
  <div>
    <h5>This is question-2 using watch</h5>
    <b-form-input v-model="lower" placeholder="Enter your lower"></b-form-input
    ><br /><br />
    <b-form-input v-model="upper"></b-form-input>
  </div>
</template>
<script>
export default {
  name: "QuE2",
  data() {
    return {
      lower: "",
      upper: "",
    };
  },
  watch: {
    lower() {
      this.upper = this.lower.toUpperCase();
    },
  },
};
</script>

