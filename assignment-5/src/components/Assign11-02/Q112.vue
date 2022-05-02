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
          double:[],
       }
        
    },
    methods:{
        reduce() {
            var a = [5, 15, 20, 25, 30];
            a.reduce((c,b) => {
                this.double = b * 2;
                document.write(this.double);
            }, []);
        }
    }
}
</script>
