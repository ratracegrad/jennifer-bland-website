---
title: Saving Data to MongoDB Database from Node.js Application Tutorial
description: 
date: 2016-11-13
image: https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

The MEAN stack is used to describe development using MongoDB, Express.js, Angular.jS and Node.js. In this tutorial I will show you how to use Express.js, Node.js and MongoDB.js. We will be creating a very simple Node application, that will allow users to input data that they want to store in a MongoDB database. It will also show all items that have been entered into the database.

Before we get started I will describe a few terms that you will frequently hear when creating a MEAN stack application. After that we will start building our example.
<h2>CRUD</h2>
CRUD is an acronym that means Create, Read, Update and Delete. It is used to describe the process of having your data persisted into a database. In this example you will be providing examples of Creating new data into the database and then Reading the data from the database.
<h2>Restful API</h2>
A RESTful API is an application program interface that uses HTTP requests to GET, PUT, POST and DELETE data. We will be using an API to define when we add data to our database and when we read from the database.

<!--more-->
<h2>Creating a Node Application</h2>
To get started I would recommend creating a new database that will contain our application. For this demo I am creating a directory called node-demo. After creating the directory you will need to change into that directory.
<pre class='prettyprint'><xmp>mkdir node-demo
cd node-demo</xmp></pre>

Once we are in the directory we will need to create an application and we can do this by running the command
<code>npm init</code>
This will ask you a series of questions. Here are the answers I gave to the prompts.
<img src="/Screen-Shot-2016-11-11-at-10.52.48-AM-963x1024.png" alt="npm init answers" width="963" height="1024" class="alignleft size-large wp-image-1001" />
<div style="clear:both;"></div>
The first step is to create a file that will contain our code for our Node.js server.
<pre class='prettyprint'><xmp>touch app.js</xmp></pre>

In our app.js we are going to add the following code to build a very simple Node.js Application.
<pre class='prettyprint'><xmp>var express = require("express");
var app = express();
var port = 3000;
 
app.get("/", (req, res) => {
&nbsp;&nbsp;res.send("Hello World");
});
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});</xmp></pre>

What the code does is require the express.js application. It then creates app by calling express. We define our port to be 3000.

The <code>app.use</code> line will listen to requests from the browser and will return the text "Hello World" back to the browser.

The last line actually starts the server and tells it to listen on port 3000.

<h2>Installing Express</h2>
Our app.js required the Express.js module. We need to install express in order for this to work properly. Go to your terminal and enter this command.
<pre class='prettyprint'><xmp>npm install express --save</xmp></pre>

This command will install the express module into our package.json. The module is installed as a dependency in our package.json as shown below.
<img src="/uploads/Screen-Shot-2016-11-11-at-1.49.25-PM.png" alt="installing express in package.json" width="855" height="507" class="alignleft size-full wp-image-1027" />
<div style="clear:both;"></div>

To test our application you can go to the terminal and enter the command
<pre class='prettyprint'><xmp>node app.js</xmp></pre>
Open up a browser and navigate to the url 
<code>http://localhost:3000</code>

You will see the following in your browser
<img src="/Screen-Shot-2016-11-11-at-11.34.27-AM.png" alt="Simple Node Application" width="453" height="96" class="alignleft size-full wp-image-1004" />
<div style="clear:both;"></div>

<h2>Creating Website to Save Data to MongoDB Database</h2>
Instead of showing the text "Hello World" when people view your application, what we want to do is to show a place for user to save data to the database.

We are going to allow users to enter a first name and a last name that we will be saving in the database.

To do this we will need to create a basic HTML file. In your terminal enter the following command to create an index.html file.
<pre class='prettyprint'><xmp>touch index.html</xmp></pre>

In our index.html file we will be creating an input filed where users can input data that they want to have stored in the database. We will also need a button for users to click on that will add the data to the database.

