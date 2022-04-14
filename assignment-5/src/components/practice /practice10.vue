<template>
  <div>
    <h5>Question-10</h5>
   <button type="submit" @click="fun">Click!</button>
  </div>
</template>
    <script>
export default {
  name: "PracticE10",
  data() {
    return {
        result:"",
    };
  },
  methods: {
    fun(test_array) {
      var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];
      while (++index < arr_length) {
        var value = test_array[index];
        if (value) {
          result[++resIndex] = value;
        }
       this.result=console.log(this.fun([NaN, 0, 15, false, -22, "", undefined, 47, null])
        );
      }
    },
  },
};
</script>
