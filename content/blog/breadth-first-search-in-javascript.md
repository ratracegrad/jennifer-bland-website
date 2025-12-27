---
title: Breadth First Search in JavaScript
description: Learn how to perform a breadth first search in JavaScript.
date: 2015-04-08
image: https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

In my previous post I discussed the <a href="http://www.jenniferbland.com/the-difference-between-a-tree-and-a-graph-data-structure/" target="_blank">difference between a graph data structure and a tree data structure</a>. Now that you understand the difference between the two data structures, I am going to show you how you can search through your data.

The two most common methods of searching a graph or a tree are depth first search and breadth first search.

Whether to use a depth first search or a breadth first search should be determined by the type of data that is contained in your tree or graph data structure.

<!--more-->
<h2>Breadth First Search</h2>
Here is an example of a tree that we want to search using a breadth first search.

<img class="aligncenter size-full wp-image-770" src="http://www.jenniferbland.com/wp-content/uploads/Tree001.jpg" alt="Tree001" width="400" height="239" />

In a breadth first search you will start at the root node. You will then search all their children nodes moving from left to right. Once all the children nodes have been searched, the process is repeated on the level below the root node.

This process is repeated on each level until you reach the end of the tree or you reach the node that you were searching for initially. The image below shows you the order that you will search a tree in a breadth first search.

<img class="aligncenter size-full wp-image-771" src="http://www.jenniferbland.com/wp-content/uploads/Tree002.jpg" alt="breadth first search" width="400" height="219" />

To implement a breadth first search you need some way of keeping track of what nodes you need to search next once you complete searching on the current level.

To keep track of the nodes that need to be searched next you will use a queue as an intermediary step in the search. A queue is a FIFO (first in first out) array.

To demonstrate how this works let me walk you through doing the search of  Level 1 and Level 2 in the image above.

The first node to be searched is the root node or Node A. You would put Node A as the first element in your queue. You will then repeat these steps until your queue is empty.

<img class="aligncenter size-full wp-image-788" src="http://www.jenniferbland.com/wp-content/uploads/Tree005.jpg" alt="Depth first search in javascript" width="400" height="355" />
<ol>
	<li>Take the first node out of the queue and see if it matches your search item.</li>
	<li>Add all of the node's children to the temporary queue.</li>
</ol>
After step 2 of your search your queue queue will now hold all of the children of Node A.

<img class="aligncenter size-full wp-image-789" src="http://www.jenniferbland.com/wp-content/uploads/Tree007.jpg" alt="Depth first search in javascript" width="400" height="354" />

&nbsp;

We now compare Node B to see if it matches our search results. If it does not then it is removed from the queue leaving only node H. We then add in the children of Node B into the queue.

<img class="aligncenter size-full wp-image-790" src="http://www.jenniferbland.com/wp-content/uploads/Tree009.jpg" alt="Depth first search in javascript" width="400" height="351" />

&nbsp;

This process continues until all nodes have been searched or your find the node that matches your search criteria.

&nbsp;