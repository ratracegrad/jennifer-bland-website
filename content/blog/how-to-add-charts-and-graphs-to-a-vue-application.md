---
title: How to Add Charts and Graphs to a Vue Application
description: Learn how to add charts and graphs to a Vue application.
date: 2019-07-23
image: https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

<p>The heart of every application is displaying data to users. Sometimes it is very challenging to display that data using text. Charts and graphs are a great way to provide a visual representation of that data. In this article, I will show you how easy it is to create visually appealing charts in your Vue.js application.</p>

<h2>Getting Started</h2>

<p>I will be using the Vue CLI to scaffold out a starter application quickly. I will use both echarts and vue-echarts to add charts to our starter application. So let’s get started.</p>

<p>Install the Vue CLI with this command:</p>

<pre class="prettyprint"><xmp>npm install @vue/cli
</xmp></pre>

<p>Next, we will use the Vue CLI to scaffold out a Vue application that we will use. We will create the application using this command:</p>

<!--more-->


<pre class="prettyprint"><xmp>vue create vue-echarts-demo
</xmp></pre>

<p>The Vue CLI will ask you if you want to use the default preset or manually select features. Select <code>default</code>.</p>

<p>This will create our application in a folder called <code>vue-echarts-demo</code>. Change into this directory with this command:</p>

<pre class="prettyprint"><xmp>cd vue-echarts-demo
</xmp></pre>

<h2 id="installingthechartpackages">Installing the chart packages</h2>

<p><strong>eCharts</strong> is one of the largest and most widely used chart programs. We will be using this in our vue application. To allow it to be used in Vue, we will also be using a product called <strong>vue-echarts</strong>. Vue-echarts is a wrapper for eCharts to allow it to work in the Vue environment.</p>

<p>You can install them both with this command:</p>

<pre class="prettyprint"><xmp>npm install echarts vue-echarts
</xmp></pre>

<h2 id="configuringthechartpackages">Configuring the chart packages</h2>

<p>Now that we have the chart packages installed we need to install them in our application. Open up the <code>src</code> directory and create a new directory called <code>plugins</code>. Inside the new plugins directory create a file called <code>echarts.js</code>.</p>

<p>We will create a Vue component for eCharts in this file. The component will be globally available in our application. The steps we need to take is to import both vue and vue-echarts. Next, we will import the parts of eCharts that we will be using. Our first chart will be a bar chart so we will need to import that too. Finally, we create a global component called <code>chart</code>. Here is what your echarts.js file should look like:</p>

<pre class="prettyprint"><xmp>import Vue from 'vue';
import Echarts from 'vue-echarts';

import 'echarts/lib/chart/bar';

Vue.component('chart', Echarts);
</xmp></pre>

<h2 id="importingourpluginfile">Importing our plugin file</h2>

<p>We have to make Vue aware of the file we just created. We do that by importing it in the <code>main.js</code> file. Open up the main.js file and add the following line after the last import statement:</p>

<pre class="prettyprint"><xmp>import "@/plugins/echarts";
</xmp></pre>

<p>Now we are ready to create our first chart.</p>

<h2 id="creatingabarchart">Creating a Bar Chart</h2>

<p>We will be creating all our charts in the HelloWorld component. This component was created automatically when we used the Vue CLI to create our application.</p>

<p>Open up the file <code>HelloWorld.vue</code> and do the following:</p>

<ul>
<li>delete all the html inside the template tags</li>

<li>delete the props in the script tags</li>

<li>delete all the CSS in the style tags</li>
</ul>

<p>Your file should look like this:</p>

<pre class="prettyprint"><xmp><template>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
</style>
</xmp></pre>

<p>In our plugin, we called our component <code>chart</code>. Vue-echarts builds charts by using the data you pass into it using a prop called <code>options</code>. Let’s use that to create the html for our first chart. Add the following code inside the template tags:</p>

<pre class="prettyprint"><xmp><chart :options="chartOptionsBar"></chart>
</xmp></pre>

<h2 id="definingourchart">Defining our chart</h2>

<p>Next, we need to define the data that will be used to create our chart. Inside the script tags create a new data object with an entry for chartOptionsBar. Your script tag should look like this:</p>

<pre class="prettyprint"><xmp><script>
export default {
  name: 'HelloWorld',
  data: () => ({
    chartOptionsBar: {}
  })
}
</script>
</xmp></pre>

