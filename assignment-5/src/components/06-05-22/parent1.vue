<template>
  <div>
    <ChilD1 />

    <ChilD2 />
    
  </div>
</template>

<script>
import ChilD1 from "./Child1.vue";
import ChilD2 from "./Child2.vue";
export default {
  name: "App",
  components: {
    ChilD1,
    ChilD2,
  },
};
</script>