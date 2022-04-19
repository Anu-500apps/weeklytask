<template>
  <div>
    <h3>Hello</h3>
    <h1>THis is second Api</h1>
    <b-form-input v-model="text" placeholder="enter a country" required>
    </b-form-input
    ><br />
    <b-button @click="REST1" variant="info"></b-button><br /><br />
    <b-card v-for="data1 in posts" :key="data1.id">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="3.5">University Name:{{ data1.name }}</b-col>
        </b-row>
        <b-row>
          <b-col cols="1.5">Domains:{{ data1.domains }}</b-col>
          <b-col cols="10">Website :{{ data1.web_pages[0] }}</b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>
<script>


export default{
    name:"ResT",
     data() {
      return{
          posts:" ",
      }
    },
    methods:{
     async getFile() {

let myPromise = new Promise(function(resolve) {

let req = new XMLHttpRequest();

req.open('GET', "http://universities.hipolabs.com/search?country");

req.onload = function() {

if (req.status == 200) {

resolve(req.response);

} else {

resolve("File not Found");

}

};

req.send();

});

document.getElementById("demo").innerHTML = await myPromise;

}
    }
}
</script>