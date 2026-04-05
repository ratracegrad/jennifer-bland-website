---
title: Got App, Got Data - Here's How to Store Data to MongoDB in a Node.js Express App
description: Learn how to store data to MongoDB in a Node.js Express app.
date: 2021-02-15
image: https://images.unsplash.com/photo-1667372459510-55b5e2087cd0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Every application has data. Let me show you how to store your data in a MongoDB database from an app written with Node.js and Express.js.

## What is CRUD

CRUD is an acronym for Create, Read, Update and Delete. CRUD is the operations that you use to:

- create data in a database
- read the data in a database
- update the data in a database
- delete the data in a database

## What we will be creating

We will create a simple application where you can store a user's first and last name in a MongoDB database. Here is what it looks like:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613336563/Screen_Shot_2021-02-13_at_5.22.09_PM_z51joo.png)

## Prerequisites

In this article I am going to assume you already have the following items already installed and running on your computer:

- node
- npm
- mongoDB

If you do not already have them installed then you will need to install them before continuing with this tutorial.

## Getting Started

We will need a folder for our project that we will be creating. Create a new folder called `node-crud-demo`. Change into this new folder and run this command to start our project:

```bash
npm init
```

You can just hit enter and accept all the defaults for the prompts.

This command creates a `package.json` file. This file will contain all the packages we will be using in our application.

## Create a Server File

Our application will have a server. Create a new file in your directory for the server. Create the file with this command:

```bash
touch server.js
```

Open this file in your editor and add the following line:

```javascript
console.log('Hello World')
```

We will be using Node.js to run our server. You can test that it is working by running this command in your terminal:

```bash
node server.js
```

Now run `node server.js` in your terminal and you should see this:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613337807/Screen_Shot_2021-02-14_at_4.23.13_PM_vk8ho9.png)

Next we need to install software for our server.

## Installing Express and other Dependencies

We will be using Express.js as our server. According to their website:

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

You can install express by running this command in your terminal:

```bash
npm install express
```

You can verify it was installed by opening up the `package.json` file. You will see it installed in the dependencies like this:

```json
"dependencies": {
  "express": "^4.17.1"
}
```

When we ran our server for the first time, we used Node to start the server. If you make a change to the server file, you will need to stop node from running and start it again in order for it to reflect your changes.

There is a package called `nodemon` that provides the same functionality as node. The big difference is that it will recognize when you have made a code change and will automatically restart the server for you. This will make life easier so let's install it with this command:

```bash
npm install nodemon
```

To make our life easier we can create a script that will start the server for us. Open up the `package.json` file.

Currently there is one entry in the scripts section of the file:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

Add the following to the script section so it looks like this:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon server"
},
```

With this script we can now start our server with this command:

```bash
npm start
```

The other package to install is called **ejs**. EJS is embedded JavaScript templates. We will be using this to display content to the browser and pass data from the database to the browser. You can install it with this command:

```bash
npm install ejs
```

We will configure ejs in the next section.

## Configuring Our Express Server

Open up the `server.js` file. You can remove the console.log line. To use express we will need to import it and use it to start our application. Add these lines in the file:

```javascript
const express = require('express');
const app = express();
```

Next we need to start our server and tell it what port to listen to. For this demo I am going to run the application on port 3000. You can use a different port if you want.

After the import for express add this line to specify the port we will be using:

```javascript
const port = 3000;
```

Add these lines at bottom of file to start our server:

```javascript
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

We can test our our server by starting it in the terminal with our script `npm start`. Then open up your browser and navigate to `localhost:3000`. You should see the following message:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613340670/Screen_Shot_2021-02-14_at_5.10.50_PM_sqdkfv.png)

That is ok. This shows that the browser is talking to our server. Next we need to actually send something of value back to the browser.

## Sending a File to the Browser

When users navigate to `localhost:3000` we want to display a file to the browser. We will be using ejs to display a file. We need to configure our application to let it know that we are using **ejs**. After we create our app add the following line:

```javascript
app.set('view engine', 'ejs');
```

By default ejs looks for files in a directory called **views**. Create this folder using this command:

```bash
mkdir views
```

Inside that folder you need to create a file that we will display to browsers. Usually this file is called **index.ejs**. Since we are using **ejs** it expects all files to have an extension of `.ejs`. Create an `index.ejs` file in the views directory with this command:

```bash
touch views/index.ejs
```

Open up the `index.ejs` file and add this code:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mongo CRUD Demo</title>
    </head>
    <body>
        <h1>MongoDB CRUD Demo</h1>
    </body>
