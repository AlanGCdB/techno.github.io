<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <div v-if="api">
      <h1>Home</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchDAta from "@/mixins/fetchData.js";
import PageLoading from "@/components/PageLoading.vue";

export default {
  components: { PageLoading },
  name: "HomeView",
  mixins: [fetchDAta],
  created() {
    this.fetchDAta("/home");
  },
};
</script>
