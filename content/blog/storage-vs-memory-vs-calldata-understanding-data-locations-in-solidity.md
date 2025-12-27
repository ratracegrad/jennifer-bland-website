---
title: Storage vs Memory vs Calldata - Understanding Data Locations in Solidity
description: Learn the difference between storage, memory and calldata in Solidity.
date: 2022-05-13
image: https://images.unsplash.com/photo-1593791718814-b720d7979607?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Solidity provides value types and reference types. Reference types are arrays, mappings, and structs. Value types are all other data types like string, int, and boolean. When you define a reference type you have to define the "data location" to determine where the data is stored. The three data locations are `memory`, `storage` and `calldata`. In this article, I will be explaining the difference between them.

<!--more-->


## Memory

Variables stored in memory are not written to the blockchain.  To be stored in memory a variable has to be defined inside a function. These variables are temporary and will be destroyed once the function has been completed.

Memory variables are mainly used for assisting in performing some type of calculation or operation during the life of the function. Once the function is complete these variables are no longer needed so they are removed from memory.

Since these variables only exist during the execution of the function, they are not accessible from outside the function.

## Storage

Unlike a memory variable, any variable defined as storage is written to the blockchain. Since these variables are written to the blockchain they are persistent. 

A storage variable can be accessed from anywhere inside the smart contract and can possibly be also accessed outside the smart contract.

All global variables are by default storage variables.

Any variable defined as storage will incur gas fees since it is written to the blockchain.


## Calldata

**Calldata** is only valid for parameters of external contract functions. Calldata is a non-modifiable, non-persistent area where function arguments are stored. It behaves mostly like memory.

Any variable defined as calldata cannot be modifiable. In simple terms this means that you cannot change the value of the state of that variable. This is why this data type is assigned to parameters of functions. The data passed into the function is not modified but will be used within the function and a new variable will be returned.
