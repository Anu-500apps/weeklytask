<template>
  <div>
    <h2>This is Question-2</h2>
    <p v-for="value in Anu" :key="value.id">
      {{ value.fields }}
    </p>
  </div>
</template>
<script>
export default {
  name: "QuE82",

  data() {
    return {
      Anu: [
        { fields: "Name : Agile CRM" },

        { fields: "description: A Company of Excellence" },

        { fields: "years of experience: 12" },

        { fields: "location:Hyderabad" },
      ],
    };
  },
};
</script>




