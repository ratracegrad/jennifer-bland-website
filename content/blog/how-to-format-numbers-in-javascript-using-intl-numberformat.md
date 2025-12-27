---
title: How to Format Numbers in JavaScript using Intl.NumberFormat
description: Why load a library when you can format numbers in JavaScript using Intl.NumberFormat?
date: 2022-05-11
image: https://images.unsplash.com/photo-1740062446976-94a8837e0dde?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

If you ever wanted to format a number in JavaScript you were forced to use `.toLocaleString()`. The only challenge was this does not actually support locales. It uses the system locale. Now with the `Intl.NumberFormat()` to format any number into a currency value and format it based on a locale.

Here is an example of how we use to format numbers using `.toLocaleString()`:

```
const money = 1000;

money.toLocaleString('en-US', { 
    style: 'currency', currency: 'USD' 
}); // $1,000.00
```

ES6 JavaScript gives us the `Intl` object which is the ECMAScript Internationalization API. This API provides language-sensitive number formatting.

Here is the same example as above:

<!--more-->

```
new Intl.NumberFormat('en-US', { 
    style: 'currency', currency: 'USD' 
}).format(money); // $1,000/00
```

## Formatting Currency in Different Locales

Here are several examples of formatting money using the Euro and the Japanese Yen:

```
new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
}).format(money); // '€ 10,000.00'

new Intl.NumberFormat('jp-JP', {
  style: 'currency',
  currency: 'JPY',
}).format(money); // 'JP¥ 10,000'
```

## The Syntax for Intl.NumberFormat

Here are the syntax options available:

```
new Intl.NumberFormat()
new Intl.NumberFormat(locales)
new Intl.NumberFormat(locales, options)
```

## Parameters

- `locales` - (optional) A string with a BCP 47 language tag, or an array of such strings. Can provide multiple locales where the best-supported locale will be favored in the order provided by the array. Locales are the language and region setting. It is made up of language code and country code.
- `options` - (optional) Provides settings indicating how a number should be formatted to a string. There are tons of options and you can [review them on the documentation page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat).
