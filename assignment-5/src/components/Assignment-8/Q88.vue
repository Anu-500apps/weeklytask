<template>
    <div>
        <h1>This is Question-8</h1>
        <button type="submit" @click="findfilter()">Click!</button>
        <p>{{answer}}</p>
    </div>
</template>
<script>

export default {
    name:"QuE88",
    data() {
        return{
            array1:[{ id: 20, name: 'Captain Piett' },
                    { id: 24, name: 'General Veers' },
                    { id: 56, name: 'Admiral Ozzel' },
                    { id: 88, name: 'Commander Jerjerrod' }],
         answer:[],
        }
    },
    methods:{
        findfilter(){
            this.answer=this.array1.filter((arrow)=>
            arrow.name == "General Veers");
            return this.answer.name
            }
        }
    }
</script>
