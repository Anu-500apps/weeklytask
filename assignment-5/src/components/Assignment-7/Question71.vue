<template>
    <div>
        <h3>This is Question-1</h3>
   <form name="myform" onsubmit="search()">
    <center>
   <input type="text" name="latter" placeholder="Enter Text" />
   <button @click="search">Search</button>
   </center>
   </form>
    </div>
</template>
<script>
export default {
    name:"QuE71",
    data() {
        return{
    substring:"",
        }
    },
    methods:{
        search(){
        const array = ["agile", "crm", "mantra", "technologies", "500apps", "infinity"];
            const a = document.myform.latter.value;
            const match = array.find(element => {
                if (element.includes(a)) {

                    return true;
               }
           });
            document.write(match);
            if (match !== undefined) {
                console.log("undefined")
           }
    }
}
}
</script>
