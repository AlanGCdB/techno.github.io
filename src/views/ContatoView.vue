<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition mode="out-in">
      <div v-if="api">
        <h1>{{ api.titulo }}</h1>
        <p>{{ api.descricao }}</p>
        <ul>
          <li v-for="(value, index) in api.contato" :key="value.id">
            <b>{{ index }}:</b> {{ value }}
          </li>
        </ul>
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
<style>
</style>
