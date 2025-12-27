---
title: Time Complexity Analysis in JavaScript
description: Learn how to analyze the time complexity of your JavaScript code.
date: 2015-04-22
image: https://images.unsplash.com/photo-1524351543168-8e38787614e9?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

An algorithm is a self-contained step-by-step set of instructions to solve a problem. It takes time for these steps to run to completion. The time it takes for your algorithm to solve a problem is known as time complexity.

Here is the official definition of time complexity. The time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the string representing the input.

That sounds like a mouth full and you are probably trying to understand exactly what that means. In simple terms, time complexity is defined by the time and space required by a particular algorithm.

It is not unusual to find many different methods that you can use to solve a problem. The length of time it takes and the number of operations taken are used to determine how effective your algorithm is in solving the problem. Complexity helps programmers to understand, and therefore improve, the efficiency of our code.

The best programming solutions in JavaScript utilize algorithms that provide the lowest time complexity possible.

<!--more-->
<h2>Big O Notation</h2>
The time complexity of an algorithm is commonly expressed using Big O Notation. Big O Notation describes the execution time required or the spaced used by an algorithm. Big O Notation specifically describes the worst-case scenario.

As I mentioned before an algorithm are the step-by-step instructions to solve a problem. The bigger the problem, the longer you would expect your algorithm to take to solve the problem.

As the size of the problem gets bigger and bigger, the cost might grow quickly, slowly or barely at all. Big O Notation is used to measure how quickly your solution is in solving a problem.

The following chart shows the different levels of Big O Notation and how long it takes to complete based on number of operations and elements.
<img class="aligncenter size-full wp-image-820" src="/big-o-complexity.png" alt="Big O Complexity chart" width="783" height="454" />
Here are some common orders of growth and their corresponding Big O Notation values.
<h2>O(1) - Constant Time Complexity</h2>
The fastest time complexity on the Big O Notation scale is called Constant Time Complexity. It is given a value of O(1).

With constant time complexity, no matter how big our input is, it will always take the same amount of time to compute things.

Constant time is considered the best case scenario for your JavaScript function.
<img class="aligncenter size-full wp-image-823" src="/O1-constant-time-complexity.jpg" alt="O(1) constant time complexity" width="416" height="312" />

<strong>Examples:</strong> Array Lookup, hash table insertion
<h2>O(log n) - Logarithmic</h2>
With logarithmic notation execution time increases, but at a decreasing rate.

Here is a good example of how to view a logarithmic search. You want to find somebody in a telephone directory that has one million names listed.

The first step would be to find the 500,000 entry which is the mid point and compare it to the name you are searching for. If the midpoint name is lower in the alphabet than your name then you repeat this process but only using the top 500,000 names.

You find the midpoint of these 500,000 names and compare it to your target name. If the midpoint name is above or below then keep repeating this process using just the top half or bottom half of names.

If the phone book only contained three names, then you would at most need to do 2 look ups to find your target name.

If the phone book had 15 names then it would take at most 4 look ups to find your target name.

With a million names in a phone book then you would only have to do at most 20 look ups to find your targeted name.

As you can see the time to complete increases but not as fast as the size of input increases.
<img class="aligncenter size-full wp-image-822" src="/Olog-n-logarithmic-complexity.jpg" alt="O(log n) logarithmic complexity" width="472" height="328" />

<strong>Example:</strong> binary search
<h2>O(n) - Linear</h2>
O(n) describes an algorithm whose performance will grown linearly and in direct proportion to the size of the input data set.

Let's say you want to print out the contents of an array that has 10 elements. You would loop through the array printing out each element.

If your array had 100 elements it would take 100 iterations through the loop to print out all the items.

With one million elements it would take one million iterations.

As you an see the time complexity increases as the size increase and it increases at the same rate.

<img class="aligncenter size-full wp-image-821" src="/On-Linear-Complexity.jpg" alt="O(n) Linear Complexity" width="463" height="316" />

<strong>Example:</strong> Printing the elements in an array
<h2>O(n<sup>2</sup>) - Quadratic</h2>
Quadratic time complexity is almost the inverse of logarithmic complexity. With Quadratic Complexity execution time increases at an increasing rate.

Quadratic time suggests that the function’s run time is proportional to the square of the input size. Quadratic time is typically represented as <strong>‘order N squared’</strong> or <strong>O(n^2)</strong>. This notation is used because with quadratic time complexity you are completing usually two Operations that are O(1) or O(n) by themselves.

<img class="aligncenter size-full wp-image-824" src="/On2-quadratic-time-complexity.jpg" alt="O(n2) - quadratic time complexity" width="382" height="322" />

<strong>Example:</strong> Constant time operation inside two nested for-loops, comparing 2 integer lists against each other and a bubble sort.