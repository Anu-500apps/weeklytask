<template>
  <div>
    <h5>This is Question-2 Country List</h5>
     <b-row><b-col cols=2> <b-form-select v-model="value" :options="countries"></b-form-select><br /><br /></b-col></b-row>
      <b-button variant="warning" @click="getData">Search</b-button>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
      </b-pagination>
      <b-row><b-col cols=6>
        <b-table id="my-table" :per-page="perPage" :current-page="currentPage" striped   hover :items="items">
          <p>university_name: {{ value.university_name }}</p>
          <p>domains: {{ value.domains }}</p>
          <p><a :href="value.website_url" target="_blank">{{value.website_url}}</a>
              website_url: {{ value.website_url }}</p>
          <p>state_province: {{ value.state_province }}</p>
        </b-table>
        </b-col></b-row>
    <b-container mt="5">
      <div class="row mt=3" >
        <div class="col-md-3">
          <div class="p-2 alert alert-warning">
            <h3>CountriesData</h3>
            <draggable class="list-group kanban-column" group="tasks" v-for="value in items" :key="value.domains" :per-page="perPage" :current-page="currentPage">
                <b-row><b-col cols=12>
                <b-card >
                  <b-card-text>University_name:{{value.university_name}}
                  </b-card-text>
                  <p>Website_url:
                  <a :href="value.website_url" target="_blank">{{value.website_url}}</a></p>
                  <p>Domains:{{ value.domains }}</p>
                  <p>State_province:{{value.state_province}}</p>
                </b-card>
                </b-col></b-row>
            </draggable>
          </div>
        </div>
          <div class="p-2 alert alert-warning">
            <draggable  group="tasks">
            <h3>This is the Draggable List</h3>
            </draggable>
          </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from 'axios';
const { getNames } = require("country-list");
import draggable from "vuedraggable";
export default {
  name: "QuE2",
  components: {
    draggable,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      value: "",
      items: [],
      countries: [],
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },
  methods: {
    async getData() {
      const response = await axios.get("http://universities.hipolabs.com/search?country=" + this.value,
        {method: "GET",});
      const responseText = await response.data;
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>