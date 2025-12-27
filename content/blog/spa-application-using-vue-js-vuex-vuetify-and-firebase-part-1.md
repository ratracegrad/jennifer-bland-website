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

Learn how to create a meal delivery website using Vue.js, Vuex, Vue Router, and Firebase.

Do you want to learn how to use Vue.js? Want to create a realistic website using Vue.js? In this tutorial, I will teach you how to create a meal delivery website using Vue, Vuex, Vue Router, Vuetify, and Firebase.

This tutorial is presented as a series of articles that will take you from installing Vue for the first time to creating a fully functional meal delivery website. The header image above shows the website that we will be creating.

This tutorial is broken down into a four-part series. Here are the links to each part of the series:

<a href="https://wp.me/p3sG15-m3" target="_blank" rel="noreferrer noopener">Part 1: Installing Vue and Building an SPA using Vuetify and Vue Router</a>

<a href="https://www.jenniferbland.com/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-2/" target="_blank" rel="noreferrer noopener">Part 2: Using Vue Router</a>

<a href="https://www.jenniferbland.com/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-3/" target="_blank" rel="noreferrer noopener">Part 3: Using Vuex and accessing API</a>

<a href="https://www.jenniferbland.com/spa-application-using-vue-js-vuex-vuetify-and-firebase-part-4/" target="_blank" rel="noreferrer noopener">Part 4: Using Firebase for Authentication</a>

This tutorial is suitable for everyone regardless of your skill level. I only assume that you have a knowledge of ES6.

Let’s get started.

<!--more-->
<h2>Installing Vue</h2>
Creating a new application using Vue.js is done through their command line interface (CLI). You will need to install the CLI first with this command:
<pre class="prettyprint">npm install -g @vue/cli</pre>
The -g flag tells npm to install the CLI globally. Once it is installed the CLI can be accessed by using the command <b>vue</b> in the terminal. Running this will show the commands available:

[caption id="attachment_1369" align="alignnone" width="880"]<img class="size-full wp-image-1369" src="https://www.jenniferbland.com/wp-content/uploads/vuecommand.png" alt="" width="880" height="329" /> Vue command options.[/caption]


<b>NOTE:</b> <i>If you have read other articles about Vue, you might see them talking about doing an install of the CLI with this command:</i>
<pre class="prettyprint">npm install -g vue-cli</pre>
<i>That installed the old version of the Vue CLI. At the time of the writing of this tutorial, the current version of the Vue CLI is version 3. To install the latest version use the first command that I gave.</i>
<h2>Creating Our Meal Prep Application</h2>
Now that we have installed the CLI, the next step is to create the scaffolding for our Vue application. From your terminal enter this command:
<pre class="prettyprint">vue create meal-prep</pre>
The Vue CLI will ask a series of questions to determine how to scaffold out your application. At the first prompt, you want to select "Manually select features".

[caption id="attachment_1370" align="alignnone" width="334"]<img class="size-full wp-image-1370" src="https://www.jenniferbland.com/wp-content/uploads/vueOptions.png" alt="" width="334" height="101" /> Manually select features when creating Vue application.[/caption]

Next we will be asked to select the features we want to install for our application. For this tutorial select Babel, Router, Vuex and Linter/Formatter.

[caption id="attachment_1371" align="alignnone" width="554"]<img class="size-full wp-image-1371" src="https://www.jenniferbland.com/wp-content/uploads/vueLinter.png" alt="" width="554" height="262" /> Adding Babel, Router, Vuex and Linter to our application[/caption]

Next, you will be asked a series of questions.

For the linter I selected <i>Prettier</i> and selected to <i>Lint on save</i>. I selected the configuration files should be placed in my package.json file instead of in separate configuration files.

Here are the options that I selected:

[caption id="attachment_1372" align="alignnone" width="880"]<img class="size-full wp-image-1372" src="https://www.jenniferbland.com/wp-content/uploads/vueselectted.png" alt="" width="880" height="154" /> Options selected for Vue application[/caption]

