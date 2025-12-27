---
title: Jumpstart Development with the Use of Generators
description: Learn how to use generators to jumpstart your development projects.
date: 2015-05-23
image: https://images.unsplash.com/photo-1597766325363-f5576d851d6a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Any time you need to start a new development project from scratch you will find yourself writing the same basic set of code over and over. There is a better - and faster - way of overcoming that shortcoming by using generators.

Generators are pre-packed sets of code that give you the basic framework that you will need in your project. There are many different generators that are available for you to use.

Most of my projects run using the MEAN stack. The MEAN stack is an abbreviation for a project that uses MongoDB, Express, AngularJS and Node.js.

When writing projects I go through the same process of setting up the server, installing Angular and configuring authentication for my project. What if there is a way to start any MEAN stack project with all of this done for you?

<!--more-->


There is a great generator that will provide the entire MEAN stack for you. The best one that I have used is the Angular Fullstack generator. This code provides the following functionality:
<ul>
	<li>Installation of Angular</li>
	<li>Installation of Node.js Server</li>
	<li>Installation of MongoDB database</li>
	<li>Installation of JWT for Authentication</li>
	<li>Configuration for JavaScript and CoffeeScript</li>
	<li>Markup using either HTML or Jade</li>
	<li>Stylesheets using CSS, Stylus, Sass and Less</li>
	<li>Socket.io integeration</li>
</ul>

<h2>Getting Started with MEAN stack Generator</h2>
The <a href="https://github.com/DaftMonk/generator-angular-fullstack" target="_blank">Angular Fullstack generator</a> is found on github.

You can use the usual method of forking the project to your github account and then cloning it down to your computer to use. But there is a much easier way to install.

The simplest way to use this generator is to install generator-angular-fullstack using npm.

<pre class="prettyprint">npm install -g generator-angular-fullstack</pre>

Once that has finished installing. Create a new directory on your computer and change into that directory. Then run the command to actually generate the MEAN stack for you. You can optionally pass in the name of your app that you are creating.

<pre class="prettyprint">yo angular-fullstack [app-name]</pre>

<h2>Prerequisites</h2>
Since this generator is running the MEAN stack you will need to have a MongoDB installed on your computer. You will need to have the mongod process running when you start your application. If you do not then it will generate an error message.

<h2>Deployment</h2>
The Angular Fullstack generator actually provides multiple ways for you to deploy your application. There are features built in to deploy to Heroku or OpenShift. 

If you are deploying to another platform then the generator utilizes grunt. Grunt allows you to build your final application. You can even use grunt to preview your application during the development cycle.

When it comes to writing new projects from scratch, there is no reason to reinvent the wheel. Using the Angular Fullstack generator can have you up and running with a fully functional project in less than five minutes.