<h2 id="creatingchartdata">Creating chart data</h2>

<p>Our first bar chart will contain quarterly sales data for a fictional company. Each quarter will be displayed on the x-axis of the chart. The sales amount will be displayed on the y-axis of the chart.</p>

<p>Let’s define our xAxis first. We will provide a data array which will contain entries for each quarter of the year. Add the following to our <code>chartOptionsBar</code> object:</p>

<pre class="prettyprint"><xmp>chartOptionsBar: {
  xAxis: {
    data: ['Q1', 'Q2', 'Q3', 'Q4']
  }
}
</xmp></pre>

<p>Our yAxis will only display the value of sales for each quarter. For that reason, we do not need to create a data array for it. Instead, we tell it that it will display the <code>value</code>. Add the following to our chartOptionsBar object:</p>

<pre class="prettyprint"><xmp>chartOptionsBar: {
  xAxis: {
    data: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  yAxis: {
    type: 'value'
  }
}
</xmp></pre>

<p>The last step is to provide the data that will be displayed in our bar chart. You do this by adding a series array. Series is an array of objects. Each object defines the type of chart to be created and will have a data array of values to be plotted on the graph. You can add it with this:</p>

<pre class="prettyprint"><xmp>chartOptionsBar: {
  xAxis: {
    data: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'bar',
      data: [63, 75, 24, 92]
    }
  ]
}
</xmp></pre>

<p>You can start your server with the command:</p>

<pre class="prettyprint"><xmp>npm run serve
</xmp></pre>

<p>Then open your browser to localhost:8080 and you will see your first chart that looks like this:</p>

<p><img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563664443/v1chxcrgasbkodauov51_xx53zn.png" alt="" /></p>

<h2 id="addingstylingtoourcharts">Adding Styling To Our Charts</h2>

<p>By default, vue-echarts sets a width of 600px for a chart. I would much rather have our charts to be full-width of its container. To do this I am going to place the chart inside a div. I will give this div a class of <code>chart-wrapper</code>. My template now looks like this:</p>

<pre class="prettyprint"><xmp><template>
  <div class="chart-wrapper">
    <chart :options="chartOptionsBar"></chart>
  </div>
</template>
</xmp></pre>

<p>Next, I want to add some styling to the new <code>chart-wrapper</code> class. I will make this class have a width equal to the screen size and have a height of 700px. Here is the style I have added:</p>

<pre class="prettyprint"><xmp>.chart-wrapper {
  width: 100%;
  height: 700px;
}
</xmp></pre>

<p>Vue-echarts adds a class called <code>echarts</code> to all its charts. We will also style that in our CSS. We will tell this class to take up 100% of the height and width of its container which is <code>chart-wrapper</code>. Here is the CSS I have added:</p>

<pre class="prettyprint"><xmp>.echarts {
  width: 100%;
  height: 100%;
}
</xmp></pre>

<p>While we are adding styles I want to replace the Vue logo with a title. Open up the App.vue file. Delete the <img> tag and replace it with:</p>

<pre class="prettyprint"><xmp>Vue eCharts Demo</h1>
</xmp></pre>

<p>Now our chart looks like this:</p>

<p><img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563664468/akeddipym70a87wrwohl_o4l75y.png" alt="" />
Updated bar chart with our styling</p>

<h2 id="addingatitleandcolor">Adding a Title and Color</h2>

<p>This is a great start for our first chart. When people view the chart they are not sure what they are viewing. We can resolve that dilemma by adding a title to our chart.</p>

<p>Each component of eCharts that you want to use has to be imported. A title is a component so we need to import it. Open up the echarts.js file and add the following line:</p>

<pre class="prettyprint"><xmp>import 'echarts/lib/component/title';
</xmp></pre>

<p>Next, we can add a title to our bar chart. Back in HelloWorld.vue component let’s add a title to our <code>chartOptionsBar</code> object.</p>

<pre class="prettyprint"><xmp>chartOptionsBar: {
  xAxis: {
    data: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'bar',
      data: [63, 75, 24, 92]
    }
  ],
  title: {
    text: 'Quarterly Sales Results'
  }
}
</xmp></pre>

<p>eCharts by default places the title on the left side of the bar chart. Here is what our chart looks like now:</p>

<p><img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563664490/1zh246tgt85trqcmtqcs_jypmjb.png" alt="" /></p>