The Vue CLI will scaffold our application using the features that you have selected. Since I told it to create an application named "meal-prep" then it will create a new folder with this name.

Once the CLI has successfully created the application, it will give you the command to change into the newly created directory and the command you will need to run to start your application:

[caption id="attachment_1373" align="alignnone" width="880"]<img class="size-full wp-image-1373" src="https://www.jenniferbland.com/wp-content/uploads/vueSuccess.png" alt="" width="880" height="430" /> Vue CLI successfully created our application.[/caption]

&nbsp;
<h2>Starting our application</h2>
To start our application, we will need to cd into the meal-prep directory and run the command <b>npm run serve</b>. Here is what our application looks like:

[caption id="attachment_1374" align="alignnone" width="880"]<img class="size-full wp-image-1374" src="https://www.jenniferbland.com/wp-content/uploads/vueDefaultApp.png" alt="" width="880" height="408" /> Default Vue application.[/caption]

Vue scaffolded out a SPA application for us and installed Vue Router and Vuex. We can see the Vue Router in action by clicking on About in the menu at the top of the page. This loads the <b>About</b> page.

[caption id="attachment_1375" align="alignnone" width="880"]<img class="size-full wp-image-1375" src="https://www.jenniferbland.com/wp-content/uploads/vueAbout.png" alt="" width="880" height="200" /> About page of our application.[/caption]

&nbsp;
<h2>Adding Vuetify</h2>
Vuetify is a material design component framework. It is similar to Bootstrap. Vuetify provides 80+ material design components that we can use to style our SPA in Vue. To add Vuetify to our application, first, go to your terminal and stop the server. Then add Vuetify to our application with this command:
<pre class="prettyprint">vue add vuetify</pre>
You will be asked a series of questions. I am going to choose not to use the pre-made template because I want to keep the structure created by the default Vue application. For the rest of the questions, I took the default. Here are my answers to the questions:

[caption id="attachment_1376" align="alignnone" width="776"]<img class="size-full wp-image-1376" src="https://www.jenniferbland.com/wp-content/uploads/vuetifyOptions.png" alt="" width="776" height="220" /> Options selected when installing Vuetify.[/caption]

&nbsp;
<h2>Configuring Prettier</h2>
During the creation of our Vue application, I selected to use Prettier for linting. I also selected to have the configuration setting installed in the package.json file. I want to take time now to configure Prettier to use my preferred settings.

In your code editor, open the package.json file. In this file, you will see the default settings that have been created for eslint. Right after the eslintConfig object and before the postcss object, I am going to add settings to configure Prettier. I am going to set the indent to 4 spaces and to use single quotes. <i>(Notes: if you prefer an indent of 2 spaces and/or to use double quotes then you do not need to add this change.)</i>

Here is the Prettier setting that I have added to my package.json file:

[caption id="attachment_1377" align="alignnone" width="444"]<img class="size-full wp-image-1377" src="https://www.jenniferbland.com/wp-content/uploads/prettier.png" alt="" width="444" height="555" /> Prettier configuration in package.json file.[/caption]

Next I want to reconfigure all the files to use my new Prettier settings. That means changing all indents from 2 spaces to 4 spaces and to change double quotes to single quotes. Luckily Vue provides a lint script that will fix all these issues for me automatically.

From the terminal run this command:
<pre class="prettyprint">npm run lint</pre>
This will lint all the files and change them to my new Prettier settings. This command will give you a list of all the files that have been auto-fixed.

[caption id="attachment_1378" align="alignnone" width="763"]<img class="size-full wp-image-1378" src="https://www.jenniferbland.com/wp-content/uploads/lint.png" alt="" width="763" height="354" /> Lint auto-fixed all the files for us.[/caption]

&nbsp;
<h2>Styling The Home Page of Our Application</h2>
We will be using Vuetify to style our application. You can find more details about all the UI Components that Vuetify offers <a href="https://vuetifyjs.com/en/" target="_blank" rel="noopener noreferrer">here</a>. All application using Vuetify have to be wrapped with . Open up the App.vue file and delete all the code in the template and all the styles. Your App.vue should look like this:
<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>

