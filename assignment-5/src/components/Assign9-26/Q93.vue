<template>
  <div>
    <h1>This is Question-3</h1>
    <b-form>
       First Name:<b-form-input id="first" v-model="value1" placeholder="enter First name" ></b-form-input>
       LastName:<b-form-input id="last" v-model="value2" placeholder="enter Last name" ></b-form-input>
      <b-button @click="Add()">Add</b-button><br /><br />
      <b-button @click="Delete()">Delete</b-button><br /><br />
      <b-button @click="update()">Update</b-button>
    </b-form>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  name: "QuE93",
  data() {
    return {
        //this is for table
      items: [{ first_name: "", last_name: "" }],
      fields: ["first_name", "last_name"],
      value1:"",
      value2:"",
    };
  },

  methods: {
    Add(){
      this.items.push({
        first_name: document.getElementById("first").value,
        last_name: document.getElementById("last").value,
      });
        this.value1="",
      this.value2=""
    },
    Delete(){
      this.items.pop();
    },
    update(){
    this.items.document.getElementById("first").value,
    this.items.document.getElementById("last").value

    }
  },
};
</script>

