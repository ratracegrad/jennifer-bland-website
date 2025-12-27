---
title: Introduction to AngularJS - Filter, ngClass and 2-Way Data Binding
description: Learn how to use filters, ngClass and 2-way data binding in AngularJS.
date: 2015-05-10
image: https://images.unsplash.com/photo-1483213097419-365e22f0f258?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

This is part two in my Introduction to AngularJS series. 

In my <a href="http://www.jenniferbland.com/introduction-to-angularjs-your-first-angular-application/" target="_blank">first class I demonstrated how to create your first AngularJS application</a>. The application was the start of website for our fictional Mandarian Spa company. The website provided a list of all the services offered by the spa including their price and whether or not that service was currently available.

In this lesson we are going to improve on our existing website by providing these services:
<ul>
	<li>Formatting Prices properly</li>
	<li>Change Availability column to only show Sold Out</li>
	<li>Add class if service is sold out</li>
	<li>Add a Filter to search by services</li>
	<li>Add two way data binding</li>
</ul>

<!--more-->

<h2>Filters</h2>
Filters can be added to expressions and directives using a pipe character. Filters are used to transform data. Here are some filters you can apply to data with AngularJS.
<div class="columns-two">
<div style="width: 30%; float: left; margin-left: 0 !important;">
<strong>Filter</strong>
currency
filter
lowercase
orderBy
uppercase</div>
<div style="width: 60%; float: left">
<strong>Description</strong>
Format a number to a currency format
Select a subset of items from an array
Format a string to lower case
Orders an array by an expression
Format a string to upper case
</div>
</div>

In our website it shows the price for each service. The formatting is not what we expect for a price. The last item has a price of $42.50 but it displays at $42.5.

To improve how the prices are displayed we can apply a filter to format the values as currency. Here is how to add the currency filter to our prices. Notice we also removed the leading $ sign since currency will provide this for us.
<pre class='prettyprint'><xmp><div class="col-md-1">{{service.price | currency}}</div></xmp></pre>

<h2>Expressions</h2>
In the previous lesson we learned that expressions all us to insert dynamic values into HTML. We are inserting the services, prices and availability directly into the HTML.

When you look at the Availability column it shows <em>true </em>or <em>false</em>. This is not the best way to display this information to our customers.

Expressions can contain any valid JavaScript code. We are going to take advantage of this to modify what is displayed in the availability column. 

If an item is not available we want to display <em>Sold Out</em>. If it is available then we do not want to display anything in the availability column.

We will use JavaScript coding to alter what is displayed. Here is the JavaScript code that we add.
<pre class='prettyprint'><xmp><div class="col-md-1">{{ (!service.available) ? "Sold Out" : ""}}</div></xmp></pre>

With that change our website now looks like this.
<a href="http://www.jenniferbland.com/introduction-to-angularjs-filter-ng-class-and-2-way-data-binding/sold-out/" rel="attachment wp-att-909"><img src="http://www.jenniferbland.com/wp-content/uploads/Sold-out.png" alt="using javascript in angular expressions" width="768" height="300" class="alignnone size-full wp-image-909" /></a>

<h2>ng-if, ng-show and ng-hide</h2>
Angular provides three other directives that we could use to produce the same functionality of displaying only Sold Out in the availability column.

I am going to cover them so that you are familiar with alternatives that you can use.

Ng-show and ng-hide will either show or hide an element based on the value assigned to it. If we wanted to duplicate the <em>Sold Out</em> showing in the availability column we could have used either one of these options.
<pre class='prettyprint'><xmp><div class="col-md-1" ng-show="!service.available">{{"Sold Out"}}</div></xmp></pre>
<pre class='prettyprint'><xmp><div class="col-md-1" ng-hide="service.available">{{"Sold Out"}}</div></xmp></pre>

There is one big difference between using either ng-show and ng-hide and ng-if. If you use ng-show or ng-hide then the content is still present in the DOM even if it is not visible on the website With ng-if the item is either shown in the DOM if the value is true or is completely removed from the DOM if the value is false.

