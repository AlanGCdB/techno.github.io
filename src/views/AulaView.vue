<template>
  <div>
    <div v-if="loading">
      <page-loading />
    </div>
    <transition mode="out-in">
      <div v-if="api">
        <h2>{{ api.nome }}</h2>
        <div class="video">
          <iframe
            :src="`https://www.youtube.com/embed/${api.youtube}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
  name: "AulaView",
  props: ["aula"],
  mixins: [fetchData],
  created() {
    this.fetchDAta(`/aula/${this.aula}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchDAta(`/aula/${to.params.aula}`);
    next();
  },
};
</script>

<style>
.video {
  position: relative;
  padding-bottom: 56.25%;
}
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>