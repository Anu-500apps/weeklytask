<template>
<div>
  <h1>This is parent for 3 componets</h1>
  <PropS name="Anuradhataddi" number="123456785" email="Anuradha123@gmail.com" :method="Props"></PropS>
  <ReF ref="name"></ReF>
  <input type="submit" @click="refs" value="ref">
  <EmiT @action="Emitparent"/>
  <p>name:{{name}}</p>
  
</div>
</template>

<script>
import PropS from './Props.vue'
import ReF from './Ref.vue'
import EmiT from './Emit.vue'


export default {
    name:"ParenT",
    components:{
        PropS,
        ReF,
        EmiT,
    },
    data(){
        return{
            name:"This is emit"
        }
    },
    methods:{
        refs(){
            this.$refs.name.Child();
           console.log("This is refs Parent")
        },
        Emitparent(change){
            this.name=change.name
        },
        Props(){
            console.log("Props parent")
        }

    }

}
</script>

<style>

</style>