<template>
    <div>
        <h3>This is Rest Apis</h3>
    </div>
</template>
<script>
const axios = require('axios').default;
export default {
    name:"ApiS",
    data() {
        return{        
            
        }
    },
   async mounted(){
       const result=await axios.get('http://universities.hipolabs.com/search?country');
      //  const response= await result.json()
       console.log(result);
    },

}
</script>
