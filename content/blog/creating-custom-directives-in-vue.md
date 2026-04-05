---
title: Creating Custom Directives in Vue
description: Learn how to create custom directives in Vue.
date: 2019-07-22
image: https://images.unsplash.com/photo-1694403456824-48e0c514c4b9?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Directives are special attributes with the v- prefix. A directive’s job is to reactively apply side effects to the DOM when the value of its expression changes. Vue.js provides a wide range of directives for you to use. You have probably already used the v-if, v-repeat, v-model and v-show directives.

In this article, I am going to explain the parts of a directive and what is available to use. Then I will show you how to create a wide range of custom directives so that you can apply your programming needs directly to DOM elements. So let’s get started discussing what is included with a directive.

## Name of Directive

The most basic custom directive only has a name. It does not accept any arguments nor does it have any modifiers. Without passing a value, this would not be very flexible, but you could still have some piece of functionality of the DOM element.

An example that you might be familiar with that is the most basic version of a directive is v-else. Here is an example of a custom directive that we will be creating shortly:

```
<app-navigation v-sticky></app-navigation>
```

## Passing Values to Directive

You can pass a value into a custom directive. Here is an example:

```
<div v-if="isVisible">Show this</div>
```

In this example, the v-if directive is shown if the data property isVisible is true. We know that this is looking for a data property because it is enclosed in the quotes. If instead, we wanted to pass a string as the value to the directive you would do the following:

```
<div v-color="'red'">Show this</div>
```

## Arguments

Custom directives can take an “argument” denoted by a colon after the directive name. Here is an example:

```
<app-navigation v-sticky:bottom></app-navigation>
```

In the above example, the name of the custom directive is **sticky**. The argument is **bottom**.

Directives can take only one argument.

## Modifiers

Modifiers are special postfixes denoted by a dot which indicate that a directive should be bound in some special way. Modifiers control how the directive behaves. Here is an example of a custom directive that we will create later:

```
<span v-format.underline>guide</span>
```

In the above example, the `.underline` modifier tells the v-format directive to apply an underline to the text.

You can use multiple modifiers on a directive by chaining them. Here is an example:

```
<span v-format.bold.highlight.underline>guide</span>
```

In the above example, the text will be bold, highlight and have an underline.

## Creating Custom Directives

Now you understand the basics of a directive in Vue.js. In addition to the default set of directives shipped in core, Vue also allows you to register your own custom directives. Let’s create our own custom directives.

At its very base, we can create a global directive by using `Vue.directive` and giving it a name. Here is an example of creating a custom directive using the name **sticky**.

```
Vue.directive('sticky');
```

When we want to use this custom directive on a DOM element it will look like:

```
<app-navigation v-sticky></app-navigation>
```

Now that we have created our first custom directive, we now need to create the code behind it. Before we write that code, we need to understand what values Vue provides to us to use in our custom directive.

## Hooks for Directives

Vue provides a series of hooks for custom directives. Each hook has the option of a few arguments. Here are the hooks that are available:

-   **bind** — this occurs once when the directive is attached to the element.
-   **inserted** — this occurs once the element is inserted into the parent DOM
-   **update** — this occurs when the element updates, but children haven't been updated yet
-   **componentUpdated** — this occurs once the component and the children have been updated
-   **unbind** — this occurs once the directive is removed

Each of these has **el**, **binding** and **vnode** arguments available to them. These arguments are:

-   **el** — the element the binding sits on
-   **binding** — an object which contains the arguments that are passed into the hooks. There are many available arguments including name, value, oldValue, expression, arg and modifiers.
-   **vnode** — allows you to refer directly to the node in the virtual DOM if you need to.

Both **binding** and **vnode** should be treated as read-only.

**update** and **componentUpdated** both expose an additional argument called **oldvnode**. The **oldvnode** argument is used to differentiate between the older value passed and the newer value.

**Bind** and **update** are the most useful of the five.

## Get the Code

