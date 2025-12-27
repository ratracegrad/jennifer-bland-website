---
title: Instantiation Patterns in JavaScript
description: Learn about the different instantiation patterns in JavaScript.
date: 2017-07-24
image: https://images.unsplash.com/photo-1605106702734-205df224ecce?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Instantiation patterns are ways to create something in JavaScript. JavaScript provides four different methods to create objects. Regardless of which method you use, every method will provide the following functionality:
<ul>
 	<li>Create an object</li>
 	<li>Create methods and properties for that object</li>
</ul>
There are four instantiation patterns in JavaScript. They are:
<ol>
 	<li>Functional</li>
 	<li>Functional-shared</li>
 	<li>Prototypal</li>
 	<li>Pseudoclassical</li>
</ol>
<h2>Functional Instantiation</h2>
With functional instantiation, we first create a function. Inside the function we create an empty object and add properties and methods to it. We then return this object.

Every time the function is called we will have access to the methods that were created. Here is an example of functional instantiation:

<!--more-->
<pre class="prettyprint">var Animal = function(species, name) {
  var obj = {};

  obj.species = species;
  obj.name = name;

  obj.makeSound = function() {
    // code goes here
  }

  obj.eat = function() {
      // code goes here
  }

  obj.sleep = function() {
      // code goes here
  }
  
  return obj;
}

// implementation of functional instantiation
var tiger = Animal('tiger', 'tigger');
tiger.eat();
tiger.makeSound();</pre>
<strong>Pros:</strong>
For most people that are learning JavaScript this is the method that they learned for creating a new object. For anybody reading your code, it is easy to understand because all the functions are contained within the object. The properties are private since they are contained within the closure scope.

<strong>Cons:</strong>
Since all the methods are contained within the function, if you create a second instance of that object, you will have duplicated all the properties and methods in memory. If you create a new object using this method, then change any of the methods and create a new instance, the two objects will be referencing different methods.
<h2>Functional Shared Instantiation</h2>
One of the downsides of functional instantiation is that you duplicate methods in memory every time you create a new object. Functional shared instantiation attempts to overcome that limitation by making the methods shared among all objects.

Just like functional instantiation, we start with a function with an empty object inside and define properties within the function. Methods are defined in another object. We then extend our object with these methods. In the end, we return the object. Every object created by functional shared instantiation will have a pointer to the same methods without duplication. Here is an example of functional shared instantiation.
<pre class="prettyprint">var Animal = function(species, name) {
    var obj = {};http://www.jenniferbland.com/

    obj.species = species;
    obj.name = name;

    extend(obj, objMethods);
    
    return obj;
}

var extend = function(obj, methods) {
    for (var key in methods) {
        obj[key] = methods[key]
    }
}

var objMethods = {
    makeSound: function() {
        // code goes here
    },

    eat: function() {
        // code goes here
    },
    
    sleep: function() {
        // code goes here
    }
}

// implementation of functional shared instantiation
var tiger = Animal('tiger', 'tigger');
tiger.eat();
tiger.makeSound();</pre>
<strong>Pros:</strong>
Removes the duplication of methods that was found in functional instantiation which improves memory management.

<strong>Cons:</strong>
The pointers to the shared methods are created when the object is instantiated. If you modify the methods and then create new objects, they original object and the new object will refer to different methods.
<h2>Prototypal Instantiation</h2>
Prototypal instantiation utilizes the prototype chain to create objects. Methods are attached to the object's prototype using the Object.create method.

To start you will create all the methods on a separate object. Then you create a function. Inside the function you use the Object.create method to attach the methods. You will also define any properties inside the function. Then you return the object. Here is an example of prototypal instantiation.
<pre class="prettyprint">var Animal = function(species, name) {
    var obj = Object.create(objMethods);

    obj.species = species;
    obj.name = name;

    return obj;
}

var objMethods = {
    makeSound: function() {
        // code goes here
    },

    eat: function() {
        // code goes here
    },

    sleep: function() {
        // code goes here
    }
}

// implementation of prototypal instantiation
var tiger = Animal('tiger', 'tigger');
tiger.eat();
tiger.makeSound();</pre>
<strong>Pros:</strong>
Methods are attached to the object's prototype instead of being returned within the object. Every method is available to every object created without duplicating methods in memory.

<strong>Cons:</strong>
To use this method, you have to create an object, decorate it and then return it from the constructor function.
<h2>Pseudoclassical Instantiation</h2>
Pseudoclassical instantiation attempts to overcome the amount of typing required to create an object using prototypal instantiation. Like prototypal, Pseudoclassical instantiation uses the prototype chain.

JavaScript provides most of the functionality that create with prototypal instantiation with the use of the keyword new. Pseudoclassical instantiation utilizes this when creating a new object.

Instead of creating a new variable and assigning Object.create() to it, Pseudoclassical instantiation assigns it to "this".
To start you create a new function and create properties using the "this" keyword. Methods are assigned to the prototype. To create a new object, you use the keyword "new". Here is an example of Pseudoclassical instantiation.
<pre class="prettyprint">var Animal = function(species, name) {

    this.species = species;
    this.name = name;

}

Animal.prototype.makeSound = function() {
    // code goes here
},

Animal.prototype.eat = function() {
    // code goes here
},

Animal.prototype.sleep = function() {
    // code goes here
}


// implementation of pseudoclassical instantiation
var tiger = new Animal('tiger', 'tigger');
tiger.eat();
tiger.makeSound();</pre>
<strong>Pros:</strong>
By utilizing functionality built into JavaScript, Pseudoclassical instantiation is the most optimized method of object creation.

<strong>Cons:</strong>
It is a little more complex in its design when compared to the other three methods.
<h2>Summary</h2>
JavaScript developers should be aware of the different methods available to them for creating objects. Each method has its own pros and cons.

The size of your code and performance requirements should determine which instantiation method that you use.