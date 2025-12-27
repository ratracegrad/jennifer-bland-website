---
title: SPA Application Using Vue.js, Vuex, Vuetify and Firebase - Part 4
description: Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase.
date: 2018-11-18
image: https://images.unsplash.com/photo-1617194191528-9a50cf609304?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

<section class="section section--body">
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn">
<p class="graf graf--p">Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase.</p>
<p class="graf graf--p">This is part four of my four-part series on building a Vue application. Here is a list of all the parts:</p>
<p><a href="https://wp.me/p3sG15-m3" target="_blank" rel="noreferrer noopener">Part 1: Installing Vue and Building an SPA using Vuetify and Vue Router</a></p>
<p><a href="/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-2/" target="_blank" rel="noreferrer noopener">Part 2: Using Vue Router</a></p>
<p><a href="/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-3/" target="_blank" rel="noreferrer noopener">Part 3: Using Vuex and accessing API</a></p>
<p><a href="/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-4/" target="_blank" rel="noreferrer noopener">Part 4: Using Firebase for Authentication</a></p>

<h2 class="graf graf--h2">Recap</h2>
<p class="graf graf--p">In the first part of this series, we created our Vue application using the Vue CLI. Also, we added Vuetify to the app. We used Vuetify to style our home page.</p>
<p class="graf graf--p">In the second part, we used Vue Router to add navigation between the different pages of our app. We added components for all the pages in our application.</p>
<p class="graf graf--p">In the third part, we were introduced to Vuex. We signed up for an API to provide recipes and used axios to retrieve them. This data was stored in the Vuex store which made it accessible to every component in the application.</p>

<!--more-->


<h2 class="graf graf--h2">What is Firebase?</h2>
<p class="graf graf--p">Firebase is a real-time cloud infrastructure for client-side apps. Firebase can turn any <em class="markup--em markup--p-em">Frontend</em> application into a full-stack product capable of scaling infinitely in the cloud. It abstracts away most of your complex server-side features like user authentication, data persistence, file storage, and microservices, so you can focus on building an awesome experience for the end user.</p>
<p class="graf graf--p">The first step is to go to <a class="markup--anchor markup--p-anchor" href="https://firebase.google.com" target="_blank" rel="noopener" data-href="https://firebase.google.com">firebase and create a new account</a>. Log in to the account that you created. You will see this dashboard:</p>

[caption id="attachment_1448" align="alignnone" width="827"]<img src="/demo.png" alt="" width="827" height="671" class="size-full wp-image-1448" /> Firebase Demo[/caption]
<br>
<p class="graf graf--p">Click the <code class="markup--code markup--p-code">Add Project</code> button. Enter a name for your project. I entered “meal-prep” for the name of my project. Check all checkboxes. Then click the <code class="markup--code markup--p-code">create project</code> button.</p>

[caption id="attachment_1449" align="alignnone" width="587"]<img src="/add.png" alt="" width="587" height="706" class="size-full wp-image-1449" /> Add new project dialog on Firebase[/caption]
<br>
<p class="graf graf--p">Once your project is created, Firebase will take you to your project’s home page.</p>

