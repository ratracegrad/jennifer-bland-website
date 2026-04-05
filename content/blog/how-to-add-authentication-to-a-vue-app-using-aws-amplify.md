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

AWS Amplify is a tool for adding authentication for front-end applications. See how easy it is to add to your Vue application.

## What we will be creating

We are going to create a very simple Vue application using the Vue CLI. We will modify the default scaffolded application so that it provides a form to register as a new user, a login page and a dashboard page only shown to people that are logged in.

User's will be able to register using email and password. Once they have registered and login they will be presented with the dashboard page.

## Creating our Project

I will be using the Vue CLI to scaffold out a project for us to start with. To do that you need to have the Vue CLI installed on your system. If you **DO NOT** have it installed, you can install it globally with this command:

npm install -g @vue/cli

Now we can use the Vue CLI to create our project. Create a new project using this command:

vue create vue-amplify-auth-tutorial

You will be asked to pick a preset. Choose "Manually select features" and then select "babel", "Router" and "Linter / Formatter".

You will be asked if you want to use history mode for router. Choose "Yes" (should be the default).

For a linter I am selecting "ESLint with error prevention only".

After the Vue CLI is finished, it will give you the commands to change into the new directory that was just created and the command to start the server. Follow those directions. Once the server is started you can open your browser to `localhost:8080`. You should see this:

