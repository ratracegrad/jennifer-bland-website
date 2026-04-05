---
title: How to implement horizontal scrolling using Flexbox
description: Learn how to implement horizontal scrolling using Flexbox.
date: 2019-07-20
image: https://images.unsplash.com/photo-1588058365548-9efe5acb8077?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

![](/horizontalScrollingWithFlexbox.png)

If you create websites, chances are you have been asked to create a horizontal scrolling component. It is extremely easy to implement this using just a few lines of Flexbox. Let me show you how.

## Project Layout

We need to create a container that will contain all the images that we want to scroll. Here is the code:

```html
<div class="container"><img src="images/bhutan1.jpg" alt="Bhutan" />
<img src="images/bhutan2.jpg" alt="Bhutan" />
<img src="images/bhutan3.jpg" alt="Bhutan" />
<img src="images/bhutan4.jpg" alt="Bhutan" />
<img src="images/bhutan5.jpg" alt="Bhutan" />
<img src="images/bhutan6.jpg" alt="Bhutan" />
<img src="images/bhutan7.jpg" alt="Bhutan" /></div>
```

## Styling the Project

Next step is to add styling so that the container scrolls horizontally. To do this I make the container display as flexbox. In addition, I am setting the overflow-x value to auto. Here is the style:

```css
.container {
    display: flex;
    overflow-x: auto;
}
```

This is what the horizontal scroll looks like:

![](/scrolling1.gif)

That does provide our requirement of a horizontal scroll area. I am not satisfied with how it looks. There are three things I want to change:

-   Add white space between the images
-   Get rid of the horizontal scrollbar
-   Place the scroller in the middle of the screen

The images are touching. Let’s add some white space between them. Here is the CSS for this:

```css
.container img {
    margin-right: 15px;
}
```

Next, I want to get rid of the horizontal scrollbar which I can do with this code:

```css
.container::-webkit-scrollbar {
    display: none;
}
```

The last change that I want to do is to center the scrolling area in the center of the screen. By default, the height of the html is the height of the elements. I need to make the height to be 100% of the viewport. Flexbox provides a way to center items with the align-items setting. To use this functionality, I am going to convert the body to display as flexbox. Here is the code that I am going to add for the body:

```css
body {
    display: flex;
    align-items: center;
    height: 100vh;
}
```

With these changes, here is what our final horizontal scroll area looks like.

![](/finalScrolling.gif)

## Conclusion

It is very easy to create a horizontal scroll area using flexbox. Thanks for reading.
