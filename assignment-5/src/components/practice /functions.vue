<template>
  <div>
    <h1>ES6 method</h1>
     <b-table striped hover :items="studentDetails" :fields="fields" @Onclick="f()"></b-table>
    <button type="submit" @click="f()">Filter</button><br><br>
    <button @click="f1()">ForEach</button><br><br>
    <button @click="f2()">Map</button><br><br>
    <button @click="f3()" id="students">FIND</button><br>
    <!-- <p> {{studentDetails}}</p> -->
  </div>
</template>
<script>
export default {
  name: "FunctionS",
  data() {
    return {
      studentDetails:[],
      students: [{ name: "Anu", age: 22 },
      { name: "Anu", age: 24 },
      { name: "anusha", age: 20 },
      { name: "Navya", age: 25 },
      { name: "sruthi", age: 21 },
      ],
      // array: [4, 7, 6, 9, 6, 3],
    };
  },
  methods: {
    // f(){
    //       var  students=[{ name: "Anu", age: 22 },{ name: "Anu", age: 24 },{ name: "anusha", age: 20 },{ name: "Navya", age: 25 },{ name: "sruthi", age: 21 }]
    //      var a=students.filter((arrow)=>{
    //        return arrow.name !="anusha";
    //      });
    //      document.write(a);
    // },
    f() {
      this.studentDetails=this.students.filter((student) =>
      student.name != "Anu");
      return this.studentDetails.name
    },
    f1() {
      this.students.forEach((arrow) => {
        console.log(arrow);
      });
    },
    f2() {
     var x=this.students.map((a) => {
     return a.name
        //if (index != 2) return 0;
      });
      console.log(x);
    },
    f3(){
      var b=this.students.find((demo)=> { 
       return demo.name.includes("A");  
      });
      document.write(b.name)
    }
  },
};
</script>



