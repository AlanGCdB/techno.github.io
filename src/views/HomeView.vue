<template>
  <div class="home">
    <div v-if="loading">
      <page-loading />
    </div>
    <transition mode="out-in">
      <div v-if="api" class="conteudo">
        <div>
          <h1>Sobre a {{ api.titulo }}</h1>
          <p>{{ api.descricao }}</p>
          <router-link
            class="btn-cursos"
            tag="button"
            :to="{ name: 'CursosView' }"
            >Cursos</router-link
          >
          <div class="avaliacao">
            <h2>Avaliações</h2>
            <ul>
              <li
                v-for="avaliacao in api.avaliacoes"
                :key="avaliacao.nome"
                class="avaliacaoLi"
              >
                <p class="nome">{{ avaliacao.nome }}</p>
                <p>{{ avaliacao.descricao }}</p>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="@/assets/aprender.png"
          alt="imgAprender"
          srcset=""
          width="400"
          height="300"
        />
      </div>
    </transition>
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
<style scoped>
.btn-cursos {
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  font-size: 1rem;
  margin-top: 15px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.nome {
  font-weight: bold;
}
.avaliacao {
  width: 400px;
}
.avaliacaoLi {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.137);
}
</style>
