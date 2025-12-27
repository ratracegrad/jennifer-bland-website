---
title: Formatting output to the console
description: To debug your code, you need to be able to output information to the console. Learn how to do it in JavaScript.
date: 2023-01-09
image: https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

If you have been a programmer for more than a day, then you have used a `console.log` to display data. You may want to see the value of data while your programming running or you may be trying to troubleshoot a problem. Sometimes the data displayed in the console can be a challenge to read. I will show you some methods to make the display of the data more readable.

The biggest challenge in using a console.log is when you want to display data that is an array or an object. By default, this data does not display very well in the console.


<!--more-->

For example, you have this array:

```javascript
[
	{
		school: 'University of Georgia',
		mascot: 'UGA',
		students: 37606,
		location: 'Athens, GA'
	},
	{
		school: 'University of Georgia Tech',
		mascot: 'Yellow Jackets',
		students: 26839,
		location: 'Atlanta, GA'
	},
	{
		school: 'Georgia Southern University',
		mascot: 'Eagles',
		students: 20517,
		location: 'Statesboro, GA'
	}
]
```

If you `console.log` this array, this is what you see in the console:

![output of console.log](https://res.cloudinary.com/ratracegrad/image/upload/v1672692262/Screenshot_2023-01-02_at_3.43.55_PM_opnob6.png)

If you actually want to see the data you have to expand the data and you see this:

![expanded console log](https://res.cloudinary.com/ratracegrad/image/upload/v1672692347/Screenshot_2023-01-02_at_3.45.31_PM_ddwfdu.png)

This display the entire content of each object on a single line. This is not very helpful if there are a large number of entries in your object.

You can drill down into a single object by expanding it and you see this:

![drill down into object](https://res.cloudinary.com/ratracegrad/image/upload/v1672692447/Screenshot_2023-01-02_at_3.47.12_PM_pi5wr8.png)

Let me show you some better ways to display your array of objects in the console

## Use JSON.stringify

The `JSON.stringify()` static method converts a JavaScript value to a JSON string.

Here is the syntax:

```javascript
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
```

We want to use the last syntax option. The 3rd parameter you can pass to `JSON.stringify` is a value for space.  That value is used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes.

If we use this command:

`console.log(JSON.stringify(mydata, null, 4))`

This is what we will see in the console:

![json.stringify output](https://res.cloudinary.com/ratracegrad/image/upload/v1672692785/Screenshot_2023-01-02_at_3.52.57_PM_clczwt.png)

I don't know about you but for me, this is a thousand times better!

## console.table

Another way we can make the output look better is to use `console.table()`. NOTE: This method only works if you have a limited number of items in your object.

If I enter this command:

`console.table(mydata)`

This is what we will see in the console:

![console.table](https://res.cloudinary.com/ratracegrad/image/upload/v1672692859/Screenshot_2023-01-02_at_3.54.09_PM_r315y1.png)

## Let's Connect

Thanks for reading my article today. If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.
