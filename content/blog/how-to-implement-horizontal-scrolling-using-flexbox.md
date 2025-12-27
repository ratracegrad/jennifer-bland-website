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

<img class="alignnone size-full wp-image-1582" src="/horizontalScrollingWithFlexbox.png" alt="" width="1000" height="603" />
<p>If you create websites, chances are you have been asked to create a horizontal scrolling component. It is extremely easy to implement this using just a few lines of Flexbox. Let me show you how.</p>

<h2>Project Layout</h2>

<p>We need to create a container that will contain all the images that we want to scroll. Here is the code:</p>

<!--more-->


<pre class="prettyprint"><xmp><div class="container"><img src="images/bhutan1.jpg" alt="Bhutan" />
<img src="images/bhutan2.jpg" alt="Bhutan" />
<img src="images/bhutan3.jpg" alt="Bhutan" />
<img src="images/bhutan4.jpg" alt="Bhutan" />
<img src="images/bhutan5.jpg" alt="Bhutan" />
<img src="images/bhutan6.jpg" alt="Bhutan" />
<img src="images/bhutan7.jpg" alt="Bhutan" /></div></xmp></pre>

<h2>Styling the Project</h2>

<p>Next step is to add styling so that the container scrolls horizontally. To do this I make the container display as flexbox. In addition, I am setting the overflow-x value to auto. Here is the style:</p>

```CSS
.container {
    display: flex;
    overflow-x: auto;
}
```

<p>This is what the horizontal scroll looks like:</p>

<img src="/scrolling1.gif" alt="" width="406" height="820" class="alignnone size-full wp-image-1583" />

<p>That does provide our requirement of a horizontal scroll area. I am not satisfied with how it looks. There are three things I want to change:</p>
<ul>
	<li>Add white space between the images</li>
	<li>Get rid of the horizontal scrollbar</li>
	<li>Place the scroller in the middle of the screen</li>
</ul>


<p>The images are touching. Let’s add some white space between them. Here is the CSS for this:</p>

```CSS
.container img {
    margin-right: 15px;
}
```

<p>Next, I want to get rid of the horizontal scrollbar which I can do with this code:</p>

```CSS
    display: none;
}
```

<p>The last change that I want to do is to center the scrolling area in the center of the screen. By default, the height of the html is the height of the elements. I need to make the height to be 100% of the viewport. Flexbox provides a way to center items with the align-items setting. To use this functionality, I am going to convert the body to display as flexbox. Here is the code that I am going to add for the body:</p>

<pre class="prettyprint"><xmp>body {
    display: flex;
    align-items: center;
    height: 100vh;
}</xmp></pre>

<p>With these changes, here is what our final horizontal scroll area looks like.</p>

<img src="/finalScrolling.gif" alt="" width="410" height="824" class="alignnone size-full wp-image-1584" />

<h2>Conclusion</h2>
<p>It is very easy to create a horizontal scroll area using flexbox. Thanks for reading.</p>