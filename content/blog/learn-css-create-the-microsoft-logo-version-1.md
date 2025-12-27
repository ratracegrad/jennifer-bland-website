---
title: "Learn CSS by Creating the Microsoft Logo (Version 1)"
description: Learning CSS can be boring, but creating something useful while you learn can make it more fun. I will show you how to create the Microsoft logo in pure CSS.
date: 2022-12-29
image: https://images.unsplash.com/photo-1737922342275-71bab46ace83?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

One of the best ways to learn CSS is by creating something useful while you learn. I will show you how to use the following CSS items by creating the Microsoft logo:

- CSS Grid
- Multiple CSS Classes

## What we will be creating

We will create the Microsoft logo in pure CSS. It will look like this:

![Microsoft Logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672329839/Screenshot_2022-12-29_at_11.03.48_AM_ehepan.png)


<!--more-->

## Create our starter files

Let's start by creating two files called `index.html` and `style.css`. In your `index.html` file add the following starter code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Microsoft Logo</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
```

In my previous articles on creating a logo using pure CSS, I used Flexbox to center the logo on the screen. Since I will be using CSS Grid in this article, I am giving you the equivalent code.

In the `style.css` file add the following starter code:

```css
body{
  margin: 0;
  padding: 0;
  height: 100vh;
  display: grid;
  place-items: center;
  background: azure;
}
```

## CSS Grid

CSS Grid is a two-dimensional grid-based layout system that, compared to any web layout system of the past, completely changes the way we design user interfaces. CSS Grid is the very first CSS module created specifically to solve the layout problems we have all been hacking our way around for as long as we have been making websites.

To create the Microsoft Logo, we need 4 colored squares. The squares are laid out in a design of 2 rows and 2 columns. The gap between the columns and the rows is the same size.

I will show you how to lay this out using CSS grid but first, we need to add HTML code for the squares and the container for the logo.

## Multiple CSS Classes

Inside the `body` tag in our `index.html` file we need to add the necessary code to display our Microsoft logo.

First, we will need a container that will wrap around each of the four squares in the logo. Inside this container, we will have four `div` elements. Each of these elements will represent one of the squares in the logo.

Each square will have multiple CSS classes assigned to it. The first class will be our `square` class that will define its height and width. The second class will be a color assigned to that square.

Update your `index.html` file so it looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Microsoft Logo</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class="microsoft-logo">
		<div class="square red"></div>
		<div class="square green"></div>
		<div class="square blue"></div>
		<div class="square yellow"></div>
	</div>
</body>
</html>
```

## Updating our styles

Previously I talked about CSS grid and creating a layout that has 2 rows and 2 columns. In the `style.css` file add the following code to create our grid layout:

```css
.microsoft-logo{
	display: grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
```

The last thing we need to do with our styles is to define our `square` class and set colors for each square. For this demo, I am going to set the square to be 200px in width and height.

Add the following code to your `style.css` file:

```css
.square {
	width: 200px;
	height: 200px;
}

.red{ background-color:#F35325; }
.green{ background-color:#81BC06; }
.blue{ background-color:#05A6F0; }
.yellow{ background-color:#FFBA08; }
```

## Final Logo

If you view your `index.html` file in a browser you should see the completed Microsoft Logo:

![completed Microsoft Logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672329839/Screenshot_2022-12-29_at_11.03.48_AM_ehepan.png)

## Let's Connect

Thanks for reading my article today. You can get the [source code here](https://github.com/ratracegrad/microsoft-logo-pure-css-version-1).

If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.

