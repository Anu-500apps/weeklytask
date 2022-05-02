<template>
    <div>
        <h1>Question-5</h1>
        <button type="submit" @click="list">Click!</button>
        <p>{{r1}}</p><p>{{r2}}</p><p>{{r3}}</p>

   </div>
</template>
<script>
export default {
    name:"PracticE5",
    data() {
        return{
            Array:["Red", "Green", "White", "Black"],
            r1:[],
            r2:[],
            r3:[]
        }
        
    },
    methods:{
        list(){
            this.r1=this.Array.toString(),
            this.r2=this.Array.join(" "),
            this.r3=this.Array.join("+")
        }
    }
}
</script>
