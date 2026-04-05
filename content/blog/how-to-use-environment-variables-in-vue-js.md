---
title: How to Use Environment Variables in Vue.js
description: Learn how to use environment variables in a Vue.js application.
date: 2019-09-02
image: https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Most applications will access data from an API. To access that API you will need to have an API key and the URL to access the API. You should not be pushing your API keys to you repo because that makes them available to everyone. The solution is to store your API keys in environment variables. So how do you access environment variables in a Vue.js application? Let me show you how. The best way to start is to have a project that was created using the Vue-CLI. If you used this then it automatically setup your project to use webpack for the build process making it much easier for you to use environment variables.

## Adding .env Files

Your environment variables will be stored in .env files. This file must exist in the root directory of your application. To create an .env file use this command:

```
touch .env
```

The .env file will contain your environment variables. Most applications will have variables that are specific to the environments for dev, QA and prod. To account for that you can create environment specific files. If you want to create files for development and productions they would have the name of:

```
.env.development.local
.env.production.local
```

The contents of the `.env` file will be available in all environments. The `.env.development.local` file will only be available in development. The `.env.production.local` file will only be available in production environment. You can put environment variables that will be the same across all environments in the `.env` file. Then put environment specific variables in the appropriate file. _NOTE:_ You should not include any of the `.env` files in your repo. Add all your `.env` files to your `.gitignore` file so they will not be committed to your repo.

## Adding Content to Environment Files

The environment variables are available in a vue application I have added the following line to my `.env` file. This variable will be available across all environments:

```
VUE_APP_TITLE=Shared Title
```

In my `.env.development.local` file I have added the following line:

```
VUE_APP_URL=https://dev.com
```

In my `.env.production.local` file I have added the following line:

```
VUE_APP_URL=https://production.com
```

## Accessing Environment Variables

The environment variables can be accessed anywhere in your Vue application through the global `process.env` object. Here I have added two variables on the data object that contain the title and the url.

```
data() {
  return {
    url: process.env.VUE_APP_URL,
    title: process.env.VUE_APP_TITLE
  }
}
```

In my application I have the following entry that accesses the environment variables:

```
<div>URL: {{ url }}</div>
<div>TITLE: {{ title }}</div>
```

If I run npm run serve to view my application in development it shows the following: ![](/Screen-Shot-2019-09-02-at-10.36.20-AM.png) If I run npm run build and then view my application in production it shows the following: ![](/Screen-Shot-2019-09-02-at-10.36.27-AM.png)
