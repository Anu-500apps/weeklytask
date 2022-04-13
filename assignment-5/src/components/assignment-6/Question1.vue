<template>
  <div>
    <h1 align="center">This is Question 1</h1>
    <b-form-select v-model="value" :options="countries">
    </b-form-select><br /><br />
    <b-button variant="warning" @click="getData">Get Data</b-button><br /><br />
    <center>
    <input type="text" name="search" id="search" v-on:keyup="search()" placeholder="search .." /><br/><br/><br/>
    <b-col lg="6" class="my-1">
        <b-form-group label="Filter" label-for="filter-input" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0">
          <b-input-group size="sm">
            <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" >
            </b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
     <b-col lg="6" class="my-1">
        <b-form-group v-model="sortDirection" label="FilterOn" label-cols-sm="3"  label-align-sm="right"
          label-size="sm"
          class="mb-0"
          v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1">
            <b-form-checkbox value="university_name">university_name</b-form-checkbox>
            <b-form-checkbox value="domains">domains</b-form-checkbox>
            <b-form-checkbox value="website_url">website_url</b-form-checkbox>
            <b-form-checkbox value="isActive">state_province</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
     </b-col>
 <b-container>
  <b-row cols-md=12>
<b-table 
      :items="items"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
      @filtered="onFiltered">
</b-table>
  </b-row>
</b-container> 
</center>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button @click="getData" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  <!-- <b-table striped hover :items="items" id="mytable">
      <p>university_name:-- {{ value.university_name }}</p>
      <p>domains:{{ value.domains }}</p>
      <a :href="value.website_url" target="_blank">{{value.website_url}}</a>
      <p @click="redirect(value.website_url)">
        website_url:{{ value.website_url }}
      </p>
      <p>state_province:{{ value.state_province }}</p>
    </b-table>-->
  </div>
</template>
<script>
const { getNames } = require("country-list");
export default {
  name: "QuE1",
  data() {
    return {
      items:[
    //     {
    //   "state-province":"Dehradun",
    //   "country":"India",
    //   "name":"University of Petroleum and Energy Studies",
    //   "web_pages":
    //      "https://www.upes.ac.in/",
    //   "domains":
    //      "upes.ac.in",
    //   "alpha_two_code":"IN"
    //  },
    //  {
    //   "state-province":"Punjab",
    //   "country":"India",
    //   "name":"DAV Institute of Engineering & Technology",
    //   "web_pages":[
    //      "http://www.davietjal.org/"
    //   ],
    //   "domains":[
    //      "davietjal.org"
    //   ],
    //   "alpha_two_code":"IN"
    //  },
    //  {
    //   "state-province":"Punjab",
    //   "country":"India",
    //   "name":"Lovely Professional University",
    //   "web_pages":[
    //      "http://www.lpu.in/"
    //   ],
    //   "domains":[
    //      "lpu.in"
    //   ],
    //   "alpha_two_code":"IN"
    //    },
    //   {
    //   "state-province":null,
    //   "country":"India",
    //   "name":"Somaiya Vidyavihar",
    //   "web_pages":[
    //      "https://somaiya.edu/"
    //   ],
    //   "domains":[
    //      "somaiya.edu"
    //   ],
    //   "alpha_two_code":"IN"
    //      },
      ],
     fields:
       [
      //  {key:"university_name",label:"university_name"},
      //  {key:"domains",label:"domains"},
      //  { key: "website_url", label: "website_url" },
      //  {key:"state_province",label:"state_province"}
     ],
      value: "",
      // items: [],
      countries: [],
      filter: null,
      filterOn: [],
    };
  },
  computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },
    async getData() {
      // Get the response
      const response = await fetch(
        "http://universities.hipolabs.com/search?country=" + this.value,
        {
          method: "GET",
        }
      );
      const responseText = await response.json();
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
    search() {
      var searchbar, filter, table, tr, td, i, txt;

      searchbar = document.getElementById("search");

      filter = searchbar.value.toUpperCase();

      table = document.getElementById("mytable");

      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];

        if (td) {
          txt = td.textContent || td.innerText;

          if (txt.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    },
    onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
  },
};
</script>


