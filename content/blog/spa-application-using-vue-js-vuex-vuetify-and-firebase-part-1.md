---
title: SPA Application Using Vue.js, Vuex, Vuetify and Firebase - Part 1
description: Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase.
date: 2018-11-18
image: https://images.unsplash.com/photo-1752070182361-9fa562ed7f97?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase. Do you want to learn how to use Vue.js? Want to create a realistic website using Vue.js? In this tutorial, I will teach you how to create a meal delivery website using Vue, Vuex, Vue Router, Vuetify, and Firebase. This tutorial is presented as a series of articles that will take you from installing Vue for the first time to creating a fully functional meal delivery website. The header image above shows the website that we will be creating. This tutorial is broken down into a four-part series. Here are the links to each part of the series: [Part 1: Installing Vue and Building an SPA using Vuetify and Vue Router](https://wp.me/p3sG15-m3) [Part 2: Using Vue Router](/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-2/) [Part 3: Using Vuex and accessing API](/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-3/) [Part 4: Using Firebase for Authentication](/blog/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-4/) This tutorial is suitable for everyone regardless of your skill level. I only assume that you have a knowledge of ES6. Let’s get started.

## Installing Vue

Creating a new application using Vue.js is done through their command line interface (CLI). You will need to install the CLI first with this command:

npm install -g @vue/cli

The -g flag tells npm to install the CLI globally. Once it is installed the CLI can be accessed by using the command **vue** in the terminal. Running this will show the commands available: ![](/vuecommand.png)

*Vue command options.* **NOTE:** _If you have read other articles about Vue, you might see them talking about doing an install of the CLI with this command:_

npm install -g vue-cli

_That installed the old version of the Vue CLI. At the time of the writing of this tutorial, the current version of the Vue CLI is version 3. To install the latest version use the first command that I gave._

## Creating Our Meal Prep Application

Now that we have installed the CLI, the next step is to create the scaffolding for our Vue application. From your terminal enter this command:

vue create meal-prep

The Vue CLI will ask a series of questions to determine how to scaffold out your application. At the first prompt, you want to select "Manually select features". ![](/vueOptions.png)

*Manually select features when creating Vue application.* Next we will be asked to select the features we want to install for our application. For this tutorial select Babel, Router, Vuex and Linter/Formatter. ![](/vueLinter.png)

*Adding Babel, Router, Vuex and Linter to our application* Next, you will be asked a series of questions. For the linter I selected _Prettier_ and selected to _Lint on save_. I selected the configuration files should be placed in my package.json file instead of in separate configuration files. Here are the options that I selected: ![](/vueselectted.png)

*Options selected for Vue application* The Vue CLI will scaffold our application using the features that you have selected. Since I told it to create an application named "meal-prep" then it will create a new folder with this name. Once the CLI has successfully created the application, it will give you the command to change into the newly created directory and the command you will need to run to start your application: ![](/vueSuccess.png)

*Vue CLI successfully created our application.*  

## Starting our application

To start our application, we will need to cd into the meal-prep directory and run the command **npm run serve**. Here is what our application looks like: ![](/vueDefaultApp.png)

*Default Vue application.* Vue scaffolded out a SPA application for us and installed Vue Router and Vuex. We can see the Vue Router in action by clicking on About in the menu at the top of the page. This loads the **About** page. ![](/vueAbout.png)

*About page of our application.*  

## Adding Vuetify

Vuetify is a material design component framework. It is similar to Bootstrap. Vuetify provides 80+ material design components that we can use to style our SPA in Vue. To add Vuetify to our application, first, go to your terminal and stop the server. Then add Vuetify to our application with this command:

vue add vuetify

You will be asked a series of questions. I am going to choose not to use the pre-made template because I want to keep the structure created by the default Vue application. For the rest of the questions, I took the default. Here are my answers to the questions: ![](/vuetifyOptions.png)

*Options selected when installing Vuetify.*  

## Configuring Prettier

During the creation of our Vue application, I selected to use Prettier for linting. I also selected to have the configuration setting installed in the package.json file. I want to take time now to configure Prettier to use my preferred settings. In your code editor, open the package.json file. In this file, you will see the default settings that have been created for eslint. Right after the eslintConfig object and before the postcss object, I am going to add settings to configure Prettier. I am going to set the indent to 4 spaces and to use single quotes. _(Notes: if you prefer an indent of 2 spaces and/or to use double quotes then you do not need to add this change.)_ Here is the Prettier setting that I have added to my package.json file: ![](/prettier.png)

