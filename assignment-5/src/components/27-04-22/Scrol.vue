<template>
  <div id="app">
    <h1>Random User</h1>
      <div
         class="user"
         v-for="user in users"
         :key="user.first"
      >
      <div class="user-avatar">
        <img :src="user.picture.large" />
      </div>
      <div class="user-details">
        <h2 class="user-name">
          {{ user.name.first }}
          {{ user.name.last }}
        </h2>
        <ul>
          <li><strong>Birthday:</strong> {{ formatDate(user.dob.date) }}</li>
          <li><strong>Location:</strong> {{ user.location.city }}, {{ user.location.state }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
    name:"ScroL",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getInitialUsers() {
      axios.get("https://randomuser.me/api/?results=5").then((response) => {
        this.users = response.data.results;
      });
    },
  },
  beforeMount() {
    this.getInitialUsers();
  },
};
</script>