[caption id="attachment_1450" align="alignnone" width="880"]<img src="/project.png" alt="" width="880" height="381" class="size-full wp-image-1450" /> Project Home Page[/caption]
<br>
<p class="graf graf--p">We need to integrate our project’s configuration into our meal-prep application. Click on the web button to add Firebase to your application. (NOTE: if you are not sure which button that it, it is the button with the <code class="markup--code markup--p-code">&lt;/&gt;</code>. In the image above, the button is right above the words “get started.” Click the copy button to copy the snippet to your clipboard.</p>

[caption id="attachment_1451" align="alignnone" width="844"]<img src="/config.png" alt="" width="844" height="577" class="size-full wp-image-1451" /> Firebase config snippet[/caption]

<br>
<p class="graf graf--p">Next, we need to incorporate this snippet into our meal prep application. You can initialize your firebase application in the <code class="markup--code markup--p-code">main.js</code> file. You can do it in the <code class="markup--code markup--p-code">App.vue</code> file. Instead, we are going to create a new directory called firebase in the src folder. Inside this new directory create a file called <code class="markup--code markup--p-code">index.js</code>. Paste the contents of your clipboard into this file. Remove the two lines with the <code class="markup--code markup--p-code">script</code> tags. In the first line of the file import firebase. On the last line initialize firebase. Your file should look like this:</p>

<pre class="prettyprint"><xmp>import firebase from 'firebase';

const config = {
    apiKey: "<youKeyHere>",
    authDomain: "<youKeyHere>",
    databaseURL: "<youKeyHere>",
    projectId: "<youKeyHere>",
    storageBucket: "<youKeyHere>",
    messagingSenderId: "<youKeyHere>"
};
firebase.initializeApp(config);</xmp></pre>
<br>
<p class="graf graf--p">We are importing firebase from an npm package that we have not installed yet. Let’s install it now. In your terminal install firebase with this command:</p>

<pre class="prettyprint"><xmp>npm install firebase --save</xmp></pre>
<p class="graf graf--p">Go back to your firebase console in the browser. Click on <code class="markup--code markup--p-code">Authentication</code>. Click on the <code class="markup--code markup--p-code">set up sign-in method</code> button.</p>

[caption id="attachment_1453" align="alignnone" width="880"]<img src="/auth.png" alt="" width="880" height="405" class="size-full wp-image-1453" /> Setting up authentication in firebase[/caption]
<br>
<p class="graf graf--p">In the list of sign-in providers, click on Email/Password:</p>

[caption id="attachment_1454" align="alignnone" width="880"]<img src="/listof.png" alt="" width="880" height="437" class="size-full wp-image-1454" /> List of sign-in providers[/caption]
<br>
<p class="graf graf--p">Enable the option to all users to sign up using their email address and password. Then click the <code class="markup--code markup--p-code">save</code> button.</p>

[caption id="attachment_1455" align="alignnone" width="880"]<img src="/emailsignup.png" alt="" width="880" height="285" class="size-full wp-image-1455" /> Enable sign up using email and password[/caption]
<br>
<h2 class="graf graf--h2">Creating Sign Up Form</h2>
<p class="graf graf--p">In a previous post, we stubbed out the Join.vue and Signin.vue files. These two files will have almost the same code. We will create the Join form first. When we are finished we will copy/paste it into the Signin form.</p>
<p class="graf graf--p">Open the Join.vue component. You can remove everything that is in the template. Vuetify has a default layout structure for components. It flows like this:</p>

<ul class="postList">
 	<li class="graf graf--li">v-container</li>
 	<li class="graf graf--li">v-layout</li>
 	<li class="graf graf--li">v-flex</li>
</ul>
<p class="graf graf--p">So let’s create that layout now in the component. The start of our file looks like this:</p>

<pre class="prettyprint"><xmp><template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>

            </v-flex>
        </v-layout>
    </v-container>
</template></xmp></pre>
<br>
<p class="graf graf--p">For the <code class="markup--code markup--p-code">v-container</code> we are adding <code class="markup--code markup--p-code">fill-height</code>. We add this so that it centers the form vertically in the window. For the <code class="markup--code markup--p-code">v-flex</code> we add <code class="markup--code markup--p-code">xs12</code> <code class="markup--code markup--p-code">sm8</code> and <code class="markup--code markup--p-code">md4</code> values. This is similar to Bootstraps column width definition. On extra-small devices, the form will take up all 12 columns meaning the whole screen. On small devices, the form will be 3/4 of the screen wide. On medium and large screens the form will be 1/3 of the screen.</p>

<p class="graf graf--p">Inside the <code class="markup--code markup--p-code">v-flex</code> we are going to use a <code class="markup--code markup--p-code">v-card</code>. We add <code class="markup--code markup--p-code">class=”elevation-12"</code> to the <code class="markup--code markup--p-code">v-card</code> so that it appears to be floating above the page. For the top of the form, we will use a <code class="markup--code markup--p-code">v-toolbar</code>. We give it a color of <code class="markup--code markup--p-code">primary</code>. For the default installation of Vuetify the primary color is blue. We want the text in the toolbar to be white text instead of the default black. To turn the text white we add <code class="markup--code markup--p-code">dark</code> to the <code class="markup--code markup--p-code">v-toolbar</code>.</p>

<p class="graf graf--p">Next, we have a <code class="markup--code markup--p-code">v-card-text</code>. Inside of it, we have a <code class="markup--code markup--p-code">v-form</code>. For the form we are giving it a reference with the name of <code class="markup--code markup--p-code">form</code>. We are assigning it to the <code class="markup--code markup--p-code">v-model</code> with a value of <code class="markup--code markup--p-code">valid</code>. The last thing we add is <code class="markup--code markup--p-code">lazy-validation</code>. Our form needs to capture the user’s email and password. We will use two <code class="markup--code markup--p-code">v-text-field</code> to capture these values. To make things look better I have prepended an icon for each field. Each field has a <code class="markup--code markup--p-code">v-model</code> and <code class="markup--code markup--p-code">rules</code>. Before the form is submitted the field will be validated against all rules that are defined. If they pass then you can submit the form. We will take advantage of this when the user clicks the Join button. The last item to add to the form is a button. We add a <code class="markup--code markup--p-code">v-card-actions</code> and add a button. Here is what the template looks like for our component:</p>

<pre class="prettyprint"><xmp><template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Join Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field prepend-icon="person" name="email" label="Email" type="email"
                                          v-model="email" :rules="emailRules" required>
                            </v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" id="password"
                                          type="password" required v-model="password" :rules="passwordRules">
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" :disabled="!valid" @click="submit">Join</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template></xmp></pre>
<br>
<p class="graf graf--p">We defined several models in our template. We need to add them to the <code class="markup--code markup--p-code">data</code> section of our script. In the script add a data object. We will add valid, email, password, emailRules and passwordRules. Email and password will contain the values the user inputs into the two text fields. Valid will tell if our form has passed all the rules we have created. For email, we check to make sure that the field is not empty. We also check that the contents match a basic RegExp to validate the email address. For password, we check to make sure the field is not empty. We also check to make sure the password is at least six characters in length.</p>
<p class="graf graf--p">The last thing we need to add is methods. In methods, we have <code class="markup--code markup--p-code">submit()</code>. This method will validate our form first. If it passes validation then it will call an action in our Vuex store called <code class="markup--code markup--p-code">userJoin</code>. We pass it the email and password the user entered in the form.</p>

<h2 class="graf graf--h2">Creating userJoin Action in Vuex</h2>
<p class="graf graf--p">Open up the <code class="markup--code markup--p-code">store.js</code> file. We will create a new action called <code class="markup--code markup--p-code">userJoin</code>. By default the first parameter passed to this action is <code class="markup--code markup--p-code">context</code>. I will use object destructuring to get just <code class="markup--code markup--p-code">commit</code> from <code class="markup--code markup--p-code">context</code>. Commit is how I will call my mutation.</p>
<p class="graf graf--p">I will be using firebase to create the new user in the firebase database. To be able to use firebase in the store, I will need to import it. At the top of the file import firebase with this command:</p>

<pre class="prettyprint"><xmp>import firebase from 'firebase';</xmp></pre>
<br>
<p class="graf graf--p">Firebase authentication provides a method called <code class="markup--code markup--p-code">createUserWithEmailAndPassword</code>. We will pass the user’s email and password into this method. If it succeeds in registering the user it will return a user object. When it succeeds we will call two mutations: <code class="markup--code markup--p-code">setUser</code> and <code class="markup--code markup--p-code">setIsAuthenticated</code>. Here is what the action looks like:</p>

<pre class="prettyprint"><xmp>userJoin({ commit }, { email, password }) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);
        })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
        });
}</xmp></pre>
<p class="graf graf--p">This action calls two mutations. So let’s create then now. In mutations add a new mutation called <code class="markup--code markup--p-code">setUser</code>. Set the state value of user to the payload. Next, create a second mutation called <code class="markup--code markup--p-code">setIsAuthenticated</code>. Set the state value of isAuthenticated to the payload. Here is what the two mutations look like:</p>

