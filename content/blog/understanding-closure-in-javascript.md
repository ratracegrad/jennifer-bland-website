---
title: Understanding Closure in JavaScript
description: Learn how to understand closure in JavaScript.
date: 2015-04-13
image: https://images.unsplash.com/photo-1570469664747-a3dc793a7dcc?q=80&w=3733&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

A closure is a function object that retains ongoing access to the variables of the context it was created in (even after the outer function calls it was created within have returned).

In other words, the function defined in the closure 'remembers' the environment in which it was created.

Let me give you an example:
<pre class='prettyprint'>
function getName()
  var firstName = 'Jennifer';
  function showName()
    alert(firstName);
  }
  showName();
}
getName();
</pre>

<!--more-->


In the above example, firstName is a local variable created by getName function. The getName function also creates a function called showName.

The showName function is only available within the body of the getName function. The showName function has not local variables of its own. However, it has access to the variables of outer functions and so can use the variable firstName declared in the parent function.

Normally, the local variables within a function only exist for the duration of the function's execution.  Once getName() has finished executing, it is reasonable to expect that the firstName variable will no longer be accessible. But since the alert displays the value of the firstName variable then this is not the case.

The reason is closure. A closure is a special kind of object that combines two things:
<ol>
	<li>A function</li>
	<li>The environment in which that function was created</li>
</ol>

The environment is what makes closure possible. The environment consists of any local variables that were in scope at the time that the closure was created. In the above example the variable firstName was available making it accessible to the showName function.