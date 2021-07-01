import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Home from "../views/Home.vue";
import Randomizer from "@/views/Randomizer.vue";
import Details from "@/views/Details.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/random",
    name: "Randomizer",
    component: Randomizer,
  },
  {
    path:"/details/:id?",
    name: "Details",
    component: Details
  },
  {
    path: "/*",
    name: "Not Found",
    component: NotFound
  }

];

const router = new VueRouter({
  routes,
});

// Tried getting the routesList to generate some sort of sitemap. Couldn't get this working in time.
function getRoutesList(routes:any, pre:string) {
  return routes.reduce((array:any, route:any) => {
    const path = `${pre}${route.path}`;

    if (route.path !== '*') {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

getRoutesList(router.options.routes, 'https://example.com');

export default router;