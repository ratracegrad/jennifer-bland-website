---
title: Access Coinbase API using OAuth2
description: Learn how to access the Coinbase API using OAuth2.
date: 2022-01-23
image: https://images.unsplash.com/photo-1729855637715-99192904aac5?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Coinbase is a cryptocurrency exchange where you can buy popular coins like Bitcoin and Ethereum. In these series of articles I will show you how to utilize the Coinbase API to see a list of cryptos that you hold as well as all the transactions for a specific crypto coin. We will be creating a Node.js application to access the Coinbase API.

## Coinbase API Options

You can access the Coinbase API [here](https://developers.coinbase.com/). Coinbase has two types of APIs
- API Key
- OAuth2

The API Key is used to access your account on Coinbase. The OAuth2 API is used to authenticate to coinbase for any user and then have access to all the API functionality.

For this demo, I want to make this available to everyone to use not just myself so we are going to use the OAuth2 API.


<!--more-->


## Create Developer Account

To use the Coinbase API you will need to create a developer account which is free. I will not walk you through the steps to create an account.

Once you have created your account, click on the `My Apps` button in the top right corner.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642951620/Screen_Shot_2022-01-23_at_10.26.12_AM_xyi0x6.png)

Click on the `New OAuth2 Application button`. You will be given this form to complete for your application.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642951791/Screen_Shot_2022-01-23_at_10.29.42_AM_fc0u9j.png)

For `Application Name`, I put **API Demo**.

For `Description`, I put **Demostration of the Coinbase API**.

For `Permitted Redirect URIs`, I put **http://localhost:3000/callback**. NOTE: if you are hosting your website somewhere then you will need to replace the URI above with the URI of your host.

At bottom of form are a series of radio buttons. I selected **No** for all of them.

Check the box to accept the Coinbase terms for developers.

Once you have the form completed, click the `Create Application` button.

After Coinbase creates your application, you will be shown your `Client ID` and `Client Secret`. Save these because we will be using it in our application.

## Creating our Node Application

I am using the express-generator to scaffold out the Node.js application. In your terminal use this command to create your Node application:

```bash
npx express-generator -e --view=ejs coinbase-demo
```

I will be using EJS as my view and template engine so I have included options for it. My application is coinbase-demo.

Change into the directory that contains your applicaiton with this command:

```bash
cd coinbase-demo
```

Install all the dependencies next:

```bash
npm install
```

Before we start editing I want to install 3 additional packages that we will be using. You can install them with this command:

```bash
npm install axios nodemon qs
```

Open the application in your editor.

## Configuring Start Script

The express generator app goes through a process to verify the port value you give it at startup. This is done in the file `bin/www`. I don't like the way this is done so I am going to completely bypasss it.

Open the `package.json` file. Update the start script so that it looks like this:

```bash
"start": "nodemon app.js"
```

Next open up the `app.js` file. After the line for logger add the following 2 lines:

```bash
const axios = require('axios');
const port = process.env.PORT || 3000;
```
NOTE: the port must match the value you used for your redirect URI in your Coinbase application.

Since we will be putting all our routes in a single file you can delete the line for `usersRouter` and the line where it is set in app.use section. You can also delete the `users.js` file in the routes directory.

We will no longer be exporting the app.js file so delete the last line that was exporting it. Replace it with the following:

```bash
app.listen(port, '0.0.0.0', function () {
  console.log("Server starting on localhost:" + port);
});
```
You can now delete the `bin` directory and the file `www` contained in it.

Start your server by entering the following command in the terminal:

```bash
npm start
```

Open your browser and enter the URI `localhost:3000`. You should see the following:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642956577/Screen_Shot_2022-01-23_at_11.48.48_AM_m2hfd0.png)

## Authenticating with Coinbase OAuth2

We are going to use the Coinbase OAuth2 to validate any user that wants to use our application. You can find the [details here](https://developers.coinbase.com/docs/wallet/coinbase-connect/reference).

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642957353/Screen_Shot_2022-01-23_at_12.02.09_PM_aja2sn.png)

On the homepage of our application we need to add a button that calls the Coinbase endpoint and passes in any parameters we want to add. 

Open up the index.ejs file in the views folder. Add the following button below the paragraph with the Welcome line:

```javascript
<a href="https://www.coinbase.com/oauth/authorize?response_type=code&client_id=2240e80398486d147c6a3e2e48e63b3d9a562497ad85bcd3300b7dda67eae42d&redirect_uri=http://localhost:3000/callback&state=MY_SECRET_KEY&scope=wallet:user:read,wallet:user:email,wallet:accounts:read,wallet:transactions:read&account=all" class="btn">
 Connect with Coinbase
</a>
```

You might notice that that is one very, very long `a` tag. 

Right above it is the welcome message that displays a `title` that is passed into the file. Let's simplify our button by passing in the appropriate values.

Open up the `index.js` file in the routes folder. After the router variable add the following lines. Make sure to put in your client_id and callback URI from your Coinbase OAuth2 application:

