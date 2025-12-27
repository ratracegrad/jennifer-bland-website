---
title: How to Add Authentication to a Vue App using AWS Amplify
description: Do you need authentication for your Vue app? AWS Amplify is a great tool to add authentication to your Vue app.
date: 2021-01-03
image: https://images.unsplash.com/photo-1667453466805-75bbf36e8707?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

<p>AWS Amplify is a tool for adding authentication for front-end applications. See how easy it is to add to your Vue application.</p>
<h2>What we will be creating</h2>
<p>We are going to create a very simple Vue application using the Vue CLI. We will modify the default scaffolded application so that it provides a form to register as a new user, a login page and a dashboard page only shown to people that are logged in.</p>
<p>User's will be able to register using email and password. Once they have registered and login they will be presented with the dashboard page.</p>
<p><!--more--></p>
<h2>Creating our Project</h2>
<p>I will be using the Vue CLI to scaffold out a project for us to start with. To do that you need to have the Vue CLI installed on your system. If you <b>DO NOT</b> have it installed, you can install it globally with this command:</p>
<pre class="prettyprint">npm install -g @vue/cli</pre>
<p>Now we can use the Vue CLI to create our project. Create a new project using this command:</p>
<pre class="prettyprint">vue create vue-amplify-auth-tutorial</pre>
<p>You will be asked to pick a preset. Choose "Manually select features" and then select "babel", "Router" and "Linter / Formatter". </p>
<p>You will be asked if you want to use history mode for router. Choose "Yes" (should be the default).</p>
<p>For a linter I am selecting "ESLint with error prevention only".</p>
<p>After the Vue CLI is finished, it will give you the commands to change into the new directory that was just created and the command to start the server. Follow those directions. Once the server is started you can open your browser to <code>localhost:8080</code>. You should see this:</p>
<p><img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609013331/Screen_Shot_2020-12-26_at_3.07.59_PM_zhwjfb.png" alt="vue application"></p>
<h2>What is AWS Amplify?</h2>
<p>AWS Amplify is an open-source framework created by Amazon that contains a set of tools and services that can be used together or on their own. One of the tools is Amplify Auth. Amplify Auth lets you quickly set up secure authentication and control what users have access to in your application.</p>
<p>The Amplify framework uses Amazon Cognito as the main authentication provider. Amazon Cognito is a robust user directory service that handles user registration, authentication, account recovery and other operations. </p>
<h2>Create AWS Account</h2>
<p>To get started you will need to create an AWS account here. If you don't have an AWS account <a href="https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/">follow the directions here to create one</a>.</p>
<h2> Install and Configure the Amplify CLI</h2>
<p>The Amplify CLI is a unified toolchain to create AWS cloud services for your app. You can install it globally with this command:</p>
<pre class="prettyprint">npm install -g @aws-amplify/cli</pre>
<p>Next we need to configure amplify by running the following command:</p>
<pre class="prettyprint">amplify configure</pre>
<p>This command will open up a new browser window and ask you to sign into the AWS console. Once you are signed in return to your terminal and press enter.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609540323/Screen_Shot_2021-01-01_at_5.30.55_PM_jhruis.png" width="1140" height="380" class="alignnone size-large"></p>
<p>You will be asked to specify the AWS Region. Select the region that is closest to you.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609540448/Screen_Shot_2021-01-01_at_5.34.00_PM_ebkhvf.png" width="844" height="474" class="alignnone size-large"></p>
<p>You will need to specify the username of the new IAM user. It will provide a default name that you can use by hitting enter or you can specify your own name. I am going to call my user <strong>auth-demo</strong>.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609540702/Screen_Shot_2021-01-01_at_5.38.14_PM_hq6hua.png" width="844" height="100" class="alignnone size-large"></p>
<p>When you hit Enter you will be taken back to your browser. </p>
<p>Click the <strong>Next: Permissions</strong> button.</p>
<p>Click the <strong>Next: Tags</strong> button.</p>
<p>Click the <strong>Next: Review</strong> button.</p>
<p>Click the <strong>Create User</strong> button.</p>
<p>Now go back to your terminal and press Enter to continue.</p>
<p>Type in the accessKeyId of the user that you just created and press Enter.</p>
<p>Type in the secretAcessKey of the user that you just created and press Enter.</p>
<p>You will be asked to enter a <strong>Profile Name</strong>. I will accept the supplied value which is <strong>default</strong> by just pressing Enter.</p>
<p>When everything is finished you should get a message in your terminal the new user was successfully set up.</p>
<h2>Initialize A New Backend</h2>
<p>Now that we have a running Vue app, it's time to set up Amplify so that we can create the necessary backend services needed to support the app. From the root of your Vue application, run:</p>
<pre class="prettyprint">amplify init</pre>
<h2>Create Authentication Service</h2>
<p>We need to add Authentication service to our vue application. In the root directory of your vue application enter this command:</p>
<pre class="prettyprint">amplify add auth</pre>
<p>When you initialize Amplify you'll be prompted for some information about your application. Enter a project name.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542043/Screen_Shot_2021-01-01_at_6.00.33_PM_t3ac3u.png" width="1116" height="60" class="alignnone size-large"></p>
<p>Set the backend environment name to be <strong>dev</strong>.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542116/Screen_Shot_2021-01-01_at_6.01.37_PM_bmtrcd.png" width="888" height="56" class="alignnone size-large"></p>
<p>Sometimes the CLI will prompt you to edit a file, it will use this editor to open those files. Select your preferred code editor software.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542217/Screen_Shot_2021-01-01_at_6.03.26_PM_rjnvet.png" width="946" height="368" alt="default editor" class="alignnone size-large"></p>
<p>Amplify will provide configuration files for your frontend applicaiton to connect to this backend environment. Since Vue is based on JavaScript, we'll select that here.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542328/Screen_Shot_2021-01-01_at_6.05.20_PM_hpngsp.png" width="1260" height="256" alt="select type of app" class="alignnone size-large"></p>
<p>We are using Vue so select that as our JavaScript framework.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542399/Screen_Shot_2021-01-01_at_6.06.30_PM_hrqwts.png" width="1200" height="370" alt="select javascript framework of vue" class="alignnone size-large"></p>
<p>Vue CLI setup the source files for your project under a <code>./src</code> folder. Select <strong>src</strong> for the Source Directory Path.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542509/Screen_Shot_2021-01-01_at_6.08.20_PM_lnl17g.png" width="700" height="60" alt="source directory path" class="alignnone size-large"></p>
<p>When your project t is ready to be hosted, Vue will generate your website, ready for public use, into a folder called <strong>dist</strong>. This is the default, so you can just press enter to continue.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542629/Screen_Shot_2021-01-01_at_6.10.17_PM_oy11rr.png" width="832" height="66" alt="distribution directory path" class="alignnone size-large"></p>
<p>Amplify's automated deployment needs to know what steps are need to build your application for publishing. Here we will set that to be Vue CLI's default build script.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542746/Screen_Shot_2021-01-01_at_6.12.17_PM_tfnyv4.png" width="894" height="68" alt="build command" class="alignnone size-large"></p>
<p>if Amplify needs to run the application in development mode, it needs to know how to start the development server. Again, we'll use Vue CLI's default scripts.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542828/Screen_Shot_2021-01-01_at_6.13.38_PM_yc1dn3.png" width="870" height="56" alt="start command" class="alignnone size-large"></p>
<p>Finally, Amplify needs an AWS account to connect to so that we can begin creating the backend services. This is the profile you created with the <code>amplify configure</code> command earlier. Select "yes" by typing <code>y</code> and pressing Enter.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609542989/Screen_Shot_2021-01-01_at_6.16.15_PM_utiyok.png" width="908" height="70" class="alignnone size-large"></p>
<p>Proceed to select your profile from the list and press enter. Amplify will now begin deploying your backend framework.<br>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1609543136/Screen_Shot_2021-01-01_at_6.18.48_PM_w4di2g.png" width="1234" height="94" alt="choose profile" class="alignnone size-large"></p>
<p>When you initialize a new Amplify project, a few things happen:</p>
<ul>
<li>It creates a top level directory called <code>amplify</code> that stores your backend definition. During the tutorial you’ll add capabilities such as authentication, GraphQL API, storage, and set up authorization rules for the API. As you add features, the <code>amplify</code> folder will grow with infrastructure-as-code templates that define your backend stack. Infrastructure-as-code is a best practice way to create a replicable backend stack.</li>
<li>It creates a file called <code>aws-exports.js</code> in the <code>src</code> directory that holds all the configuration for the services you create with Amplify. This is how the Amplify client is able to get the necessary information about your backend services.</li>
<li>It modifies the <code>.gitignore</code> file, adding some generated files to the ignore list</li>
<li>A cloud project is created for you in the AWS Amplify Console that can be accessed by running <code>amplify console</code>. The Console provides a list of backend environments, deep links to provisioned resources per Amplify category, status of recent deployments, and instructions on how to promote, clone, pull, and delete backend resources</li>
</ul>
<p>To deploy the service, run the <code>push</code> command.</p>
<h2>Install Amplify Libraries</h2>
<p>We need to install the Amplify dependencies in our Vue application. You can install them with this command:</p>
<pre class="prettyprint">npm install aws-amplify</pre>
<h2>Configure Our Application</h2>
<p>We need to add Amplify to our Vue application. Open up the <strong>main.js</strong> file and add the following after the last import line.</p>
<pre class="prettyprint"><xmp>import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);</xmp></pre>
<p>The above code successfully configures Amplify. As you add or remove categories and make updates to your backend configuration using the Amplify CLI, the configuration in <strong>aws-exports.js</strong> will update automatically.</p>
<h2>Create a Sign Up Page</h2>
<p>We need a page that will allow new users to register with our application. In the views folder create a new file called <strong>Register.vue</strong>.</p>
<p>We need to add this new page to our routes and then display it in the navigation. Open up the <strong>index.js</strong> file in the router folder. Add this to the routes array.</p>
<pre class="prettyprint"><xmp>{
    path: '/register',
    name: 'Register',
    component: () =>
        import(/* webpackChunkName: "register" */ '../views/Register.vue'),
},</xmp></pre>
<p>Now add this to our navigation. Open up the <strong>App.vue</strong> file and add an entry for Register in the nav. Your nav should look like this:</p>
<pre class="prettyprint"><xmp><div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link>
</div></xmp></pre>
<p>Go back to your <strong>Register.vue</strong> file. This page will have a form for a user to put their email and a password to register as a new user. Here is the code that you need to put in the template section.</p>
<pre class="prettyprint"><xmp><div class="container">
    <form @submit.prevent="register">
        <h2>Register</h2>
        <input
            type="email"
            v-model="email"
            placeholder="Email address..."
        />
        <input
            type="password"
            v-model="password"
            placeholder="password..."
        />
        <button>Register</button>
    </form>
