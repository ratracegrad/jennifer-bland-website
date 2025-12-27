---
title: How Hoisting in JavaScript Can Cause Unexpected Results
description: Learn how hoisting in JavaScript can cause unexpected results.
date: 2015-04-10
image: https://images.unsplash.com/photo-1618616191524-a9721186cbe4?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Your can experience unexpected results in your JavaScript programs due to execution that does not occur like you expected. A good example of this is that you can actually use a variable in JavaScript before you declare it. Here is an example:

<pre class="prettyprint">
x = "Jennifer";
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var x;
</pre>

JavaScript allows this code to function due to a concept known as <em>"hoisting."</em> Hoisting the default behavior of a JavaScript application once it executes.

Within the current scope in a JavaScript application, all variables are "hoisted" to the top regardless of where they are declared. 

<!--more-->


The tricky part is that only the declaration of the variable will be hoisted. If the variable is also initialized, the variable will be set to undefined when it is hoisted to the top. The variable value is changed from undefined to its initialized value when the execution reaches the variable.

Let me give you some examples of how hoisting can cause some unexpected results.

<pre class="prettyprint">
var firstName = "Jennifer";
alert(firstName); // 'Jennifer'
</pre>

In the example above the alert will say "Jennifer" just as we expected. What do you think the alert will display in the following example?
<pre class="prettyprint">
var firstName = "Jennifer";
alert(firstName + ' ' + lastName);
var lastName = "Bland";
</pre>

If your answer was the alert would display "Jennifer Bland" then you would be wrong. In reality it actually displays "Jennifer undefined".

When the execution starts the variable declarations are hoisted to the top so the code would look like this
<pre class="prettyprint">
var firstName;
var lastName;
alert(firstName + ' ' + lastName);
</pre>

As the code steps through each line during execution it will actually assign values to the variables as they are initialized. So on the first line it will assign the value of "Jennifer to the firstName variable.

Then the second line is executed. The variable lastName was hoisted to the top at the start of execution and assigned a value of undefined.

When the alert is executed it will display "Jennifer undefined" since only the firstName variable has been initialized.

Now let's compare the results of the following code.
<pre class="prettyprint">
var firstName = "Jennifer";
alert(firstName + ' ' + lastName);
var lastName = "Bland";
alert(firstName + ' ' + lastName);
</pre>

The first alert will display "Jennifer undefined" as we have seen previously. The second alert will display "Jennifer Bland". 

The reason is the variable lastName is initialized when it is reached in the execution. Since it is initialized it will be displayed properly in the second alert message.

<h2>How to Avoid Hoisting Problems in JavaScript</h2>
The easiest way to avoid hoisting problems is to declare all variables at the beginning of the scope. In fact this is considered a JavaScript programming Best Practice.