<template>
    <div>
        <h1>This is Question-1 Using reverse function</h1>
        <button @click="alpha()">Click</button><br><br>
        <button @click="reverse()">Click!</button>
        <b-table striped hover :items="array" :fields="array1"></b-table>
    </div>
</template>
<script>

export default {
    name:"QuE91",
    data() {
        return{
            array:[{name:"500apps",id:1},
                   {name:"Technologies",id:2},
                   {name:"Agile",id:3},
                   {name:"Mantra",id:4},
                   {name:"Clockly",id:5},
                   {name:"CRM",id:6},
                   {name:"500apps",id:7}],
          array1:["name","id"],
          array2:["name"]
        }
    },
    methods:{
        alpha(){
        this.array.sort((x, y) => (x[this.array2] || "").toString().localeCompare((y[this.array2] || "").toString()));
        },
        reverse(){
       this.array.sort((x, y) => (x[this.array1] || "").toString().localeCompare((y[this.array1] || "").toString())).reverse();
        }
    }
}
</script>
