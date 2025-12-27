---
title: JavaScript Instantiation Patterns - Part 2 of 2
description: Learn about the different instantiation patterns in JavaScript.
date: 2015-03-30
image: https://images.unsplash.com/photo-1620052569626-dcbc8ee3a269?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

This is part 2 of my posts about JavaScript instantiation patterns. You can read part 1 which covers Functional and Functional Shared <a href="http://wp.me/p3sG15-bK" target="_blank">here</a>.

We previously covered both the Functional and Functional Shared Instantiation methods. I showed how Functional Shared made some improvements over Functional. The next two methods I will cover are Prototypal and Pseudo-classical instantiation. They both provide improved performance over the first two methods.

If you are not familiar with prototypes, let me give you a quick summary. Every new object has a prototype chain. Prototype chains make it possible for many child objects to all reflect the properties of one parent object.

<h2>Prototypal</h2>
The Prototypal instantiation pattern takes advantage of prototype chains for its improvement gains over Functional and Functional Shared.  Prototypal will use a prototype chain to provide access to shared methods. 

The Prototypal instantiation pattern uses Object.create to generate an object with a delegation relationship. Any failed property lookups on instances will fall through to the prototype.

This reduces redundancy because new instances will have access to properties stored in the prototype.

<!--more-->

<pre class="prettyprint">
var Car = function(exterior, interior){
  var obj = Object.create(carMethods);
  obj.exterior = exterior;
  obj.interior = interior;

  obj.driveCar = function() {
    // code to drive car
  };

  return obj;
}

carMethods = {
  driveCar: function() {
    this.exterior = 'red';
    // code to drive car;
  }
};
</pre>

Now that you have defined your new Car you need to be able to create it. To create a new car you would use:
<pre class="prettyprint">
myCar = car('black', 'black');
</pre>

<strong>Pros:</strong> Very easy to add new items and have it automatically updated to new instances. You change a property or add a new property in the delegatee object, the delegator will get that change when you reference it in the future.
<strong>Cons:</strong> Object delegation can only be setup at the time of object creation since delegation relationships are only created via use of the <em>Object.create</em> function.


<h2>Pseudoclassical</h2>
The Pseudoclassical instantiation pattern provides most of the same run time features as the Prototypal pattern, but exposes them via some (rather complicated) alternative syntax. To alleviate all the typing found in Prototypal, JavaScript provides the <em>new </em>keyword. The keyword new allows you to run your functions in the alternate 'construction' mode that the JavaScript language supports. 

When you create a function using the new keyword, JavaScript automatically adds two lines of codes for you. They are:
<pre class="prettyprint">
this = Object.create(objMethods);
return this;
</pre>

Now that you know JavaScript automatically adds these lines for you, you can delete them from your code.

Pseudo-classical is very similar to the functional-shared pattern, except that access to the shared methods is achieved by use of a prototype chain, rather than by copying the method references on to a new instance one at a time. 

<pre class="prettyprint">
var Car = function(exterior, interior){
  this.exterior = exterior;
  this.interior = interior;
}

obj.driveCar = function() {
    // code to drive car
  };
</pre>

Now that you have defined your new Car you need to be able to create it. To create a new car you would use:
<pre class="prettyprint">
myCar = new Car('black', 'black');
</pre>

<strong>Pros:</strong> this is the current industry standard
<strong>Cons:</strong> the syntax is a bit awkward and heavy, its not always clear what lines of code are being inserted which can cause confusion