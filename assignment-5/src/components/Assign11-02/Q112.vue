<template>
    <div>
        <h5 align="center">This is Question-2</h5>
        <button type="submit" @click="reduce">Click!</button>
    </div>
</template>
<script>

export default {
    name:"QuestioN2",
   data() {
       return{
          double:"",
       }
        
    },
    methods:{
        reduce() {
            var a = [5, 15, 20, 25, 30];
            this.c = a.reduce((a, b) => {
                this.double = b * 2;
                this.double=console.log(this.double);
            }, []);
        }
    }
}
</script>
