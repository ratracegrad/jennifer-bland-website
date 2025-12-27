---
title: How to Reduce Your Vue.js Bundle Size With Webpack
description: Is your build time taking forever? Learn how to reduce your Vue.js bundle size with Webpack.
date: 2019-07-24
image: https://images.unsplash.com/photo-1693359052825-e5e1c4f852d8?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

<p>I work on the Industry 4.0 team at Stanley Black &amp; Decker. Our team recently created the equivalent of an App Store for Stanley’s manufacturing plants worldwide. Factories can visit the marketplace and select what applications they need based on the products they are producing at that location. This will create a custom build that bundles all of these applications together for the plant to run. Due to the bundling of such a large number of applications our Vue build for production resulted in multiple warnings about excess size.</p>

<h2>Size of our build initially</h2>
<p>When we do a build we get the following 2 error messages:</p>
<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563665253/1_xbuSudEVU0kH9kJVRo757A_jox9gi.png" width="1000" height="548" class="alignnone size-large" />

<div>
<p>Vue recommends that bundles not exceed a size of 244 KiB. We have 14 assets alone where each exceeds this size. In addition, we have four entry points that are also above the recommended size. Here is what I did to reduce the size of our build in half.</p>

<!--more-->


<h2>What is causing the large build bundles?</h2>
<p id="65cc" class="ju jv du ap jw b jx kv jz kw kb kx kd ky kf kz kh" data-selectable-paragraph="">First I needed to understand what was causing the large build bundle sizes. To do that I installed webpack-bundle-analyzer. This will provide a visual guide to the size of items in each bundle.</p>

<pre class="prettyprint"><xmp>npm install --save-dev webpack-bundle-analyzer</xmp></pre>
<p>Next, I configure webpack to use it in the vue.config.js file. Here is what my vue.config.js file looks like:</p>

<pre class="prettyprint"><xmp>const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
    module.exports = {
        configureWebpack: {
            plugins: [new BundleAnalyzerPlugin()]
        }
   };</xmp></pre>
<p>With the plugin installed when I run build for production again, I can see that my build is 2.48MB. From the image I can see the biggest culprits in size are clearly:</p>

<ul class="">
 	<li>vue-echarts</li>
 	<li>vuetify</li>
 	<li>moment</li>
 	<li>lodash</li>
</ul>
</div>

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563666363/1_5LbshDHOBRCDGtpjED6ACA_dfhfkn.png" width="1000" height="510" />

<div class="af hx ac dn w x">
<h2>Reducing the size of Lodash</h2>
<p>Lodash was taking up 70.74kb of space. Lodash is only used in 2 places in all of the applications in our framework. That is a lot of space for just 2 methods.</p>

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563666468/1_-UglvHdNYShBloaef9ldmQ_ndmq9o.png" width="433" height="142" /></div>

<p>Not only were we loading lodash but we were also loading vue-lodash. The first step was to remove vue-lodash from our package.json since it was not needed.</p>
<p>The next step was to import only the two items that we needed from lodash instead of loading the entire library. We were using <code>cloneDeep</code> and <code>sortBy</code>. I replace the initial call that was importing the entire lodash library:</p>

<pre class="prettyprint"><xmp>import _ from 'lodash';</xmp></pre>
<p>I am replacing it with this call that imports just the 2 items that we need. To do that I change the import from lodash to lodash/core:</p>

<pre class="prettyprint"><xmp>import { cloneDeep, sortBy } from 'lodash/core';</xmp></pre>
<p>Making this one change has reduced the size of my build bundle from 2.48MB to 2.42MB. Here is the image showing the current size of the build.</p>

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563666632/1_6RwqQS1Iepyvraw1u2vfjw_q4ozka.png" width="1000" height="509" />

<div>
<p>Here we can see the size of lodash itself as part of our build bundle.</p>

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563666755/1_4vDduy8g05Ns1BayqwQ8cw_xotb8e.png" width="322" height="153" />


<h2>Reducing the size of moment.js</h2>
<p>Moment.js is taking up 234.36KB in size in our bundle. When you look at the image, the overwhelming largest part of that size is the internationalization locales for all the languages that they support. We do not use this part of moment.js at all so this is a lot of dead weight that is being included in our bundle.</p>
<p>Luckily, we can remove it. Instead of importing all of moment.js with this call:</p>

<pre class="prettyprint"><xmp>import moment form 'moment';</xmp></pre>
<p>We can import just the date manipulation code only with this call:</p>

<pre class="prettyprint"><xmp>import moment from 'moment/src/moment'</xmp></pre>
<p>There is a catch in making this replacement at least in our codebase. There are 18 places where moment.js is imported in the code. I could have done a global search and replace in the code. But if we add a new application to the framework it is quite possible a developer would use the default call to import moment.js. If they do that then we would be back with importing all the internationalization locales again.</p>
<p >So the tradeoff was to create a shortcut alias in webpack. The shortcut would substitute all calls that import ‘moment’ with ‘moment/src/moment’. We can add that alias in our vue.config.js file using resolve and setting an alias. Here is what my vue.config.js file looks like now.</p>

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563666863/1_T-fNGuJQmvd9T-lC-9V9EA_km6bfc.png" width="643" height="317" />