<p>I don’t like how this title looks so let’s change it. I want the title to have a bigger font size and to be centered. The chart has an option called <code>x</code> which represents the horizontal plane. I want the title centered on this. To make the title have a bigger font size we need to add a <code>textStyle</code>. The last change that I want to make is to set the bar to be a different color. Here is what my options look like now:</p>

<pre class="prettyprint"><xmp>chartOptionsBar: {
  xAxis: {
    data: ['Q1', 'Q2', 'Q3', 'Q4']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'bar',
      data: [63, 75, 24, 92]
    }
  ],
  title: {
    text: 'Quarterly Sales Results',
    x: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  color: ['#127ac2']
}
</xmp></pre>

<p>Here is the final version of my bar chart:</p>

<p><img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563664519/cccaq1ohsx398yjc17ph_vytp1o.png" alt="" /></p>

<h2 id="creatingalinechart">Creating a Line Chart</h2>

<p>Next, I will show you how to create a line chart. We will create a line chart showing monthly stock prices for a fictional company. So let’s get started.</p>

<p>First, we need to create a new chart-wrapper div and a new chart element. The new chart element will get its options from the <code>chartOptionsLine</code> object. Here is what my html code looks like now:</p>

<pre class="prettyprint"><xmp><div>
  <div class="chart-wrapper">
    <chart :options="chartOptionsBar"></chart>
  </div>
  <hr />
  <div class="chart-wrapper">
    <chart :options="chartOptionsLine"></chart>
  </div>
</div>
</xmp></pre>

<p>Next, in our data object create a new chartOptionsLine object. Instead of creating a new object copy the existing chartOptionsBar object. Rename the copy to <code>chartOptionsLine</code>. For right now we only need to change the type in series from bar to line. Here is what our <code>chartOptionsLine</code> object looks like:</p>

<pre class="prettyprint"><xmp>chartOptionsLine: {
  xAxis: {
    data: ["Q1", "Q2", "Q3", "Q4"]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      type: "line",
      data: [63, 75, 24, 92]
    }
  ],
  title: {
    text: "Quarterly Sales Results",
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#127ac2"]
}
</xmp></pre>

<p>If you go to your browser you will notice that the line chart does not display. This is because we need to import it into our plugin as we did with the bar chart.</p>

<p>Open up echarts.js and add the following line:</p>

<pre class="prettyprint"><xmp>import 'echarts/lib/chart/line';
</xmp></pre>

<p>We now have this line graph:</p>

<p><img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563664544/xbiogjpyq77hjtkgeyev_mj3zdb.png" alt="" /></p>

<h2 id="changetitleanddata">Change title and data</h2>

<p>We want the line chart to display monthly stock pricing for a fictional company. We will need more than four data points. We will have 12 data points four our line graph. We also want the title displayed on the x-axis to be the months of the year instead of quarters. We also need to change the title of our graph.</p>

<p>We can update our chartOptionsLine with these values:</p>

<pre class="prettyprint"><xmp>chartOptionsLine: {
  xAxis: {
    data: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      type: "line",
      data: [55, 72, 84, 48, 59, 62, 87, 75, 94, 101, 127, 118]
    }
  ],
  title: {
    text: "Monthly Stock Prices",
    x: "center",
    textStyle: {
      fontSize: 24
    }
  },
  color: ["#127ac2"]
}
</xmp></pre>

<p>Now our line chart looks like this:</p>

<p><img src="https://res.cloudinary.com/ratracegrad/image/upload/v1563664582/m1k4cgnfr3rns3t056mj_vpgkaq.png" alt="" /></p>

<h2 id="accessingchartdocumentation">Accessing Chart Documentation</h2>

<p>eCharts provides many more types of charts besides bar and line. eCharts provides a plethora of options that you can add to your chart. You can add legends or tooltips for example.</p>

<p>If you want to find out about the other chart types and options that are available you can read their documentation. Here is a <a href="https://echarts.apache.org/option.html#title">link to the documentation</a>.</p>

<h2 id="getthecode">Get the Code</h2>

<p>All the code for this article can be <a href="https://github.com/ratracegrad/vue-eCharts-demo">found in my GitHub account</a>.</p>

<h2 id="conclusion">Conclusion</h2>

<p>It is very easy to add custom charts and graphs to your Vue.js application using eCharts and vue-echarts. Charts provide a way to visualize data for users to view.</p>

<p>If you have any feedback please leave a comment below. Please clap for this article. Thanks for reading.</p>
