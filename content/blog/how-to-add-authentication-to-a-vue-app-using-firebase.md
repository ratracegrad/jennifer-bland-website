---
title: How to Add Authentication to a Vue App using Firebase
description: Do you need authentication for your Vue app? Firebase is a great tool to add authentication to your Vue app.
date: 2020-12-28
image: https://images.unsplash.com/photo-1762340275855-ae8f4c2c144e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Firebase provides a very simple and quick way to add authentication to your Vue.js application. In this article I will show you how easy it is to allow users to register with your application using their email and password.
<h2>What we will be creating</h2>
We are going to create a very simple Vue application using the Vue CLI. We will modify the default scaffolded application so that it provides a form to register as a new user, a login page and a dashboard page only shown to people that are logged in.

User's will be able to register with the application using the email and password authentication system in Firebase. Once they have registered and login they will be presented with the dashboard page.

<!--more-->
<h2>Creating our Project</h2>
I will be using the Vue CLI to scaffold out a project for us to start with. To do that you need to have the Vue CLI installed on your system. If you <b>DO NOT</b> have it installed, you can install it globally with this command:
<pre class="prettyprint">npm install -g @vue/cli</pre>
Now we can use the Vue CLI to create our project. Create a new project using this command:
<pre class="prettyprint">vue create vue-firebase-auth-tutorial</pre>
You will be asked to pick a preset. Choose "Manually select features" and then select "babel", "Router" and "Linter / Formatter".

You will be asked if you want to use history mode for router. Choose "Yes" (should be the default).

You can select any linter you want but for this tutorial I will be selecting "Eslint + Prettier".

After the Vue CLI is finished, it will give you the commands to change into the new directory that was just created and the command to start the server. Follow those directions. Once the server is started you can open your browser to <code>localhost:8080</code>. You should see this:

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609013331/Screen_Shot_2020-12-26_at_3.07.59_PM_zhwjfb.png" alt="vue application">
<h2>Firebase</h2>
For this tutorial I am assuming you have already created an account with Firebase. If not, you need to do that before continuing.

We will be using the Firebase SDK in our application to provide the authentication functionality. You can install firebase in your application using this command:
<pre class="prettyprint">npm install firebase</pre>
<h2>Creating Project in Firebase</h2>
The next step is to add a project in your Firebase console. Login in to your firebase console. Click the button to add a new project.

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1609018621/Screen_Shot_2020-12-26_at_4.36.43_PM_yuxtfw.png" alt="add firebase project" width="666" height="556">

If you want to add Google Analytics to your project you can but I will not add it for this tutorial. Click the "Create Project" button.

Once Firebase has created your new project, you will need to add firebase to your app. Click on the web icon

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1609018976/Screen_Shot_2020-12-26_at_4.42.47_PM_lpye1s.png" alt="add firebase to app" width="850" height="442">

You will be asked to enter a nickname for your app. I have entered a nickname of "Vue Firebase Auth Tutorial". After entering your nickname, click the "Register app" button.

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1609019076/Screen_Shot_2020-12-26_at_4.44.18_PM_phduyv.png" alt="app nickname" width="1120" height="884">

For Step 2, it will provide you instructions on adding the Firebase SDK to your application. We only need to copy the firebaseConfig and the line to initialize the app.

Open up your main.js file. We will initialize firebase in our Vue application. Below the existing import lines, paste in the firebaseConfig and the line to initialize the app. You will need to add an import for firebase. Your main.js file should look like this:
<pre class="prettyprint">import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "YourConfigHere",
  authDomain: "YourConfigHere",
  projectId: "YourConfigHere",
  storageBucket: "YourConfigHere",
  messagingSenderId: "YourConfigHere",
  appId: "YourConfigHere"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h =&gt; h(App)
}).$mount("#app");
</pre>
<h2>Setting Authentication Method</h2>
Open your firebase console in your browser. From the console, find the project that you just created and click it.

In the top of the left side navigation click on Authentication.

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1609073977/Screen_Shot_2020-12-27_at_7.59.21_AM_hiprvb.png" alt="Authentication in navigation" width="494" height="382">

Click the "Get Started" button.

From the Authentication menu, click on the "Sign-in method" tab.

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1609074079/Screen_Shot_2020-12-27_at_8.01.10_AM_mobs6f.png" alt="sign-in method tab" width="766" height="296">

Hover over the first entry "Email/Password". Click on the pencil icon to open up a dialog. Select enable.

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1609030854/Screen_Shot_2020-12-26_at_8.00.33_PM_jsf8ve.png" alt="enable authentication method" width="1952" height="776">

Click the "Save" button. You have now added the ability to create and authenticate users using their email address and a password.
<h2>Adding New Components</h2>
When we created our application with Vue Router, it automatically created 2 routes for our application - <strong>Home</strong> and <strong>About</strong>. We will use <strong>Home</strong> as the login for our application. We will use the <strong>About</strong> as the page to register as a new user for our application.

