---
title: Pass Arguments As An Object in JavaScript
description: Stop passing multiple arguments to a function. Pass an object instead.
date: 2023-01-13
image: https://images.unsplash.com/photo-1598907518593-3c70d5f36130?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

When you learn to program in JavaScript, you learn to name the arguments that you pass into a function. I am going to show you why you should pass your arguments to a function as an object. Once you see why you will never go back to naming every argument you pass into a function. I promise you.

## Example of naming arguments

I have a function called `createBook`. The function takes 6 arguments:

- title
- subtitle
- author
- publisher
- datePublished
- descr


<!--more-->

Here is an example of my function and how you would call it:

```javascript
const createBook = (title, subtitle, author, publisher, datePublished, descr) => {
  // code goes here
}

createBook('Make 7 Real World Apps in Vue 2', '', 'Jennifer Bland', 'Gumroad', '2022', 'Learn how to create 7 real world apps using Vue 2');
```

If you were to look at this code, you would not have any idea what each of these arguments was much less know the correct order in which you have to enter them.

## Passing Arguments As An Object

I can make your life easy by showing you how to pass arguments as an object. Here is what it looks like:

```javascript
const createBook = ({ title, subtitle, author, publisher, datePublished, descr }) => {
	// code goes here
}

createBook({
	author: 'Jennifer Bland',
	publisher: 'Gumroad',
	title: 'Make 7 Real World Apps in Vue 2',
	descr: 'Learn how to create 7 real world apps using Vue 2',
	datePublished: '2022'
	subtitle: ''
});
```

Now when you come across this code, it is clear what parameters are being passed to the function. Bonus: you don't have to worry about the order of the arguments since we are using destructuring in the function.

## Buy My Book

I did write a book titled 'Make 7 Real World Apps in Vue 2'. If you are interested in reading it, you can [get it on Gumroad](http://https://jenniferbland.gumroad.com/l/CMnHu?_gl=1*icqykf*_ga*OTY3ODk1ODQwLjE2NzI1Mzk2MDU.*_ga_6LJN6D94N6*MTY3MzEwNTg0Ny40LjEuMTY3MzEwNzEwMy4wLjAuMA.. "get it on Gumroad").

## Let's Connect

Thanks for reading my article today. If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.