<template>

  <div>
      <h1>Question1</h1>
    <b-form id="form">
      Enter product name:<b-form-input
        id="name"
        placeholder="Enter product name"></b-form-input>
      Enter product price:<b-form-input
        id="price"
        placeholder="Enter product price:"></b-form-input>
      Enter product category:<b-form-input
        id="category"
        placeholder="Enter product category"></b-form-input>
      <b-button @click="Add()">Add</b-button><br /><br />
    </b-form>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "QuestioN1",

  data() {
    return {
      items: [
        {
          productname: "",
          productprice: "",
          productcategory: "",
        },
      ],

      fields: [],
    };
  },

  methods: {
    Add() {
      this.items.push({
        productname: document.getElementById("name").value,
        productprice: document.getElementById("price").value,
        productcategory: document.getElementById("category").value,
      });
    },
  },
};
</script>
