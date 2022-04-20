<template>
    <div>
        <h3>This is Question-7</h3>
    <button type="submit" @click="fun1(6)">Click</button>
    <p>{{arrow(7)}}</p>
    </div>
</template>
<script>

export default {
    name:"QuE77",
    data() {
        return{

        }
        
    },
    methods:{
        fun1(x){
        if(x%2 == 0){
               console.log(" it is an even number");
                }
            else{
              console.log("it is odd number");
           }
       },
        arrow: (x) => {
            if (x % 2 == 0)
              console.log(" it is an even number");
            else
           console.log(" it is an odd number");
          }
       },
    }

</script>