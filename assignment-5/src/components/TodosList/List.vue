<template>
  <div>
   <div class="todo-list" >
    <div class="todo-item" v-for="todo in todos" :key="todo.id">
      <table>{{ todo.title }}</table>
      <input
        type="checkbox"
        name="todo.id"
        v-on:change="updateTodo(todo)"
        v-bind:checked="todo.completed"
      />
    </div>
    <p>Completed Todos: {{ todosCount }}</p>
  </div>
  </div>
</template>
<script>
export default {
  name:"TodoList",
  created: function() {
    this.getTodos;
  },
  computed: {
    todos() {
      console.log("todosList=======",this.$store.state.todoList)
      return this.$store.state.todoList;
    },
    todosCount() {
      return this.$store.getters.completeTodosLength;
    },
    getTodos() {
      return this.$store.dispatch('getTodos');
    },
  },
  methods: {
    updateTodo: function(todo) {
      this.$store.commit('updateTodo', todo.id);
    },
  },
};
</script>