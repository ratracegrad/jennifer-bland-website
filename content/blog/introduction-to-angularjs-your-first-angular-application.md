---
title: Introduction to AngularJS - Your First Angular Application
description: Learn how to create your first AngularJS application.
date: 2015-05-10
image: https://images.unsplash.com/photo-1613442301287-4fa478efd9ca?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

AngularJS is a JavaScript framework designed to create dynamic web app by adding interactivity to HTML. AngularJS will add simplicity and productivity to your websites.

AngularJS is perfect for Single Page Applications(SPA). Common examples of SPAs are Facebook, Twitter and Gmail.

A common misunderstanding is that SPA only have one page of content. That is not true. With a SPA you can navigate to different pages in a website WITHOUT having to load in a new webpage like you would with a traditional website. Angular provides the framework to load this information for you dynamically as you navigate around.

Here is the SPA application that we will be building as your first AngularJS application.

<img class="alignnone size-full wp-image-897" src="/screenshot-first-angularjs-app1.png" alt="First AngularJS App" width="776" height="300" />
<!--more-->
<h2>AngularJS Terminology</h2>
Before starting our first Angular app I want to cover over some basic terminology you will need to know.

<strong>Directive -  </strong>adds behaviors to HTML. A directive is how AngularJS teaches the browser new syntax.

<strong>Expressions -</strong> allow us to insert dynamic values into HTML. An expression can contain text, numbers or even any valid JavaScript code. The value of the expression is inserted directly into the HTML code. Expressions are inserted into HTML by surrounding it with {{ }}. Here is an example of an expression.

<pre class='prettyprint'><xmp><div>2 + 2 = {{2+2}}</div></xmp></pre>

AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.

<strong>Module -</strong> is were we write pieces of our Angular application. Any dependencies will also be defined in the module.

<strong>Controllers -</strong> help us get data on to the page. Controllers are where we define our app's behavior by defining functions and values.
<h2>Getting Started</h2>
To create our first Angular app we are going to need 2 files: index.html and app.js. Index.html will contain our html code with our Angular directives. The app.js file will contain our actually Angular code.

Let's first start with creating our index.html file. Here is what it looks like.
<pre class="prettyprint"><xmp>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First Angular App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  </head>

  <body ng-app="SpaApp" ng-controller="spaController">

  <nav class="navbar navbar-default text-center">
    <h2>Services</h2>
  </nav>

  <div class="container-fluid">
    <div class="row-fluid"><strong>
      <div class="col-md-4"></div>
      <div class="col-md-1">Item #</div>
      <div class="col-md-1">Service</div>
      <div class="col-md-1">Price</div>
      <div class="col-md-1">Availability</div>
      <div class="col-md-4">&nbsp;</div></strong>
    </div>

    <div class="row-fluid" ng-repeat="service in servicesList">
      <div class="col-md-4"></div>
      <div class="col-md-1">{{$index + 1}}</div>
      <div class="col-md-1">{{service.service}}</div>
      <div class="col-md-1">${{service.price}}</div>
      <div class="col-md-1">{{service.available}}</div>
      <div class="col-md-4">&nbsp;</div>
    </div>
  </div>

  <script type="text/javascript" src="angular.js"></script>
  <script type="text/javascript" src="app.js"></script>

</body>
</html>
</xmp></pre>

<h2>HTML Explained</h2>
You should be familiar with most of the content of the index.html file above. I am using Twitter's bootstrap for my navigation and center alignment of the Services Table.

On the body tag you will find your first Angular directive. The <em>ng-app</em> directive defines an AngularJS application. We have given our app the name of <em>SpaApp</em>. You will see how this name is incorporated into our Angular code when we discuss the contents of the app.js file.

On the body tag is our second Angular directive <em>ng-controller</em>. The ng-controller directive literally controls the data in the Angular application. I have named the controller spaController. It is best practice to attach Controller to the name of any ng-controller.

The div class contains our third Angular directive in the <em>ng-repeat</em>. The ngRepeat directive instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

When we get to our app.js code you will find an array object called servicesList. The ng-repeat is looping through every item in this area. Using expressions we are printing out an incrementing counter, the service offered, the price and whether or not that service is sold out.

Earlier I gave an example of an expression. Now you get a chance to actually see how an expression is used in an Angular app.

The last part of the HTML file loads our two JavaScript files. One for angular.js and the other for our app.js file.
<h2>Angular Explained</h2>
It seems most of the code in our sample application actually takes place in the HTML file. There is few little Angular code required for this application. Here is the contents of the app.js file.
<pre class="prettyprint">angular.module('SpaApp', [])
.controller('spaController', function($scope) {
  $scope.servicesList = [
    {service: 'Massage',  price: 90,    available: true  },
    {service: 'Facial',   price: 60,    available: true  },
    {service: 'Manicure', price: 30,    available: true  },
    {service: 'Pedicure', price: 42.50, available: false }
  ];
});</pre>
The first line in the app.js is our Angular module. An AngularJS module defines an application. A module is a container for the different parts of an application like the controllers, services, filters, directives, etc.

The name of our module is <em>SpaApp</em>. This is the same name given in the ng-app directive in the body tag in our HTML code.

The module has one controller called <em>SpaController</em>. This name corresponds to the name given to the ng-controller directive in the body tag in the HTML code.

AngularJS will invoke the controller with a $scope object. Scope is the glue between application controller and the view. By attaching the servicesList array to the scope, our application will have access to it within the view.

We print out the name of the service, price and its availability by passing the values from the controller in the app.js to the corresponding expression in the HTML file.
<h2>Testing the Code</h2>
You can open up the index.html file in your browser. You will see the services, their prices and availability displayed in your browser.
<h2>Next Lessons</h2>
In the next lesson we will be improving on our very first AngularJS application. In lesson 2 you will learn about
<ul>
	<li>Filter</li>
	<li>ng-show, ng-hide and ng-if</li>
	<li>ng-model</li>
	<li>2 way data binding</li>

<a href="/blog/introduction-to-angularjs-filter-ng-class-and-2-way-data-binding/" target="_blank">You can start lesson 2 here</a>.