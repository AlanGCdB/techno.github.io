<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <div v-if="api">
      <h1>Cursos</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchDAta("/curso");
  },
};
</script>
