<template>
    <div>
        <h1>This is Question-2 Mult and divide methods</h1>
        <form >
       Enter value1: <input type="text" id="id" /><br><br>
       Enter value2: <input type="text" id="id1" /><br><br>
        <button @click="Multiply">Multiplay</button>
        <button @click="Divide">Divide</button>
    </form>
    </div>
</template>
<script>

export default {
    name:"QuE92",
    data() {
        return{

        }
    },
    methods:{
        Multiply() {
            var value = document.getElementById("id").value;
            var value1 = document.getElementById("id1").value;
            document.write("The Multiplay of two numbers are:"+value*value1)
        },
        Divide() {
            var value = document.getElementById("id").value;
            var value1 = document.getElementById("id1").value;
           document.write("The Divide of two numbers are:"+value/value1)
        }
    }
}
</script>
