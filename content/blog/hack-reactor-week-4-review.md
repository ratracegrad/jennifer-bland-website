---
title: Hack Reactor Week 4 Review
description: Review of the fourth week of Hack Reactor.
date: 2015-04-19
image: https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Week 4 is considered the hardest week at Hack Reactor. In fact it is so challenging that at the end of Week 3 we had a special meeting to discuss what to expect for this week.

When the instructors tell you point blank that it is not uncommon for people to feel completely lost and totally confused then you wonder what is in store for you.

Week 4 is our first foray into building complete full-stack applications. During this week we will learn about NodeJS and handling asynchronous event loops. Mid week we transitioned into learning about data storage structures and server side concepts. The end of the week we jumped head first into databases.

<!--more-->
<h2>Node.JS</h2>
NodeJS is a platform for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node.js provides an event-driven architecture and a non-blocking I/O API that optimizes an application's throughput and scalability. These technologies are commonly used for real-time web applications.

Node.js is primarily used to build network programs such as web servers, making it similar to PHP and Python. The biggest difference between PHP and Node.js is that PHP is a blocking language (commands execute only after the previous command has completed), while Node.js is a non-blocking language (commands execute in parallel, and use callbacks to signal completion).
<h2>Non-blocking vs blocking language</h2>
An algorithm is step-by-step instructions on how to solve a problem. Once you start running a function it continues line by line until it is complete.

This is called blocking code simply because the next line of code will not be executed until the current line completes. In other words that line of code is blocked from executing until the current line of code is done.

Node.JS introduces an entirely new concept called non-blocking code. The code will start executing from the top and the next line of code can execute without waiting for the previous line to complete.

For example if you are uploading a very large graphic image to the server that is 100 megs in size, in blocking code you will not be able to do anything until that image has finished uploading.

With non-blocking code you can start uploading the file and then run the next lines of code while the file is uploading. When the file is finished, a callback function is executed. The operation stack will execute that callback function as soon as the current execution is completed.

This process allows you to basically do multiple things concurrently.
<h2>Server Side Techniques</h2>
After struggling to learn how to write callback to handle the asynchronous format of Node.JS, mid week we were able to delve more deeply into server functionality.

We were able to build upon our nearly learned Node skills by creating multiple node services. These services relied on command-line processes like Cron to run successfully.

We created a website that provided similar functionality to the WayBackMachine. Our server would take snapshots of a website and store it. At set times this snapshot is updated by the back-end processes.
<h2>Databases</h2>
One thing Hack Reactor is good at teaching its students is the ability to quickly analyze a problem and then work on solving that problem. The end of week 4 we were introduced to Databases.

Almost every server application will use some form of a database to store data. The database that is used is determined by the size and quantity of the data being stored.

At the low end of the scale you have NoSQL databases. At the high end of the scale you have fully blown relational databases like SQL.

Many of the students were not familiar with SQL or how you joined tables together to create  a relationship with your data. The focus of our sprint was to learn how to build a well-defined database schema that would support our application.

We learned about one to one, one to many and many to many relationships among tables.

With this sprint we combined our client application we completed previously with our server application to create a Twitter like application. Each tweet was stored in a SQL database.
<h2>Reflections of Week 4</h2>
When the instructors said Week 4 is the hardest week they were not kidding. This week was the most challenging week I have faced at Hack Reactor.

Being able to complete the basic requirements of our sprints this week provided a sense of accomplishment.