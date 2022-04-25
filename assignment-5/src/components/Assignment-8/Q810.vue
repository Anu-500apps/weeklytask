<template>
    <div>
        <h1>This is Question-10</h1>
        <button type="submit" @click="findmap()">Click!</button>
        <p>Map function return the all ID's{{ans}}</p>
    </div>
</template>
<script>

export default {
    name:"QuE810",
    data() {
        return{
            array1:[{ id: 20, name: 'Captain Piett' },
                    { id: 24, name: 'General Veers' },
                    { id: 56, name: 'Admiral Ozzel' },
                    { id: 88, name: 'Commander Jerjerrod' }],
         ans:"",
        }
    },
    methods:{
        findmap(){
            this.ans=this.array1.map((arrow)=>
            arrow.id);
            return this.ans.id
            }
        }
    }
</script>
