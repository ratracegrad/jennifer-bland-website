---
title: Example Using EJS Templating in Node.js Application
description: Learn how to use EJS templating in a Node.js application.
date: 2016-04-02
image: https://images.unsplash.com/photo-1530435460869-d13625c69bbf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

EJS, embedded javascript, is a templating language. EJS combines data and a template to produce HTML. One of the most important feature in EJS is the use of partials. Partials allow you to define something once and then apply it to any page in your application.

I will show you how to create a simple Node.js application that uses EJS as the templating engine. Then we will create 2 pages for the website. We will use partials to build out our head, navigation, footer and content.

    <!--more-->
<h2>File Structure</h2>
We will be creating a sample application that will have two pages - index and about.

Here is the file structure for the application we will be creating.
<pre class='prettyprint'><xmp>
- public
---- style.css
- routes
---- index.js
- views
---- pages
-------- about.ejs
-------- index.ejs
- partials
-------- 3columns.ejs
-------- footer.ejs
-------- head.ejs
-------- nav.ejs
-------- scripts.ejs
- package.json
- server.js
</xmp></pre>
<h2>Getting Started</h2>
We will setup our package.json first. This file will contain all the modules we will be using in our application. We will be using:
        <ul>
<li>express</li>
<li>ejs</li>
</ul>
<pre class='prettyprint'><xmp>
{
    "name": "node_ejs_boilerplate",
    "version": "1.0.0",
    "description": "Boilerplate showing the use of ejs as view template engine in a Node.js application",
    "author": "Jennifer Bland",
    "main": "server.js",
    "dependencies": {
        "ejs": "^2.4.1",
        "express": "^4.13.4",
        "serve-favicon": "^2.3.0"
    }
}
</xmp></pre>
        You can add the dependencies directly into your package.json or your can install the dependencies so that they are automatically added to the package.json. To manually install dependencies, enter this command:
        <pre class='prettyprint'><xmp>
npm install express ejs --save
</xmp></pre>
If you added dependencies by adding them to your package.json, you will need to install them by using this commend:
        <pre class='prettyprint'><xmp>
npm install
</xmp></pre>
<h2>Server.js</h2>
Now that we have all our dependencies installed, we need to build out application in server.js
<pre class='prettyprint'><xmp>
'use strict';

// ================================================================
// get all the tools we need
// ================================================================
var express = require('express');
var routes = require('./routes/index.js');
var port = process.env.PORT || 3000;

var app = express();

// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');


// ================================================================
// setup routes
// ================================================================
routes(app);

// ================================================================
// start our server
// ================================================================
app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});
</xmp></pre>
Our server will be listening on the port defined in process.env.PORT or 3000.

We define a /public directory because this is how we will reach our stylesheet style.css located in the /public folder.

        We define our templating engine to be ejs.
<h2>Routes</h2>
To make our application follow the structure of a node.js application I have put the routes for our index and about pages into their own file. This file is index.js in the routes folder.

        Since I have put the routes in their own folder I need to gain access to them by requiring them in the server.js file.

        We have 2 routes in our application:
        <ul>
<li>/ - GET to display the home page</li>
<li>/about - GET to display the about page</li>
</ul>
In the routes we use res.render to display the appropriate pages. The render command by default will look for files in a folder called views. We rely on this default and only add the path from within the views folder.

        Here is our index.js file in the routes folder:
        <pre class='prettyprint'><xmp>
'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    app.get('/about', function(req, res) {
        res.render('pages/about');
    });
};
</xmp></pre>
<h2>Configuring our Partials</h2>
For our sample application, I am going to implement four partials:
        <ul>
<li>head - contains items found in the head section of a webpage</li>
<li>nav - the navigation that will be displayed on every page</li>
<li>footer - static footer with link to my website</li>
<li>scripts - loading scripts like jQuery and Bootstrap</li>
<li>3columns - content that will be displayed on the homepage</li>
</ul>
Here is the contents of all of our partials.
<pre class='prettyprint'><xmp>
<!-- views/partials/head.ejs -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

    <title>Demonstration of EJS templating in NodeJS Application</title>

    <!-- STYLESHEETS -->
    <!-- CSS (load bootstrap from a CDN) -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="/public/style.css">
</head>
</xmp></pre>
<pre class='prettyprint'><xmp>
<!-- views/partials/nav.ejs -->
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">

        <div class="navbar-header">
            <a class="navbar-brand" href="/">
                <span class="glyphicon glyphicon glyphicon-cog"></span>
                CodePrep.io
            </a>
        </div>

        <ul class="nav navbar-nav pull-right">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>

    </div>
