---
title: Vue 3 Composition API vs Options API
description: Learn the differences between the Composition API and the Options API in Vue 3.
date: 2022-12-17
image: https://plus.unsplash.com/premium_photo-1722859215888-fdee65889c42?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

The Composition API is a new feature in Vue.js 3 that provides a different way to define the logic of a Vue component. It allows you to use a functional style of programming and to reuse logic across multiple components.

The Options API, on the other hand, is the traditional way of defining the logic of a Vue component. It uses an object-oriented style of programming and requires you to specify the logic of a component in the options object of the Vue constructor.

## Benefits of Composition API

One of the main benefits of the Composition API is that it allows you to extract and reuse logic across multiple components. This can make your code more modular and easier to maintain. In contrast, the Options API requires you to define all the logic of a component in a single object, which can make it more difficult to reuse logic across multiple components.


<!--more-->

Another benefit of the Composition API is that it allows you to use a functional style of programming, which can be easier to understand and debug than an object-oriented style. In the Options API, you have to define the logic of a component in the options object, which can make it more challenging to understand the flow of the code.

## The downside of Composition API

One potential downside of the Composition API is that it requires you to learn a new syntax and way of organizing your code. This can be a learning curve for developers who are used to the Options API. However, the Composition API is designed to be easy to learn and use, so the learning curve should not be too steep.

## Code Examples

Here is an example of how you can use the Composition API to define the logic of a Vue component:

```javascript
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    const double = computed(() => {
      return count.value * 2
    })

    return {
      count,
      increment,
      double
    }
  }
}
```

In this example, the `setup` function is used to define the logic of the component. It creates a reactive `count` variable, an `increment` function that increments the `count` variable, and a computed `double` variable that is the double of the `count` variable. The `setup` function returns an object that contains these values, which can be used in the template of the component.

Here is an example of how you can use the Options API to define the logic of a Vue component:

```javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  }
}
```

In this example, the `data`, `methods`, and `computed` options are used to define the logic of the component. The `data` option defines a `count` variable, the `methods` option defines an `increment` function that increments the `count` variable, and the `computed` option defines a `double` variable that is the double of the `count` variable. These values can be used in the template of the component.

## Conclusion

In conclusion, the Composition API and the Options API are both valid ways to define the logic of a Vue component. The Composition API provides a functional and reusable way of organizing your code, while the Options API provides a traditional object-oriented approach. Ultimately, the choice between the two will depend on your personal preferences and the needs of your project.