This code wraps our application in the &lt;v-app&gt; tag that Vuetify requires. Inside that tag is the &lt;v-content&gt; tag. Inside that is the &lt;router-view&gt; tag. The router view tag will display the current page that you are on. When we are on the home page it will display the Home view. When we navigate to the about page it will display the about view.
<h2>Creating the Home Page</h2>
Next open the Home.vue file located in the views folder. We are going to get rid of the code that is there. Remove all the content in the template. Remove the import command for HelloWorld and the comment. Remove the components object. Here is what we will be creating for the home page:

[caption id="attachment_1379" align="alignnone" width="880"]<img class="size-full wp-image-1379" src="https://www.jenniferbland.com/wp-content/uploads/homepage.png" alt="" width="880" height="450" /> The home page for the Meal Prep Application[/caption]

&nbsp;
<h2>App Navigation</h2>
The first thing we are going to start with is the navigation. I am going to create a new Vue component just for the navigation. In the components folder create a new file called <b>AppNavigation.vue</b>.

Our navigation will have to work on many different screen sizes. On bigger screens like a laptop or desktop, we will display a menu across the top of the screen. On smaller devices like a mobile phone, we will display the traditional hamburger menu icon. When a user click on the icon a drawer will slide in from the left with our menu. This drawer will remain on top of the website until the user closes it.

Vuetify provides two tools to display the menu for different screen sizes. For medium and large screens we will be using the Vuetify &lt;v-toolbar&gt; component. On smaller screens, we will show the &lt;v-navigation-drawer&gt; component.

Let's start by scaffolding out the default configuration for a new Vue component. The AppNavigation.vue file should contain the following code:
<pre class="prettyprint"><xmp><template>

</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>

<style scoped>
</style></xmp></pre>
We will start with creating the menu that will be displayed on medium and large screen sizes. To do that we will use the &lt;v-toolbar&gt; component. Here is the code you will put in for the navigation:
<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>
This code will produce this menu:

[caption id="attachment_1384" align="alignnone" width="880"]<img class="size-full wp-image-1384" src="https://www.jenniferbland.com/wp-content/uploads/menu.png" alt="" width="880" height="61" /> Menu toolbar[/caption]

Let me explain the items that I have used in the menu. For the &lt;v-toolbar&gt; I have added the prop <b>app</b>. This prop designates the component as part of the application layout. It is used for dynamically adjusting content sizing. When the side drawer slides out then the content on the screen will adjust accordingly.

Next, I have add a color to the navigation. Vuetify provides access to all colors in the Material Design spec. These values can be used within your style sheets, your component files and on actual components via the <b>color class</b> system. I have chosen a brown color for the navigation with the darken-4 variant. <a href="https://vuetifyjs.com/en/framework/colors" target="_blank" rel="noopener noreferrer">Here are all the colors available with Vuetify</a>.

There are a number of helper components available to use with the toolbar. One helper component is the toolbar side icon. This is the hamburger menu. I have positioned it first in the toolbar.

Another helper component is the toolbar title. I have added it after the toolbar side icon. I am displaying the appTitle which is defined in the data.

Next, I have a series of buttons. Vuetify buttons use the &lt;v-btn&gt; component. For the first three buttons, I am specifying a prop of <b>flat</b>. Flat buttons have no box shadow and no background. Only on hover is the container for the button shown. This allows me to create buttons that mimic a traditional menu look and feel.

For the <i>JOIN</i> button I am not using the flat prop. I am adding a color to the button.

The last thing I have done on the &lt;v-toolbar&gt; is to add the prop <b>dark</b>. This prop applies the dark theme variant to the toolbar. This inverts all the text so instead of being black they are now white.
<h2>Improving the Styling in the Navigation</h2>
The first implementation of the navigation provides all the features that I would like for it to have. But I would like to make some changes. First, I don't want the hamburger menu to be shown unless I am on a small device. Likewise I don't want any button in the menu to be shown when I am on a small device.

