<template>
    <div>
        <h1>This is Question-9</h1>
        <button @click="spread">Click</button>
       <p>The Spread operater is adding the new element in the existing array {{ans}}</p>
    </div>
</template>
<script>
export default {
    name:"QuE89",
    data() {
        return{
        array1:[1,2,3,4,5,6,7],
            ans:"",
        }
    },
    methods:{
        spread(){
            this.ans=[99,...this.array1]
            return this.ans
        }
    }
}
</script>
