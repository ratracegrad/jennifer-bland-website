---
title: Console.trace in JavaScript
description: Learn how to use console.trace to debug your code.
date: 2023-01-10
image: https://images.unsplash.com/photo-1589019697330-522f45f9d1de?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

In yesterday's article, I showed you two ways to format your output to the console in JavaScript. If you have not read it, [check it out here](/blog/formatting-output-to-the-console).

Today I wanted to show you another console command: `console.trace()`.

## console.trace()
The console.trace() method outputs a stack trace to the Web console.

Here is an example of how to use this:

```javascript
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

In the console, the following trace will be displayed:

```javascript
bar
foo
<anonymous>
```

## Let's Connect

Thanks for reading my article today. If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.