</div></xmp></pre>
<p>If you look at our form, the two input fields and the button are right next to each other. Want to add some spacing between the three fields. I could add CSS to this page but it would only apply to this page. We are going to use this form again on the Login page we will be creating next. To get styles that work on both pages let's put the following CSS in the <strong>App.vue</strong> file. Open up the <strong>App.vue</strong> file and add the following style:</p>
<pre class="prettyprint"><xmp>input {
    margin-right: 10px;
}</xmp></pre>
<p>Go back to the <strong>Register.vue</strong> file. We are capturing the values the user enters for email and password so we need to add them to the data object. Add them to the data object so it looks like this:</p>
<pre class="prettyprint"><xmp>data() {
    return {
        email: '',
        password: '',
    };
},</xmp></pre>
<p>When a user submits the form it calls the <strong>register</strong> method. Here is the code for that method:</p>
<pre class="prettyprint"><xmp>async register() {
    try {
        await Auth.signUp({
            username: this.email,
            password: this.password,
        });
        alert('User successfully registered. Please login');
    } catch (error) {
        alert(error.message);
    }
},</xmp></pre>
<p>This method uses Auth from the aws-amplify package we installed. Add this import for it at the beginning of the script section.</p>
<pre class="prettyprint">import { Auth } from 'aws-amplify';</pre>
<p>Now open up your application and register a new user. If successful, you get an alert saying the user was registered.</p>
<h2>Create a Login Page</h2>
<p>Once a user has registered an account with our application they need a page in which they can login. In the views folder create a new file called <strong>Login.vue</strong>. </p>
<p>We need to add this new page to our routes and then display it in the navigation. Open up the <strong>index.js</strong> file in the router folder. Add this to the routes array.</p>
<pre class="prettyprint"><xmp>{
    path: '/login',
    name: 'Login',
    component: () =>
        import(/* webpackChunkName: "login" */ '../views/Login.vue'),
},</xmp></pre>
<p>Now add this to our navigation. Open up the <strong>App.vue</strong> file and add an entry for Register in the nav. Your nav should look like this:</p>
<pre class="prettyprint"><xmp><div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> 
</div></xmp></pre>
<p>Go back to your <strong>Login.vue</strong> file. You can copy the html code in the template section of the <strong>Register.vue</strong> file and paste it into this new file. Change all references of <strong>Register</strong> to <strong>Login</strong>. Your template section should look like this:</p>
<pre class="prettyprint"><xmp><div class="container">
    <form @submit.prevent="login">
        <h2>Login</h2>
        <input type="email" v-model="email" placeholder="Email address..." />
        <input type="password" v-model="password" placeholder="password..." />
        <button>Login</button>
    </form>
