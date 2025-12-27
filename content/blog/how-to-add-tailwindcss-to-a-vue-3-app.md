---
title: How to Add TailwindCSS to a Vue 3 App
description: Learn how to add TailwindCSS to a Vue 3 app using Vite or Vue CLI.
date: 2022-05-08
image: https://images.unsplash.com/photo-1731839329447-ab62f6e1d93a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

There are two ways of creating a vue3 project. Using Vue-CLI or Vite. I will cover both.

## Using Vite

If you do not already have Vite installed globally, you will need to install it. You can install it with this command:

```
npm install -g vite
```

Now that you have Vite installed you will need to create your Vue3 application. You can create it with this command:

<!--more-->

```
npm init @vitejs/app vue3-vite-tailwind-app
```

Once the installation is complete you will be given directions to change into the directory containing your newly created Vue3 application. Once you are in that directory you can install all necessary dependencies by running the command:

```
npm install
```

Now we need to add TailwindCSS to our Vue3 application. Tailwind requires two peer-dependencies-  autoprefixer and postcss. 

You can install both Tailwind and the peer dependencies with this command:

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

To use TailwindCSS you must create a configuration file. We will use `npx` which is bundled with Node.js to create our configuration file with this command:

```
npx tailwindcss init -p
```
You will see that this added two new files to your Vue3 project. The two files are `tailwind.config.js` and `postcss.config.js`.

To be able to utilize TailwindCSS in our project we will need to add several lines to the CSS file that is loaded in our application. Open your CSS file and add the following 3 lines:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Now you can start utilizing Tailwind to style your Vue 3 application.

## Using the Vue CLI

If you do not already have Vue CLI installed globally, you will need to install it. You can install it with this command:

```
npm install -g @vue/cli
```

Now that you have the Vue CLI installed you will need to create your Vue3 application. You can create it with this command:

```
vue create vue3-cli-tailwind-app
```

You will be prompted to select any options you may want to install for your application.

Now that you have application has been created, we need to add TailwindCSS. You can easily add it with this command: 

```
vue add tailwind
```

You will be prompted to select what type of Tailwind config file you want to be generated. Your options are:


- **none** - Won't create a config file. Useful if you already have a config (make sure to configure PurgeCSS).
- **minimal (default)** - Will create a minimal tailwind.config.js file where you can define your customizations.
- **full** - Will generate a tailwind.config.js file containing the entire default configuration.

Now you can start utilizing Tailwind to style your Vue 3 application.
