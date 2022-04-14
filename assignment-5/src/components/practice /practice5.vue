<template>
    <div>
        <h1>Question-5</h1>
        <button type="submit" @click="color">Click!</button>
   </div>
</template>
<script>

export default {
    name:"PracticE5",
    data() {
        return{
            myColor:["Red", "Green", "White", "Black"]
        }
        
    },
    methods:{
        color(){
            console.log(this.myColor.toString())
            console.log(this.myColor.join(" "))
            console.log(this.myColor.join("+"))

        }
    }
}
</script>
