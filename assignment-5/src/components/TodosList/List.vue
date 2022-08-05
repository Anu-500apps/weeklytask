<template>
  <div>
    <b-form class="todo-form" @submit="submitTodo">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="11">
            <b-form-input
              class="todo-input"
              name="todo"
              v-model="todo"
              placeholder="Start typing..."
              required
            >
            </b-form-input>
          </b-col>
          <b-col cols="-1">
            <b-button class="todo-btn" type="submit" variant="warning"
              >AddTask</b-button
            >
          </b-col>
        </b-row>
      </b-container> </b-form
    ><br /><br />
    <b-row>
      <b-col cols="2">
      </b-col>
      <b-col cols="8">
        <div class="todo-list">
          <b-button block v-b-toggle.accordion-1 variant="primary"
            ><p class="mb-0 d-flex align-items-center">Today Tasks</p>
            <p class="mb-2 d-flex align-items-right">
              Completed Tasks: {{ todosCount }}
            </p></b-button
          >

          <div class="todo-item" v-for="todo in todos" :key="todo.id">
            <b-collapse
              id="accordion-1"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <div
                class="mb-2 d-flex justify-content-between align-items-center"
              >
                <li class="mb-0 text-muted text-left">
                  {{ todo.title }} {{ todo.date }}
                </li>
                <div>
                  <b-form-checkbox
                    class="checkbox mr-1"
                    type="checkbox"
                    name="todo.id"
                    v-on:change="updateTodo(todo)"
                    v-bind:checked="todo.completed"
                  ></b-form-checkbox>
                  <b-icon
                    class="mb-0 text-muted text-left"
                    icon="trash"
                    @click="deleteTask(todo.id)"
                    v-b-tooltip:hover
                    title="Delete"
                  ></b-icon>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "LiSt",
  data() {
    return {
      todo: "",
      value: "",
    };
  },
  computed: {
    // It have list of items which is entered in the input field
    todos() {
      return this.$store.state.todoList;
    },
    // For increasing the lenth of completed tasks
    todosCount() {
      return this.$store.getters.completeTodosLength;
    },
  },
  methods: {
    // To commit from the $store
    submitTodo() {
      this.$store.commit("addTodo", this.todo);
      // For empty the input field
      this.todo = "";
    },
    /**
     *  For commits a mutation for updating the completion status of a to-do item.
     * @param {Array} todo it have id,title,task status
     */
    updateTodo(todo) {
      this.$store.commit("updateTodo", todo.id);
    },
    /**
     *  For delete the item in the list.
     * @param {Array} id item id
     */
    deleteTask(id) {
      this.$store.commit("deleteTodo", id);
    },
  },
};
</script>