<pre class="prettyprint"><xmp>setUser(state, payload) {
    state.user = payload;
},
setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
}</xmp></pre>
<br>
<p class="graf graf--p">In state, we need to add two new value: <code class="markup--code markup--p-code">user</code> and <code class="markup--code markup--p-code">isAuthenticated</code>. Here is what state looks like now:</p>

<pre class="prettyprint"><xmp>state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search',
    user: null,
    isAuthenticated: false
},</xmp></pre>
<br>
<h2 class="graf graf--h2">Test Adding a New User</h2>
<p class="graf graf--p">Start your server with the command <code class="markup--code markup--p-code">npm run serve</code>. Click on the <code class="markup--code markup--p-code">Join</code> button in the navigation. Enter your email and a password and click the join button. When you click the button nothing visible happens. To verify that the user was registered, go the firebase console in your browser. Click on <code class="markup--code markup--p-code">Authentication</code>. You should see a list of users that have been registered for your application. Here you can see that the user I just registered was created.</p>

[caption id="attachment_1456" align="alignnone" width="880"]<img src="/registered.png" alt="" width="880" height="178" class="size-full wp-image-1456" /> User has been registered[/caption]
<br>
<p class="graf graf--p">We need to notify the user that they have been successfully created. We will do this but later. First, we are going to copy and paste the contents of the Join.vue component into the Signin.vue component. There are only two changes you will need to make in the template. Change the title to “Login Form.” For the button make the text say “Login.” In the submit method have it dispatch to <code class="markup--code markup--p-code">userLogin</code>. That’s it. You have now created both the Join and Login forms.</p>
<p class="graf graf--p">We need to create the action for Login. Open up the <code class="markup--code markup--p-code">store.js</code> file. Create a new action called userLogin. We will use firebase to login the user. Firebase provides a method called <code class="markup--code markup--p-code">signInWithEmailAndPassword</code>. We will call this method and pass in the user’s email and password they entered into the form. If the user entered their email and password correctly then we will call the two mutations <code class="markup--code markup--p-code">setUser</code> and <code class="markup--code markup--p-code">setIsAuthenticated</code>. Here is what the <code class="markup--code markup--p-code">userLogin</code> action looks like:</p>

