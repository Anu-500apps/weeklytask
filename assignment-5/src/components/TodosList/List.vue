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
      </b-container>
    </b-form><br><br>
    <div class="todo-list">
      <b-button block v-b-toggle.accordion-1 variant="primary"
        ><p class="ml-2 pl-1">Today Tasks</p></b-button
      >
      <p>Completed Tasks: {{ todosCount }}</p>
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-list-group>
            <b-list-group-item
              class="d-flex justify-content-between align-items-center"
            >
              <p>{{ todo.title }}</p>
              <b-form-checkbox
                class="checkbox mr-10"
                type="checkbox"
                name="todo.id"
                v-on:change="updateTodo(todo)"
                v-bind:checked="todo.completed"
              ></b-form-checkbox>
              <i class="fa-solid fa-trash"></i>
              <b-link href="#" class="option-icon-delete ml-4">
                <span
                  class="fe fe-trash-2"
                  @click="deleteTask"
                  v-b-tooltip:hover
                  title="Delete"
                  ><i>Delete</i></span
                ></b-link
              >
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LiSt",
  data() {
    return {
      todo: "",
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
      console.log("subit",this.todo) 
      this.$store.commit("addTodo", this.todo);
      // For empty the input field
      this.todo = "";
    },
    /**
     *  For commits a mutation for updating the completion status of a to-do item.
     * @param {Array} todo it have id,title,task status
     */
    updateTodo(todo) {
      console.log("todo",todo)
      this.$store.commit("updateTodo", todo.id);
    },

    // Delete the each item in that array
    deleteTask() {
      let list = this.$store.state.todoList;
      let index = list.findIndex((item) => {
        console.log("item",item,list.id)
        return item.id == list.id;
      });
      list.splice(index, 1);
    },
  },
};
</script>
