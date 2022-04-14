<template>
    <div>
        <h5 align="center">Question-8</h5>
       <p> {{Ordinal()}}</p>
    </div>
</template>
<script>
export default {
    name:"QuestioN8",
   data() {
       return{
           a1:["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "],
           output:"",
       }      
    },
    methods:{
        Ordinal(n) {
          this.o = ["th", "st", "nd", "rd"],
            this.x = this.n % 100;
            this.x + (this.o[(this.x - 20) % 10] || this.o[this.x] || this.o[0]);
            for(this.n = 0;this.n < this.a1.length;this.n++)
            {
             this.ordinal = this.n + 1;
             this.output = (this.Ordinal(this.ordinal) + " choice is " + this.a1[n] + ".");
             console.log(this.output);
            }
        }
    }
}
</script>