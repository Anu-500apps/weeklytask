<template>
  <div>
    <h1>This is V-table-1Q</h1>
    <table align="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(table,index) in table" :key="table.index">
          <td>{{ table.name }}</td>
          <td>{{ index }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name:"QuE81",
  data() {
    return {
      table: [
        { name: "agile CRM", description: "A company of excellence" },
        { name: "mantra technologies", description: "500apps" },
        { name: "500apps python", description: "Backend built using python" },
        { name: "500apps infinity", description: "Built using vue JS" },
      ],
    };
  },
};
</script>
<style scoped>
table {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
  background-color: white;
}
td,
th {
  border: 5px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
