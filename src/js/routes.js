import HomePage from "../pages/home.svelte";
import KonstaPage from "../pages/konsta.svelte";
import AboutPage from "../pages/about.svelte";
import FormPage from "../pages/form.svelte";

import DynamicRoutePage from "../pages/dynamic-route.svelte";
import RequestAndLoad from "../pages/request-and-load.svelte";
import NotFoundPage from "../pages/404.svelte";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/konsta",
    component: KonstaPage,
  },
  {
    path: "/about/",
    component: AboutPage,
  },
  {
    path: "/form/",
    component: FormPage,
  },

  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRoutePage,
  },
  {
    path: "/request-and-load/user/:userId/",
    async: ({ router, _to, resolve }) => {
      // App instance
      const app = router.app;

      // Show Preloader
      app.preloader.show();

      // Simulate Ajax Request
      setTimeout(() => {
        // We got user data from request
        const user = {
          firstName: "Vladimir",
          lastName: "Kharlampidi",
          about: "Hello, i am creator of Framework7! Hope you like it!",
          links: [
            {
              title: "Framework7 Website",
              url: "http://framework7.io",
            },
            {
              title: "Framework7 Forum",
              url: "http://forum.framework7.io",
            },
          ],
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            },
          }
        );
      }, 1000);
    },
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
