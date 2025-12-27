---
title: Horizontal Scrolling using CSS Grid
description: Learn how to do horizontal scrolling using CSS Grid.
date: 2022-12-19
image: https://images.unsplash.com/photo-1525770041010-2a1233dd8152?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

In this previous article, I showed [how to do horizontal scrolling using flexbox](/blog/how-to-implement-horizontal-scrolling-using-flexbox). I was recently asked how to do the same scrolling but using CSS Grid instead. This article shows you how to do horizontal scrolling using CSS Grid.

## Setting up my project

This project will contain the following files:
- index.html
- style.css

It will also include one folder called `images`. Inside this folder will be five images. The images in the folder are:
- image1.jpg
- image2.jpg
- image3.jpg
- image4.jpg
- image5.jpg


<!--more-->

## Our basic website

The `index.html` file contains the code for our basic website. It will display our five images in a horizontal scroll.

Here are the contents of my `index.html` file:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS Grid Horizontal Scroll</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <img src="images/image1.jpg" alt="image1">
    <img src="images/image2.jpg" alt="image2">
    <img src="images/image3.jpg" alt="image3">
    <img src="images/image4.jpg" alt="image4">
    <img src="images/image5.jpg" alt="image5">
    <!-- more images -->
</div>
</body>
</html>
```

Let's walk through this code. In the `head` I have a link to my `style.css` file. I will cover this file later.

The body of the website contains a `div` with a.class of `container`.

Inside the div are five `img` elements that point to the five images located in the `images` folder.

That is it for our `index.html` file.

## Adding horizontal scrolling of images
The secret sauce of making the images scroll horizontally is our CSS code.

Here is the code in the `style.css` file:

```css
.container {
    display: grid;
    grid-auto-columns: calc(100% - 4rem);
    grid-auto-flow: column;
    grid-gap: 16px;
    overflow-x: auto;
}

.container img {
    width: 100%;
    height: auto;
}
```

Let's walk through this code. 

`display: grid;` - This sets the container element to be a grid container, which means that its child elements will be placed onto a grid of rows and columns.

`grid-auto-columns: calc(100% - 4rem);` - This sets the width of any additional columns that are created in the grid to be the full width of the container minus 4rem (which is the same as 64px if the root font size is 16px).

`grid-auto-flow: column;` - This specifies that new rows should be created as new columns, rather than as new rows.

`grid-gap: 16px;` - This sets the gap between the grid cells to be 16px.

`overflow-x: auto;` - This causes a horizontal scrollbar to be displayed if the content of the grid overflows the container element horizontally.

`.container img { width: 100%; height: auto; }` - This sets the width of all img elements that are children of the .container element to be 100% of their parent element's width and sets their height to be automatically calculated based on their aspect ratio.

## Working Code

Here is an animated gif showing our horizontal scroll.

![](/HorizontalScrollingWithCSSGrid.gif)

## Conclusion

Wanted to take the time to show how to do horizontal scrolling using CSS Grid.  If you want to see [how to do this using Flexbox check out my other article](/blog/how-to-implement-horizontal-scrolling-using-flexbox).