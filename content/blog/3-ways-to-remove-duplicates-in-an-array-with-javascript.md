---
title: 3 Ways to Remove Duplicates in an Array with JavaScript
description: Sometimes you have an array of data and you want to remove all duplicates from the array. In this article, I will show you three ways in which you can do this.
date: 2023-01-06
image: https://images.unsplash.com/photo-1529906356458-e63210637dc5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Sometimes you have an array of data and you want to remove all duplicates from the array. In this article, I will show you three ways in which you can do this.

## 1) Remove duplicates using forEach and includes

The Array `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

With this method, we will create a new empty array. All unique values from our array will be put into this array. We will loop over our array of data and check if the current item is in our new array. If it isn't then we put it in our new array. If it is in our new array then we do nothing.


<!--more-->

```javascript
let myData = [1, 2, 2, 4, 5, 5, 5, 7, 'Hello','World', true, false];

let uniqueValues = [];
myData.forEach((item) => {
	if (!uniqueValues.includes(item)) {
		uniqueValues.push(item);
	}
});

console.log(uniqueValues); // [1, 2, 4, 5, 7, 'Hello', 'World', true, false]
```

## 2) Remove duplicates using filter and indexOf

The `indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

The `filter()` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

With this method, we do not have to initially define an empty array. The `filter()` method will return an array so we just assign this array to a value.

```javascript
let myData = [1, 2, 2, 4, 5, 5, 5, 7, 'Hello','World', true, false];

let duplicateValues = myData.filter((item, index) => {
    return myData.indexOf(item) == index;
});

console.log(duplicateValues); // [1, 2, 4, 5, 7, 'Hello', 'World', true, false]
```

## 3) Remove duplicates using a Set

The `Set` object lets you store unique values of any type, whether primitive values or object references.

This method requires us to convert our data array to a set. Duplicates will be automatically removed. Then we convert the set back to an array.

```javascript
let myData = [1, 2, 2, 4, 5, 5, 5, 7, 'Hello','World', true, false];
let uniqueValues = [...new Set(myData)];

console.log(uniqueValues) // [1, 2, 4, 5, 7, 'Hello', 'World', true, false]
```

## Let's Connect

Thanks for reading my article today. If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.
