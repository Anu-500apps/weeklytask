<template>
  <div>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="warning" @click="fun()">This is the Table for showing table</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion"  role="tabpanel">
          <b-table striped hover :items="value" :fields="fields"></b-table>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="dark" @click="fun()">Click here for show the content</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
            <b-card-text v-for="data1 in value" :key="data1.id">
              <b-card>
                <b-row>
                  <b-col>id:{{ data1.id }}</b-col>
                </b-row>
                <b-row>
                  <b-col>title:{{ data1.title }}</b-col>
                </b-row>
                <b-row>
                  <b-col>completed:{{ data1.completed }}</b-col>
                </b-row>
              </b-card>
            </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>


<script>
export default {

  name: "AccorD",

  data() {
    return {
      value: "",
      fields:""
    };
  },

  methods: {
    fun() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => (this.value = data));
    },
  },
};
</script>

