<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition mode="out-in">
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "ContatoView",
  mixins: [fetchData],
  created() {
    this.fetchDAta("/contato");
  },
};
</script>
