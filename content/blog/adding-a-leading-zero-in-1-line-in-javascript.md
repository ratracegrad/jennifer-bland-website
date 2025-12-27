---
title: Adding a Leading Zero in 1 Line in JavaScript
description: You store number like date with two digits but what about days and months that are less than 10?
date: 2023-01-12
image: https://images.unsplash.com/photo-1616951211764-11228cc7082b?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

At work, I recently ran into a scenario where we were capturing a user's date of birth (DOB). This information is collected in 3 fields day, month, and year. If your DOB is January 7, 1962, people were inputting 1 for the month, 7 for the day, and 1962 for the year. This sounds good but our back-end database required both the month and day to be 2 digits. So I needed to find a way to add a leading zero for both of these fields.

## Starting Data

```javascript
let month = 1;
let day = 7;
```

My simple solution in one line is:

```javascript
month = `0${month}`.slice(-2)
```

Let's walk through this code. This combines `0` with the value the user inputs for their month. Then it takes the right two digits and assigns this to the month.

But what if the user inputs the value `10` for their month? It still works. It will combine 0 with 10 to produce `010` and then it takes the right two digits which is `10`.

## Let's Connect

Thanks for reading my article today. If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.