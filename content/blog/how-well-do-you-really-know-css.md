---
title: How Well Do You Really Know CSS?
description: Take this challenge and see how well you can answer these questions on CSS.
date: 2015-05-30
image: https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Many people that have created their own website or blog consider themselves really good with CSS. The question is how well do you really know CSS?

Take this challenge and see how well you can answer these questions on CSS. At the end I have given answers to all of the CSS questions.

Good luck and let's sell how well you really know CSS.

<!--more-->
<h2>CSS Questions</h2>
<ol>
<ol>
	<li>What is CSS?</li>
	<li>What is an ID Selector</li>
	<li>What is a Class?</li>
	<li>What are the different way to integrate CSS into a website?</li>
	<li>What are CSS Sprites and why would you use them?</li>
	<li>How do absolute, relative, fixed and static position differ?</li>
	<li>What are child selectors?</li>
	<li>What does a float do?</li>
	<li>How can you clear sides of a floating element?</li>
	<li>Does padding-top or padding-bottom has effect on inline element?</li>
</ol>
</ol>
&nbsp;

<strong> What is CSS?</strong>
CSS is a standard for applying style to HTML elements. This styling includes margins, positioning, fonts, colors, and so forth. The styling can apply to the complete document or be granular and apply to a specific element. Theoretically, the use of CSS promotes the separation of content and design, allowing the designer to focus on how a Web application will look while the developer(s) concentrate on the structure and functionality.

The main part of CSS is a rule. A rule consists of a selector (i.e., what will be styled) followed by a declaration (i.e., the style to be applied) that is broken into one or more properties and associated styles. In the following example, h1 is the selector, followed by the color property and the style of blue.

<strong> What is an ID Selector</strong>
An ID selector is a name assigned to a specific style. In turn, it can be associated with one HTML element with the assigned ID. Within CSS, ID selectors are defined with the # character followed by the selector name. The name can contain characters a-z, A-Z, digits 0-9, period, hyphen, escaped characters, and so forth.

<strong> What is a Class?</strong>
A class is a style (i.e., a group of CSS attributes) that can be applied to one or more HTML elements. This means it can apply to instances of the same element or instances of different elements to which the same style can be attached. Classes are defined in CSS using a period followed by the class name. It is applied to an HTML element via the class attribute and the class name.

An ID selector identifies and sets style to only one occurrence of an element, while CLASS can be attached to any number of elements.

<strong> What are the different way to integrate CSS into a website?</strong>
An ID selector identifies and sets style to only one occurrence of an element, while CLASS can be attached to any number of elements.
There are three ways to integrate CSS into a Web page

a.) Inline: HTML elements may have CSS applied to them via the STYLE attribute.
b.) Embedded: By placing the code in a STYLE element within the HEAD element.
c.) Linked/ Imported: Place the CSS in an external file and link it via a link element.

<strong> What are CSS Sprites and why would you use them?</strong>
A web page with large number of images takes a longer time to load. This is because each image separately sends out an http request. The concept of CSS sprite helps in reducing this loading time for a web page by combining various small images into one image. This reduces the numbers of http request and hence the loading time.

<strong> How do absolute, relative, fixed and static position differ?</strong>
<em>Absolute</em>, places an element exactly where you want to place it. Absolute position is actually set relative to the element's parent. If no parent is available then the item is placed relatively to the page itself.

<em>Relative</em>, positions an element relative to itself (from where the element would be placed, if you don't apply relative positioning). For example, if you set position relative to an element and set top: 10px, it will move 10px down from where it would be normally.

<em>Fixed</em>, element is positioned relative to viewport or the browser window itself. Viewport doesn't change if you scroll and hence a fixed element will stay right in the same position.

<em>Static</em>, element will be positioned based on the normal flow of the document. usually, you will use position static to remove the position style applied to an element.

<strong>What are child selectors?</strong>
A child selector is used when you want to match an element that is the child of another specific element. The parent and child selectors are separated by spaces. The following selector locates an unordered list element within a paragraph element and makes a text within that element bold.

<strong>What does a float do?</strong>
A float pushes an element to the sides of a page with text wrapped around it. you can create entire page or a smaller area by using float. if size of a floated element changes, text around it will re-flow to accommodate the changes. You can have float left, right, none or inherit.

If you set, 'float: left;' for an image, it will move to the left until the margin, padding or border of another block-level element is reached. The normal flow will wrap around on the right side.

<strong>How can you clear sides of a floating element?</strong>
If you clear a slide of an element, floating elements will not be accepted on that side. With 'clear' set to 'left', an element will be moved below any floating element on the left side. clear is used to stop wrap of an element around a floating element.

<strong>Does padding-top or padding-bottom has effect on inline element?</strong>
No.