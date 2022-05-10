<template>
  <div>
    <h5 align="center">Checking given input is an array or not</h5>
    <button type="submit" @click="result()">Click!</button>
  </div>
</template>
<script>
export default {
  name: "QuesT4",

  data() {
    return {
      array: (input) => {
        if (toString.call(input) === "[object String]") 
        return true;
        return false;
      },
    };
  },

  methods: {
    result() {
      console.log(this.array("This is an array"));
      console.log(this.array([1, 2, 4, 0]));
    },
  },
};
</script>
