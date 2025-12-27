---
title: The Difference Between call and apply in JavaScript
description: Learn the difference between call and apply in JavaScript.
date: 2015-04-17
image: https://images.unsplash.com/photo-1705163630188-bd3f0844113b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

JavaScript has functions.  When you execute that function then the contents of the function are performed. The easiest way to execute a function is to call it like getName().

JavaScript also provides two other methods to invoke that function:
<ul>
	<li>getName.apply()</li>
	<li>getName.call()</li>
</ul>

You might ask what is the difference between the two? Does one provide better performance than the other? Is one better to use than the other?

The best way to understand the difference between the two is to examine the pseudo syntax for each.

<pre class="prettyprint">
function.apply(thisArg, [argsArray]);
function.call(thisArg[, arg1[, arg2[, ...]]]);
</pre>

<!--more-->

<h2>.call</h2>
The call method calls a function with a given this value and arguments provided individually. The arguments are listed in comma separated format.

The first argument is the <em>this</em> value. This refers to the current object which is also know as the calling object. 

With call you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.

<h2>.apply</h2>
The apply method calls a function with a given this value and arguments provided as an array.

Just like call you can write a method once and the inherit it in another object, without having to rewrite the method for the new object.

<h2>The Difference</h2>
While the syntax of .apply() and .call() are almost identical, the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.