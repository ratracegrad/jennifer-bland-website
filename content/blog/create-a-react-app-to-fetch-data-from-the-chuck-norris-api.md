---
title: Create a React App to Fetch Data From The Chuck Norris API
description: Create a React app that fetches data from the Chuck Norris API.
date: 2023-01-17
image: https://images.unsplash.com/photo-1650397306071-d3b39ae77696?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 5
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

In this article, I am going to show you how to create a React app that will fetch data from an API. Fetching data from an API is central to almost every application. I will show you how easy it is to fetch data from an API.

## What We Will Be Creating

We will create a React app that will have a button for every category of jokes in the Chuck Norris API. When a user clicks on a button, it will fetch a random joke from the API in that category.

Here is what it looks like:

![react app](https://res.cloudinary.com/ratracegrad/image/upload/v1673823052/Screenshot_2023-01-15_at_5.49.59_PM_bolj4a.png)


<!--more-->

## Create Our Starter Files

I will assume you already have Node installed on your computer. At your terminal enter this command:

```javascript
npx create-react-app chuck-norris-jokes
```

When it is finished change into the directory that it created with the command:

```javascript
cd chuck-norris-jokes
```

If you run `npm start` in the terminal, you will see this:

![starting app](https://res.cloudinary.com/ratracegrad/image/upload/v1673823502/Screenshot_2023-01-15_at_5.58.13_PM_mx8ejv.png)

## Intro to Chuck Norris API

The Chuck Norris API is located at: `https://api.chucknorris.io/`. Here is the usage directions that they provide for using the API:

![chuck norris api usage](https://res.cloudinary.com/ratracegrad/image/upload/v1673823718/Screenshot_2023-01-15_at_6.01.37_PM_isim3u.png)

You can get a random joke by calling:

```javascript
https://api.chucknorris.io/jokes/random
```

You can get a random joke from a specific category by calling:

```javascript
https://api.chucknorris.io/jokes/random
```

You can get a list of available categories by calling: 
```javascript
https://api.chucknorris.io/jokes/categories
```

## Getting All Available Categories

Open up your `App.js` file. You can delete everything inside the App-header as well as the import for the logo. Your file should look like this:

```javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

```

We want to get a list of available categories and then loop through that list and create a button with the name of the category. We will only need to do this one so we will use `useEffect`.

At top of the file add the line to import it:

```javascript
import React, { useEffect } from 'react';
```

Inside your App function and the `return` line, we will add our `useEffect`. Add this code:

```javascript
  useEffect(() => {
    const url = 'https://api.chucknorris.io/jokes/categories';

    const fetchData = async () => {
      try {
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
      } catch (error) {
          console.log("error", error);
      }
    };

    fetchData();

  }, []);
```

If you go to your browser and look at the console, you will see that it prints out a list of categories.

![list of categories](https://res.cloudinary.com/ratracegrad/image/upload/v1673824301/Screenshot_2023-01-15_at_6.11.33_PM_qid5gg.png)

## Adding Our Buttons

We want to create a variable called `buttons`. When the `useEffect` gets the list of categories, it will be assigned to this variable. 

We will use `useState` to set the value of the variable so we need to import it. Update the import at top of the file to include `useState`. It should look like this:

```javascript
import React, { useEffect, useState } from 'react';
```

Next, we need to define our variable. Add the following line above the `useEffect`:

```javascript
const [buttons, setButtons] = useState([]);
```

Now we can set the variable to contain the list of categories. In the `useEffect` replace the `console.log(json)` with:

```javascript
setButtons(json);
```

Now that we have the list of categories, we need to display a button for each one.  Add the following code inside the `App-header`:

```javascript
        <p>Chuck Norris Jokes</p>
        <div className="btn-wrapper">
          {buttons.map((item) => {
            return (
              <button 
                key={item}
                className="btn"
              >{item}</button>
            )
          })}
        </div>
```

Now we have our buttons but we need to add some styling to them so they look better. Open up the `App.css` file. Delete everything that is in this file. Add the following code:

```css
.App {
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.App-header {
  font-size: 3rem;
  color: white;
  width: 90vw;
  max-width: 800px;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.btn {
  background: #61dafb;
  height: 55px;
  font-size: 1.5rem;
  padding: 10px 20px;
  color: white;
  border-radius: 12px;
  border: 1px solid #61dafb;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
```

This is what our App looks like now:

![app with buttons](https://res.cloudinary.com/ratracegrad/image/upload/v1673824938/Screenshot_2023-01-15_at_6.22.07_PM_benyfg.png)

## Getting a Joke From a Category

When a user clicks on a button, we want to call the Chuck Norris API and pass in the category. This will get a random joke from that category.

Let's start by adding a `onclick` to the button. Update the button so that it looks like this now:

```css
<button
   key={item}
   className="btn"
   onClick={() => getJoke(item)}
>{item}</button>
```

Next, we need to create our `jetJoke` function. This function will use most of the same code in `useEffect` we created earlier. Add this code above the `useEffect`:

```css
  const getJoke = async (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
        console.log("error", error);
    }
  }
```

If you click on a button, you will see the following in the console:

![returned joke from api](https://res.cloudinary.com/ratracegrad/image/upload/v1673825400/Screenshot_2023-01-15_at_6.29.52_PM_xzfrmg.png)

This call to the API returns an object. The actual joke is on the key called `value`. This is what we want to save.

We want to do the same thing when we get the joke back from the API. We want to save the joke in a variable called `joke`. Add the following line right before the `useState` line:

```css
const [joke, setJoke] = useState({});
```

Update the `getJoke` function and replace the `console.log` with:

```css
setJoke(json);
```

Next, we need to display the joke. Add the following code below the `btn-wrapper`:

```css
<div className="joke-wrapper">
    {joke.value}
</div>
```

Just to make things look better, I added a class called `joke-wrapper`. Let's ad some styling to it so that there is some space between the joke and the buttons. Add the following code to the `App.css` file:

```css
.joke-wrapper {
  margin-top: 3rem;
}
```

## Final App

If you view the app in a browser, you should see this:

![final app](https://res.cloudinary.com/ratracegrad/image/upload/v1673823052/Screenshot_2023-01-15_at_5.49.59_PM_bolj4a.png)

## Let's Connect

Thanks for reading my article today. You can get the [source code here](https://github.com/ratracegrad/react-fetch-data-api).

If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.