<pre class="prettyprint"><xmp>userLogin({ commit }, { email, password }) {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            commit('setUser', user);
            commit('setIsAuthenticated', true);
        })
        .catch(() => {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
        });
},</xmp></pre>

<br>
<h2 class="graf graf--h2">Redirecting to Profile</h2>
<p class="graf graf--p">When a user successfully registers or login, we want to redirect them to their profile. When we created our app initially the Vue CLI 3 it created two routes for us. Those routes were <code class="markup--code markup--p-code">/</code> and <code class="markup--code markup--p-code">/about</code>. Eventually, the profile will contain a list of all recipes that the user has ordered from the <code class="markup--code markup--p-code">menu</code> page. Remember the button we put at the bottom of every recipe? That button will add the recipe to the user’s profile and store it in the database in firebase.</p>
<p class="graf graf--p">To redirect the user to the profile we will first import router at the top of the store.js file. The router is imported with the command:</p>

<pre class="prettyprint"><xmp>import router from '@/router';</xmp></pre>
<br>
<p class="graf graf--p">Next, in both actions we redirect the user to /about if they successfully register or login. You can do the redirection with this command:</p>

<pre class="prettyprint"><xmp>router.push('/about');</xmp></pre>
<br>

<p class="graf graf--p">If the user fails to register an account or login successfully we will redirect the user to the home page. <em class="markup--em markup--p-em">(NOTE: in a perfect scenario we will provide some notice to the user why the registration or login failed). You can redirect them to the home page with this command:</em></p>

<pre class="prettyprint"><xmp>router.push('/');</xmp></pre>
<br>
<p class="graf graf--p">To test the redirection, start your server and click on the Login button. Enter the email and password you used when you created your user account. Click the Join button. If everything worked successfully you should be redirected to the About page.</p>