When a registered user logs in to our application we want to show them their dashboard. We also want to provide a way for a user to logout of our application. Currently neither of these options are available in our application so let's add them now.

Open up the <strong>App.vue</strong> file. Currently the nav has two entries for <strong>Home</strong> and <strong>About</strong>. We will change About to be register and add two new entries for <strong>Dashboard</strong> and <strong>Logout</strong>. Update your nav so it looks like this:
<pre class="prettyprint"><xmp>
<div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/register">Register</router-link> |
  <router-link to="/dashboard">Dashboard</router-link> |
  <button @click="logout">Logout</button>
</div>
</xmp></pre>
When you click the logout button it calls the logout method. We will be defining that later.
<h2>Create Our Login Component</h2>
Open up the <strong>Home.vue</strong> file in the views folder. Delete all the html code in the template section. Replace it with this code that provides a very basic login form. Here is the code:
<pre class="prettyprint"><xmp>
<div>
  <form @submit.prevent="login">

<h2>Login</h2>

    <input
      type="email"
      placeholder="Email address..."
      v-model="email"
    />
    <input
      type="password"
      placeholder="password..."
      v-model="password"
    />
    <button type="submit">Login</button>
  </form>
</div>

</xmp></pre>
Now if you view our application you will see the login form on the home page like this:
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609094525/Screen_Shot_2020-12-27_at_1.40.59_PM_oavay2.png" width="910" height="384" alt="login form" class="alignnone size-large">

Our form is a little bit crowded with the input fields and button touching each other. We can change this by adding some CSS styling. We could add the CSS styling in the <strong>Home.vue</strong> file. Since we are going to use this same form for registering a user we would need to duplicate the same CSS styling in that component. So instead we can put styling in the <strong>App.vue</strong> file and it will style both our Login and Register forms.

Open the <strong>App.vue</strong> file. In the style add this:
<pre class="prettyprint"><xmp>input {
    margin-right: 20px;
}
</xmp></pre>
Now our login form looks better.
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609094854/Screen_Shot_2020-12-27_at_1.47.06_PM_zflsh2.png" width="1022" height="398" alt="updated login form with styling" class="alignnone size-large">
<h2>Create Our Register Form</h2>
Open up the <strong>About.vue</strong> file in the views folder. You can copy the html code from the <strong>Home.vue</strong> file and paste it into this file. Change every reference of <strong>Login</strong> to <strong>Register</strong>. Your <strong>About.vue</strong> file should look like this:
<pre class="prettyprint"><xmp>
<div>
  <form @submit.prevent="register">

<h2>Register</h2>

    <input
      type="email"
      placeholder="Email address..."
      v-model="email"
    />
    <input
      type="password"
      placeholder="password..."
      v-model="password"
    />
    <button type="submit">Register</button>
  </form>
</div>
</xmp></pre>
<h2>Update Our Routes</h2>
Currently the url to display our Register page is <strong>/about</strong>. Let's change that to be <strong>/register</strong>. Open up the <strong>index.js</strong> file in the router folder. Change the second route for <strong>/about</strong> to be <strong>/register</strong>. Your routes array should look like this:
<pre class="prettyprint"><xmp>const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];</xmp></pre>
While we are in this file let's go ahead and add an entry to display our dashboard component. Add a 3rd route  to display <strong>/dashboard</strong>. Your routes array should now look like this:
<pre class="prettyprint"><xmp>const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    },
];</xmp></pre>
<h2>Create Dashboard Component</h2>
Create a new file called <strong>Dashboard.vue</strong> in the views folder. This page should only be visible to users that have logged on to our application.

In the template section add the following html code that says that.
<pre class="prettyprint"><xmp>
<div>

<h2>Dashboard</h2>

  
This page is only visible to users that are currently logged in
</div>
</xmp></pre>
<h2>Registering Users</h2>
Earlier when we updated the <strong>About.vue</strong> file to register users we had a call to a method called <strong>Register</strong>. We need to add the functionality to register new users.

First let's check out the <a href="https://firebase.google.com/docs/auth/web/password-auth">Firebase documentation on how to create a password-based account</a>. Firebase Auth has a method called <strong>createuserWithEmailAndPassword</strong>. You need to pass in the user's email and password. This method will either register the user and return a user object or it will return an error message. Let's implement this method now.

Open up the <strong>About.vue</strong> file. We need to add email and password to our data object. In your script section add the following data object:
<pre class="prettyprint"><xmp>data() {
  return {
    email: '',
    password: '',
  };
},</xmp></pre>
Next add a methods object with one method called <strong>register</strong>. We can literally copy the example from the Firebase documentation for this method. We will need to make the following changes to the code from the documentation:
<ul>
 	<li>We will not use the user object</li>
 	<li>Display an alert if login fails</li>
 	<li>If user is registered redirect them to login page</li>