Here is what our index.html file looks like.
<pre class='prettyprint'><xmp><!DOCTYPE html>
<html>
  <head>
    <title>Intro to Node and MongoDB<title>
  <head>

  <body>
    <h1>Into to Node and MongoDB<&#47;h1>
    <form method="post" action="/addname">
      <label>Enter Your Name<&#47;label><br>
      <input type="text" name="firstName" placeholder="Enter first name..." required>
      <input type="text" name="lastName" placeholder="Enter last name..." required>
      <input type="submit" value="Add Name">
    </form>
  <body>
<html></xmp></pre>

If you are familiar with HTML, you will not find anything unusual in our code for our index.html file. We are creating a form where users can input their first name and last name and then click an "Add Name" button.

The form will do a post call to the /addname endpoint. We will be talking about endpoints and post later in this tutorial.

<h2>Displaying our Website to Users</h2>
We were previously displaying the text "Hello World" to users when they visited our website. Now we want to display our html file that we created. To do this we will need to change the <code>app.use</code> line our our app.js file.

We will be using the sendFile command to show the index.html file. We will need to tell the server exactly where to find the index.html file. We can do that by using a node global call __dirname. The __dirname will provide the current directly where the command was run. We will then append the path to our index.html file.

The <code>app.use</code> lines will need to be changed to
<code>app.use("/", (req, res) => {
&nbsp;&nbsp;res.sendFile(__dirname + "/index.html");
});</code>

Once you have saved your app.js file, we can test it by going to terminal and running <code>node app.js</code>

Open your browser and navigate to "http://localhost:3000". You will see the following 
<img src="/Screen-Shot-2016-11-11-at-12.06.13-PM.png" alt="display html file" width="462" height="201" class="alignleft size-full wp-image-1005" />
<div style="clear:both;"></div>

<h2>Connecting to the Database</h2>
Now we need to add our database to the application. We will be connecting to a MongoDB database. I am assuming that you already have MongoDB installed and running on your computer.

To connect to the MongoDB database we are going to use a module called Mongoose. We will need to install mongoose module just like we did with express. Go to your terminal and enter the following command.
<code>npm install mongoose --save</code>

This will install the mongoose model and add it as a dependency in our package.json.

<h2>Connecting to the Database</h2>
Now that we have the mongoose module installed, we need to connect to the database in our app.js file. MongoDB, by default, runs on port 27017. You connect to the database by telling it the location of the database and the name of the database.

In our app.js file after the line for the port and before the app.use line, enter the following two lines to get access to mongoose and to connect to the database. For the database, I am going to use "node-demo".

<code>var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");</code>

<h2>Creating a Database Schema</h2>
Once the user enters data in the input field and clicks the add button, we want the contents of the input field to be stored in the database. In order to know the format of the data in the database, we need to have a Schema.

For this tutorial, we will need a very simple Schema that has only two fields. I am going to call the field firstName and lastName. The data stored in both fields will be a String. 

After connecting to the database in our app.js we need to define our Schema. Here are the lines you need to add to the app.js.
<code>var nameSchema = new mongoose.Schema({
&nbsp;&nbsp;firstName: String,
&nbsp;&nbsp;lastNameName: String
});</code>

Once we have built our Schema, we need to create a model from it. I am going to call my model "DataInput". Here is the line you will add next to create our mode.
<code>var User = mongoose.model("User", nameSchema);</code>

<h2>Creating RESTful API</h2>
Now that we have a connection to our database, we need to create the mechanism by which data will be added to the database. This is done through our REST API. We will need to create an endpoint that will be used to send data to our server. Once the server receives this data then it will store the data in the database.

An endpoint is a route that our server will be listening to to get data from the browser. We already have one route that we have created already in the application and that is the route that is listening at the endpoint "/" which is the homepage of our application.

<h2>HTTP Verbs in a REST API</h2>
The communication between the client(the browser) and the server is done through an HTTP verb. The most common HTTP verbs are 
<code>GET, PUT, POST, and DELETE</code>. 

The following table explains what each HTTP verb does.

<table style="border: 1px solid black; width: 33%;">
<thead style="border: 1px solid black;">
  <th style="border: 1px solid black;"><strong>HTTP Verb</strong></th>
  <th><strong>Operation</strong></th>
