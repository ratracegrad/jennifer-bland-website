---
title: The Difference Between a Tree and a Graph Data Structure
description: Learn the difference between a tree and a graph data structure.
date: 2015-04-06
image: https://images.unsplash.com/photo-1762279389020-eeeb69c25813?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

In JavaScript programming, data can be stored in data structures like graphs and trees. Technically trees are graphs.
<h2>Graphs Data Structures</h2>
Graphs evolved from the field of mathematics. They are primarily used to describe a model that shows the route from one location to another location.

A graph consists of a set of nodes and a set of edges. An edge is a pair of nodes that are connected. A path is the term used to describe traveling between nodes that share an edge. The image below shows a graph with 3 nods and 3 edges.
<h2><img class="aligncenter size-full wp-image-764" src="http://www.jenniferbland.com/wp-content/uploads/graph-data-structure-with-3-nodes-and-3-edges.png" alt="graph data structure with 3 nodes and 3 edges" width="125" height="113" /></h2>
&nbsp;

<!--more-->
<h2>Tree Data Structure</h2>
A tree data structure, like a graph, is a collection of nodes. There is a root node. The node can then have children nodes. The children nodes can have their own children nodes called grandchildren nodes.

This repeats until all data is represented in the tree data structure. The image below shows a tree data structure.

<img class="aligncenter size-full wp-image-765" src="http://www.jenniferbland.com/wp-content/uploads/tree-data-structure.png" alt="tree data structure" width="220" height="183" />

&nbsp;

A tree is a graph that has no cycles (a cycle being a path in the graph that starts and ends at the same vertex). A child node can only have one parent. For this reason trees are not a recursive data structure.
<h2>Why Use Graphs and Trees as Data Structures?</h2>
In computer programming, trees are used all the time to define data structures. They are also used as the basis for algorithms to solve problems.

The most common implementations of a graph are finding a path between two nodes, finding the shortest path from one node to another and finding the shortest path that visits all nodes.

The traveling salesman problem is a great example of using a tree algorithm to solve a problem.

In my next post I will talk about the two methods to search a tree - breadth first search and depth first search.