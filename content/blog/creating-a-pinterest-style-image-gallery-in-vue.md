---
title: Creating a Pinterest Style Image Gallery in Vue
description: Learn how to create a Pinterest style image gallery in Vue.
date: 2019-11-01
image: https://images.unsplash.com/photo-1523461811963-7f1023caeddd?q=80&w=2330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

In this article I will show a quick and easy way to create a Pinterest style layout grid to showcase images. This grid will be responsive meaning that it will automatically resize as the browser window increases or decreases in size.This will display images regardless of their individual height and does not level out all images to have them start on the same row. Instead when the image in a column ends then the next image starts leaving you with a picture board layout where all images are not aligned equally. So let's get started.

## What we will be creating

This is the flowing Pinterest style layout we will be creating. ![](/Screen-Shot-2019-10-31-at-5.13.27-PM-1024x599.png)

## Getting images from Unsplash

Pinterest is a platform that allows users to display images on a specified topic like a wedding or vacation or any other idea. In order to make this application work, I need a way to get a range of images that corresponds to a specific topic. A great website for images is Unsplash. [Unsplash's website](https://unsplash.com/) has a search field where you can enter a topic to search for and it will return all images that correspond to that topic. We are going to duplicate this setup by allowing our users to click buttons that correspond to the search for a single topic. When the user clicks on the button it will show images from Unsplash using our Pinterest style grid.

## Creating a Developer Account

To use the Unsplash API you need to create a developer account. Head over to:

```
https://unsplash.com/developers
```

Click on the "Register as a Developer" button. Fill in the required fields to create your account. Once you have created your account you will have to verify your email. Just click on the email that they send you to verify your account. ![](/Screen-Shot-2019-10-31-at-4.39.56-PM-1024x459.png) Login to your account. You will need to create a new application. Click on the "New Application" button. ![](/Screen-Shot-2019-10-31-at-6.01.58-PM.png) You will be presented with four items that you must click to acknowledge each of them. Once all are checked then click the "Accept Terms" button.When you application you will be assigned a unique access key. ![](/Screen-Shot-2019-10-31-at-6.07.31-PM.png) We will use this access key when calling the Unsplash API to retrieve images.

## Creating our application

Now we are ready to create our Pinterest clone in Vue.js. We will be using the Vue CLI to create our application. If you do not have the Vue CLI installed, you can install it globally with this command:

```
npm install -g @vue/cli
```

We can now use the Vue cli to create our application. I am going to call my application vue-pinterest. To create the application enter this command in your terminal:

```
vue create vue-pinterest
```

The CLI will ask you if you want to use the default settings or manually select features. ![](/Screen-Shot-2019-10-31-at-6.15.19-PM.png) For this demo I am using the default settings so you can just hit enter. Once this command has finished running, it will give you instructions on how to access the newly created application. ![](/Screen-Shot-2019-10-31-at-6.18.49-PM.png) So let's follow these instructions and change into the vue-printerest directory with this command:

```
cd vue-pinterest
```

To start our server you run the command:

```
npm run serve
```

We can test that our server is running by opening our browser and going to this url:

```
localhost:8080
```

![](/Screen-Shot-2019-10-31-at-6.50.50-PM.png)

## Adding Packages to our Application

If you still have your server running you will need to stop it. We are going to be using two packages to provide the functionality for our Pinterest style grid application. The first package we are going to use is **axios**. Axios will provide the http client that we use to call the Unsplash API to retrieve pictures. The second package is **vue-stack-grid**. This package is a Vue component that will create a Pinterest style layout for us. To install them run this command:

```
npm install axios vue-stack-grid
```

## Building our Application

Since we created our application using the Vue CLI it created an initial layout for us. We are just going to delete all of this and start with our design. Open up the App.vue file in the src directory. In the template section delete everything except for the initial div. Your template should look like this:

```
<template>
  <div id="app">
  </div>
</template>
```

We are going to start by creating a container that will be used to display all our images. Inside that container we are going to have a wrapper where we will put all our buttons. Each button will display images related to a single topic like images displaying autumn or the ocean. We will start with one button and later on we will add additional buttons. To do that add the following to your App.vue file:

```
<template>
  <div id="app">
    <div class="container">
      <div class="button-wrapper">
        <button class="btn" @click="searchUnsplash('Autumn')">Autumn</button>
      </div>
    </div>
  </div>
</template>
```

Now that we have that added, let's add some styling for out container, button-wrapper and btn classes. These styles will be added in the **style** section at the bottom. For the **container** let's set it to have a width of 80% of the screen width and center it on the screen. This will provide a familiar look-and-feel for our website visitors where content is centered on the screen with an equal amount of white space on both sides of the content. For the **button-wrapper** class I want to use flexbox to center the buttons on the screen. I also want to provide a margin below the buttons so there is some white space between the buttons and where the images start being displayed. The last style I want to put in is for the **btn** class. I want to give the button a green background with white text. I want the button to have padding and a specified font-size. Here are the styles you need to add for these three classes:

```
.container {
  width: 80vw;
  margin: 0 auto;
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.btn {
  font-size: 18px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
}
```

## Displaying images from Unsplash

Next we need to call the Unsplash API to get images. In the button I added an @click function called **searchUnsplash**. Let's write this function next. This function will use the axios module we installed earlier. To use that module we need to import it. On the first line of the **script** section add this line to import axios:

```
import axios from "axios";
```

Next let's create our **searchUnsplash** function. Add a methods section to our script and create the function. The function will take in one argument which is the topic that we want to search for on Unsplash. In this function we want to call the Unsplash API and get back a list of pictures. To make this call using axios we will need to provide our app access key we were assigned when we created our application on Unsplash. We will store the images we are returned in a variable called images. Here is the code for the searchUnsplash function just be sure to insert your access key where noted:

```
searchUnsplash(topic) {
      this.images = [];
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=20`,
          {
            headers: {
              Authorization:
                "Client-ID <YourAccessKeyGoesHere>",
              "Accept-Version": "v1"
            }
          }
        )
        .then(response => {
          this.images = response.data.results;
        })
        .catch(() => {
          this.images = [];
        });
    }