Vuetify provides a display helper. The display helpers allow you to control the display of content. This includes being conditionally visible based upon the current viewport, or the actual element display type.

For the toolbar side icon I want it to only be visible on XS and SM devices. For MD and LG screens I want the toolbar side icon to not be visible. Likewise I want all the buttons to be shown on MD and LG screens and hidden on smaller screens.

I will add the class <b>hidden-md-and-up</b> on the toolbar side icon. I will add the class <b>hidden-sm-and-down</b> to all buttons and the spacer.

Now I am going to be a stickler here because I want to add one more layout change. When displaying the app on small devices I will only see the hamburger menu and the app title. Currently they are both on the left side of the screen. I want to change this so that the app title appears on the right side of the screen. This will provide a balance between the two items that are displayed.

To do this I am going to add a new &lt;v-spacer&gt; between the toolbar side icon and the toolbar title. The spacer will move everything after it to the right side of the screen. But I only want this spacer to appear on small screens. So I add the class <b>hidden-md-and-up</b> to it.

Here is the final code:
<pre class="prettyprint"><xmp><v-toolbar app color="brown darken-4" dark>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-toolbar-title>{{appTitle}}</v-toolbar-title>
    <v-btn flat class="hidden-sm-and-down">Menu</v-btn>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-btn flat class="hidden-sm-and-down">SIGN IN</v-btn>
    <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
</v-toolbar></xmp></pre>
If you want to see how it looks when you resize the screen, here is the first giphy I have ever created. :-)
<img src="http://www.jenniferbland.com/wp-content/uploads/resizescreen-1024x248.gif" alt="" width="1024" height="248" class="alignnone size-large wp-image-1572" />
<h2>Creating the Navigation for small screens</h2>
For small screens we will use Vuetify's &lt;v-navigation-drawer&gt; component. If we add this to the template, we will immediately get an error. This is because every Vue component is expected to have just one root in the template. By having both a &lt;v-navigation-drawer&gt; and &lt;v-toolbar&gt; in our template, we have two roots. To avoid this create a &lt;span&gt; to wrap around both.

Here is the code for the navigation drawer:
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
</style></xmp></pre>
Let me explain what I have put in for the drawer navigation. I have added the prop <b>app</b>. This is the same prop we added for toolbar. Next I have added a v-model that is looking for the data item called drawer. In data the drawer will be initially set to <b>false</b>. This means the drawer is closed. The drawer will open when it is true and close when it is false. I have added a click method on the toolbar side icon. When you click on the hamburger menu it will change the value of drawer from true to false or vice versa.

The last item I have added is to give it a class with a color of <b>brown lighten-2</b>. I decided to add a color to my drawer since the default color is white.

Next I am using Vuetify's &lt;v-list&gt; component. In data I have created an array called items. This is an array of objects. Each object has a text key and the value is what is displayed in the menu. I am using a data item instead of hard-coding the menu items in the list because we will be using this in later series when we add authentication.

In data, I have added drawer and items:
<pre class="prettyprint"><xmp>export default {
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
};</xmp></pre>
When we click on the hamburger menu this is what the drawer will look like:

[caption id="attachment_1390" align="alignnone" width="401"]<img class="size-full wp-image-1390" src="https://www.jenniferbland.com/wp-content/uploads/drawer.png" alt="" width="401" height="274" /> Drawer navigation for small devices[/caption]


<h2>Adding Navigation to the Application</h2>
Now that we have created our AppNavigation component we need to add it to our application. Open up the App.vue file. Inside that file we will need to import our AppNavigation component. Then we can place it in our application.

Here is the code you should have in your App.vue file:
<pre class="prettyprint"><xmp> <template>
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
</style></xmp></pre>
First you need to import the AppNavigation. When I import it I give it a name of AppNavigation. In the script I have added a components object that contains AppNavigation. The format of the name is important. When the component is added it will hyphenate the name. When I put the component in the html template I use the hyphenated name of &lt;app-navigation&gt;.

