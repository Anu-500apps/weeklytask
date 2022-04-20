<template>
  <div>
      <h3>This is Question-9</h3>
    <b-form @submit="onsubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1" >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label=" Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.age"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="PhoneNumber:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.PhoneNumber"
          placeholder="Enter PhoneNumber"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Save</b-button>
      <b-card class="mt-1" header="Displaying Data">
      </b-card>
      <p id="id"></p>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "QuE9",
  data() {
    return {
      form: {
        email: "",
        name: "",
        age: "",
        PhoneNumber: "",
      },
      show:true
    };
  },
  methods: {
    onsubmit(event) {
      event.preventDefault();
      document.getElementById("id").innerHTML=JSON.stringify(this.form);
    },
  },
};
</script>