</ul>
Here is the code for the register method:
<pre class="prettyprint"><xmp>methods: {
  register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      then(() => {
        alert('Successfully registered! Please login.');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
      });
  },
},</xmp></pre>
Let's test registering our first user for our application. Click on <strong>Register</strong> in the navigation. Enter an email address and password and click the <strong>Register</strong> button.

If the user was successfully registered you should get an alert and be redirected to the login page.

If the registration fail you should get an alert with an error message.

To check if user was registered successfully, go to your firebase console and click on your project. In the left side navigation click on <strong>Authentication</strong>. Then click on the <strong>Users</strong> tab. You will see your user listed

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609105918/Screen_Shot_2020-12-27_at_4.51.02_PM_a3vqcb.png" width="2168" height="800" alt="registered user" class="alignnone size-large">

Now that we have successfully implemented registering new users for our application, we need to implement the ability for the users to login.
<h2>Logging In Users</h2>
We used the code provided by Firebase to register a new user. On the <a href="https://firebase.google.com/docs/auth/web/password-auth">Firebase documentation page</a> it provides sample code to log in a user with an email address and password. The Firebase auth method we will use is <strong>signInWithEmailAndPassword</strong>.

Like Register we will make the same changes to the sample code. We will alert user if they are logged in successfully and redirect them to the <strong>Dashboard</strong> page.

If login fails then we display an alert with an error message.

Here is the <strong>login</strong> method which you should have in your <strong>Home.vue</strong> file.
<pre class="prettyprint"><xmp>methods: {
  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Successfully logged in');
        this.$router.push('/dashboard');
      })
      .catch(error => {
        alert(error.message);
      });
  },
},</xmp></pre>
<h2>Creating A Route Guard</h2>
We don't want users to be able to navigate to <strong>/dashboard</strong> unless they have logged in. We can do this by adding a route guard for /dashboard.

Open up the <strong>index.js</strong> file in the router folder. We will add a meta key to the <strong>/register</strong> route that will say that authentication is required. Here is the updated route:
<pre class="prettyprint"><xmp>{
  path: '/dashboard',
  name: 'Dashboard',
  component: () =>
    import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
  meta: {
    authRequired: true,
  },
},</xmp></pre>
Before Vue Router processes a route it has a method called <strong>beforeEach</strong>. We can check to see if the route requires authentication by checking the meta value.

If authentication is required, we need to be able to check if the user is logged in or not. Luckily there is a <strong>currentUser</strong> object in Firebase Auth. We will use that to check if the user is logged in or not.

If they are currently logged in then we will display the <strong>Dashboard</strong> page.

If not we will display an alert telling the user they must be logged in and redirect them to the <strong>Home</strong> page for them to login.
Here is the code:
<pre class="prettyprint"><xmp>router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});</xmp></pre>
<h2>Logout</h2>
The last thing we need to add to our application is the logout method. Firebase Auth provides a signOut method that we will use.

Open up the <strong>App.vue</strong> file. We will logout the user. If successful they will receive an alert and be redirected to the <strong>Home</strong> page.

If the logout fails we display an alert with the error message and redirect them to the <strong>Home</strong> page.

Add this code for the <strong>logout</strong> method:
<pre class="prettyprint"><xmp>methods: {
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Successfully logged out');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
        this.$router.push('/');
      });
  },
},</xmp></pre>
In the code above we are using firebase but we do not have any reference to it in our index.js file. We need to add that. Scroll up to the top of the file where the existing import lines are. Add this line:
<pre class="prettyprint">import firebase from 'firebase';</pre>
Now with that added you can practice registering a new user. Then login with that user and verify that you are redirected to the <strong>Dashboard</strong> page. Then logout and verify you are redirected to the <strong>Home</strong> page.

Congratulations you have successfully added Firebase Authentication to your Vue application!
<h2> Get The Code</h2>
I have the <a href="https://github.com/ratracegrad/Vue-Firebase-Auth-Tutorial">complete code in my GitHub account here</a>. If you get the code please do me a favor and star my repo. Thank you!
<h2>Using Other Authentication Methods</h2>
I have written several follow up articles on adding Authentication to your Vue application using other authentication methods.

Want to use Auth0 for authentication, <a href="/blog/how-to-add-authentication-to-a-vue-app-using-auth0/">read this article</a>.

Want to use AWS Amplify for authentication, <a href="/blog/how-to-add-authentication-to-a-vue-app-using-aws-amplify/">read this article</a>.
<h2>Conclusion</h2>
Firebase is a very efficient method of adding authentication to your Vue applications. It allows you to add Authentication without having to write your own Backend service and implementing Authentication yourself.

Hope you enjoyed this article. If you like it please star or clap for it. Thanks for reading.