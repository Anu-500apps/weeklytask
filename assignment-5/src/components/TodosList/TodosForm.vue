<template>
  <form class="todo-form" @submit="submitTodo">
      <input
        class="todo-input"
        name="todo"
        v-model="todo"
        placeholder="Start typing..."
        required
      >
    <button class="todo-btn" type="submit">AddTask</button>
  </form>
</template>
<script>
import Store from "../../store";
export default {
  data() {
    return {
      todo: "",
    };
  },
  computed() {},
  mounted() {
    console.log("store", Store);
  },
  methods: {
    submitTodo: function () {
      this.$store.commit("addTodo", this.todo);
      this.todo = "";
    },
  },
};
</script>