If you want to see all of these custom directives in action, you can [fork this code sandbox](https://codesandbox.io/embed/my2ppwlk9p?fontsize=14&source=post_page) that I have created. All of the custom directives that we will create are found in the main.js file. Just uncomment out the demo number to see the code.

## Demo #1 v-sticky

If you are following along in the code sandbox, this is Demo #1 found in the main.js file. The v-sticky directive has been applied to the . When you scroll, the navigation remains fixed on the screen.

Let’s write the behavior we want our v-sticky directive to have. When this directive is applied to a DOM element, we want that element to be fixed on the screen. Here is the custom code for our v-sticky directive:

```

Vue.directive('sticky',
    function(el, binding, vnode) {
        el.style.position = 'fixed';
    }
));
```

Let’s break down what is in that code. I am using Vue.directive to create a new global directive called ‘sticky’. After the name, we have a function that has the three arguments we talked about earlier. In the function, I am taking the element the directive has been applied to and getting its style and then its position. I am setting it to fixed.

Later we will be applying a modifier to this custom directive.

## Demo #2 v-orange

The next custom directive that we will create is v-orange. This directive will set the text color to orange. Here is the code for this directive:

```

Vue.directive("orange", function(el, binding, vnode) {
    el.style.color = "orange";
});
```

We can apply this directive to the message that is shown in the HelloWorld component. Once it is applied, the welcome message is now orange.

![](/orangeText.png)

## Demo #3 v-color

The previous directive is not very versatile. If you wanted the text to be blue instead of orange, you would have to write another custom directive. We are going to create a new custom directive called v-color. This custom directive will take a value that will be passed to it. This value is the color that we want to be applied to the welcome message.

Earlier I mentioned the binding is an object which contains the arguments that are passed into the directive. One item contained in that object is the value that is passed in. We will use that in our code to set the text to that value.

```

Vue.directive("color", function(el, binding, vnode) {
    el.style.color = binding.value;
});
```

Now our directive is much more flexible. You can pass in any of the well-known color strings like ‘red’ or ‘blue’ as well as pass in a valid hex color like #ffff00. Here is an image of our new v-color directive being applied three times. The first time the color is red, the second time the color is blue and the last time the color is yellow using the hex code of #ffff00.

![](/v-color.png)

## Demo #4 v-sticky with an argument

You can provide an argument to a custom directive. We will modify our `v-sticky` code that we created earlier to accept an argument. Most websites have navigation at the top of the screen and a footer at the bottom of the screen.

We will use the argument to tell us if the navigation should be fixed to the top or bottom of the screen. The binding object will contain a value called arg that contains the argument we pass into our custom directive.

To make things simpler, if no argument is passed into the directive, I assume the navigation should be fixed to the top of the screen. If I receive an argument, then the navigation is fixed to the bottom of the screen.

To distinguish between the top and bottom navigation, I have added a background color of grey to the top navigation and tan color to the bottom navigation. Here is the code:

```

Vue.directive("sticky", function(el, binding, vnode) {
    const loc = binding.arg === "bottom" ? "bottom" : "top";
    el.style.position = "fixed";
    el.style[loc] = 0;
    if (loc === "bottom") {
        el.style.background = "burlywood";
    } else {
        el.style.background = "#7e7e7e";
    }
});
```

After applying our updated custom directive to the navigation and to the footer, it looks like this.

![](/customNav.png)

## Demo #5 v-format using modifiers

You can add as many modifiers as you want to a custom directive. We are going to create a new custom directive called format. This custom directive will accept one or more of these modifiers:

-   underline
-   bold
-   highlight

The **binding** argument is an object. This object contains all the modifiers for the custom directive. The modifiers on binding is actually an object too. The object will contain a key for every modifier that has been applied. We will use this to apply different text formatting. Here is the code:

```

Vue.directive("format", function(el, binding, vnode) {
    const modifiers = binding.modifiers;
    if (modifiers.underline) {
        el.style.textDecoration = "underline";
    }
    if (modifiers.bold) {
        el.style.fontWeight = "bold";
    }
    if (modifiers.highlight) {
        el.style.background = "#ffff00";
    }
});
```

In the above code, we get the modifiers object and assign it to the variable called modifiers. We then check every possible modifier that we support. If that modifier is present, then we apply the corresponding text decoration.

We have applied the underline modifier to the word guide. We have applied the bold modifier to the words configure / customize. I have applied the highlight modifier to the words check out.

To show that you can apply multiple modifiers to a custom directive I have applied all three modifiers to the text Installed CLI Plugins.

Here is what it looks like.

![](/plugins.png)

## Demo #6 v-hook-demo showing lifecycle hooks

Earlier I talked about the lifecycle hooks that are available to you in your custom directive. If you want your custom directive to work based on a lifecycle hook, then you will need to use a different format for your code. Instead of using a function after the name of the custom directive, you will have an object. The keys on that object will be one or more of the available lifecycle hooks.

In the code sandbox, I have added some code to the About view. The code has a button. When you click the button, the number is updated. In the HelloWorld component, I have applied the v-hook-demo component to the first div.

Here is the code for the v-hook-demo component.

```

Vue.directive("hook-demo", {
    bind(el, binding, vnode) {
        console.log("bind");
    },
    inserted(el, binding, vndoe) {
       console.log("inserted");
    },
   updated(el, binding, vnode) {
       console.log("updated");
   },
   componentUpdated(el, binding, vnode, oldVnode) {
       console.log("componentUpdated");
   }
});
```

If you refresh the screen and look at your console, you will notice that the `bind` and `inserted` lifecycle hooks were implemented. If you go to the About page and click the button you will see the componentUpdated lifecycle hook is implemented.

## Conclusion

This article gives you an overview of the items that make up a directive in Vue.js. After that introduction, I walk you through six examples of creating a custom directive. These examples show a basic custom directive, a directive that is passed a value, a directive using arguments and finally a directive using modifiers. The last example shows the available lifecycle hooks.

I hope you have enjoyed this article. Please leave a comment if you have any question or would like to leave feedback.