```bash
const SECRET = "MY_SECRET_KEY";
const REDIRECT_URI = "http://localhost:3000/callback";
const CLIENT_ID = "2240e80398486d147c6a3e2e48e63b3d9a562497ad85bcd3300b7dda67eae42d";
const SCOPE = "wallet:user:read,wallet:user:email,wallet:accounts:read,wallet:transactions:read";
```
In the `router.get` it passes in an object that currently has a value for the `title`. Add the following so that they are passed in:

```bash
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    CLIENT_ID: CLIENT_ID,
    REDIRECT_URI: REDIRECT_URI,
    SECRET: SECRET,
    SCOPE: SCOPE,
  });
});
```

Now we can update our button to use the values in our button. Go back an open up the index.ejs file in the views folder. Update your button to be this:

```bash
<a href="https://www.coinbase.com/oauth/authorize?response_type=code&client_id=<%= CLIENT_ID %>&redirect_uri=<%= REDIRECT_URI %>&state=<%= SECRET %>&scope=<%= SCOPE %>&account=all" >
  Connect with Coinbase
</a>
```
Now when you view your application in your browser you should see this:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642959132/Screen_Shot_2022-01-23_at_12.31.33_PM_jdxyti.png)

I am not so keen on how this button looks. Add a `class="btn"` to the button. Open up the file `style.css` in the public/stylesheets directory. Add the following css:

```html
.btn {
  width: 100%;
  background: #2364d2;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 15px;
  font-family: "Source Sans Pro", sans-serif;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
```

Now our buttons looks like this:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642959303/Screen_Shot_2022-01-23_at_12.34.53_PM_glt6ko.png)

Now click on the button. You should get a screen to login to your Coinbase account

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642959423/Screen_Shot_2022-01-23_at_12.36.49_PM_sh9drq.png)

Enter your Coinbase userid and password to login to your account. Once logged in your will be presented with an option to authorize our application to access your account:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642959601/Screen_Shot_2022-01-23_at_12.38.38_PM_xmcrai.png)

After you authorize the application you will get a 404 error page. This is because Coinbase is redirecting back to the redirect URI which is `http://localhost:3000/callback`. There is no route to handle that which is why you are seeing the error message.

## Handling Callback Route

Let's go back to the Coinbase API documentation. After authorizing your application it says you must make a call to the token endpoint to get a new token for the user.

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642960120/Screen_Shot_2022-01-23_at_12.44.17_PM_wfivge.png)

We will make the call to the token endpoint when Coinbase calls our redirect URI.

Open up the `index.js` file in the routes directory. Add the following code to handle the callback route:

```bash
// User gets redirected to this endpoint on successful login
router.get("/callback", async (req, res) => {
  const { code, state } = req.query;
  if (state === SECRET) {
    const data = qs.stringify({
      'grant_type': 'authorization_code',
      'code': code,
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
      'redirect_uri': REDIRECT_URI
    });
    const config = {
      method: 'post',
      url: 'https://api.coinbase.com/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data
    };

    try {
      const response = await axios(config);
      res.send({ response: response?.data });
    } catch (e) {
      console.log("Could not trade code for tokens", e)
    }
  }
});
```

Let's walk through this code.

After our application is authorized, Coinbase call our redirect URI and passes it two query params - code and secret. We are destructuring them into variables. 

When we called Coinbase initially we passed in a secret phrase which is returned to us. This verifies the call came from Coinbase. We check to make sure the value that is returned is the value we sent Coinbase initially.

Next we are going to stringify the data we will be sending to Coinbase to get the token for the user. We will use the `qs` package we installed when we created our application. Add the following line at the top of the file to import it:

```bash
const qs = require('qs');
```

The object that we will stringify has the following values:

`grant_type` must have the value **'authorization_code'**.
`code` has value of code that was destructured from the query params.
`client_id` has the value from the CLIENT_ID variable.
`client_secret` has the value from the CLIENT_SECRET variable. This variable does not exist so add an entry in the variables for it and set its value to the CLIENT_SECRET in your Coinbase application.
`redirect_uri` has the value from the REDIRECT_URI variable.

Next we create a `config` object that will passed into axios. We will use axios to make the `POST` call to Coinbase to get the token. We don't have axios defined yet so add its import at top of the file:

```bash
let axios = require('axios');
```

For right now we are going to display the contents of what is returned from Coinbase in our brower with this line:

```bash
res.send({ response: response?.data });
```

Let's test everything. Go to your browser and navigate to the URI `http://localhost:3000`.

Click the button to connect to Coinbase. Log in if requested. Authorize your application. You should get an object similar to this displayed in your browser:

![](https://res.cloudinary.com/ratracegrad/image/upload/v1642962114/Screen_Shot_2022-01-23_at_1.19.50_PM_lvzo62.png)

Now we have an access token that we can use when accessing the Coinbase API to get information on this account.

## What's Next

In the next article, we will expand on what we have created so far. We will explore the Coinbase API to display a list of all the crypto tokens that the user has in their Coinbase account. We will then show all the transactions for each crypto token. [Check out next article here](/blog/utilizing-the-coinbase-api-in-a-node-js-application/).