</html>
```


Next we need to update our server to display this file. Open up the `server.js` file. Insert the following code above the `app.listen` code to display the index.ejs file to the browser.

```javascript
app.get('/', (req, res) => {
  res.render('index.ejs');
});
```

In this code we are telling the server to listen to calls from the homepage of the application represented by the `'/'`. When it gets a request then it returns the `index.ejs` file.

Open up your browser and navigate to `localhost:3000` and you will see the output of the file in your browser:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613342822/Screen_Shot_2021-02-14_at_5.46.50_PM_ttnl13.png)

Excellent! We have the server responding to requests from the browser.

## HTTP Verbs

You might be wondering how did the server know to send the `index.ejs` file to the browser. It knew because we told the server to respond to a `GET` request from the browser with the `app.get` code.

**GET** is one of the HTTP verbs. The verbs tell the browser what to do. For a CRUD application, the **GET** verb is how to do the **READ** part of CRUD. Here are the other HTTP verbs and what they correspond to:

| CRUD Action | HTTP Verb |
|-------------|-----------|
| CREATE | POST |
| READ | GET |
| UPDATE | PUT |
| DELETE | DELETE |

Let's go through and implement the **CREATE** part of CRUD.

## CREATE

Browsers can only perform a **CREATE** operation if they send a **POST** request to the server. This **POST** request can be triggered through a `form` element.

Open up the `index.ejs` file. We will add a form to our file. The form will allow users to enter a first name and a last name. Add the following to the file:

```html
<div class="container form">
  <div>Create</div>
  <form action="/users" method="POST">
    <div class="entry">
      <label for="fname">First Name</label>
      <input type="text" placeholder="First Name" name="fname" />
    </div>
    <div class="entry">
      <label for="lname">Last Name</label>
      <input type="text" placeholder="Last Name" name="lname" />
    </div>
    <button class="button button-block" type="submit">
      Create
    </button>
  </form>