<h2 class="graf graf--h2">Updating the navigation</h2>
<p class="graf graf--p">The navigation has buttons for <code class="markup--code markup--p-code">Sign In</code> and <code class="markup--code markup--p-code">Join</code>. When a user successfully registers or login we would like to hide these two buttons. In their place, we want to show a <code class="markup--code markup--p-code">Logout</code> button.</p>
<p class="graf graf--p">Open up the <code class="markup--code markup--p-code">AppNavigation</code> component. We are going to group the two current buttons in a div. We are going to remove the class to hide the buttons on small and extra-small devices. Instead, we will place this class on the div. We add a <code class="markup--code markup--p-code">v-if</code> to the div to only show if the user is currently not authenticated. Below the <code class="markup--code markup--p-code">div</code> we will add a new button for Logout. This new button will have a style of outline with a color of white. When you click on this button it will call the method <code class="markup--code markup--p-code">logout</code>. We add a v-else to this button to show when the user is authenticated.</p>
<p class="graf graf--p">Next, add a method called <code class="markup--code markup--p-code">logout</code>. This method will call an action in our store called <code class="markup--code markup--p-code">userSignOut</code>.</p>
<p class="graf graf--p">We also need to add a new computed property called <code class="markup--code markup--p-code">isAuthenticated</code>. This property returns the value of isAuthenticated in the state of our store.</p>
<p class="graf graf--p">Here is what your AppNavigation should look like:</p>

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
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in">SIGN IN</v-btn>
                <v-btn color="brown lighten-3" to="/join">JOIN</v-btn>
            </div>
            <v-btn v-else outline color="white" @click="logout">Logout</v-btn>

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
            items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Join' }]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style></xmp></pre>
<br>
<p class="graf graf--p">We need to add the getter and action we just defined. Open up the <code class="markup--code markup--p-code">store.js</code> file. Create a new action called <code class="markup--code markup--p-code">userSignout</code>. This action will use firebase.auth() to sign the user out. After signing the user out, it sets the state variables <code class="markup--code markup--p-code">user</code> to null and <code class="markup--code markup--p-code">isAuthenticated</code> to false. Here is the <code class="markup--code markup--p-code">userSignout</code> method in the store:</p>

<pre class="prettyprint"><xmp>userSignOut({ commit }) {
    firebase
        .auth()
        .signOut()
        .then(() =&gt; {
            commit('setUser', <em class="markup--em markup--pre-em">null</em>);
            commit('setIsAuthenticated', <em class="markup--em markup--pre-em">false</em>);
            router.push('/');
        })
        .catch(() =&gt; {
            commit('setUser', <em class="markup--em markup--pre-em">null</em>);
            commit('setIsAuthenticated', <em class="markup--em markup--pre-em">false</em>);
            router.push('/');
        });
}</xmp></pre>
<br>
<p class="graf graf--p">Next, we need to add a <code class="markup--code markup--p-code">getters</code> section to the store object. The <code class="markup--code markup--p-code">isAuthenticated</code> getters method will return true or false based on user authentication. Here is what the <code class="markup--code markup--p-code">getters</code> section of the store looks like:</p>

<pre class="prettyprint"><xmp>getters: {
    isAuthenticated(state) {
        <em class="markup--em markup--pre-em">return </em>state.user !== <em class="markup--em markup--pre-em">null </em>&amp;&amp; state.user !== <em class="markup--em markup--pre-em">undefined</em>;
    }
}</xmp></pre>
<br>
<h2 class="graf graf--h2">Adding Recipes to Database</h2>
<p class="graf graf--p">Once a user is logged in they can click on any recipe to add it to their account. Their recipes will be shown in their profile which is the <code class="markup--code markup--p-code">/about</code> route. We need a database to store these recipes. Go to your firebase console in the browser. Click on <code class="markup--code markup--p-code">database</code> in the left side navigation panel. On the next screen you will see buttons to create a realtime database or a cloud firestore database. Make sure you create a new realtime database. In the dialog make sure you select to <code class="markup--code markup--p-code">start in test mode</code>. Then click the <code class="markup--code markup--p-code">enable</code> button.</p>

[caption id="attachment_1457" align="alignnone" width="736"]<img src="/startdb.png" alt="" width="736" height="461" class="size-full wp-image-1457" /> Start database in test mode[/caption]
<br>