<p>When I run our build for production now, our bundle has dropped down now to 2.22MB in size.</p>

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563666928/1_jUu4bPp3xygmCUfgEayMIA_q4tsxs.png" width="1000" height="508" />

<p>When you look at moment.js in the image, you will see that the internationalization locales are no longer being loaded at all.</p>


<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563666975/1_xNtQoz71NJrHKhoFiZ0Cig_chmrlf.png" width="208" height="227" />

<p >By removing the locales in moment.js, this introduced an error whenever I start my server to run my code that says it cannot find <code>./locale</code>. After doing some research I discovered that this has been a known issue with moment.js for several years in that moment.js always loads and assumes the locales are present. You cannot tell moment to load just the date manipulation functionality.</p>
<p>To resolve this I use the built-in webpack IgnorePlugin to ignore this message. Here is the plugin code that I added to my vue.config.js file:</p>

<pre class="prettyprint"><xmp>new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)</xmp></pre>
<h2>Reducing the size of Vuetify.js</h2>
<p>The next thing I want to target is the size of Vuetify.js. Vuetify is taking up 500.78KB in space. That is a huge amount of space for one vendor product.</p>


<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563667062/1_CBetC6KrkTFdbcOWigIuuw_gv7yk9.png" width="665" height="528" />

<p>Vuetify provides a feature that they call a-la-carte. This allows you to import only the Vuetify components that you use. This would reduce the size Vuetify. The challenge is that we have so many applications that going through and trying to determine just the components that we are using was not going to happen.</p>
<p>In the current version of Vuetify (version 1.56 at the time I wrote this article) they are providing a product called vuetify-loader. It will go through your code and determine all the components you are using and then import just them into your build bundle. <strong>Note:</strong> Eventually vuetify v2 will have this feature built-in. Until that release is available you have to use vuetify-loader to import just the components that you are using. Vuetify documentation states that to obtain all the required styles, we need to import them in stylus.</p>
<p>I realized that we are running an older version of vuetify.js. So I decide to upgrade my version of vuetify to the latest version. I also install the styles and vuetify-loader at the same time with:</p>

<pre class="prettyprint"><xmp>npm install vuetify vuetify-loader stylus stylus-loader style-loader css-loader --save</xmp></pre>
<p id="1358" class="ju jv du ap jw b jx jy jz ka kb kc kd ke kf kg kh" data-selectable-paragraph="">My plugin code to import Vuetify has some customization for the theme to use our company’s color palette. Here is what my current plugin for Vuetify looks like:</p>


<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563667138/1_G8N2qYFxgswv0qPAQos6bw_bfz2ww.png" width="524" height="582" /><

<p>I will need to change the import for Vuetify to import from vuetify/lib. I will also import stylus to get all the styles. Here is what my plugin code looks like now:</p>


<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563667176/1_9FOCuvfxDNvDoA0Dt9b55Q_itht7c.png" width="521" height="600" />

<p >The last step is to tell webpack to use the vuetify-loader plugin so that it will import only the components that we are using. I will require the plugin and then add it to the plugins array. Here is my vue.config.js file:</p>


<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563667229/1_FHEgk5Ooivlj40vf7GlLrQ_mqhyjl.png" width="700" height="318" />

<p>Now when I run my build for production my bundle size is 2MB.</p>


<img class="ny nz bt p q jg ac jm" src="https://res.cloudinary.com/ratracegrad/image/upload/v1563667277/1_8DImlTLemFNm_3IVGqRtuw_rccxcu.png" width="1000" height="502" />


<h2>Reducing the size of vue-echarts</h2>
<p>Vue-echarts is not the largest item I have in my bundle. Vue-echarts runs on top of echarts. Like Vuetify, I am running an older version of both products. to upgrade them both to the latest version I run this command:</p>

<pre class="prettyprint"><xmp>npm install echarts vue-echarts --save</xmp></pre>
<p>I did some research on vue-echarts GitHub repo looking at all the closed issues to find that the latest version of vue-echarts allows you to load a smaller bundle by changing what you import. Previously I was importing it using this command:</p>

<pre class="prettyprint"><xmp>import ECharts from 'vue-echarts';</xmp></pre>
<p>I change it to this:</p>

<pre class="prettyprint"><xmp>import ECharts from 'vue-echarts/components/ECharts.vue';</xmp></pre>
<p>Now when I run a build for production my bundle size is down to 1.28MB.</p>


<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563667391/1_dI1qMH7z5jKaTGMtGsvHSg_q0qhcf.png" width="1000" height="507" />


<h2>Conclusion</h2>
<p>My goal was to reduce the size of our bundle created for production for our application. The initial size of my build was 2.48MB. By making a few changes I was able to reduce our build size down to 1.2MB. That is an almost 50% reduction in size.</p>
<p>If you are creating production Vue applications you should take the time to evaluate your build size. Use the webpack-bundle-analyzer to determine what items are consuming the most space. Then start to take steps necessary to reduce the size of those items. I was able to reduce the size of the four largest items in my bundle this way.</p>
<p>Hopefully, you will be able to follow these steps to reduce the size of your build for production. If you have any questions or comments, please post them below. Thank you very much for reading.</p>

