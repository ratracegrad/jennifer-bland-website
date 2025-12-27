---
title: Data Structures - Linked List, Set and Hash Table
description: Learn about the Linked List, Set and Hash Table data structures.
date: 2015-05-03
image: https://images.unsplash.com/photo-1456428746267-a1756408f782?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

A data structure is a particular way of organizing data in a computer so that it can be used efficiently.  Previously I talked about two very similar data structures - <a href="/blog/the-difference-between-a-tree-and-a-graph-data-structure/" target="_blank">tree and graph</a>. Today I am going to talk about Linked Lists, Sets and Hash Tables.

There are many different types of data structures simply because each one provides certain benefits over the others. One may be better at retrieving data, another might be better at inserting data and yet another might be better in its ability to expand as the size of the data increases.


<!--more-->
<h2>Linked List</h2>
Linked lists are among the simplest and most common data structures.  In a linked list each node has a value and a pointer to the next node in the data structure.

<img class="aligncenter size-medium wp-image-841" src="/linked-list-300x101.png" alt="linked list" width="300" height="101" />

&nbsp;

The principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while an array has to be declared in the source code, before compiling and running the program.

Linked lists allow insertion and removal of nodes at any point in the list, and can do so with a constant number of operations if the link previous to the link being added or removed is maintained during list traversal.

A linked list data structure typically will have a head and a tail that point to the start and end of the data structure.

Generally you will have an addToHead() and addToTail functions that will insert new items at the beginning or end of the data structure.

To remove items there will be generally a removeHead() and a removeTail() functions.

To see if a linked list contains a value you will have a contains() function that will return true if the linked list contains the value or else returns false.
<h2>Set</h2>
A set is an abstract data type that can store certain values, without any particular order, and no repeated values. Unlike most other collection types, rather than retrieving a specific element from a set, one typically tests a value for membership in a set.

<img class="aligncenter size-medium wp-image-842" src="/uploads/Set-data-structure-300x123.png" alt="Set data structure" width="300" height="123" />

Sets can be implemented using various data structures, which provide different time and space trade-offs for various operations.

Since there is no particular order in a set, to implement one you only need to have an add() and remove() functions.

You should also provide a contains() function to return whether or not an item is contained in the set.
<h2>Hash Table</h2>
A hash table is a data structure used to implement an associative array, a structure that can map keys to values. A hash table uses a hash function to compute an <i>index</i> into an array of buckets or slots, from which the correct value can be found.

<img class="aligncenter size-medium wp-image-843" src="/hash_table-300x208.png" alt="hash table" width="300" height="208" />

Ideally, the hash function will assign each key to a unique bucket, but it is possible that two keys will generate an identical hash causing both keys to point to the same bucket.

In a well-dimensioned hash table, the average cost for each lookup is independent of the number of elements stored in the table. Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at constant average cost per operation.

In many situations, hash tables turn out to be more efficient than search trees or any other table lookup structure.