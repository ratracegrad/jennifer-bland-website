---
title: "Learn CSS by Creating the Git Logo"
description: Here is a fun project to learn CSS by creating the Git logo.
date: 2023-01-03
image: https://images.unsplash.com/photo-1707061229170-fc232a07a55f?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

One of the best ways to learn CSS is by creating something useful while you learn. I will show you how to use the following CSS items by creating the Git logo:

- Transform to rotate an image
- position relative and absolute
- pseudo classes ::before and ::after

## What we will be creating

We will create the Git logo in pure CSS. It will look like this:

![git logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672502463/Screenshot_2022-12-31_at_11.00.41_AM_hf49uy.png)

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
    <title>Git Logo</title>
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

## Dissecting our Logo

The Git logo is an orange square that is rotated 45 degrees. Inside the square are two lines. 

The first line reaches the edge of the square. It has a circle at the end of the line. It also has another circle in the middle of the line.



The second line runs vertically down the middle of the square. The line has a circle at the end.

Now we need to add our code for our logo and the two lines. Add the following code inside the `body` tags in your `index.html` file:

```html
    <div class="git-logo">
        <div class="line1"></div>
        <div class="line2"></div>
    </div>
```

## transform: rotate()

The `transform` CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.

The Git logo is a square that is rotated 45 degrees. We will use the CSS `transform` property to rotate our logo.

Add the following code to your `style.css` file:

```css
.git-logo{
    height: 150px;
    width: 150px;
    background-color: #f06033;
    border-radius: 15px;
    position: relative;
    transform: rotate(45deg);
}
```

This is what our logo likes like now:

![in progress logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672505458/Screenshot_2022-12-31_at_11.48.49_AM_razrvm.png)

## Adding our first line

Our first line is the one that attaches to the edge of the square. The square is 150px long. I will make the line have a length of 110px. The color of the line will be white.

This line will be positioned absolutely to make sure it is in the right spot on the logo.

Add the following code to your `style.css` file:

```css
.line1{
    width: 110px;
    background-color: white;
    height: 10px;
    top: 40px;
    position: absolute;
}
```

Our logo looks like this now:

![git logo with line](https://res.cloudinary.com/ratracegrad/image/upload/v1672506021/Screenshot_2022-12-31_at_12.00.13_PM_zgczgf.png)

## pseudo class ::before

In CSS, `::before` creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.

We will use this property to create the circle in the middle of the line. We will position this circle as absolute. As it is a circle it will have the same height and width and a broder-radius of 50%.

Add this code to your `style.css` file:

```css
.line1::before{
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    top: -8px;
    left: 30px;
}
```

This is what our logo looks like now:

![incomplete logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672506379/Screenshot_2022-12-31_at_12.06.05_PM_jxe3dq.png)


## pseudo class ::after

In CSS, `::after` creates a pseudo-element that is the last child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.

We will do the same thing to add a ball at the end of our first line.

Add the following code to your `style.css` file:

```css
.line1::after{
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    top: -8px;
    left: 90px;
}
```

## Adding the second line

Just like the first line, we will add a second line. This line will also be positioned absolutely. We will use the top and left values to set the location. The last thing we need to do is to rotate the line 45 degrees like the square.

Add the following code to your `style.css` file:

```css
.line2{
    width: 90px;
    background-color: white;
    height: 12px;
    position: absolute;
    top: 70px;
    left: 30px;
    transform: rotate(45deg);
}
```

Our logo looks like this now:

![incomplete logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672506682/Screenshot_2022-12-31_at_12.11.13_PM_xegs6k.png)

The last thing we need to do is to use the pseudo class ::before to add a circle to the end of this line.

Add this code to your `style.css` file:

```css
.line2::before{
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    top: -8px;
    left: 70px;
}
```

## Final Logo

If you view your `index.html` file in a browser. you should see the completed Git Logo:

![completed git logo](https://res.cloudinary.com/ratracegrad/image/upload/v1672502463/Screenshot_2022-12-31_at_11.00.41_AM_hf49uy.png)


## Let's Connect

Thanks for reading my article today. You can get the [source code here](https://github.com/ratracegrad/git-logo-pure-css).

If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.