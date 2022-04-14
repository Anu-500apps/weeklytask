<template>
    <div>
        <h1 align="center">This is question1</h1>
        <p>{{perimeter()}}</p>
        <p>{{daiameter()}}</p>
    </div>
</template>
<script>
export default {
    name:"PracticE1",
   data() {
       return{
           radius:20,
           PI:3.14,
        perimeter:()=> 2*this.PI*this.radius,
       }
        
    },
    methods:{
        daiameter(){
            const circle={
            radius:20,
       }
       console.log(circle);
             return this.radius*2;
        
        },
        
    }
};
</script>
