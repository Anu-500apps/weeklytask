<template>
<div>
    <h1>this is question-3</h1>
   <button type="=submit" @click="remove" >Click!</button>
</div>
</template>
<script>

export default {
    name:"practicE3",
   data() {
       return{
           array:[1,1,2,2,2,3,4,3,2],
       }       
    },
    methods:{
          remove(){
        console.log(this.array=[...new Set(this.array)])
          }
    }
}
</script>