</div>
```

In the above code you will see that it will send a **POST** request to the server using the route **/users**.

To respond to this **POST** request we need to create a route. Open up the `server.js` file. Below the current route for `app.get` add the following code:

```javascript
app.post('/users', (req, res) => {
  console.log('POST called');
});
```

If you refresh your browser, you will now see our form where a user can input their first name and last name. Click on the `create` button. If everything worked correctly in your terminal you should see the output of the console.log like this:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613346093/Screen_Shot_2021-02-14_at_6.41.16_PM_jyy7uq.png)

If you see the console.log then that means the server is responding to your browser's **POST** request.

The next step is to get the values the user inputs for their first name and last name. By default Express.js does not parse the data being sent to it. To get the values we need to install a package called **body-parser**.

Body-parser is a **middleware**. It will parse the values being sent to the server on the **POST** request.

You can install it using this command in the terminal:

```bash
npm install body-parser
```

Open up the `server.js` file. We need to tell our application to use the body-parser package. At top of file add an import of this new package.

```javascript
cost bodyParser = require('body-parser');
```

After the line were we create our application, add the following configuration code:

```javascript
app.use(bodyParser.urlencoded({ extended: true }));
```

The `urlencoded` method in body-parser will extract data from the `form` element and add them to the `body` property in the `request` object.

Change the console.log to print out `req.body`.

Your `server.js` file should look like this. NOTE: I added some headings to break down each section of the file.

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

/* --------------------------------
 *    APP CONFIG
 * -------------------------------- */
app.use(bodyParser.urlencoded({ extended: true }));

 /* --------------------------------
 *    ROUTES
 * -------------------------------- */
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/users', (req, res) => {
  console.log(req.body);
});


/* --------------------------------
 *    START SERVER
 * -------------------------------- */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

If you go back to your browser and refresh, you can input your first name and last name. When you click the submit button, it should print out the values in the terminal like this:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613347937/Screen_Shot_2021-02-14_at_7.12.06_PM_ghyixx.png)

## Adding Styles to Our Application

Our form looks rather primitive. At the start of this tutorial I gave a screenshot of my finished application. It looks rather polished. We need to add styling to our application to get this polished look.

All the CSS will be in a file called `styles.css`. But how do we tell browser to use the styles in this file? We create a folder called `public` and put the file inside it. Then we tell our application to use this directory to serve files to the browser.

Create the public directory with this command:

```bash
mkdir public
```

Next create a file called styles.css inside that folder with this command:

```bash
touch public/styles.css
```

The last thing we need to do is to configure our application to use the public folder. Open up the `server.js` file and add this line after our configuration for ejs:

```javascript
app.use(express.static('public'));
```

This tells our application that if it cannot fin a file then look for it in the public directory. We will update our `index.ejs` file to include a link to our stylesheet.

Open up the `index.ejs` file. In the `head` section after the title include this line:

```html
<link rel="stylesheet" href="/styles.css" />
```

The last think we need to do is actually write our css in the styles.css file. This tutorial is not to teach you how to write CSS so I am going to provide the CSS code that will make our application look nice. Open up the `styles.css` file and insert this code:

```css
body {
  background-color: #c1bdba;
  font-size: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 800px;
  width: 90vw;
  margin-bottom: 40px;
  /* margin: 40px auto; */
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
  box-sizing: border-box;
}
.form {
  background: rgba(19, 35, 47, 0.9);
  padding: 20px;
  border-radius: 8px;
}
.container div {
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}
.entry {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.entry label {
  flex: none;
  display: block;
  width: 200px;
  color: #fff;
}
input {
  display: block;
  flex: 1 1 auto;
  height: 100%;
  padding: 10px;
  background: none;
  border: 1px solid #a0b3b0;
  color: #ffffff;
  border-radius: 0;
}
table {
  width: 100%;
  padding: 5px;
  margin: auto;
  border-collapse: collapse;
}
tr {
  border-top: 1px solid #c1c3d1;
  border-bottom: 1px solid #c1c3d1;
}
th {
  text-align: left;
  border-right: 1px solid #343a45;
  padding: 10px;
  background: rgba(19, 35, 47, 0.9);
  color: #d5dde5;
}
td {
  background: #fff;
  padding: 20px;
  vertical-align: middle;
  border-right: 1px solid #c1c3d1;
}
.button {
  border: 0;
  outline: none;
  padding: 10px 15px;
  text-transform: uppercase;
  background: #1ab188;
  color: #ffffff;
}
.button-block {
  display: block;
  width: 100%;
}
.form-group {
  display: flex;
}
```

## MongoDB

For this tutorial I will be using MongoDB as my database. We will need to install this in our application. In the terminal install mongodb using this command:

```bash
npm install mongodb
```

Next we need to create a mongodb database for us to use. I am not going through the steps to show you how to install mongoDB on your laptop. Instead we will be using a free service called **MongoDB Atlas**.

## MongoDB Atlas

You will need to [create an account on MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

After you create your account you will need to create an organization. An organization is like a company name but since we don't have a company then we can name our organization anything we want. I am going to name mine **CRUD Tutorial**.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613349329/Screen_Shot_2021-02-14_at_7.34.55_PM_rzbu2v.png)

Next you will be asked to select a cloud service. The default option is **MongoDB Atlas** and that is what we will be using.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613349492/Screen_Shot_2021-02-14_at_7.38.00_PM_ufu9nd.png)

Next, you will need to set permissions. MongoDB Atlas will automatically insert your email address that you used when you created your account and set permissions to **Organization Owner**. We don't need to change anything on this screen so just click the button to create your organization.

Once your organization is created you will see this in your dashboard:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613350010/Screen_Shot_2021-02-14_at_7.46.08_PM_vskzus.png)

The next step is to create a database. You need to create a project first so click on the **New Project** button. You will be asked to name your project. I am calling mine **users**.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613350193/Screen_Shot_2021-02-14_at_7.49.15_PM_mt5fcp.png)

Just like when we created our organization it will next ask you to set permissions. It will automatically add your email address that you used when you created your account. We don't need to change anything so click the **Create Project** button.

You will be presented with this screen asking you to create a new cluster:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613350193/Screen_Shot_2021-02-14_at_7.49.15_PM_mt5fcp.png)

Click the **Build a Cluster** button. You will be asked which plan you want to use. Select the free cluster option.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613350484/Screen_Shot_2021-02-14_at_7.54.07_PM_fxhz7v.png)

You will then be asked to select a Cloud Provider & Region. It will default to the one closest to your location. Click the **Create Cluster** button. MongoDB Atlas will create your database. This may take a few minutes to complete.

## Connecting to Database

Once MongoDB Atlas has created your cluster, you will need to get the information they provide to connect to the database. We will use this connection string to connect to the database and save our user's first and last names in the database.

Click the **Connect** button.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613351228/Screen_Shot_2021-02-14_at_8.06.50_PM_rh28k7.png)

MongoDB Atlas will require you to whitelist your IP address before you can connect to your database. Click on the **Add Your Current IP Address** button.

Next you will need to create a user to manage your database. Create a username and password. Make sure you remember this because we will need it to connect to the database. Click the **Create Database User** button. Finally click the **Choose a connection method** button.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613351488/Screen_Shot_2021-02-14_at_8.11.17_PM_hybmvk.png)

From list click on **Connect your application**. You will be presented with the connection string. Click the **Copy** button to copy the connection string.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613353461/Screen_Shot_2021-02-14_at_8.43.58_PM_l74yoo.png)

Open your `server.js` file. At top of file you will need to import MongoDB using this code:

```javascript
const MongoClient = require('mongodb').MongoClient;
```

Below that line add a new const for dbUrl that contains the connection to your MongoDB Atlas database. You will need to change two things in the code you copied from your Atlas connection string. Replace `<password>` with your password and change `<dbname>` to the name of your database. Here is what your connection string should look like:

```javascript
const dbUrl =
  'mongodb+srv://admin:<password>@cluster0.38khl.mongodb.net/<dbname>?retryWrites=true&w=majority';
```

## CREATE

Now that we have created our account on MongoDB Atlas and we have installed mongo in our application, we need to write the data into the database. Remove the `console.log` in the `app.post` and replace it with the following:

```javascript
app.post('/users', (req, res) => {
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('node-demo');
    const collection = db.collection('users');
    collection
      .insertOne(req.body)
      .then(() => {
        res.redirect('/');
      })
      .catch(() => {
        res.redirect('/');
      });
  });
});
```

Let me explain what this code is doing. It makes a connection to MongoDB Atlas using our connection string. In the most recent version of Mongo they require you to pass an option for useUnifiedTopology so that is next.

The next line checks to see if there was an error created in our connection to MongoDB Atlas. If if there is an error then it returns the error.

We then connect to our database which in this tutorial is called **node-demo**. We have not created this database so the first time this code runs it will automatically create the database.

The next line is to get a handle to the collection in our database. In this tutorial I have named my collection **users**. Just like the database the first time this code runs it will automatically create the collection.

The next line will actually insert the data the user entered in the form into the collection. After the data is inserted it returns the user to the homepage of our application.

Go ahead and try it and put in your first name and last name and click the submit button.

Go to your MongoDB Atlas account and click the **collections** button. It will show you the contents of your collection. Here you see the first entry in my database:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613403961/Screen_Shot_2021-02-15_at_10.45.48_AM_gbkapj.png)

## READ

Now that we have one entry in the database, we want to read all the users and display them to the users. This part of CRUD is the READ operation. The READ part is actually two parts:

1. Get all users from database
2. Display the users

We are using ejs to display a file to user's browsers. EJS allows us to pass along data from the server. We will use that functionality to display the users in the database.

Open up the `server.js` file. Currently a **GET** call to the `'/'` route renders the `index.ejs` file. Let's modify that to make a call to the database and get a list of users. Update the route to be this:

```javascript
app.get('/', (req, res) => {
  MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('node-demo');
    const collection = db.collection('users');
    collection
      .find()
      .toArray()
      .then((results) => {
        res.render('index.ejs', { users: results });
      })
      .catch((error) => {
        res.redirect('/');
      });
  });
});
```

Let me explain this code. We make a connection to MongoDB and get a handle to the database and the collection. The `find()` command will return all entries in the database. We convert the list to an array and then render the index.ejs file and pass to it an object. This object will contain the array of all the users in the database.

Now that we have the list of users we need to display it to the users in the browsers. Open up the `index.ejs` file. Add the following lines at the end of the file:

```html
<div class="container">
    <table>
        <thead>
        <tr>
            <th colspan="3"><div>Read</div></th>
        </tr>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <% for(var i = 0; i < users.length; i++) { %>
            <tr>
                <td><%= users[i].fname %></td>
                <td><%= users[i].lname %></td>
                <td>
                    <button
                        class="button editButton"
                        data-fname="<%=  users[i].fname %>"
                        data-lname="<%= users[i].lname %>"
                    >
                        Edit
                    </button>
                    <button
                        class="button deleteButton"
                        data-fname="<%=  users[i].fname %>"
                        data-lname="<%= users[i].lname %>"
                    >
                        Delete
                    </button>
                </td>
            </tr>
            <% } %>
        </tbody>
    </table>
