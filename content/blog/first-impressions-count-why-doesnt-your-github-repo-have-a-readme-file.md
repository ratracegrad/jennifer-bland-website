---
title: "First Impressions Count - Why Doesn't Your Github Repo Have a README File?"
description: Learn how to create a README file for your Github repo to make a good impression to potential employers.
date: 2017-01-16
image: https://images.unsplash.com/photo-1513972519-b6ec91c21380?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

You only get one chance to make a positive first impression. For software engineers, the README file in your Github repo is your one chance to make a good impression to potential employers. Is your README file leaving the wrong impression?

<h2>The Most Important Code Isn’t Code</h2>
Your README file is the most important part of your Github Repo. When people visit your repo, the first thing they will do is look at your README file.

If your readme file does not define what your code does, then most users will just skip right over it. In other words, you failed at your chance of making a positive first impression.

<h2>What Makes a Good README file?</h2>
A good README file should include the following two items.

<h3>Description</h3>
The description tells visitors exactly what your code does. It does not have to be an epic description that is on par with the length of War and Peace. Instead it should be precise in describing the features found in your code.

I would recommend using short sentences in your description. You can use a bulleted list if you want. Lengthwise it should be between 3–7 sentences long coupled into 1–2 paragraphs.

<!--more-->


<h3>How to Install</h3>
If people want to use your code, then they will need to know how to install it. Does your code need dependencies? If so include them here. Do you have to run install script using npm, bower or grunt? If so include them here.

Github markdown gives you the option to highlight code. I suggest you use this to provide the exact steps needed to install your code.

<h2>Making your README file Great</h2>
With a little bit of effort you can make a great README file. A great README file would include most of the following items.

<h3>Technology Stack and Versions</h3>
This section will cover all the dependencies required to run your code. For example, if you relied on functions in Lodash version 3 that no longer exist in Lodash version 4, you should include notice here. Tell people what is the version your support for all your dependencies.

<h3>Live Demonstration</h3>
Before I go through the process of forking, cloning and installing your repo, it would be great if I could just click on a link to actually see it working.

It is easy to upload your code to free sites like Heroku, Azure or Cloud9. Provide a link in your README file so people can click on the link and see your code in action. Make sure to put the link also in the website field in the description of your repo.

<h3>Contributing Guidelines</h3>
Most code is Open Source if it is available on Github. Visitors to your repo might have suggestions on how to improve your code. They may want to report a problem with the code. Provide detailed instructions on how they can do both of these items.

<h3>License</h3>
If you are releasing your code as Open Source, you need to provide a license. The license will tell users what they can and cannot do with your code.

<h3>Screenshots</h3>
It is easy to create screenshots showing your code in use. You can create a folder called screenshots that you commit to your Github repo. You can then link to these screenshot images in your README file.

<h3>Authors & Contributors</h3>
If many people were responsible for creating the code, list their names here. If possible I would include links — twitter, github, website, email — to how you can reach each author. If somebody contributed to the source code, list their names here.

<h3>Table of Contents</h3>
Github Markup language allows you to create links to sections in the README file. The Table of Contents provides the outline of the contents of your README file. Visitors can click on any entry in the Table of Contents and go to that section of the README file.

<h3>Testing</h3>
Most users are weary of using open source code if the author(s) do not include tests. Without tests there is no verification that the code actually works. The testing section of the README file describes what tests you have created and how to run them.

<h2>Example of a Great README File</h2>
<img src="/github-readme-example.jpg" alt="github readme example" width="1127" height="2234" class="alignleft size-full wp-image-1095" />