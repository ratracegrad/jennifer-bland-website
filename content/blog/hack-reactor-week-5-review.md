---
title: Hack Reactor Week 5 Review
description: Review of the fifth week of Hack Reactor.
date: 2015-04-26
image: https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Monday morning of Week 5 we had an hour long review of our experience from Week 4. Since week 4 is considered the hardest week, there is concern from the instructors that we would be disappointed and frustrated. We all talked about our experiences and realized that we learned quite a bit during the week despite our frustrations.

Week 5 starts out with an introduction to authentication. Now that we have completed our first full-stack application, we need to be able to implement authentication to allow users to create an account and to login to the server.

There are many things to consider when implementing authentication on your server.
<ul>
	<li>How do I store user and password information securely</li>
	<li>What additional steps will the user need to take when interacting with the application</li>
	<li>What strategies do I need to employ to secure existing site functionality</li>
	<li>How often should the user need to enter their username and password</li>
</ul>
<!--more-->

Our first sprint of the week involved writing a single page application using Backbone.JS on the client with a Node/Express based server. The server uses the Bookshelf.JS ORM and ESJ for templates.

With this application we used Express 4. The primary difference between Express 3 and Express 4 is that most of the middleware is no longer included in the Express module in version 4. If you want to use something like Bookshelf then you will have to install it yourself.

On the client side we used libraries like jQuery, underscore and Backbone.JS.  Templating on the client is handled by Handlebars.
<h2>Deployment</h2>
The middle sprint of week 5 covered deployment. We also learned about various build tools. Now that we have created multiple full-stack applications we need to learn how to deploy these applications to production environments.

The development cycle involves building an application in a development environment. Once all the features are complete the application is rolled out to a production environment.

A well designed application is built to be able to run successfully whether it is in development or in production.

The two most common deployment platforms used by JavaScript developers are Heroku and Microsoft's Azure. The target market for both of these platforms are different. Heroku targets the individual developer and smaller application whereas Microsoft Azure targets the larger companies.

Deploying to either one requires careful configuration. There are quite a few deployment tools like grunt and gulp. We learned how to use both this week.
<h2>Angular</h2>
The end of Week 5 was our first introduction to Angular. I have been looking forward to this moment since I want to work in an environment using Angular. We learned the fundamentals of the Angular framework and then we adapted a client-server app to use it.

It is amazing at how much code you can implement very quickly with Angular. You can produce an amazing amount of functionality without writing a single line of JavaScript.