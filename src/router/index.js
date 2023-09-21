import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContatoView from "../views/ContatoView.vue";
import CursosView from "../views/CursosView.vue";
import CursoView from "../views/CursoView.vue";
import AulaView from "../views/AulaView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/contato",
      name: "ContatoView",
      props: true,
      component: ContatoView,
    },
    {
      path: "/cursos",
      name: "CursosView",
      component: CursosView,
    },
    {
      path: "/cursos/:curso",
      name: "CursoView",
      component: CursoView,
      props: true,
      children: [
        {
          path: ":aula",
          name: "AulaView",
          props: true,
          component: AulaView,
        },
      ],
    },
  ],
});

export default router;
