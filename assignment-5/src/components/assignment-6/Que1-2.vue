<template>

<b-container fluid>

<b-form-input v-model="text" placeholder="Enter country" required>

</b-form-input>

<b-button variant="primary" @click="getData">Get Data</b-button>

<b-row>

<b-col lg="6" class="my-1">

<b-form-group

label="Filter"

label-for="filter-input"

label-cols-sm="3"

label-align-sm="right"

label-size="sm"

class="mb-0">

<b-input-group size="sm">

<b-form-input

id="filter-input"

v-model="filter"

type="search"

placeholder="Type to Search"></b-form-input>

<b-input-group-append>

<b-button :disabled="!filter" @click="filter = ''"

>Clear</b-button>

</b-input-group-append>

</b-input-group>

</b-form-group>

</b-col>

<b-col lg="6" class="my-1">

<b-form-group

v-model="sortDirection"

label="Filter On"

description="Leave all unchecked to filter on all data"

label-cols-sm="3"

label-align-sm="right"

label-size="sm"

class="mb-0"

v-slot="{ ariaDescribedby }">

<b-form-checkbox-group

v-model="filterOn"

:aria-describedby="ariaDescribedby"

class="mt-1">

<b-form-checkbox value="name">Name</b-form-checkbox>

<b-form-checkbox value="domains">Domains</b-form-checkbox>

<b-form-checkbox value="state-province"

>state_province</b-form-checkbox>

<b-form-checkbox value="web_pages">web_pages</b-form-checkbox>

</b-form-checkbox-group>

</b-form-group>

</b-col>

</b-row>

<b-table

:items="posts"

:fields="fields"

:filter="filter"

:filter-included-fields="filterOn"

stacked="md"

show-empty

small

@filtered="onFiltered">

<template #cell(actions)="row">

<b-button

size="sm"

@click="info(row.item, row.index, $event.target)"

class="mr-1">

Info modal

</b-button>

<b-button size="sm" @click="row.toggleDetails">

{{ row.detailsShowing ? "Hide" : "Show" }} Details

</b-button>

</template></b-table></b-container>

</template>


<script>

export default {

name: "QuE1",

data() {

return {

posts: "",

fields: ["name", "domains", "state-province", "web_pages", "country"],

totalRows: 1,

filter: null,

filterOn: [],

infoModal: {

id: "info-modal",

title: "",

content: "",

},

};

},

computed: {},

mounted() {

this.totalRows = this.items.length;

},

methods: {

onFiltered(filteredItems) {

this.totalRows = filteredItems.length;

this.currentPage = 1;

},

async getData() {

try {

let response = await fetch(

"http://universities.hipolabs.com/search?country=" + this.text

);

this.posts = await response.json();

} catch (error) {

console.log(error);

}

},

created() {

this.getData();

},

},

};

</script>