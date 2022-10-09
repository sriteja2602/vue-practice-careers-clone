import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamsView from '../views/TeamsView.vue'
import JobsView from '../views/JobsView.vue'
import LocationsView from '../views/LocationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/teams",
      name: "teams",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TeamsView,
    },
    {
      path: "/locations",
      name: "locations",
      component: LocationsView,
    },
  ],
});

export default router;