</div>
```

In this code we are creating a table that will display the user's first name and last name. You will notice that there is a for loop in the html code. This will loop through the array of users and display each entry in the database.

Go back to your browser and refresh. You will now see a list of all users in the database like this:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1613411550/Screen_Shot_2021-02-15_at_12.52.19_PM_adnf7a.png)

## DELETE

The next part of CRUD we will be implementing is **DELETE**. Next to every user there a delete button. If user clicks that button it should remove that entry from the database, then read all entries from database and send the updated list to the browser.

To capture that somebody clicked the button we will use JavaScript. We will have to put all our JavaScript code in a file just like we did with our CSS styles. Create a file `main.js` in the **public** folder with this command:

```bash
touch public/main.js
```

First thing first, let's tell our `index.ejs` file about our new JavaScript file. Open up the `index.ejs` file and add this at the bottom of the file just above the closing body tag:

```html
<script src="/main.js"></script>
```

Go back to the `main.js` file. We need to add an Event Listener to track when a user clicks on the delete button. In the html code to display the list of users, each user has a delete button. That button has a class of `deleteButton`. We can use that to add an event listener.  First get all delete button by adding this line of code to the file:

```javascript
const deleteBtn = document.querySelectorAll('.deleteButton');
```

Next add an event listener by doing this:

```javascript
for (const button of deleteBtn) {
  button.addEventListener('click', (e) => {
    console.log(e.target.dataset);
  });
}
```

When a user clicks on any of the buttons the variable `e` contains a handle to the button that was clicked. In the html code, each button has two dataset entries. One for first name and one for last name.

If you click on a delete button the values of the dataset for the button will be displayed in the console. We will use these dataset values to find the correct entry in the database to delete.

To delete an entry we will have to send a **DELETE** request to the `'/users'` route on the server. We will be using the Fetch API to make that call.

After the console.log add the following code:

```javascript
for (const button of deleteBtn) {
  button.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    fetch(`/users`, {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fname: e.target.dataset.fname,
        lname: e.target.dataset.lname,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then(() => {
        window.location.reload();
      });
  });
}
```

Let's review this code. We use the Fetch API to call the **'/users'** route using the **DELETE** method.

We will be sending over the user's first name and last name as a JSON object. We have to tell the server that the content is in JSON format which we do by adding it to the headers. We then send over the data in the body as a JSON object.

The only problem is that Express.js by itself does not know how to parse JSON data. We have to use a middleware to handle JSON objects. The body-parser middleware that we have installed will handle it.

Open up the `server.js` file. In the app configuration section add this line below the current body-parser configuration:

```javascript
app.use(bodyParser.json());
```

Next we need to create a route to handle the DELETE request. Below the last route add this code to handle the DELETE request:

```javascript
app.delete('/users', (req, res) => {
    MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
        if (err) return console.error(err);
        const db = client.db('node-demo');
        const collection = db.collection('users');
        collection
            .deleteOne(req.body)
            .then(() => {
                res.json(`Deleted user`);
            })
            .catch(() => {
                res.redirect('/');
            });
    });
});
```

Let's review this code. It makes the connection to the database like we have done previously. It calls the `deleteOne` method of mongo and passes in the details of the entry it wants to have deleted. That entry contains the values from the e.target.dataset that we sent.

If it is successful in deleting the entry from the database it returns a JSON string saying the user was deleted.

In our `main.js` file we have a `.then()` method that is called when the fetch call returns. It verifies that the call was a success and if it is then it refreshes the browser.

That refresh of the browser will call our GET method which will return all entries in the database. The user that was just deleted will not be shown any more since it is no longer in the database.

Try it out. Delete a user and verify that it is removed from list of users.

## UPDATE

The last part of CRUD we need to implement is **UPDATE**. Next to list of all users in the database we have an edit button. Just like delete we can add an event listener that kicks in when a user clicks the button.

Open up the `main.js` file. Add this line at top of file to get a handle to all edit buttons which have a class of `editButton`:

```javascript
const editBtn = document.querySelectorAll('.editButton');
```

Next we need to add an event listener. Add this code at the bottom of the file:

```javascript
for (const button of editBtn) {
  button.addEventListener('click', (e) => {
    console.log(e.target.dataset);
  });
}
```

Let's think about how we would like to handle editing an entry. We will need to display the value for the user's first name and last name. Then a person can make any change they want to the entry. When they are finished they should be able to click an update button and the value is updated in the database.

Displaying the the user's first name and last name is exactly like the form we used to create a new entry in the database. Except in this case we will automatically fill in the user's first name and last name. So let's create this form to edit a user.

Open up the `index.ejs` file. Add the following code below the table displaying the list of users:

```html
<div class="container form">
    <div>Update</div>
        <div class="entry">
            <label for="oldFname">Old First Name</label>
            <input type="text" name="oldFname" id="oldFname" readonly="true" />
        </div>
        <div class="entry">
            <label for="oldLname">Old Last Name</label>
            <input type="text" name="oldLname" id="oldLname" readonly="true" />
        </div>
        <div class="entry">
            <label for="newFname">New First Name</label>
            <input type="text" name="newFname" id="newFname" />
        </div>
        <div class="entry">
            <label for="newLname">New Last Name</label>
            <input type="text" name="newLname" id="newLname" />
        </div>
        <button class="button button-block updateButton"">
            Update
        </button>
