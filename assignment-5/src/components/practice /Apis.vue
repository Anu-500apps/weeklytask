<template>
    <div>
        <h3>Hello</h3>
        <h1>THis is second Api</h1>
        <p>{{posts}}</p>
        <b-form-input  v-model="text" placeholder="enter a country" required>
        </b-form-input><br>
        <b-button @click="REST1" variant="info">Click</b-button><br><br>
    </div>
</template>
<script>
 const axios = require('axios').default;
export default {
    name:"ApiS1",
    data() {
      return{
          posts:" ",
          //result:" ",
      }
    },
    methods:{
      async REST1(){
           let posts=await axios.get('http://universities.hipolabs.com/search?country='+this.text)
          console.log(posts)
      }

    }
  //    async mounted(){
  //      let result=await axios.get('http://universities.hipolabs.com/search?country='+this.text);
  //      // const response= await result.json()
  //      console.log(result)

  //  },
}
</script>