<p class="graf graf--p">Now we want to store the user’s recipes in the database. Open up the MealPlans component. If a user tries to order a recipe and they are not logged in then we should redirect them to the login page. So let’s take care of that now. On the <code class="markup--code markup--p-code">Order</code> button add an @click that calls the method orderRecipe. Be sure to pass in <code class="markup--code markup--p-code">item</code> as an argument to the method. Your button should look like this:</p>

<pre class="prettyprint"><xmp><v-card-actions>
    <v-btn color="green" dark @click="orderRecipe(item)">Order</v-btn>
</v-card-actions></xmp></pre>
<br>

<p class="graf graf--p">Before we create our method, we will create a computed value for isAuthenticated. This is the exact same code we used in <code class="markup--code markup--p-code">AppNavigation</code> earlier to show and hide the login and logout button correctly. Add a computed isAuthenticated. It should look like this:</p>

<pre class="prettyprint"><xmp>export default {
    name: 'MealRecipes',
    computed: {
        recipes() {
            return this.$store.state.recipes;
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    }
};</xmp></pre>
<br>
<p class="graf graf--p">Now we are ready to create our orderRecipe method. Add this method and its parameter. In this method, we want to first check if the user is logged in or not. If they are not we want to redirect them to <code class="markup--code markup--p-code">/sign-in</code> . If they are signed in then we want to call an action in the Vuex store that will append the recipe to the user account in the database. Here is what our method looks like:</p>

<pre class="prettyprint"><xmp>methods: {
    orderRecipe(item) {
        if (this.isAuthenticated) {
            this.$store.dispatch('addRecipe', item);
        } else {
            this.$router.push('/sign-in');
        }
    }
}</xmp></pre>
<br>
<p class="graf graf--p">Open up the store.js file. We need to create a new action to add recipes. In this action, we are going to use firebase to add the recipe to a database called <code class="markup--code markup--p-code">users</code>. When the user was registered in firebase they were assigned a unique userid. We will be using this <code class="markup--code markup--p-code">uid</code> to store the name of the recipe in the database. In this action, we will be using <code class="markup--code markup--p-code">state</code> to get the value of the currently selected user. The <code class="markup--code markup--p-code">user</code> in <code class="markup--code markup--p-code">state</code> is an object. That object has a key called user. In that object, we will find the <code class="markup--code markup--p-code">uid</code>. We use that to push the title of the selected recipe into the database. Here is the action:</p>

<pre class="prettyprint"><xmp>addRecipe({ state }, payload) {
    firebase
        .database()
        .ref('users')
        .child(state.user.user.uid)
        .push(payload.label);
}</xmp></pre>
<br>
<p class="graf graf--p">Now start your server and log in. Select a diet from the menu page. Then order a couple of recipes. The recipes you ordered should be shown in the database in firebase.</p>

[caption id="attachment_1458" align="alignnone" width="880"]<img src="/recipes.png" alt="" width="880" height="300" class="size-full wp-image-1458" /> Recipes added to the database[/caption]
<br>
<p class="graf graf--p">Now that we have the recipes added to the database, we actually need to display them on the profile page for the user. Open up the <code class="markup--code markup--p-code">About.vue</code> file. Whenever this page is loaded it should fetch all the user’s recipes. To do this we add <code class="markup--code markup--p-code">mounted()</code> in our script. This will call a method called <code class="markup--code markup--p-code">getRecipes</code>.</p>
<p class="graf graf--p">Let’s create that method now. In the method, we are going to call an action in our Vuex store that will get all the user’s recipes. We have not created this action in the store yet but in simple terms, this action will get the user’s recipes. Then it will store them in a variable in <code class="markup--code markup--p-code">state</code> called <code class="markup--code markup--p-code">userRecipes</code>. Before we leave About.vue, add a computed property for <code class="markup--code markup--p-code">userRecipes</code>. This will return the <code class="markup--code markup--p-code">userRecipes</code> from <code class="markup--code markup--p-code">state</code> in our store. This is what About.vue script should look like:</p>

<pre class="prettyprint"><xmp>export default {
    name: 'About',
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
        }
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
        }
    }
};</xmp></pre>
<br>
<p class="graf graf--p">Next, open up your <code class="markup--code markup--p-code">store.js</code> file. We need to create the <code class="markup--code markup--p-code">getUserRecipes</code> action. When the user logins we store a variable in <code class="markup--code markup--p-code">state</code> called user. This variable will have the unique user ID assigned to that user when it was registered in firebase. We want to get all the recipes in the users database that have this user ID. Once we get all the recipes we want to set userRecipes to contain them. Here is the getUserRecipes action:</p>

