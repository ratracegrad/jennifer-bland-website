---
title: JavaScript Instantiation Patterns - Part 1 of 2
description: Learn about the different instantiation patterns in JavaScript.
date: 2015-03-30
image: https://images.unsplash.com/photo-1620052569626-dcbc8ee3a269?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Instantiation patterns are ways to create something in your code. JavaScript has multiple instantiation methods that you can use. JavaScript's four instantiation patterns are:
<ul>
	<li>Functional</li>
	<li>Functional-shared</li>
	<li>Prototypal</li>
	<li>Pseudo-classical</li>
</ul>

In this post I will talk about how to create the instantiation patterns for Functional and Functional-Shared. In Part 2 of this post I talk about Prototypal and Pseudo-classical. In addition I will cover the pros and cons of each.

<!--more-->


<h2>Functional</h2>
Functional instantiation is the method that every beginning JavaScript programmer learns. You create your

<pre class="prettyprint">
var car = function(exterior, interior){
  var obj = {};
  obj.exterior = exterior;
  obj.interior = interior;

  obj.driveCar = function() {
    // code to drive car
  };

  return obj;
}
</pre>

Now that you have defined your new Car you need to be able to create it. To create a new car you would use:
<pre class="prettyprint">
myCar = car('black', 'black');
</pre>

The functional instantiation method creates an instance with its methods defined within it.

<em>To be consistent with programming best practices, the functional method does not use the keyword this or the keyword new to create a new instance. As a result the name of the function - car - is lower case.</em>

<strong>Pros:</strong> The functional method is easy to understand. It is widely used since most beginning programmers create functions in this manner as they learn JavaScript and continue to do it today. The variables are private since they are contained within the closure scope.
<strong>Cons: </strong>The properties and methods for car are stored within it. Every time you create a new car then it duplicates the properties and methods for each instance. This redundancy is not only inefficient but will make life harder later if anything changes. If I want to give all cars a property of ‘trim’, I would have to go back and manually add it to each car I have already created. 

<h2>Functional Shared</h2>
The full name of this method is Functional instantiation with shared methods. It addresses the redundancy problem you encounter with Functional instantiation. For simplicity sake I will refer to this as Functional Shared in my posts.

To reduce the redundancy problem encountered with Functional instantiation, we can move the function definition outside the constructor. The problem is by doing this it will no longer have closure scope access to the constructor <em>obj</em> variable.

To overcome this we will use the argument this to retain access to the obj variable. The this argument provides this functionality for us, by treating the object found on the left of the calltime dot as a function input, and providing a name we can use to refer to it.

With Functional Shared you define the properties within the function just like with Functional instantiation. Functional shared puts methods in another object. It then extends the function to point to them. 

<pre class="prettyprint">
var Car = function(exterior, interior){
  var obj = {};
  obj.exterior = exterior;
  obj.interior = interior;

  extend(obj, carMethods);

  return obj;
};

var carMethods = {};
carMethods.driveCar = function() {
  this.interior = 'black leather';
  // code to drive car
 };
</pre>

The functional shared method uses the keyword this. According to JavaScript coding best practices, the Car function is upper case.

Now that you have defined your new Car you need to be able to create it. To create a new car you would use:
<pre class="prettyprint">
myCar = Car('black', 'black');
</pre>

<strong>Pros:</strong>It removes the redundancy issue that is found in Functional instantiation. For separating out the methods I can create just one instance and the have every new Car that is created point to it. If I want to add a new property like 'trim', I only have to update the carMethods and every car created will have access to it. 
<strong>Cons:</strong>The variables created in Functional Shared are not private as they are actually properties of the instance and not a variable of the scope of the function.

To learn about Prototypal and Pseudo-classical instantiation methods check out part 2 of my JavaScript instantiation methods post.

