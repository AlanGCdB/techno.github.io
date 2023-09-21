<template>
  <div id="app">
    <the-header></the-header>
    <router-view class="container"></router-view>
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>
<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #234;
}
ul {
  list-style: none;
}
a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}
img {
  max-width: 100%;
}
a.router-link-active {
  color: #4b8;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.container h1,
.container h2,
.container h3,
.container p,
.container li {
  margin: 15px auto;
}
.v-enter {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
}
.v-enter-active {
  transition: all 0.3s;
}
.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  gap: 30px;
}
@media screen and (max-width: 400px) {
  .conteudo {
    display: block;
  }
}
</style>