<pre class="prettyprint"><xmp>getUserRecipes({ state, commit }) {
    <em class="markup--em markup--pre-em">return </em>firebase
        .database()
        .ref('users/' + state.user.user.uid)
        .once('value', snapshot =&gt; {
            commit('setUserRecipes', snapshot.val());
        });
}</xmp></pre>
<br>
<p class="graf graf--p">In our mutations, we need to add a <code class="markup--code markup--p-code">setUserRecipes</code>. It looks like this:</p>

<pre class="prettyprint"><xmp>setUserRecipes(state, payload) {
    state.userRecipes = payload;
}</xmp></pre>
<br>
<p class="graf graf--p">We also need to add a <code class="markup--code markup--p-code">userRecipes</code> in <code class="markup--code markup--p-code">state</code>. We set its initial value to an empty array. Here is my entire state object:</p>

<pre class="prettyprint"><xmp>state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search',
    user: <em class="markup--em markup--pre-em">null</em>,
    isAuthenticated: <em class="markup--em markup--pre-em">false</em>,
    userRecipes: []
},</xmp></pre>
<br>
<p class="graf graf--p">Now that we are getting the recipes we need to display them on the page to the user. So go back to your <code class="markup--code markup--p-code">About.vue</code> file. In the template, we are going to loop through all the user’s recipes and display them. I am going to show you my code for the template first then explain what I have done:</p>

<pre class="prettyprint"><xmp><template>
    <v-container >
        <v-layout column>
            <h1 class="title my-3">My Recipes</h1>
            <div v-for="(item, idx) in userRecipes" class="subheading mb-2" :key="idx">
                {{item}}
            </div>
        </v-layout>
    </v-container>
</template></xmp></pre>
<br>

<p class="graf graf--p">I have set the layout to be <code class="markup--code markup--p-code">column</code>. I did this because I want each recipe to be listed on the page. To make things look clearer I have added a title. I added my-3 to add margin-top and margin-bottom so that there is spacing between the title and the list of recipes. Next, I looped through each recipe and display it. This is what the user sees if they have recipes:</p>

[caption id="attachment_1459" align="alignnone" width="880"]<img src="/listRecipes.png" alt="" width="880" height="124" class="size-full wp-image-1459" /> List of my recipes[/caption]
<br>

<p class="graf graf--p">This is great but when if a user logs in and they do not have any recipes? They see the title “My Recipes” and a blank page. This is not a user-friendly design. So let’s change it to display something more friendly. We will display a button that will take the user to the <code class="markup--code markup--p-code">menu</code> page. In our template, we will add this button. To make the button redirect to the menu page we can add <code class="markup--code markup--p-code">to=”/menu”</code> to the button. Here is my final template for the <code class="markup--code markup--p-code">About.vue</code> component.</p>

<pre class="prettyprint"><xmp><template>
    <v-container >
        <v-layout column>
            <h1 class="title my-3">My Recipes</h1>
            <div v-for="(item, idx) in userRecipes" class="subheading mb-2" :key="idx">
                {{item}}
            </div>
            <v-flex mt-4>
                <v-btn color="primary" to="/menu">Go To Menu</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template></xmp></pre>
<br>

