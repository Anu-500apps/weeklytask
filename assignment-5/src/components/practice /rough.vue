<template>
    <div>
        <h1>List of employees</h1>      
       <b-container> <b-row><b-col cols=3 v-for="value in value1" :key="value">
        <b-card id="bcard">
      <b-card-text>id: {{ value.id }} </b-card-text>
      <p>name:{{ value.name }}</p>
      </b-card>
      </b-col>
    </b-row>
    </b-container>
          <b-table id="btable" :items="table_data" :fields="fields">
        <template #cell(button)="data">
            <b-button id="btn" @click="remove(data.item.id)">Delete</b-button>
        </template>
        </b-table>
        <b-modal id="modal" @ok="add()">
          <b-form-input id="ip" v-model="text" placeholder="Enter text to add into table" ></b-form-input>
        </b-modal>
        <b-form-input  @input="search()" v-model="vm" placeholder="enter to search"></b-form-input>
        <b-button v-b-modal="'modal'">CLICK TO ADD</b-button>        
    </div>
</template>
<script>
 export default{
        name:"PracticE",
        data(){
             return{
              vm:"",
              i:5,
              table_data:[],
              a:[{id:1,name:"Anu"},
                 {id:2,name:"navya"},
                 {id:3,name:"anusha"},
                 {id:4,name:"yammu"}],
              fields:['id','name',{ key: 'button', label: ''}]
            }
        },
        mounted(){
                 this.table_data=this.a;
        },
        methods: {
            onRowSelected(items) {
            this.selected = items
            },
            add(){
                  this.a.push({id:(this.i++),name:(document.getElementById("ip").value)})
                 
              },
              remove(id){
            this.table_data=this.table_data.filter((item)=>item.id!=id )    
},
              search(){
             this.table_data=this.a.filter((k)=>{
                    return k.name.toLowerCase().includes(this.vm)
                })
                  }
              }
        }
    
</script>