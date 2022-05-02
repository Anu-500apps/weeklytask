<template>
<div>
   <h1>Question-7</h1>
   <button type="submit" @click="Duplicates">Click!</button>
  <h1>{{a2}}</h1>
</div>
</template>
<script>

export default {
    name:"QuestioN7",
    data() {
        return{
            a1:["apple", "mango", "apple", "orange", "mango", "mango"],
            a2:[],
        }
    },
    methods:{
        Duplicates() {
		this.a2=this.a1.filter((item,index) =>this.a1.indexOf(item) === index);
        this.a2;
    }
    }
};
</script>
