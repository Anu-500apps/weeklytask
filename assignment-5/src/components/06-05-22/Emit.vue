<template>
  <div>
      <h3>This is Emit</h3>
      <button @click="Emit">Emit</button>
  </div>
</template>

<script>
export default {
    name:"EmiT",
    methods:{
        Emit(){
            this.$emit('action',{name:"I am emit"})
        }
    }

}
</script>

<style>

</style>