<i><b>NOTE:</b> if you are watching the code closely you will notice that I removed the &lt;transition&gt; and placed it directly on the &lt;v-content&gt;. Just wanted to let you know I made that change since I really didn't want to go back and update all the pictures!</i>
<h2>Creating the content for our Home Page</h2>
We are going to add a full-screen image for our home page. Then we are going to add text over the image. Instead of putting our code directly in the Home.vue file located in the views folder, I am going to create a new Vue component. In the components folder create a new file called HomeHero.vue.

Vuetify has a 12 point grid system. Built using flex-box, the grid is used to layout an application's content.The <b>v-container</b> can be used for a center focused page, or given the <b>fluid</b> prop to extend its full width. v-layout is used for separating sections. The structure of your layout will be as follows, <b>v-container » v-layout » v-flex</b>.

We will use this grid system in the design for our HomeHero component. We are going to use &lt;v-container fluid&gt; for our root element in our template. We are going to add the prop <b>fill-height</b> to it. This prop will automatically adjust the container to have a height of 100% of the screen. The last thing I do is add class called <b>home-hero</b>.

In my styles I am going to add a background image to the container. This is the full-screen image that users will see when loading the website. I am using an image from unsplash.com.

Inside the container I will have a &lt;v-layout&gt;. The layout will wrap all the text displayed on top of the image. Vuetify provides typography settings that I will use to style the text. For the main text I am giving it a
<pre class="prettyprint">class="display-4 font-weight-black white--text"</pre>
The display-4 will produce text that has a font size of 112sp and a font weight of light. I am going to override that font-weight by specifying a font-weight-black. I want the text to be white so I can add <b>white--text</b> The last thing I add is to specify the text to be centered.

I will use the same styling for the second row of text. The only addition is I add an alignment of <b>mb-3</b>. Vuetify provides 5 levels of spacing. The mb is saying apply a margin-bottom of 3. This will provide some spacing between the header and subHeader text.

The last thing I add is a button toward the bottom of the screen. I add this because sometimes people might not think to scroll down to see more content since the image is fullscreen. The image is a visual indicator to the users that there is more content below.

I am using the &lt;v-btn&gt; component from Vuetify. This is the same component we used in the navigation. This time I am applying the prop fab to the button. Floating buttons are round and usually contain an icon. I am going to add an icon of a down arrow. The &lt;v-icon&gt; component requires you to enter the name of the icon to be displayed. <a href="https://material.io/tools/icons/?style=baseline" target="_blank" rel="noopener noreferrer">Here is a list of all the material icons available for you to use with Vuetify</a>.

For the button I am going to add a class that will put a margin-top of 5 and set the color to be the same brown color that I used for the menu. For the icon I set its color to be white. I also set the icon to be large.

Here is the code for the HomeHero file:
<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>

<h2>Adding HomeHero Component to Application</h2>
Now that we have created our component we need to add it to the application. Open up the Home.vue file in the views folder. Just like we did with AppNavigation, you will need to import the component and place it in the template. Here is what the Home.vue file should look like:
<pre class="prettyprint"><xmp><template>
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
</script></xmp></pre>

<h2>Adding More Content to Home Page</h2>
Right now we have a very nice looking home page. But we need to add more content to explain what our meal prep service provides to potential customers. So let's add that now.

For the content we will create a new component called HomeDetails.vue. In the components folder create a new file called HomeDetails.vue. For the content I am going to use Lorem Ipsum for the text.

I will use the Vuetify layout scheme by creating the root element with the &lt;v-container&gt; component. Inside that I will use the &lt;v-layout&gt; component. For the layout I will add the prop of <b>column</b>. Since the layout is based off of Flexbox then it will align all the content vertically. Every text item will be in a &lt;v-flex&gt; component.