Here is how the code would look if using ng-if.
<pre class='prettyprint'><xmp><div class="col-md-1" ng-if="!service.available">{{"Sold Out"}}</div></xmp></pre>

<h2>ng-class</h2>
I still want to improve on how services are displayed if they are sold out. If they are sold out then I want the line written with a strikethru it.

First we will need to add a stylesheet to our application. In that stylesheet we will have the following code added for a class called strike.
<pre class='prettyprint'><xmp>.strike {
  text-decoration: line-through;
}</xmp></pre>

Next we are going to dynamically add this class to our Services table if a service is not available. Here is the code that we need to add to each div.
<pre class='prettyprint'><xmp>ng-class="{strike: !service.available}"</xmp></pre>

What this code does is to get the value of service.available which will be either true or false. If a service is not available it will have a value of false. We use the ! character to reverse this value and make it true. When it is true then the class <em>strike</em> will be applied to the div. Here is what our website looks like now.
<a href="http://www.jenniferbland.com/introduction-to-angularjs-filter-ng-class-and-2-way-data-binding/strike-class-applied-with-ng-class/" rel="attachment wp-att-913"><img src="http://www.jenniferbland.com/wp-content/uploads/strike-class-applied-with-ng-class.png" alt="strike class applied with ng-class" width="764" height="280" class="alignnone size-full wp-image-913" /></a>

<h2>2 Way Data Binding</h2>
The last item that I want to cover in this lesson is 2 way data binding. Angular provides 2 way data binding.

Expressions are re-evaluated when their property changes. Angular keeps a track of the value stored in every expression. If the value of the expression changes, Angular will automatically compare it to the previous value. If the values are different the Angular will automatically insert the new value into the application.

With traditional websites if you wanted to change the value in a field you would have to have the server send down a new page with the new value to be displayed. Or you had to write an extended amount of JavaScript that watched for changes to a field and when a change occurred then update the field with the new value.

With Angular you do not have to write a single line of JavaScript to provide the same functionality.

To demonstrate 2 way data binding, we are going to put an input on the services page asking users to enter their name. As they enter their name we are going to display a welcome message to them that utilizes their name.

The first step in 2 way data-binding is to use the ng-model to bind and input field. I have created an input field and assigned it the ng-model directive with the name of <em>firstName</em>. On the next line I have added a welcome message that displays the user's first name. This field is hidden with the ng-hide directive and will not be shown until the user types in the firstName field. Here is the code that I have added.
<pre class='prettyprint'><xmp>  <div class="container-flud text-center">
    <p>Enter your First Name: <input type="text" ng-model="firstName" placeholder="First Name"></p>
    <p ng-hide="!firstName">Welcome to Mandarin Spa {{ firstName }}!</p>
  </div></xmp></pre>

With this code added here is what the website looks like with the new input field.Notice that the welcome message is not being displayed since the user has not typed anything into the firstName field yet.
<a href="http://www.jenniferbland.com/introduction-to-angularjs-filter-ng-class-and-2-way-data-binding/2-way-data-binding-in-angular/" rel="attachment wp-att-915"><img src="http://www.jenniferbland.com/wp-content/uploads/2-way-data-binding-in-Angular.png" alt="2 way data binding in Angular" width="740" height="324" class="alignnone size-full wp-image-915" /></a>

Once a user starts typing into the field then the Welcome message is displayed as shown below.
<a href="http://www.jenniferbland.com/introduction-to-angularjs-filter-ng-class-and-2-way-data-binding/2-way-data-binding-in-angular-displayed/" rel="attachment wp-att-916"><img src="http://www.jenniferbland.com/wp-content/uploads/2-way-data-binding-in-Angular-displayed.png" alt="2 way data binding in Angular" width="660" height="344" class="alignnone size-full wp-image-916" /></a>