<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition mode="out-in">
      <div v-if="api" class="conteudo">
        <div class="dtCuros">
          <h1>{{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
        </div>

        <ul>
          <li v-for="curso in api.cursos" :key="curso.id">
            <h2>
              <router-link
                :to="{ name: 'CursoView', params: { curso: curso.id } }"
              >
                {{ curso.nome }} - {{ curso.totalAulas }} aulas |
                {{ curso.horas }} horas
              </router-link>
            </h2>
            <p>{{ curso.descricao }}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "CursosView",
  mixins: [fetchData],
  created() {
    this.fetchDAta("/cursos");
  },
};
</script>
<style>
.dtCuros {
  border-right: 1px solid rgba(0, 0, 0, 0.116);
}
</style>
