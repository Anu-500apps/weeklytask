<template>
  <div>
    <h3 >Events Handlers</h3>
    <b-button @click="onclick('Onclick Event')">1.Onclick</b-button>
    <h4 @mousemove="mouseMove()">2.mouseMoving</h4>
    <b-button id="btn_events" @click="mouseEvents()">Click Here</b-button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
        onclick(data){
            alert(data)
        },
        mouseMove(){
            console.log("Mouse moving")
        },
    }
    

}
</script>

<style>

</style>