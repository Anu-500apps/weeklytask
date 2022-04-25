<template>
    <div>
     <h1>This is Question-6</h1>
      <b-card v-for="value in Array1" :key="value.id" >
      <b-card-text>
        name: {{ value.name }} 
      <p>Description: {{ value.description }}</p>
      </b-card-text>
    </b-card>
    </div>
</template>
<script>

export default{
    name:"QuE86",
    data() {
        return{
            Array1:[{ name :" Agile CRM" , description :" A company of excellence"},
             {name:"mantra technologies", description:"500apps" },
             {name:"500apps Python", description:"Backend built using python" },
             {name:"500apps infinity", description:"Builtusing vue JS" }]
        }
    },
}
</script>
