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

<p class="graf graf--p">Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase.</p>
<p class="graf graf--p">This is part two of my four-part series on building a Vue application. Here is a list of all the parts:</p>
<p><a href="https://wp.me/p3sG15-m3" target="_blank" rel="noreferrer noopener">Part 1: Installing Vue and Building an SPA using Vuetify and Vue Router</a></p>
<p><a href="/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-2/" target="_blank" rel="noreferrer noopener">Part 2: Using Vue Router</a></p>
<p><a href="/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-3/" target="_blank" rel="noreferrer noopener">Part 3: Using Vuex and accessing API</a></p>
<p><a href="/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-4/" target="_blank" rel="noreferrer noopener">Part 4: Using Firebase for Authentication</a></p>

<h2 class="graf graf--h2">Recap</h2>
<p class="graf graf--p">In the first part of this series, we created our Vue application using the Vue CLI. Also, we added Vuetify to the app. I am using Vuetify for styling the app. I will also take advantage of the many UI components that it offers.</p>
<p class="graf graf--p">After getting everything installed, we styled the home page of our application.</p>

<!--more-->


<h2 class="graf graf--h2">Using Vue Router</h2>
<p class="graf graf--p">Vue router provides the navigation for our application. When you click on the <em class="markup--em markup--p-em">SIGN IN</em> button, it will redirect you to the page to login. When you click the <em class="markup--em markup--p-em">MENU</em> button, it will redirect you to the page that shows the current weeks menu.</p>
<p class="graf graf--p">The <code class="markup--code markup--p-code">router.js</code> file contains the configuration for routing. Open that file. In that file, you will see two routes. One that displays the Home.vue component when you hit <code class="markup--code markup--p-code">‘/’</code> route. The other displays the about.vue component when you hit the route ‘about’.</p>
<p class="graf graf--p">We will need to create routes for every page in our application. Our application will need the following routes:</p>

<ul class="postList">
 	<li class="graf graf--li">/</li>
 	<li class="graf graf--li">/menu</li>
 	<li class="graf graf--li">/sign-in</li>
 	<li class="graf graf--li">/join</li>
</ul>
<p class="graf graf--p">When we used the Vue CLI to create out the app, we selected to install Vue Router. By default, this created routes for ‘/’ which is home and ‘/about’ for the about page. In part 4 we will use the about page to show all the recipes the user has ordered.</p>
<p class="graf graf--p">We need to add three new routes to the routes array. After adding these new routes, this is what our <code class="markup--code markup--p-code">router.js</code> file looks like:</p>

<pre class="prettyprint"><xmp>import Vue from 'vue';
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
});</xmp></pre>

<h2 class="graf graf--h4">View vs Components</h2>
<p class="graf graf--p">In our first lesson, we created several new Vue components. I placed these components inside the components folder. For these three new components, we will not create them inside the components folder. Instead, we will put them inside the views folder. The reason is that anything that is hit using a URL like <code class="markup--code markup--p-code">/menu</code> belongs in the views folder. Everything else should be in the components folder.</p>

<h2 class="graf graf--h2">Creating new Views</h2>
<p class="graf graf--p">We need to create new views for each of the three new routes. In the views folder create the following three files:</p>

<ul class="postList">
 	<li class="graf graf--li">Menu.vue</li>
 	<li class="graf graf--li">Signin.vue</li>
 	<li class="graf graf--li">Join.vue</li>
</ul>
<p class="graf graf--p">Inside each of the files add a <code class="markup--code markup--p-code">&lt;v-container&gt;</code> with a <code class="markup--code markup--p-code">&lt;v-layout&gt;</code>. Inside the layout have an <code class="markup--code markup--p-code">&lt;h1&gt;</code> tag with the name of the page.</p>
<p class="graf graf--p">Here is the <code class="markup--code markup--p-code">Menu.vue</code> file:</p>
<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>

<p class="graf graf--p">Here is the <code class="markup--code markup--p-code">signin.vue</code> file:</p>
<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>

<p class="graf graf--p">Here is the <code class="markup--code markup--p-code">Join.vue</code> file:</p>

<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>
&nbsp;

<h2 class="graf graf--h2">Making the Menu Items Clickable</h2>
<p class="graf graf--p">In our <code class="markup--code markup--p-code">&lt;v-toolbar&gt;</code menu we have four items that a user can click. They are:</p>

<ul class="postList">
 	<li class="graf graf--li">Menu</li>
 	<li class="graf graf--li">Profile</li>
 	<li class="graf graf--li">Sign In</li>
 	<li class="graf graf--li">Join</li>
</ul>
<p class="graf graf--p">We want to configure each of these so that when a user clicks on them. it will take them to the appropriate page. Open up the AppNavigation.vue file. In the <code class="markup--code markup--p-code">&lt;v-toolbar&gt;</code> section find the <code class="markup--code markup--p-code">&lt;v-btn&gt;</code> for the Menu. All we need to do is add <code class="markup--code markup--p-code">to="/menu"</code>. We will do this for all four entries but make sure we specify the correct route that we defined in the <code class="markup--code markup--p-code">router.js</code> file.</p>
<p class="graf graf--p">We don’t have a menu option to return to the home page. We can fix this by making the app name redirect to the home page. But the title is not a button so adding <code class="markup--code markup--p-code">to="/menu"</code> will not work. Vue Router provides the option to surround a link with <code class="markup--code markup--p-code">&lt;router-link to=”/”&gt;</code>. We will do this for our app title.</p>
<p class="graf graf--p">Here is what my AppNavigation looks like now:</p>

<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>
<p class="graf graf--p">When we do this, we have a slight problem with our app title in the menu. It has changed from being white text to being blue text with an underline. This is the default styling for an anchor tag. We can overcome this by adding the following style:</p>

<pre class="prettyprint"><xmp>a {
    color: white;
    text-decoration: none;
}</xmp></pre>
<p class="graf graf--p">Now we are back to where we were. If you click on all the items on the menu, they will redirect you to the appropriate page. We only have a slight problem with the About.vue file. This file displays the contents differently. So that we have consistency, update the About.vue file to be this:</p>

<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>

<h2 class="graf graf--h2">Get the Code</h2>
<p class="graf graf--p">Even though this is a 4-part series, you can get the <a class="markup--anchor markup--p-anchor" href="https://github.com/ratracegrad/meal-prep" target="_blank" rel="noopener" data-href="https://github.com/ratracegrad/meal-prep">finished code in my GitHub account.</a> Please help me out and <strong class="markup--strong markup--p-strong">star the repo</strong> when you get the code.</p>

<h2 class="graf graf--h2">Summary</h2>
<p class="graf graf--p">In this part of this series, you have learned:</p>

<ul class="postList">
 	<li class="graf graf--li">how Vue Router works</li>
 	<li class="graf graf--li">how to load new routes</li>
 	<li class="graf graf--li">how to setup menu to load each page</li>
</ul>
<h2 class="graf graf--h2">What’s Next</h2>
<p class="graf graf--p">In the next part of this series, we will cover using Firebase for Authentication. Vuex allows you to provide “state” within your application. We will be signing up for access to a recipe API. From that API we will be getting recipes to display to users for our menu page.</p>
