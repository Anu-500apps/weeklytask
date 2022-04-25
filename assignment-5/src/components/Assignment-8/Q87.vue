<template>
    <div>
        <h1>This is Question-7</h1>
        <p>The Index value is : {{answer}}</p>
        <button @click="findindex">Click</button>
    </div>
</template>
<script>
export default {
    name:"QuE87",
    data() {
        return{
            array1:[{ id: 20, name: 'Captain Piett' },
                    { id: 24, name: 'General Veers' },
                    { id: 56, name: 'Admiral Ozzel' },
                    { id: 88, name: 'Commander Jerjerrod' }],
            answer:""
        }
    },
    methods:{
        findindex(){
            this.answer=this.array1.findIndex(arrow=>
            arrow.id==88)
                return this.answer
            }
        }
 }
</script>
