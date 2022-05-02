<template>
    <div>
        <h1 align="center">Check given output is correct or not</h1>
        <p>{{perimeter()}}</p>
        <p>{{daiameter1()}}</p>
    </div>
</template>
<script>
export default {
    name:"PracticE1",
   data() {
       return{
           radius:60,
           PI:3.14,
        perimeter:()=> 2*this.PI*this.radius,
       }
    },
    methods:{
        daiameter1(){
            const circle={
            radius:60,
       }
       console.log(circle);
            return this.radius*2;
        },
    }
};
</script>
