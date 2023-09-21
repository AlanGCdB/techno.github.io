<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition mode="in-out">
      <div v-if="api" class="conteudo">
        <div>
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aulas in api.aulas" :key="aulas.id">{{ aulas.nome }}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import PageLoading from "@/components/PageLoading.vue";
export default {
  components: { PageLoading },
  name: "CursoView",
  props: ["curso"],
  mixins: [fetchData],
  created() {
    this.fetchDAta(`/curso/${this.curso}`);
  },
};
</script>

<style scoped>
.aulas li {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.137);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>