```

The url that we are calling is the url for Unsplash's API. I am passing the query as the topic that we want to search for. The only other option I am adding is setting the per\_page to show 20 images instead of the default 10. I want to display more images so that we have a bigger image gallery. We are storing the results from the API call in a variable called images. So let's create that now. Add a data section in our script and add images. We set the default value to an empty array. Here is what your data section should look like:

```
data: () => ({
    images: []
  }),
```

## Adding our Pinterest grid

The last thing we need to do is to display the images we get back from our **searchUnsplash** function. To do that we need to import in both **Stack** and StackItem from the **vue-stack-grid** package we installed earlier. So below the line that imports axios add the following import:

```
import { Stack, StackItem } from "vue-stack-grid";
```

After we import it we need to add these two components into our application. Add a components section with these two items. Your components section should look like this:

```
components: {
    Stack,
    StackItem
  },
```

Next we need to add these two components in our **template** section. The first component **stack** will be used to set the width of each column in our grid as well as the padding between each image. The second component **stack-item** will be the wrapper for each image displayed in our grid. The **stack** component has some props available to use. The props we are going to use are:

-   column-min-width - this is the width of each column of images
-   gutter-width - this is the distance between each column in our grid
-   gutter-height - this is the distance above and below each image in a column
-   monitor-images-loaded - this prop tells the component that we are displaying images

We will add a style to the **stack-item** tag to provide some animation when images are initially displayed and when the screen is resized. Here is what our template looks like now:

```
<template>
  <div id="app">
    <div class="container">
      <div class="button-wrapper">
        <button class="btn" @click="searchUnsplash('Autumn')">Autumn</button>
      </div>
      <stack
              :column-min-width="300"
              :gutter-width="15"
              :gutter-height="15"
              monitor-images-loaded
      >
        <stack-item
                v-for="(image, i) in images"
                :key="i"
                style="transition: transform 300ms"
        >
          <img :src="image.urls.small" :alt="image.alt_description" />
        </stack-item>
      </stack>
    </div>
  </div>
</template>
```

## Testing our Application

Start your server by entering this command in the terminal:

```
npm run serve
```

Go to your browser and open up this url:

```
localhost:8080
```

You should see this display: ![](/Screen-Shot-2019-10-31-at-5.13.27-PM-1024x599.png)

## Adding more search buttons

To improve on our application, let's add two more buttons that users can click to search for images. We will add buttons to search for **cliff** and **ocean**. If you want to search on different terms you can. You can copy the line that has our button and paste it in two times so we have three buttons. For each button make sure you update the term that is passed to the searchUnsplash function to be the term you want to search for. Also change the text of the button to reflect that term. Now we have three buttons that search for different terms. The only problem is that all three buttons are touching each other. I would like to add some white space between the buttons. We can do that by adding this code to the style section:

```
.btn:not(:last-child) {
  margin-right: 10px;
}
```

While we are adding styles let's add one last style for our images that are being displayed. Pinterest adds rounded corners to images so we want to do the same. We also want the image to be the full width of the column it is in. The height of the image will be adjusted accordingly to the width of the image. This will allow the image to resize if the screen is resized. So add this last style:

```
img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
```

## Get the code

You can get a copy of my code for this article from my GitHub repo here. Please star the repo! You can view a [live demo](https://vue-pinterest.herokuapp.com/) of the app here.

## Conclusion

We have quickly and easily created a Pinterest clone for displaying images in a grid. Thank you for reading. Please check out my other articles. You can also [click here to follow me on Twitter](https://twitter.com/ratracegrad).