</thead>
<tbody style="border: 1px solid black;">
  <tr style="border: 1px solid black;">
    <td style="border: 1px solid black;">GET</td>
    <td>Read</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td style="border: 1px solid black;">POST</td>
    <td>Create</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td style="border: 1px solid black;">PUT</td>
    <td>Update</td>
  </tr>
  <tr style="border: 1px solid black;">
    <td style="border: 1px solid black;">DELETE</td>
    <td>Delete</td>
  </tr>
</tbody>
</table>

As you can see from these verbs, they form the basis of CRUD operations that I talked about previously.

<h2>Building a CRUD endpoint</h2>
If you remember, the form in our index.html file used a post method to call this endpoint. We will now create this endpoint.

In our previous endpoint we used a "GET" http verb to display the index.html file. We are going to do something very similar but instead of using "GET", we are going to use "POST". To get started this is what the framework of our endpoint will look like.

<code>app.post("/addname", (req, res) => {
    &nbsp;
});</code>

<h2>Express Middleware</h2>
To fill out the contents of our endpoint, we want to store the firstName and lastName entered by the user into the database. The values for firstName and lastName are in the body of the request that we send to the server. We want to capture that data, convert it to JSON and store it into the database.

Express.js version 4 removed all middleware. To parse the data in the body we will need to add middleware into our application to provide this functionality. We will be using the body-parser module.  We need to install it, so in your terminal window enter the following command.
<code>npm install body-parser --save</code>

Once it is installed, we will need to require this module and configure it. The configuration will allow us to pass the data for firstName and lastName in the body to the server. It can also convert that data into JSON format. This will be handy because we can take this formatted data and save it directly into our database.

To add the body-parser middleware to our application and configure it, we can add the following lines directly after the line that sets our port.
<code>var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));</code>

<h2>Saving data to database</h2>
Mongoose provides a save function that will take a JSON object and store it in the database. Our body-parser middleware, will convert the user's input into the JSON format for us.

To save the data into the database, we need to create a new instance of our model that we created early. We will pass into this instance the user's input. Once we have it then we just need to enter the command "save".

Mongoose will return a promise on a save to the database. A promise is what is returned when the save to the database completes. This save will either finish successfully or it will fail. A promise provides two methods that will handle both of these scenarios.

If this save to the database was successful it will return to the .then segment of the promise. In this case we want to send text back the user to let them know the data was saved to the database.

If it fails it will return to the .catch segment of the promise. In this case, we want to send text back to the user telling them the data was not saved to the database. It is best practice to also change the statusCode that is returned from the default 200 to a 400. A 400 statusCode signifies that the operation failed.

Now putting all of this together here is what our final endpoint will look like.
<code>app.post("/addname", (req, res) => {
&nbsp;&nbsp;var myData = new User(req.body);
&nbsp;&nbsp;myData.save()
&nbsp;&nbsp;&nbsp;&nbsp;.then(item => {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.send("item saved to database");
&nbsp;&nbsp;&nbsp;&nbsp;})
&nbsp;&nbsp;&nbsp;&nbsp;.catch(err => {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;res.status(400).send("unable to save to database");
&nbsp;&nbsp;&nbsp;&nbsp;});
});</code>

<h2>Testing our code</h2>
Save your code. Go to your terminal and enter the command <code>node app.js</code> to start our server. Open up your browser and navigate to the URL "http://localhost:3000". You will see our index.html file displayed to you.

Make sure you have mongo running.

Enter your first name and last name in the input fields and then click the "Add Name" button. You should get back text that says the name has been saved to the database like below.
<img src="/uploads/Screen-Shot-2016-11-13-at-11.12.11-AM.png" alt="Name saved to database" width="341" height="139" class="alignleft size-full wp-image-1046" />
<div style="clear:both"></div>

<h2>Access to Code</h2>
The final version of the code is available in my Github repo. To access the code <a href="https://github.com/ratracegrad/node-mongo-demo" target="_blank">click here</a>. If you like this tutorial, please star my github repo.


