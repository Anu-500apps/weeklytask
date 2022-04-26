<template>
  <div>
    <h1>Question-4 Using filter function</h1>
    <h4><b-form-input type="text" placeholder="Enter text" v-model="answer"></b-form-input></h4>{{result}}
    <b-button type="submit" @click="usingfilter">check here item is present or not</b-button><br><br>
    <li v-for="array in list" :key="array.id">{{array}}</li>
  </div>
</template>
<script>
export default {
  name: "QuE4",

  data() {
    return {
      list: ["Orange", "Red", "Blue", "Black", "White"],
      answer: "",
      result:[],
    };
  },
  methods: {
    usingfilter() {

         this.result = this.list.filter((arrow) => {
        return arrow.includes(this.answer);
      })
         if(this.result[0]==this.answer){
       // document.write(this.result);
         }
      else{
          console.log("item is not in list")
      }
     // document.getElementById("a").innerHTML=result;
     //document.write(this.result);
     //console.log(this.result)
    },
  },
};
</script>