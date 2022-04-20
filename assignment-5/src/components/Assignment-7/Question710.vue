<template>
  <div>
      <h5>This is Question-10</h5> 
    <center>
      <button @click="handle()">Question10</button>
    </center>
  </div>
</template>  
<script>
export default {
  name: "QuE10",

  methods: {
    handle() {
      try {
        this.out = this.count * 5;
        document.write("printing count ", this.count);
      } catch {
        console.log("count");
      }
    },
  },
};
</script>