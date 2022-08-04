import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "todoslist",
});

 const store = new Vuex.Store({
  plugins: [vuexLocal.plugin],
  namespaced:true,
  state: {
    todoList: [],
  },
  mutations: {
    // For adding a single to-do item
    addTodo(state, title) {
      state.todoList = [
        ...state.todoList,
        {
          id: Math.random(),
          title,
          completed: false,
        },
      ];
    },
    // For adding an array of to-dos
    addTodos(state, todos) {   
      console.log("sjadhjkhb",todos) 
      state.todoList = todos;
    },

    // For updating the completed status of a to-do item
    updateTodo(state, todoId) {
      state.todoList = state.todoList.map((item) => {
        if (item.id === todoId) {
          item.completed = !item.completed;
        }
        return item;
      });
    },
  },
  // This should be pasted after the mutations property
getters: {
    completeTodosLength: (state) => {
        const completeTodos = state.todoList.filter((item) => item.completed);
        return completeTodos.length;
      },
  },
});
export default store;