![vue application](https://res.cloudinary.com/ratracegrad/image/upload/v1609013331/Screen_Shot_2020-12-26_at_3.07.59_PM_zhwjfb.png)

## What is AWS Amplify?

AWS Amplify is an open-source framework created by Amazon that contains a set of tools and services that can be used together or on their own. One of the tools is Amplify Auth. Amplify Auth lets you quickly set up secure authentication and control what users have access to in your application.

The Amplify framework uses Amazon Cognito as the main authentication provider. Amazon Cognito is a robust user directory service that handles user registration, authentication, account recovery and other operations.

## Create AWS Account

To get started you will need to create an AWS account here. If you don't have an AWS account [follow the directions here to create one](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/).

## Install and Configure the Amplify CLI

The Amplify CLI is a unified toolchain to create AWS cloud services for your app. You can install it globally with this command:

npm install -g @aws-amplify/cli

Next we need to configure amplify by running the following command:

amplify configure

This command will open up a new browser window and ask you to sign into the AWS console. Once you are signed in return to your terminal and press enter.  
![](https://res.cloudinary.com/ratracegrad/image/upload/v1609540323/Screen_Shot_2021-01-01_at_5.30.55_PM_jhruis.png)

You will be asked to specify the AWS Region. Select the region that is closest to you.  
![](https://res.cloudinary.com/ratracegrad/image/upload/v1609540448/Screen_Shot_2021-01-01_at_5.34.00_PM_ebkhvf.png)

You will need to specify the username of the new IAM user. It will provide a default name that you can use by hitting enter or you can specify your own name. I am going to call my user **auth-demo**.  
![](https://res.cloudinary.com/ratracegrad/image/upload/v1609540702/Screen_Shot_2021-01-01_at_5.38.14_PM_hq6hua.png)

When you hit Enter you will be taken back to your browser.

Click the **Next: Permissions** button.

Click the **Next: Tags** button.

Click the **Next: Review** button.

Click the **Create User** button.

Now go back to your terminal and press Enter to continue.

Type in the accessKeyId of the user that you just created and press Enter.

Type in the secretAcessKey of the user that you just created and press Enter.

You will be asked to enter a **Profile Name**. I will accept the supplied value which is **default** by just pressing Enter.

When everything is finished you should get a message in your terminal the new user was successfully set up.

## Initialize A New Backend

Now that we have a running Vue app, it's time to set up Amplify so that we can create the necessary backend services needed to support the app. From the root of your Vue application, run:

amplify init

## Create Authentication Service

We need to add Authentication service to our vue application. In the root directory of your vue application enter this command:

amplify add auth

When you initialize Amplify you'll be prompted for some information about your application. Enter a project name.  
![](https://res.cloudinary.com/ratracegrad/image/upload/v1609542043/Screen_Shot_2021-01-01_at_6.00.33_PM_t3ac3u.png)

Set the backend environment name to be **dev**.  
![](https://res.cloudinary.com/ratracegrad/image/upload/v1609542116/Screen_Shot_2021-01-01_at_6.01.37_PM_bmtrcd.png)

Sometimes the CLI will prompt you to edit a file, it will use this editor to open those files. Select your preferred code editor software.  
![default editor](https://res.cloudinary.com/ratracegrad/image/upload/v1609542217/Screen_Shot_2021-01-01_at_6.03.26_PM_rjnvet.png)

Amplify will provide configuration files for your frontend applicaiton to connect to this backend environment. Since Vue is based on JavaScript, we'll select that here.  
![select type of app](https://res.cloudinary.com/ratracegrad/image/upload/v1609542328/Screen_Shot_2021-01-01_at_6.05.20_PM_hpngsp.png)

We are using Vue so select that as our JavaScript framework.  
![select javascript framework of vue](https://res.cloudinary.com/ratracegrad/image/upload/v1609542399/Screen_Shot_2021-01-01_at_6.06.30_PM_hrqwts.png)

Vue CLI setup the source files for your project under a `./src` folder. Select **src** for the Source Directory Path.  
![source directory path](https://res.cloudinary.com/ratracegrad/image/upload/v1609542509/Screen_Shot_2021-01-01_at_6.08.20_PM_lnl17g.png)

When your project t is ready to be hosted, Vue will generate your website, ready for public use, into a folder called **dist**. This is the default, so you can just press enter to continue.  
![distribution directory path](https://res.cloudinary.com/ratracegrad/image/upload/v1609542629/Screen_Shot_2021-01-01_at_6.10.17_PM_oy11rr.png)

Amplify's automated deployment needs to know what steps are need to build your application for publishing. Here we will set that to be Vue CLI's default build script.  
![build command](https://res.cloudinary.com/ratracegrad/image/upload/v1609542746/Screen_Shot_2021-01-01_at_6.12.17_PM_tfnyv4.png)

if Amplify needs to run the application in development mode, it needs to know how to start the development server. Again, we'll use Vue CLI's default scripts.  
![start command](https://res.cloudinary.com/ratracegrad/image/upload/v1609542828/Screen_Shot_2021-01-01_at_6.13.38_PM_yc1dn3.png)

Finally, Amplify needs an AWS account to connect to so that we can begin creating the backend services. This is the profile you created with the `amplify configure` command earlier. Select "yes" by typing `y` and pressing Enter.  
![](https://res.cloudinary.com/ratracegrad/image/upload/v1609542989/Screen_Shot_2021-01-01_at_6.16.15_PM_utiyok.png)

Proceed to select your profile from the list and press enter. Amplify will now begin deploying your backend framework.  
![choose profile](https://res.cloudinary.com/ratracegrad/image/upload/v1609543136/Screen_Shot_2021-01-01_at_6.18.48_PM_w4di2g.png)

When you initialize a new Amplify project, a few things happen:

-   It creates a top level directory called `amplify` that stores your backend definition. During the tutorial you’ll add capabilities such as authentication, GraphQL API, storage, and set up authorization rules for the API. As you add features, the `amplify` folder will grow with infrastructure-as-code templates that define your backend stack. Infrastructure-as-code is a best practice way to create a replicable backend stack.
-   It creates a file called `aws-exports.js` in the `src` directory that holds all the configuration for the services you create with Amplify. This is how the Amplify client is able to get the necessary information about your backend services.
-   It modifies the `.gitignore` file, adding some generated files to the ignore list
-   A cloud project is created for you in the AWS Amplify Console that can be accessed by running `amplify console`. The Console provides a list of backend environments, deep links to provisioned resources per Amplify category, status of recent deployments, and instructions on how to promote, clone, pull, and delete backend resources

To deploy the service, run the `push` command.

## Install Amplify Libraries

We need to install the Amplify dependencies in our Vue application. You can install them with this command:

npm install aws-amplify

## Configure Our Application

We need to add Amplify to our Vue application. Open up the **main.js** file and add the following after the last import line.

```
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
```

The above code successfully configures Amplify. As you add or remove categories and make updates to your backend configuration using the Amplify CLI, the configuration in **aws-exports.js** will update automatically.

## Create a Sign Up Page

We need a page that will allow new users to register with our application. In the views folder create a new file called **Register.vue**.

We need to add this new page to our routes and then display it in the navigation. Open up the **index.js** file in the router folder. Add this to the routes array.

```
{
    path: '/register',
    name: 'Register',
    component: () =>
        import(/* webpackChunkName: "register" */ '../views/Register.vue'),
},
```

Now add this to our navigation. Open up the **App.vue** file and add an entry for Register in the nav. Your nav should look like this:

```
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link>
</div>
```

Go back to your **Register.vue** file. This page will have a form for a user to put their email and a password to register as a new user. Here is the code that you need to put in the template section.

```
<div class="container">
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
</div>
```

If you look at our form, the two input fields and the button are right next to each other. Want to add some spacing between the three fields. I could add CSS to this page but it would only apply to this page. We are going to use this form again on the Login page we will be creating next. To get styles that work on both pages let's put the following CSS in the **App.vue** file. Open up the **App.vue** file and add the following style:

```
input {
    margin-right: 10px;
}
```

Go back to the **Register.vue** file. We are capturing the values the user enters for email and password so we need to add them to the data object. Add them to the data object so it looks like this:

```
data() {
    return {
        email: '',
        password: '',
    };
},
```

When a user submits the form it calls the **register** method. Here is the code for that method:

```
async register() {
    try {
        await Auth.signUp({
            username: this.email,
            password: this.password,
        });
        alert('User successfully registered. Please login');
    } catch (error) {
        alert(error.message);
    }
},
```

This method uses Auth from the aws-amplify package we installed. Add this import for it at the beginning of the script section.

import { Auth } from 'aws-amplify';

Now open up your application and register a new user. If successful, you get an alert saying the user was registered.

## Create a Login Page

Once a user has registered an account with our application they need a page in which they can login. In the views folder create a new file called **Login.vue**.

We need to add this new page to our routes and then display it in the navigation. Open up the **index.js** file in the router folder. Add this to the routes array.

```
{
    path: '/login',
    name: 'Login',
    component: () =>
        import(/* webpackChunkName: "login" */ '../views/Login.vue'),
},
```

Now add this to our navigation. Open up the **App.vue** file and add an entry for Register in the nav. Your nav should look like this:

```
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> 
</div>
```

Go back to your **Login.vue** file. You can copy the html code in the template section of the **Register.vue** file and paste it into this new file. Change all references of **Register** to **Login**. Your template section should look like this:

```
<div class="container">
    <form @submit.prevent="login">
        <h2>Login</h2>
        <input type="email" v-model="email" placeholder="Email address..." />
        <input type="password" v-model="password" placeholder="password..." />
        <button>Login</button>
    </form>
</div>
```

In the script section add the import for Auth and the data object for email and password. Your script section should look like this:

```
<script>
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
</script>
```

The last thing we need to implement is the login method. Here is the code for it:

```
async login() {
    try {
        await Auth.signIn(this.email, this.password);
        alert('Successfully logged in');
    } catch (error) {
        alert(error.message);
    }
},
```

Now if you open up your application you will be able to login with the user that you previously registered.

## Adding Logout

We need to add a button to all users to log out of our application. Open up the **App.vue** file. Add a button to logout in the nav. Your nav should look like this:

```
<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <button @click="logout">Logout</button>
</div>
```

In script section add a methods object and include the logout method. It should look like this:

```
methods: {
    async logout() {
        try {
            await Auth.signOut();
        } catch (error) {
            alert(error.message);
        }
    },
},
```

Congratulations you have successfully added AWS Amplify authentication to your Vue application.

## Get The Code

I have the [complete code in my GitHub account here](https://github.com/ratracegrad/Vue-Amplify-Auth-Tutorial). If you get the code please do me a favor and star my repo. Thank you!

## Using Other Authentication Methods

I have written several follow up articles on adding Authentication to your Vue application using other authentication methods.

Want to use Firebase for authentication, [read this article](/blog/how-to-add-authentication-to-a-vue-app-using-firebase/).

Want to use Auth0 for authentication, [read this article](/blog/how-to-add-authentication-to-a-vue-app-using-auth0/).

## Conclusion

AWS Amplify is a a great tool that you can add authentication to your application.

Hope you enjoyed this article. If you like it please star or clap for it. Thanks for reading.

\[\[\[BLOG\_MD\_COMMENT\_0\]\]\]

\[\[\[BLOG\_MD\_COMMENT\_1\]\]\]
