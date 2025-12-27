---
title: How to Titleize a Sentence in JavaScript
description: Learn how to capitalize the first letter of each word in a sentence.
date: 2022-05-12
image: https://plus.unsplash.com/premium_photo-1746536834143-c38d11e37aa8?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

We recently ran into a scenario at work where we went through the process to redo all the email templates used in our application. There were over 300+ templates that we redesigned. After we finished somebody requested that we change the subject line to be title-cased like you would in a print headline. Not wanting to manually change all 300+ templates, I wrote this quick function that handled the process automatically.

## What is Title Case

At first glance, it might sound like we wanted the first letter of every word in a subject line to be uppercase and the remainder of the word to be lowercase.

Well, that is almost correct. We don't want certain words to be capitalized. Words like `a`, `an` or `and` we wanted to remain lowercase.

<!--more-->

Here is the quick function I created that handled this transition for us.

First I created an array of words that we wanted to remain lowercase in the subject of the email.

```
const small_words = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'into', 'nor', 'of', 'on', 'or', 'out', 'so', 'the', 'to', 'up', 'yet', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'into', 'nor', 'of', 'on', 'or', 'out', 'so', 'the', 'to', 'up', 'yet'];
```

Next, I created a function that would have the text of the subject line passed into it. I would break this string into an array with each word in the subject an entry in the array. Now that I have an array I can loop over every word. If the word matches an entry in the `small_words` array then I convert it to lowercase. Otherwise, I capitalize the first letter of the word and lowercase the remainder of the word.

There is one exception that I have to account for and that is the first letter in the subject text. Regardless of what is the first word I want it to have the first letter capitalized.

With those requirements, here is my function:

```
const titleize = (title) => {
  return title.split(' ').map((word, index) => {
    if (index !== 0 && small_words.includes(word)) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join(' ');
}
```

To test out the function I added 3 titles and console.log the new title.

```
console.log(titleize('notes on a scandal'));  // Notes on a Scandal
console.log(titleize('a good man is hard to find')); // A Good Man Is Hard to Find
console.log(titleize('midnight in the garden of good and evil')); // Midnight in the Garden of Good and Evil
```

You will see the output for each test of a subject line.

If you ever need to titleize a string based on print title formatting, you can use this function. All you would need to do is edit the `small_words` array to include your list of words to remain lowercase.