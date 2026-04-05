---
title: SPA Application Using Vue.js, Vuex, Vuetify and Firebase - Part 2
description: Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase.
date: 2018-11-18
image: https://images.unsplash.com/photo-1695653423459-beb6b8a8169b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase.

This is part two of my four-part series on building a Vue application. Here is a list of all the parts:

[Part 1: Installing Vue and Building an SPA using Vuetify and Vue Router](https://wp.me/p3sG15-m3)

[Part 2: Using Vue Router](/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-2/)

[Part 3: Using Vuex and accessing API](/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-3/)

[Part 4: Using Firebase for Authentication](/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-4/)

## Recap

In the first part of this series, we created our Vue application using the Vue CLI. Also, we added Vuetify to the app. I am using Vuetify for styling the app. I will also take advantage of the many UI components that it offers.

After getting everything installed, we styled the home page of our application.

## Using Vue Router

Vue router provides the navigation for our application. When you click on the _SIGN IN_ button, it will redirect you to the page to login. When you click the _MENU_ button, it will redirect you to the page that shows the current weeks menu.

The `router.js` file contains the configuration for routing. Open that file. In that file, you will see two routes. One that displays the Home.vue component when you hit `‘/’` route. The other displays the about.vue component when you hit the route ‘about’.

We will need to create routes for every page in our application. Our application will need the following routes:

-   /
-   /menu
-   /sign-in
-   /join

When we used the Vue CLI to create out the app, we selected to install Vue Router. By default, this created routes for ‘/’ which is home and ‘/about’ for the about page. In part 4 we will use the about page to show all the recipes the user has ordered.

We need to add three new routes to the routes array. After adding these new routes, this is what our `router.js` file looks like:

```
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import('./views/Menu.vue')
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('./views/Signin.vue')
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue')
        }
    ]
});
```

## View vs Components

In our first lesson, we created several new Vue components. I placed these components inside the components folder. For these three new components, we will not create them inside the components folder. Instead, we will put them inside the views folder. The reason is that anything that is hit using a URL like `/menu` belongs in the views folder. Everything else should be in the components folder.

## Creating new Views

We need to create new views for each of the three new routes. In the views folder create the following three files:

-   Menu.vue
-   Signin.vue
-   Join.vue

Inside each of the files add a `<v-container>` with a `<v-layout>`. Inside the layout have an `<h1>` tag with the name of the page.

Here is the `Menu.vue` file:

```
<template>
    <v-container fluid>
        <v-layout>
            <h1>Menu Page</h1>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Menu'
};
</script>
<style scoped>
</style>
```

Here is the `signin.vue` file:

```
<template>
    <v-container fluid>
        <v-layout>
            <h1>Signin Page</h1>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Signin'
};
</script>
<style scoped>
</style>
```

Here is the `Join.vue` file:

```
<template>
    <v-container fluid>
        <v-layout>
            <h1>Join Page</h1>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Join'
};
</script>
<style scoped>
</style>
```

 

## Making the Menu Items Clickable

In our `<v-toolbar>`

-   Menu
-   Profile
-   Sign In
-   Join

We want to configure each of these so that when a user clicks on them. it will take them to the appropriate page. Open up the AppNavigation.vue file. In the `<v-toolbar>` section find the `<v-btn>` for the Menu. All we need to do is add `to="/menu"`. We will do this for all four entries but make sure we specify the correct route that we defined in the `router.js` file.

We don’t have a menu option to return to the home page. We can fix this by making the app name redirect to the home page. But the title is not a button so adding `to="/menu"` will not work. Vue Router provides the option to surround a link with `<router-link to=”/”>`. We will do this for our app title.

Here is what my AppNavigation looks like now:

```
<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="brown darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down" to="/sign-in">SIGN IN</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/join">JOIN</v-btn>
        </v-toolbar>
    </span>
</template>
<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Meal Prep',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    }
};
</script>
<style scoped>
</style>
```

When we do this, we have a slight problem with our app title in the menu. It has changed from being white text to being blue text with an underline. This is the default styling for an anchor tag. We can overcome this by adding the following style:

```
a {
    color: white;
    text-decoration: none;
}
```

Now we are back to where we were. If you click on all the items on the menu, they will redirect you to the appropriate page. We only have a slight problem with the About.vue file. This file displays the contents differently. So that we have consistency, update the About.vue file to be this:

```
<template>
    <v-container fluid>
        <v-layout>
            <h1>About Page</h1>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'About'
};
</script>
<style scoped>
</style>
```

## Get the Code

Even though this is a 4-part series, you can get the [finished code in my GitHub account.](https://github.com/ratracegrad/meal-prep) Please help me out and **star the repo** when you get the code.

## Summary

In this part of this series, you have learned:

-   how Vue Router works
-   how to load new routes
-   how to setup menu to load each page

## What’s Next

In the next part of this series, we will cover using Firebase for Authentication. Vuex allows you to provide “state” within your application. We will be signing up for access to a recipe API. From that API we will be getting recipes to display to users for our menu page.