*Prettier configuration in package.json file.* Next I want to reconfigure all the files to use my new Prettier settings. That means changing all indents from 2 spaces to 4 spaces and to change double quotes to single quotes. Luckily Vue provides a lint script that will fix all these issues for me automatically. From the terminal run this command:

npm run lint

This will lint all the files and change them to my new Prettier settings. This command will give you a list of all the files that have been auto-fixed. ![](/lint.png)

*Lint auto-fixed all the files for us.*  

## Styling The Home Page of Our Application

We will be using Vuetify to style our application. You can find more details about all the UI Components that Vuetify offers [here](https://vuetifyjs.com/en/). All application using Vuetify have to be wrapped with . Open up the App.vue file and delete all the code in the template and all the styles. Your App.vue should look like this:

```
<template>
    <v-app>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
</style>
```

This code wraps our application in the <v-app> tag that Vuetify requires. Inside that tag is the <v-content> tag. Inside that is the <router-view> tag. The router view tag will display the current page that you are on. When we are on the home page it will display the Home view. When we navigate to the about page it will display the about view.

## Creating the Home Page

Next open the Home.vue file located in the views folder. We are going to get rid of the code that is there. Remove all the content in the template. Remove the import command for HelloWorld and the comment. Remove the components object. Here is what we will be creating for the home page: ![](/homepage.png)

*The home page for the Meal Prep Application*  

## App Navigation

The first thing we are going to start with is the navigation. I am going to create a new Vue component just for the navigation. In the components folder create a new file called **AppNavigation.vue**. Our navigation will have to work on many different screen sizes. On bigger screens like a laptop or desktop, we will display a menu across the top of the screen. On smaller devices like a mobile phone, we will display the traditional hamburger menu icon. When a user click on the icon a drawer will slide in from the left with our menu. This drawer will remain on top of the website until the user closes it. Vuetify provides two tools to display the menu for different screen sizes. For medium and large screens we will be using the Vuetify <v-toolbar> component. On smaller screens, we will show the <v-navigation-drawer> component. Let's start by scaffolding out the default configuration for a new Vue component. The AppNavigation.vue file should contain the following code:

```
<template>

</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>

<style scoped>
</style>
```

We will start with creating the menu that will be displayed on medium and large screen sizes. To do that we will use the <v-toolbar> component. Here is the code you will put in for the navigation:

```
<template>
        <v-toolbar app color="brown darken-4" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn flat>Menu</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat>SIGN IN</v-btn>
            <v-btn color="brown lighten-3">JOIN</v-btn>
        </v-toolbar>
</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>

<style scoped>
</style>
```

This code will produce this menu: ![](/menu.png)

*Menu toolbar* Let me explain the items that I have used in the menu. For the <v-toolbar> I have added the prop **app**. This prop designates the component as part of the application layout. It is used for dynamically adjusting content sizing. When the side drawer slides out then the content on the screen will adjust accordingly. Next, I have add a color to the navigation. Vuetify provides access to all colors in the Material Design spec. These values can be used within your style sheets, your component files and on actual components via the **color class** system. I have chosen a brown color for the navigation with the darken-4 variant. [Here are all the colors available with Vuetify](https://vuetifyjs.com/en/framework/colors). There are a number of helper components available to use with the toolbar. One helper component is the toolbar side icon. This is the hamburger menu. I have positioned it first in the toolbar. Another helper component is the toolbar title. I have added it after the toolbar side icon. I am displaying the appTitle which is defined in the data. Next, I have a series of buttons. Vuetify buttons use the <v-btn> component. For the first three buttons, I am specifying a prop of **flat**. Flat buttons have no box shadow and no background. Only on hover is the container for the button shown. This allows me to create buttons that mimic a traditional menu look and feel. For the _JOIN_ button I am not using the flat prop. I am adding a color to the button. The last thing I have done on the <v-toolbar> is to add the prop **dark**. This prop applies the dark theme variant to the toolbar. This inverts all the text so instead of being black they are now white.

## Improving the Styling in the Navigation

The first implementation of the navigation provides all the features that I would like for it to have. But I would like to make some changes. First, I don't want the hamburger menu to be shown unless I am on a small device. Likewise I don't want any button in the menu to be shown when I am on a small device. Vuetify provides a display helper. The display helpers allow you to control the display of content. This includes being conditionally visible based upon the current viewport, or the actual element display type. For the toolbar side icon I want it to only be visible on XS and SM devices. For MD and LG screens I want the toolbar side icon to not be visible. Likewise I want all the buttons to be shown on MD and LG screens and hidden on smaller screens. I will add the class **hidden-md-and-up** on the toolbar side icon. I will add the class **hidden-sm-and-down** to all buttons and the spacer. Now I am going to be a stickler here because I want to add one more layout change. When displaying the app on small devices I will only see the hamburger menu and the app title. Currently they are both on the left side of the screen. I want to change this so that the app title appears on the right side of the screen. This will provide a balance between the two items that are displayed. To do this I am going to add a new <v-spacer> between the toolbar side icon and the toolbar title. The spacer will move everything after it to the right side of the screen. But I only want this spacer to appear on small screens. So I add the class **hidden-md-and-up** to it. Here is the final code:

```
<v-toolbar app color="brown darken-4" dark>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-toolbar-title>{{appTitle}}</v-toolbar-title>
    <v-btn flat class="hidden-sm-and-down">Menu</v-btn>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-btn flat class="hidden-sm-and-down">SIGN IN</v-btn>
    <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
</v-toolbar>
```

If you want to see how it looks when you resize the screen, here is the first giphy I have ever created. :-) ![](/resizescreen-1024x248.gif)

## Creating the Navigation for small screens

For small screens we will use Vuetify's <v-navigation-drawer> component. If we add this to the template, we will immediately get an error. This is because every Vue component is expected to have just one root in the template. By having both a <v-navigation-drawer> and <v-toolbar> in our template, we have two roots. To avoid this create a <span> to wrap around both. Here is the code for the navigation drawer:

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
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down">SIGN IN</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
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

Let me explain what I have put in for the drawer navigation. I have added the prop **app**. This is the same prop we added for toolbar. Next I have added a v-model that is looking for the data item called drawer. In data the drawer will be initially set to **false**. This means the drawer is closed. The drawer will open when it is true and close when it is false. I have added a click method on the toolbar side icon. When you click on the hamburger menu it will change the value of drawer from true to false or vice versa. The last item I have added is to give it a class with a color of **brown lighten-2**. I decided to add a color to my drawer since the default color is white. Next I am using Vuetify's <v-list> component. In data I have created an array called items. This is an array of objects. Each object has a text key and the value is what is displayed in the menu. I am using a data item instead of hard-coding the menu items in the list because we will be using this in later series when we add authentication. In data, I have added drawer and items:

```
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
```

When we click on the hamburger menu this is what the drawer will look like: ![](/drawer.png)

*Drawer navigation for small devices*

## Adding Navigation to the Application

Now that we have created our AppNavigation component we need to add it to our application. Open up the App.vue file. Inside that file we will need to import our AppNavigation component. Then we can place it in our application. Here is the code you should have in your App.vue file:

```
 <template>
    <v-app>
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>

<style>
</style>
```

First you need to import the AppNavigation. When I import it I give it a name of AppNavigation. In the script I have added a components object that contains AppNavigation. The format of the name is important. When the component is added it will hyphenate the name. When I put the component in the html template I use the hyphenated name of <app-navigation>. _**NOTE:** if you are watching the code closely you will notice that I removed the <transition> and placed it directly on the <v-content>. Just wanted to let you know I made that change since I really didn't want to go back and update all the pictures!_

## Creating the content for our Home Page

We are going to add a full-screen image for our home page. Then we are going to add text over the image. Instead of putting our code directly in the Home.vue file located in the views folder, I am going to create a new Vue component. In the components folder create a new file called HomeHero.vue. Vuetify has a 12 point grid system. Built using flex-box, the grid is used to layout an application's content.The **v-container** can be used for a center focused page, or given the **fluid** prop to extend its full width. v-layout is used for separating sections. The structure of your layout will be as follows, **v-container » v-layout » v-flex**. We will use this grid system in the design for our HomeHero component. We are going to use <v-container fluid> for our root element in our template. We are going to add the prop **fill-height** to it. This prop will automatically adjust the container to have a height of 100% of the screen. The last thing I do is add class called **home-hero**. In my styles I am going to add a background image to the container. This is the full-screen image that users will see when loading the website. I am using an image from unsplash.com. Inside the container I will have a <v-layout>. The layout will wrap all the text displayed on top of the image. Vuetify provides typography settings that I will use to style the text. For the main text I am giving it a

class="display-4 font-weight-black white--text"

The display-4 will produce text that has a font size of 112sp and a font weight of light. I am going to override that font-weight by specifying a font-weight-black. I want the text to be white so I can add **white--text** The last thing I add is to specify the text to be centered. I will use the same styling for the second row of text. The only addition is I add an alignment of **mb-3**. Vuetify provides 5 levels of spacing. The mb is saying apply a margin-bottom of 3. This will provide some spacing between the header and subHeader text. The last thing I add is a button toward the bottom of the screen. I add this because sometimes people might not think to scroll down to see more content since the image is fullscreen. The image is a visual indicator to the users that there is more content below. I am using the <v-btn> component from Vuetify. This is the same component we used in the navigation. This time I am applying the prop fab to the button. Floating buttons are round and usually contain an icon. I am going to add an icon of a down arrow. The <v-icon> component requires you to enter the name of the icon to be displayed. [Here is a list of all the material icons available for you to use with Vuetify](https://material.io/tools/icons/?style=baseline). For the button I am going to add a class that will put a margin-top of 5 and set the color to be the same brown color that I used for the menu. For the icon I set its color to be white. I also set the icon to be large. Here is the code for the HomeHero file:

```
<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">HEALTHY MEALS</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR TABLE</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
            <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero'
};
</script>

<style scoped>
.home-hero {
    background: url('http://source.unsplash.com/0BhSKStVtdM');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
```

## Adding HomeHero Component to Application

Now that we have created our component we need to add it to the application. Open up the Home.vue file in the views folder. Just like we did with AppNavigation, you will need to import the component and place it in the template. Here is what the Home.vue file should look like:

```
<template>
    <span>
        <home-hero></home-hero>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';

export default {
    name: 'home',
    components: {
        HomeHero
    }
};
</script>
```

## Adding More Content to Home Page

Right now we have a very nice looking home page. But we need to add more content to explain what our meal prep service provides to potential customers. So let's add that now. For the content we will create a new component called HomeDetails.vue. In the components folder create a new file called HomeDetails.vue. For the content I am going to use Lorem Ipsum for the text. I will use the Vuetify layout scheme by creating the root element with the <v-container> component. Inside that I will use the <v-layout> component. For the layout I will add the prop of **column**. Since the layout is based off of Flexbox then it will align all the content vertically. Every text item will be in a <v-flex> component. The header will use the Vuetify typography class of **display-2**. I want this text to be centered. To make it center I add **text-xs-center** to the class. The last thing to add is **my-5**. This adds a margin along the y-axis which means it adds a margin-top and a margin-bottom. Next I am going to create another <v-flex> entry. This entry will have a headline and a subheading of text. I want to add some white space around the text so I am adding a class of **mt-3**. This will add a margin-top of 3 to all items of text. Here is my HomeDetails.vue file:

```
<template>
    <v-container>
        <v-layout column>
            <v-flex  class="display-2 text-xs-center my-5">Big Title Goes Here</v-flex>
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.</p>
            </v-flex>
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar risus quis mauris interdum, in euismod nibh pretium. Etiam pulvinar tincidunt dapibus. Quisque sollicitudin, mauris a consequat consectetur, turpis nisl sollicitudin enim, id consectetur neque neque nec metus. Pellentesque dolor nisi, vulputate quis lobortis ac, tincidunt et quam. Mauris pulvinar blandit nisi nec mattis. Aliquam accumsan ut sem eget efficitur. Vivamus in tortor gravida eros laoreet condimentum nec vel dui. Nullam quam massa, ultrices eget tincidunt a, pulvinar ac libero.</p>

                <p class="subheading mt-3">Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.</p>

                <p class="subheading mt-3">Aenean erat metus, imperdiet eget nisl laoreet, venenatis ultricies ante. In interdum ante vel dictum ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet gravida diam. Aliquam in tempor metus. Fusce pellentesque pharetra sem, et luctus justo tempor dictum. Ut feugiat est sed tristique egestas. Nullam posuere a nunc in blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse laoreet ultrices eros, nec malesuada enim semper sit amet. Maecenas efficitur consectetur accumsan. Etiam in aliquam turpis, ut pharetra nulla. Vestibulum malesuada, nulla id elementum cursus, nibh dui rhoncus felis, suscipit mattis felis enim sed ex. Pellentesque scelerisque aliquam lorem, vel mattis nibh tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper maximus.</p>
            </v-flex>
            <v-flex>
                <div class="headline mt-3">Lorem ipsum</div>
                <p class="subheading mt-3">Nullam nec massa eu est fringilla lobortis. Praesent in enim in justo blandit varius. Cras placerat arcu in sapien rhoncus aliquet. Sed interdum tortor et tincidunt condimentum. Etiam consequat mi leo, in suscipit odio scelerisque molestie. Nam et purus consequat, iaculis augue vel, sagittis ligula. Vestibulum aliquet vulputate erat. Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur ut vestibulum arcu. Curabitur non lacus justo. Cras varius a magna in semper. Nulla eros ante, consectetur faucibus sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc, id pulvinar massa egestas vitae.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeDetails'
};
</script>

<style scoped>
</style>
```

## Adding HomeDetails to The Application

We will add HomeDetails to the application just like we did for HomeHero. Open up the Home.vue file in the views folder. You will need to import HomeDetails component. Then add it to the template below HomeHero. Here is what the Home.vue file looks like:

```
<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails
    }
};
</script>
```

When we add this new component, it causes a problem with our layout. Now the text is centered based on the total height of the image as well as the new text content. Here is what it looks like: ![](/homepageproblems.png)

*Problems with our layout.* We can easily correct this problem by specifying a max-height for the container that has our image. We want this container to be 100% of the height of our viewport. Open up the HomeHero.vue file. On the <v-container> component add a style that sets the max-height. Here is that line:

```
<v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
```

Now we are back to having a fullscreen image with our text centered on the image. We can then scroll down to see the details.

## Creating Meal Plans Component

After the details I want to add images of the meal plans that we are offering on our meal prep website. For my meal prep website, I will be offering Keto, Paleo and Vegan meal plans. Feel free to customize your application to offer the meal plans you would like to offer to customers. Let's create a new component. In the components folder create a new file called HomePlans.vue. We will use the Vuetify grid layout. Our root element will be a <v-container>. We will add a new prop of **grid-list-lg**. We will have three meal plans side-by-side. This prop puts spacing between them. Next we have a <v-layout> for our header text announcing our Available Meal Plans. We will use a new Vuetify component called <v-card>. Our card will have an image, the name of the meal plan and some detail text. I will be using images from unsplash for each of the meal plans. Here is the code for the HousePlans.vue file:

```
<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="http://source.unsplash.com/hjCA3ecCXAQ" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">KETO</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Keto</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="http://source.unsplash.com/6S27S6pZ6o0" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">PALEO</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Paleo</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="http://source.unsplash.com/1SPu0KT-Ejg" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">VEGAN</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Vegan</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans'
};
</script>

<style scoped>
</style>
```

## Adding HomePlans to the Application

We have done this already several times before. Open up the Home.vue file in the views folder. Import the HomePlans.vue component and place it in the template below HomeDetails. This is the code for Home.vue:

```
<template>
    <span>
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans
    }
};
</script>
```

This is what the meal plans section looks like: ![](/mealplans.png)

*Available meal plans.*

## Get the Code

Even though this is a 4-part series, you can get the [finished code in my GitHub account](https://github.com/ratracegrad/meal-prep). Please help me out and **star the repo** when you get the code.

## Summary

In the first part of this series, you have learned:

-   how to install Vue
-   how to add Vuetify to an application
-   how to create multiple components
-   how to style components using Vuetify

## What's Next

In the next part of this series, we will cover Vue Router. Vue Router allows you to navigate between different pages in your application. For example, we show a list of menus that are available. When a user clicks on one they should be shown the details for that menu. Vue Router is what we will use to transition from the list of recipes page to the details page. See you in the next lesson.
