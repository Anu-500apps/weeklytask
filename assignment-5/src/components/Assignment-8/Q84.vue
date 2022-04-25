<template> 
 <div> 
    <h1>Messege:{{ msg }}</h1> 
    <h1>User-name:{{ name }}</h1> 
    <h1>Ph-number:{{ number }}</h1>
    <h1>Email-ID:{{email}}</h1> 
 </div>
</template> 
<script>
 export default
 {
     name:"QuE84",
 props:{
     msg:String,
     name:String,
     number:{
    default:1234345,
    type:Number
     },
     email:String
   }
 }
    
</script>