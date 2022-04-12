<template>
  <div>
    <h1 align="center">This is Question-3</h1>
    <b-form id="form">
    Enter First Name:<b-form-input id="firstname" placeholder="enter First name"></b-form-input>
    Enter LastName:<b-form-input id="lastname" placeholder="enter Last name" >
      </b-form-input>

      <b-button @click="Add()">Add</b-button><br /><br />

      <b-button @click="Delete()">Delete</b-button><br><br>

      <b-button @click="update()">Update</b-button>
    </b-form>

    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  name:"QuE3",
  data() {
    return {
      items: [{ first_name: "", last_name: "" }],

      fields: ["first_name", "last_name"],
    };
  },

  methods: {
    Add() {
      this.items.push({
        first_name: document.getElementById("firstname").value,
        last_name: document.getElementById("lastname").value,
      });
    },

    Delete() {
      this.items.pop();
    },
  },
};
</script>



