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
            var a = [1, 2, 3, 4, 5];
            this.c = a.reduce((double, b) => {
                this.double = b * 2;
                this.double=console.log(this.double);
            }, []);
        }
    }
}
</script>
