---
title: Think Outside the Box with CSS Shape-Outside
description: Learn how to use CSS Shape-Outside to create custom shapes for your images.
date: 2017-09-16
image: https://images.unsplash.com/photo-1543415458-364217818234?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

CSS is based off a box model. If you have an image that is a circle that you want to wrap text around, it will wrap around the images’ bounding box.

<img class="alignnone size-medium wp-image-1178" src="/1-300x268.png" alt="" width="300" height="268" />
<h2 id="c132" class="graf graf--h3 graf-after--figure">Shape-outside</h2>
<p id="5b27" class="graf graf--p graf-after--h3">A new CSS property called shape-outside lets you wrap text that conforms to the shape of your image.</p>
<img class="alignnone size-medium wp-image-1179" src="/2-300x211.png" alt="" width="300" height="211" />

<!--more-->
<h2 id="cb93" class="graf graf--h3 graf-after--figure">What is shape-outside</h2>
<p id="9d2f" class="graf graf--p graf-after--h3">Shape-outside is a new CSS property that changes the shape of items that are wrapped. Instead of being limited to a rectangular bounding box around the image, shape-outside allows us to shape content to fit the image.</p>
<p id="fc60" class="graf graf--p graf-after--p">Here is how MDN describes shape-outside:</p>

<blockquote>The <strong class="markup--strong markup--blockquote-strong">shape-outside</strong> <a class="markup--anchor markup--blockquote-anchor" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="nofollow noopener" data-href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> property uses shape values to define the float area for a float and will cause inline content to wrap around the shape instead of the float’s bounding box.</blockquote>
<p id="9907" class="graf graf--p graf-after--blockquote">The most important take away from that description is this new property applies to images that uses a float. The CSS shape-outside property controls how text wraps around any floated image. The text that is wrapped can take the shape of a circle, ellipse, rectangle or polygon.</p>

<h2 id="8897" class="graf graf--h3 graf-after--p">Using shape-outside</h2>
<p id="a3d9" class="graf graf--p graf-after--h3">The shape-outside property takes a “basic shape” and applies a shape function to it. The shape function is used to change the shape of the float area of the shape. The CSS shape-outside property provides functionality to create these shape functions:</p>

<ul class="postList">
 	<li id="c752" class="graf graf--li graf-after--p">circle</li>
 	<li id="459b" class="graf graf--li graf-after--li">ellipse</li>
 	<li id="b06b" class="graf graf--li graf-after--li">polygon</li>
 	<li id="2ebd" class="graf graf--li graf-after--li">rectangle</li>
 	<li id="7b61" class="graf graf--li graf-after--li">url</li>
</ul>
<p id="ec4c" class="graf graf--p graf-after--li">The image can be positioned with these values. The values are appended to the end:</p>

<ul class="postList">
 	<li id="9a2c" class="graf graf--li graf-after--p">margin-box</li>
 	<li id="0a7b" class="graf graf--li graf-after--li">padding-box</li>
 	<li id="d9a7" class="graf graf--li graf-after--li">border-box</li>
</ul>
<p id="095e" class="graf graf--p graf-after--li">The image must have intrinsic dimensions. You must set the height and width of the element. This will be used by the shape function to create a coordinate system that is used when wrapping text around the image.</p>

<h2 id="4fc2" class="graf graf--h3 graf-after--p">Circle</h2>
<p id="af42" class="graf graf--p graf-after--h3">Circle() is one of the functional values provided with shape-outside. The full notation for circle() is <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">circle(r at cx cy)</em></strong> where r is the radius of the circle and cx and cy are the coordinates for the center of the circle. If you omit them, the center of the image will be used as the default values.</p>
<p id="cf3b" class="graf graf--p graf-after--p">Here is an example of using shape-outside on a circle:</p>
<img class="alignnone size-medium wp-image-1180" src="/3-1-300x211.png" alt="" width="300" height="211" />
<pre class="prettyprint">.circle {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #7db9e8;
    margin: 0 25px 5px 0;
    float: left;
    -webkit-shape-outside: circle();
    shape-outside: circle();
}</pre>
<h2>Ellipse</h2>
Ellipse is a variation of the circle where the item is elongated on either the horizontal or vertical axis. The full notation for ellipse() is ellipse(rx ry at cx cy) where rx and ry are the radii for the ellipse and cx and cy are the coordinates for the center of the ellipse.

Here is an example of using shape-outside on the ellipse:

<img class="alignnone size-medium wp-image-1181" src="/4-300x239.png" alt="" width="300" height="239" />
<pre class="prettyprint">.ellipse {
    width: 100px;
    height: 200px;
    border-radius: 50%;
    background-color: #7db9e8;
    margin: 0 25px 5px 0;
    float: left;
    -webkit-shape-outside: ellipse(50px 100px at 50% 50%);
    shape-outside: ellipse(50px 100px at 50% 50%);
}</pre>
<h2 id="25ee" class="graf graf--h3 graf-after--pre">Polygon</h2>
<p id="d5cd" class="graf graf--p graf-after--h3">The polygon function provides an unlimited range of shapes. The full notation for polygon() is <strong class="markup--strong markup--p-strong"><em class="markup--em markup--p-em">polygon(x1 y1, x2 y2, …)</em></strong><em class="markup--em markup--p-em"> </em>where each pair specifies the x y coordinates for a vertex of the polygon. To use the polygon() function you must specify a minimum of 3 pairs of vertex.</p>
<p id="ecba" class="graf graf--p graf-after--p">Polygon is used with a clip-path. The clip-path CSS property creates a clipping region that defines what part of an element should be displayed. Anything inside the region is displayed, while those outside are hidden.</p>
<p id="cf75" class="graf graf--p graf-after--p">Here is an example of using shape-outside to create two triangle shapes and the text flows between them:</p>
<img class="alignnone size-medium wp-image-1182" src="/5-300x300.png" alt="" width="300" height="300" />
<pre class="prettyprint">.leftTriangle {
width: 150px;
height: 300px;
background-color: #7db9e8;
margin: 0 25px 5px 0;
float: left;
-webkit-clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
-webkit-shape-outside: polygon(0% 0%, 100% 0%, 50% 100%);
shape-outside: polygon(0% 0%, 100% 0%, 50% 100%);
}
.rightTriangle {
width: 150px;
height: 300px;
background-color: #7db9e8;
margin: 0 0 5px 25px;
float: right;
-webkit-clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
-webkit-shape-outside: polygon(0% 0%, 100% 0%, 50% 100%);
shape-outside: polygon(0% 0%, 100% 0%, 50% 100%);
}</pre>
<h2 id="50ad" class="graf graf--h3 graf-after--pre">Browser Support</h2>
<p id="60f5" class="graf graf--p graf-after--h3">The CSS shape-outside is supported primarily by Chrome, Opera and Safari.</p>
<img class="alignnone size-medium wp-image-1183" src="/6-300x93.png" alt="" width="300" height="93" />
<h2 id="f3cc" class="graf graf--h3 graf-after--figure">Get the Code</h2>
<p id="49a1" class="graf graf--p graf-after--h3">The code for all of the examples can be found in <a class="markup--anchor markup--p-anchor" href="https://github.com/ratracegrad/mastering-css-series-shape-outside" target="_blank" rel="nofollow noopener" data-href="https://github.com/ratracegrad/mastering-css-series-shape-outside">my github repo here</a>.</p>