</div></xmp></pre>
<p>In the script section add the import for Auth and the data object for email and password. Your script section should look like this:</p>
<pre class="prettyprint"><xmp><script>
import { Auth } from 'aws-amplify';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
}
</script></xmp></pre>
<p>The last thing we need to implement is the login method. Here is the code for it:</p>
<pre class="prettyprint"><xmp>async login() {
    try {
        await Auth.signIn(this.email, this.password);
        alert('Successfully logged in');
    } catch (error) {
        alert(error.message);
    }
},</xmp></pre>
<p>Now if you open up your application you will be able to login with the user that you previously registered.</p>
<h2>Adding Logout</h2>
<p>We need to add a button to all users to log out of our application. Open up the <strong>App.vue</strong> file. Add a button to logout in the nav. Your nav should look like this:</p>
<pre class="prettyprint"><xmp><div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <button @click="logout">Logout</button>
</div></xmp></pre>
<p>In script section add a methods object and include the logout method. It should look like this:</p>
<pre class="prettyprint"><xmp>methods: {
    async logout() {
        try {
            await Auth.signOut();
        } catch (error) {
            alert(error.message);
        }
    },
},</xmp></pre>
<p>Congratulations you have successfully added AWS Amplify authentication to your Vue application.</p>
<h2>Get The Code</h2>
<p>I have the <a href="https://github.com/ratracegrad/Vue-Amplify-Auth-Tutorial">complete code in my GitHub account here</a>. If you get the code please do me a favor and star my repo. Thank you!</p>
<h2>Using Other Authentication Methods</h2>
<p>I have written several follow up articles on adding Authentication to your Vue application using other authentication methods.</p>
<p>Want to use Firebase for authentication, <a href="/blog/how-to-add-authentication-to-a-vue-app-using-firebase/">read this article</a>.</p>
<p>Want to use Auth0 for authentication, <a href="/blog/how-to-add-authentication-to-a-vue-app-using-auth0/">read this article</a>.</p>
<h2>Conclusion</h2>
<p>AWS Amplify is a a great tool that you can add authentication to your application. </p>
<p>Hope you enjoyed this article. If you like it please star or clap for it. Thanks for reading.</p>

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->