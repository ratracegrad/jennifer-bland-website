---
title: How to Merge Objects in JavaScript
description: You have two objects and you want to merge them into one. Learn how to do it in JavaScript.
date: 2023-01-11
image: https://images.unsplash.com/photo-1584786379647-c10852954d2b?q=80&w=3738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

An object is frequently used to store data. Sometimes you end up with multiple data objects that you need to combine their contents. In this article, I will show you several ways to merge objects in JavaScript.

## Format of an Object

An Object is a collection of key-value pairs. Let's take a look at this simple object:

```javascript
const customer = {
	name: 'Jennifer',
	age: 60
}
```

Both `name` and `age` are the **`keys`** of the object. The key `name` has a `value` of `Jennifer` and the key `age` has a `value` of `60`.


<!--more-->

## Merging Objects using Object.assign()

The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

Here is the syntax:

`Object.assign(target, ...sources)`

Using `Object.assign` does not create a new object. Instead, it copies all the source objects into the target object. Let's look at an example.

```javascript
const target = { name: 'Jennifer', age: 60 };
const source = { city: 'Athens', state: 'GA' };

Object.assign(target, source);

console.log(target); // { name: 'Jennifer', age: 60, city: 'Athens', state: 'GA' }
```

## What If There Are Duplicate Key-Value Pairs?

It is possible that the source and target objects have a `key` that are the same. In that case, the source object value overwrites the value in the target object.

Let's look at an example:

```javascript
const target = { name: 'Jennifer', age: 60, 'city': 'Atlanta' };
const source = { city: 'Athens', state: 'GA' };

Object.assign(target, source);

console.log(target); // { name: 'Jennifer', age: 60, city: 'Athens', state: 'GA' }
```

## What If You Have More Than 2 Objects to Merge?

You are not limited to merging just 2 objects with `Object.assign`.  If you have more than 2 then you just list multiple source objects.

Here is an example:

```javascript
const target = { name: 'Jennifer', age: 60 };
const source1 = { city: 'Athens', state: 'GA' };
const source2 = { country: 'USA' }

Object.assign(target, source1, source2);

console.log(target); // { name: 'Jennifer', age: 60, city: 'Athens', state: 'GA', country: 'USA' }
```

**NOTE: If you have duplicate key-value pairs with multiple objects, the object that is furthest right in the formula will have its `value` assigned to the `key` that is duplicated.**

Here is an example:

```javascript
const target = { name: 'Jennifer', age: 60 };
const source1 = { city: 'Athens', state: 'GA' };
const source2 = { name: 'Anne', country: 'USA' }

Object.assign(target, source1, source2);

console.log(target); // { name: 'Anne', age: 60, city: 'Athens', state: 'GA', country: 'USA' }
```

## Merging Objects using the `Spread ... Operator`

The spread operator was introduced in ES6. It can be used to merge two or more objects. Unlike `Object.assign()`, the spread operator will create a new Object.

Here is an example:

```javascript
const target = { name: 'Jennifer', age: 60 };
const source = { city: 'Athens', state: 'GA' };

const newObject = { ...target, ...source };

console.log(newObject); // { name: 'Jennifer', age: 60, city: 'Athens', state: 'GA' }
```

## What If You Have More Than 2 Objects to Merge?

If you have more than 2 objects to. merge, just list them all using the spread operator for each object.

Here is an example:

```javascript
const target = { name: 'Jennifer', age: 60 };
const source1 = { city: 'Athens', state: 'GA' };
const source2 = { country: 'USA' };

const newObject = { ...target, ...source1, ...source2 };

console.log(newObject); // { name: 'Jennifer', age: 60, city: 'Athens', state: 'GA', country: 'USA' }
```

**NOTE: If you have duplicate key-value pairs with multiple objects, the object that is furthest right in the formula will have its `value` assigned to the `key` that is duplicated.**

## Let's Connect

Thanks for reading my article today. If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.

