---
title: "Learn CSS by Creating the Microsoft Logo (Version 2)"
description: Improve your CSS skills by creating the Microsoft logo using the box-shadow property.
date: 2022-12-29
image: https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

One of the best ways to learn CSS is by creating something useful while you learn. I will show you how to use the following CSS items by creating the Microsoft logo:

- box-shadow

In a previous article, I showed you how to create the Microsoft Logo using CSS Grid. In this article, I will show you how to create the same logo using the `box-shadow` property.

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
	<title>Microsoft Logo v2</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

</body>
</html>
```

In the `style.css` file add the following starter code:

```css
body{
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: azure;
}
```

## box-shadow

The `box-shadow` CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.

We will take advantage of that by creating one square of the logo and then adding three shadows for the other squares.

Add the following one line inside the `body` tag in your `index.html` file:

```html
<div class="microsoft-logo"></div>
```

Add this code to your `style.css` file:

```css
.microsoft-logo {
	background-color: #f25022;
	box-shadow: 
			220px 0 0 0 #7fba00,
			0 220px 0 0 #00a4ef,
			220px 220px 0 0 #ffb900;
	height: 200px;
	width: 200px;
}
```

The first line in the `box-shadow` property creates a shadow 220px on the right side with a green color. Since our square is 200px wide and high, this starts the shadow 20px to the right of the initial box.

The 2nd line in the `box-shadow` property creates a shadow 220px below the initial box and sets the color to blue.

The 3rd line in the `box-shadow` property creates a shadow 220px to the right and 220px below the initial box and sets the color to orange.

## Final Logo

If you view your `index.html` file in a browser you should see the completed Microsoft Logo:

![completed microsoft logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672329839/Screenshot_2022-12-29_at_11.03.48_AM_ehepan.png)

## Let's Connect

Thanks for reading my article today. You can get the [source code here](https://github.com/ratracegrad/microsoft-logo-pure-css-version-2).

If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.