The header will use the Vuetify typography class of <b>display-2</b>. I want this text to be centered. To make it center I add <b>text-xs-center</b> to the class. The last thing to add is <b>my-5</b>. This adds a margin along the y-axis which means it adds a margin-top and a margin-bottom.

Next I am going to create another &lt;v-flex&gt; entry. This entry will have a headline and a subheading of text. I want to add some white space around the text so I am adding a class of <b>mt-3</b>. This will add a margin-top of 3 to all items of text.

Here is my HomeDetails.vue file:
<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>

<h2>Adding HomeDetails to The Application</h2>
We will add HomeDetails to the application just like we did for HomeHero. Open up the Home.vue file in the views folder. You will need to import HomeDetails component. Then add it to the template below HomeHero.

Here is what the Home.vue file looks like:
<pre class="prettyprint"><xmp><template>
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
</script></xmp></pre>
When we add this new component, it causes a problem with our layout. Now the text is centered based on the total height of the image as well as the new text content. Here is what it looks like:

[caption id="attachment_1391" align="alignnone" width="880"]<img class="size-full wp-image-1391" src="https://www.jenniferbland.com/wp-content/uploads/homepageproblems.png" alt="" width="880" height="453" /> Problems with our layout.[/caption]

We can easily correct this problem by specifying a max-height for the container that has our image. We want this container to be 100% of the height of our viewport.

Open up the HomeHero.vue file. On the &lt;v-container&gt; component add a style that sets the max-height. Here is that line:
<pre class="prettyprint"><xmp><v-container fluid fill-height class="home-hero" style="max-height: 100vh;"></xmp></pre>
Now we are back to having a fullscreen image with our text centered on the image. We can then scroll down to see the details.
<h2>Creating Meal Plans Component</h2>
After the details I want to add images of the meal plans that we are offering on our meal prep website. For my meal prep website, I will be offering Keto, Paleo and Vegan meal plans. Feel free to customize your application to offer the meal plans you would like to offer to customers.

Let's create a new component. In the components folder create a new file called HomePlans.vue. We will use the Vuetify grid layout. Our root element will be a &lt;v-container&gt;. We will add a new prop of <b>grid-list-lg</b>. We will have three meal plans side-by-side. This prop puts spacing between them.

Next we have a &lt;v-layout&gt; for our header text announcing our Available Meal Plans. We will use a new Vuetify component called &lt;v-card&gt;. Our card will have an image, the name of the meal plan and some detail text. I will be using images from unsplash for each of the meal plans.

Here is the code for the HousePlans.vue file:
<pre class="prettyprint"><xmp><template>
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
</style></xmp></pre>

<h2>Adding HomePlans to the Application</h2>
We have done this already several times before. Open up the Home.vue file in the views folder. Import the HomePlans.vue component and place it in the template below HomeDetails.

This is the code for Home.vue:
<pre class="prettyprint"><xmp><template>
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
</script></xmp></pre>
This is what the meal plans section looks like:

[caption id="attachment_1392" align="alignnone" width="880"]<img class="size-full wp-image-1392" src="https://www.jenniferbland.com/wp-content/uploads/mealplans.png" alt="" width="880" height="404" /> Available meal plans.[/caption]

<h2>Get the Code</h2>
Even though this is a 4-part series, you can get the <a href="https://github.com/ratracegrad/meal-prep" target="_blank" rel="noopener noreferrer">finished code in my GitHub account</a>. Please help me out and <b>star the repo</b> when you get the code.
<h2>Summary</h2>
In the first part of this series, you have learned:
<ul>
 	<li>how to install Vue</li>
 	<li>how to add Vuetify to an application</li>
 	<li>how to create multiple components</li>
 	<li>how to style components using Vuetify</li>
</ul>

<h2>What's Next</h2>
In the next part of this series, we will cover Vue Router. Vue Router allows you to navigate between different pages in your application. For example, we show a list of menus that are available. When a user clicks on one they should be shown the details for that menu. Vue Router is what we will use to transition from the list of recipes page to the details page. See you in the next lesson.