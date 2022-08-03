<template>
  <form class="todo-form" @submit="submitTodo">
    <input
      class="todo-input"
      name="todo"
      v-model="todo"
      placeholder="Start typing..."
      required
    />
    <button class="todo-btn" type="submit">Add Todo</button>
  </form>
</template>
<script>
import Store from '../../store'
export default {
  data() {
    return {
      todo: '',
    };
  },
  computed(){},
   mounted(){
    console.log("store",Store)
  },
  methods: {
submitTodo: function(event) {
  event.preventDefault();
  this.$store.commit('addTodo', this.todo);
  localStorage.setItem("todoList",this.todo);
  // localStorage.getItem("todoList")
  this.todo = '';
  // localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
//var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back
}
  },
};
</script>