<template>
  <div>
    <h1>This is Question-5</h1>
   <button @click="f1">Click!</button>
  </div>
</template>
<script>
export default {
  name: "QuE85",
  methods: {
    f1() {
      this.$emit('action',{name:'my name is Anuradhataddi'});
    },
  },
};
</script>



