<template>
  <div>
    <h1>This is Question-6 </h1>
    <button type="submit" @click="Most">Click</button>
    <p>{{a1}}{{a2}}</p>
  </div>
</template>
<script>
export default {
  name: "QuE116",
  data() {
    return {
      arr1: [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3],
      a1: " ",
      a2: " ",
    };
  },
  methods: {
    Most() {
      const res = this.arr1.reduce((x, y) => {
        if (y in x) {
          x[y]++;
        } else {
          x[y] = 1;
        }
        if (x[y] > this.a1) {
          this.a1 = x[y];
          this.a2 = y;
        }
        return x;
      }, {});
    this.a2, this.a1;
      console.write(res,+"times");
    },
  },
};
</script>