</div>
```

This form will contain the current user values for first name and last name that the user will not be able to edit. Below that will be value for the first name and last name that the user can edit.

You might ask why do I need both current value and the new values? The answer is simple. We need the current values so we can find the record in the database. Once we find that record we update it with the new values.

We need to populate the values of the fields with the first and last name of the user that they want to edit. Open up the `main.js` file. In the event listener add code to set the values of the four fields. Your event listener should look like this now:

```javascript
for (const button of editBtn) {
  button.addEventListener('click', (e) => {
    document.getElementById('oldFname').value = e.target.dataset.fname;
    document.getElementById('oldLname').value = e.target.dataset.lname;
    document.getElementById('newFname').value = e.target.dataset.fname;
    document.getElementById('newLname').value = e.target.dataset.lname;
  });
}
```

When the user clicks on the update button, we have two choices on how we want to implement the functionality of updating that user in the database. Our first option is to use a form like we did to create a new user. Our second option is to use JavaScript to place a call to server to update the user. For this tutorial I am going to show you how to do the second choice.

Open up the `main.js` file. Add the line of code at the top of the file to get a handle to the update button:

```javascript
const updateBtn = document.querySelector('.updateButton');
```

Next we want to add an event listener when a user clicks the button. Let me give you the code and then we will walk through it.

```javascript
updateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/users', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fname: document.querySelector('#newFname').value,
      lname: document.querySelector('#newLname').value,
      oldFname: document.querySelector('#oldFname').value,
      oldLname: document.querySelector('#oldLname').value,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then(() => {
      window.location.reload();
    });
});
```

Just like delete we will be using the fetch API to call a route on the server. The HTTP verb to update an entry is **PUT**. We set our method then to PUT. We add headers to tell server that the content we are sending is in JSON format. We then send the content in the body with the old values and the new values.

We need to create a route on the server to handle the PUT request to update an entry in the database. Open up the `server.js` file. Add the following code below the last route:

```javascript
app.put('/users', (req, res) => {
    MongoClient.connect(dbUrl, { useUnifiedTopology: true }, (err, client) => {
        if (err) return console.error(err);
        const db = client.db('node-demo');
        const collection = db.collection('users');
        collection
            .findOneAndUpdate(
                { fname: req.body.oldFname, lname: req.body.oldLname },
                {
                    $set: {
                        fname: req.body.fname,
                        lname: req.body.lname
                    }
                },
                {
                    upsert: true
                }
            )
            .then(() => {
                res.json('Success');
            })
            .catch(() => {
                res.redirect('/');
            });
    });
});
```

Let's walk through this code. It makes a connection to the database. It then uses the mongo `findOneAndUpdate` method to find the right record in the database by using the previous values for first and last name.

After it finds the right record it uses the mongo `$set` method to update the entry with the new values. The `upsert` option is that to see that if it does not find the existing entry in the database then create a new entry in the database with the new values.

Once it has updated the record it returns the JSON string of 'Success'. In our main.js file it receives this JSON string. If everything is ok then it refreshes the browser. This refresh will hit the GET route which will send all entries in the database thus showing our newly updated record.

## All Done!

This has been a very long tutorial to teach you how to create a simple Node and Express.js app to store data in a mongoDB database.

This tutorial provides an understanding of CRUD applications. Using CRUD you have learned how to:

- Create data in a mongoDB database
- Read data in a mongoDB database
- Update data in a mongoDB database
- Delete data in a mongoDB database

You have the knowledge now to add CRUD functionality in your Node and ExpressJS applications.

## Get the Source Code

The finished version of this application is available in my GitHub repo. You can [find it here](https://github.com/ratracegrad/node-crud-demo).
