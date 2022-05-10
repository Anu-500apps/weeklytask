<template>
  <div>
      <h3>This is Props</h3>
    <p>{{ name }}</p>
  <p>{{number}}</p>
  <p>{{email}}</p>
    <button @click="Propfunction()">props</button>
  </div>
</template>
<script>
export default {
  name: "ChilD1",
  props: {
    name: String,
    number:Number,email:String,
    method: {
      type: Function,
    },
  },

  methods: {
    Propfunction() {
      this.method();
    },
  },
};
</script>