</nav>

</xmp></pre>

<pre class='prettyprint'><xmp>
<!-- views/partials/footer.ejs -->
<footer class="footer">
    <div class="container">
        <p class="text-center text-muted">© Copyright 2015 <a href="http://www.codeprep.io">CodePrep.io</a></p>
    </div>
</footer>
</xmp></pre>
        
<pre class='prettyprint'><xmp>
<!-- views/partials/scripts.ejs -->

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Bootstrap javascript file -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</xmp></pre>

<pre class='prettyprint'><xmp>
<!-- views/partials/3columns.ejs -->
<section name="content">
    <div class="container">
        <h2 class="text-center">Sample Data</h2>
        <div class="col-xs-12 col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget iaculis lorem. Fusce elementum magna fringilla ipsum bibendum, vitae consectetur ligula interdum. Sed mauris diam, hendrerit eget suscipit vel, luctus at odio. Etiam pellentesque a metus et pharetra. Praesent dictum, libero id tempor malesuada, erat ex cursus nibh, ac hendrerit massa neque commodo metus. Integer porttitor ante eu varius interdum. Suspendisse quis iaculis erat. Fusce eu nisl id eros tempor posuere. Donec placerat orci orci, ut ultrices neque rutrum in. Nunc dignissim ante et risus rhoncus, vel feugiat mi vestibulum. Aliquam in dictum neque, non vestibulum lorem. Sed imperdiet dolor vitae felis iaculis, id sollicitudin lectus rhoncus. Maecenas ac dolor eget tortor rutrum commodo. Aliquam luctus iaculis mi id semper. Suspendisse sem nisi, convallis at dapibus in, convallis eu neque. Curabitur maximus magna et nulla ullamcorper facilisis.</p>
        </div>
        <div class="col-xs-12 col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget iaculis lorem. Fusce elementum magna fringilla ipsum bibendum, vitae consectetur ligula interdum. Sed mauris diam, hendrerit eget suscipit vel, luctus at odio. Etiam pellentesque a metus et pharetra. Praesent dictum, libero id tempor malesuada, erat ex cursus nibh, ac hendrerit massa neque commodo metus. Integer porttitor ante eu varius interdum. Suspendisse quis iaculis erat. Fusce eu nisl id eros tempor posuere. Donec placerat orci orci, ut ultrices neque rutrum in. Nunc dignissim ante et risus rhoncus, vel feugiat mi vestibulum. Aliquam in dictum neque, non vestibulum lorem. Sed imperdiet dolor vitae felis iaculis, id sollicitudin lectus rhoncus. Maecenas ac dolor eget tortor rutrum commodo. Aliquam luctus iaculis mi id semper. Suspendisse sem nisi, convallis at dapibus in, convallis eu neque. Curabitur maximus magna et nulla ullamcorper facilisis.</p>
        </div>
        <div class="col-xs-12 col-md-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget iaculis lorem. Fusce elementum magna fringilla ipsum bibendum, vitae consectetur ligula interdum. Sed mauris diam, hendrerit eget suscipit vel, luctus at odio. Etiam pellentesque a metus et pharetra. Praesent dictum, libero id tempor malesuada, erat ex cursus nibh, ac hendrerit massa neque commodo metus. Integer porttitor ante eu varius interdum. Suspendisse quis iaculis erat. Fusce eu nisl id eros tempor posuere. Donec placerat orci orci, ut ultrices neque rutrum in. Nunc dignissim ante et risus rhoncus, vel feugiat mi vestibulum. Aliquam in dictum neque, non vestibulum lorem. Sed imperdiet dolor vitae felis iaculis, id sollicitudin lectus rhoncus. Maecenas ac dolor eget tortor rutrum commodo. Aliquam luctus iaculis mi id semper. Suspendisse sem nisi, convallis at dapibus in, convallis eu neque. Curabitur maximus magna et nulla ullamcorper facilisis.</p>
        </div>
    </div>
</section>
</xmp></pre>



<h2>Starting our Application</h2>
To start the application enter the following command:
<pre class='prettyprint'><xmp>
node server.js
</xmp></pre>
When our application starts it will display our homepage:
        <img class="alignleft size-large wp-image-968" src="/home-1024x515.png" alt="Homepage" width="600" />

        If you click on the about link in the navigation, you will see the about page:
        <img class="alignleft size-large wp-image-967" src="/about-1024x516.png" alt="about page" width="600" />