<template>
  <div>
    <h5>Question-4 Checking given input is an array or not</h5>
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
      document.write(this.array("This is an array")+" and ");
       document.write(this.array([1, 2, 4, 0]));
    },
  },
};
</script>