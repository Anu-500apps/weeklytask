<template>
<div>
    <h1>this is question-3</h1>
   <button type="=submit" @click="removeduplicates" >Click here!</button>
</div>
</template>
<script>
export default {
    name:"QuE113",
   data() {
       return{
           array:[1,1,2,2,2,3,4,3,2],
       }       
    },
    methods:{
          removeduplicates(){
        this.array=[...new Set(this.array)]
        document.write(this.array)
          }
    }
}
</script>