<h2 class="graf graf--h2">Showing Profile in Navigation</h2>
<p class="graf graf--p">The last thing we need to add is the ability to show a link to the profile in the navigation. Just like the logout button, this should only be shown if the user is authenticated. Open up the AppNavigation components. We are going to group the profile button and the logout button in a div. This is the same thing we did earlier for the <code class="markup--code markup--p-code">Sign In</code> and <code class="markup--code markup--p-code">Join</code> buttons. Add a div and move the logout button to be inside this div. Add another button for <code class="markup--code markup--p-code">profile</code>. This button will be flat just like the <code class="markup--code markup--p-code">Sign In</code> button. Here is what my AppNavigation looks like now:</p>

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
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in">SIGN IN</v-btn>
                <v-btn color="brown lighten-3" to="/join">JOIN</v-btn>
            </div>
            <div v-else>
                <v-btn flat to="/about">PROFILE</v-btn>
                <v-btn outline color="white" @click="logout">Logout</v-btn>
            </div>

        </v-toolbar>
    </span>
</template></xmp></pre>
<br>
<h2 class="graf graf--h2">Adding Route Guards</h2>
<p class="graf graf--p">Currently, the user can navigate to the profile page by typing it into the URL of the browser We don’t want to let users do this if they are not logged in. Vue Router provides the ability to add route guards before navigating to a URL. We want to test if a user is authenticated before allowing them to redirect to the <code class="markup--code markup--p-code">/about</code> page.</p>
<p class="graf graf--p">Open up the <code class="markup--code markup--p-code">router.js</code> file. Route guards work in conjunction with meta tags. Find the <code class="markup--code markup--p-code">/about</code> route. We will add a <code class="markup--code markup--p-code">authRequired</code> meta tag to it. The route should look like this:</p>

<pre class="prettyprint"><xmp>{
    path: '/about',
    name: 'about',
    component: () =&gt; <em class="markup--em markup--pre-em">import</em>('./views/About.vue'),
    meta: {
        authRequired: <em class="markup--em markup--pre-em">true
    </em>}
},</xmp></pre>
<br>
<p class="graf graf--p">Route guards are checked in a method called beforeEach that is part of Vue Router. This method is passed three parameters:</p>

<ul class="postList">
 	<li class="graf graf--li">the route you are going to</li>
 	<li class="graf graf--li">the route you came from</li>
 	<li class="graf graf--li">a next method that continues with the current route</li>
</ul>
<p class="graf graf--p">Our beforeEach method will check every route that we are going to to see if it contains the meta tag of authRequired. If it does, it will check to see if the user is Authenticated. If the user is not authenticated it will redirect them to the <code class="markup--code markup--p-code">/sign-in</code> page. If the user is logged in then it will allow the route to proceed. If a user routes to any page that does not have the authRequired meta tag then the route will proceed. Here is the method I have added to my router to do this checking:</p>

<pre class="prettyprint"><xmp>router.beforeEach((to, from, next) =&gt; {
    <em class="markup--em markup--pre-em">if </em>(to.matched.some(record =&gt; record.meta.authRequired)) {
        <em class="markup--em markup--pre-em">if </em>(!store.state.user) {
            next({
                path: '/sign-in'
            });
        } <em class="markup--em markup--pre-em">else </em>{
            next();
        }
    } <em class="markup--em markup--pre-em">else </em>{
        next();
    }
});</xmp></pre>
<br>
<h2 class="graf graf--h2">Get the Code</h2>
<p class="graf graf--p">Even though this is a 4-part series, you can get the <a class="markup--anchor markup--p-anchor" href="https://github.com/ratracegrad/meal-prep" target="_blank" rel="noopener" data-href="https://github.com/ratracegrad/meal-prep">finished code in my GitHub account.</a> Please help me out and <strong class="markup--strong markup--p-strong">star the repo</strong> when you get the code.</p>

<h2 class="graf graf--h2">Summary</h2>
<p class="graf graf--p">In this part of this series, you have learned:</p>

<ul class="postList">
 	<li class="graf graf--li">What is firebase</li>
 	<li class="graf graf--li">Using firebase to authenticate users who sign in with email and password</li>
 	<li class="graf graf--li">Using firebase to store the recipes a user has ordered</li>
 	<li class="graf graf--li">Using route guards to not users access pages if they are not authenticated</li>
 	<li class="graf graf--li">Display user’s list of recipes from the database on firebase</li>
</ul>
</div>
</div>
</section><section class="section section--body">
<div class="section-divider">

<hr class="section-divider" />

</div>
<div class="section-content">
<div class="section-inner sectionLayout--insetColumn"></div>
</div>
</section>
