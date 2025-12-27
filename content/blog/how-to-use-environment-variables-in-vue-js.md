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

Most applications will access data from an API. To access that API you will need to have an API key and the URL to access the API. You should not be pushing your API keys to you repo because that makes them available to everyone. The solution is to store your API keys in environment variables. So how do you access environment variables in a Vue.js application? Let me show you how.

The best way to start is to have a project that was created using the Vue-CLI. If you used this then it automatically setup your project to use webpack for the build process making it much easier for you to use environment variables.

<!--more-->

<h2>Adding .env Files</h2>
Your environment variables will be stored in .env files. This file must exist in the root directory of your application. To create an .env file use this command:
<pre class="prettyprint"><xmp>touch .env</xmp></pre>

The .env file will contain your environment variables. Most applications will have variables that are specific to the environments for dev, QA and prod. To account for that you can create environment specific files. If you want to create files for development and productions they would have the name of:
<pre class="prettyprint"><xmp>.env.development.local
.env.production.local</xmp></pre>

The contents of the <code>.env</code> file will be available in all environments. The <code>.env.development.local</code> file will only be available in development. The <code>.env.production.local</code> file will only be available in production environment. 

You can put environment variables that will be the same across all environments in the <code>.env</code> file. Then put environment specific variables in the appropriate file.

<em>NOTE: </em>You should not include any of the <code>.env</code> files in your repo. Add all your <code>.env</code> files to your <code>.gitignore</code> file so they will not be committed to your repo.

<h2>Adding Content to Environment Files</h2>
The environment variables are available in a vue application
I have added the following line to my <code>.env</code> file. This variable will be available across all environments:
<pre class="prettyprint"><xmp>VUE_APP_TITLE=Shared Title</xmp></pre>

In my <code>.env.development.local</code> file I have added the following line:
<pre class="prettyprint"><xmp>VUE_APP_URL=https://dev.com</xmp></pre>

In my <code>.env.production.local</code> file I have added the following line:
<pre class="prettyprint"><xmp>VUE_APP_URL=https://production.com</xmp></pre>

<h2>Accessing Environment Variables</h2>
The environment variables can be accessed anywhere in your Vue application through the global <code>process.env</code> object. Here I have added two variables on the data object that contain the title and the url.

<pre class="prettyprint"><xmp>data() {
  return {
    url: process.env.VUE_APP_URL,
    title: process.env.VUE_APP_TITLE
  }
}</xmp></pre>

In my application I have the following entry that accesses the environment variables:
<pre class="prettyprint"><xmp><div>URL: {{ url }}</div>
<div>TITLE: {{ title }}</div></xmp></pre>

If I run npm run serve to view my application in development it shows the following:
<img src="http://www.jenniferbland.com/wp-content/uploads/Screen-Shot-2019-09-02-at-10.36.20-AM.png" alt="" width="302" height="360" class="alignnone size-full wp-image-1666" />

If I run npm run build and then view my application in production it shows the following:
<img src="http://www.jenniferbland.com/wp-content/uploads/Screen-Shot-2019-09-02-at-10.36.27-AM.png" alt="" width="319" height="323" class="alignnone size-full wp-image-1667" />
