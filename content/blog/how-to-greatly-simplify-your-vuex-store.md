---
title: How to Greatly Simplify Your Vuex Store
description: Learn how to greatly simplify your Vuex store.
date: 2019-07-26
image: https://images.unsplash.com/photo-1582562478413-e3e826e00444?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

As the size of your Vue application grows, the number of actions and mutations in your Vuex store grows too. Let me show you how to reduce this to something more manageable.
<h2>What is Vuex</h2>
Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
<h2>How we are using Vuex</h2>
We are using Vuex to share state between all the applications in our Factory Core Framework application. Since the framework is a bundle of applications, we currently have nine Vuex stores. Each store has its own state, actions, and mutations.

We are using actions in the store to do API calls to the backend. Once the data is returned we use mutations to store it in state. This allows any component to access that data.

As you can imagine, our stores can have a very large number of actions to handle these API calls. Here is an example of all the actions in one of our Vuex stores.
<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1563714381/1_M7opn1qJ0HyA_Y4PJM0v5w_n4zxvu.png" width="1000" height="666" />

<!--more-->


<p>This store has 16 actions. Now imagine how many actions our Factory Core Framework has in total if we have 9 stores!</p>

<h2>Simplifying our Actions</h2>

<p>All our actions basically perform the same functionality. Every action does the following:</p>
<ul>

	<li>fetch data from API (include payload if necessary)</li>

	<li>(optionally) store data in state</li>

	<li>return response to the component that called the action</li>
</ul>


<p>To refactor these into a single action, we needed to know if the action needed to know:</p>
<ul>

	<li>an endpoint to hit</li>

	<li>to send payload in the API call or not</li>

	<li>to commit data to state or not, and if so, to which state variable</li>
</ul>


<h2>Our current action</h2>

<p>Here is an example of one of our actions.</p>

<pre class="prettyprint"><xmp>
async getLineWorkOrders({ rootState, commit }, payload) {
    try {
        let response = await axios.post(
           'api.factory.com/getLineWorkOrders',
           Object.assign({}, payload.body, { language: rootState.authStore.currentLocale.locale }),
           rootState.config.serviceHeaders
        );
       commit( 'setCurrentWorkOrderNumber', response.data.currentWorkOrderNumber );

       return response.data;
    } catch (error) {
       throw error;
    }
},</xmp></pre>

<p>In this action, we fetch data from our backend API by hitting the endpoint ‘api.factory.com/geteLineWorkOrders’. After the data is retrieved, the state variable currentWorkOrder is updated. Finally, the data is returned to the component that made the call.
All our actions have this format. To refactor it into a single action we need to have the endpoint, whether or not to send payload and whether or not to commit data. Here is our refactored single action:</p>

<pre class="prettyprint"><xmp>
async fetchData({ rootState, commit }, payload) {
   try {
       let body = { language: rootState.authStore.currentLocale.locale };
       if (payload) {
           body = Object.assign({}, payload.body, body);
       }
      let response = await axios.post(`api.factory.com/${payload.url}`, body, rootState.config.serviceHeaders );
      if (payload.commit) {
          commit('mutate', {
              property: payload.stateProperty,
              with: response.data[payload.stateProperty]
           });
      }
      return response.data;
   } catch (error) {
      throw error;
   }
}</xmp></pre>

<p>This single action will handle every possible call. If we need to send data with the API call it does. If we need to commit data it does. If it does not need to commit data, it does not. It always returns data to the component.</p>

<h2>Using one mutation</h2>

<p>Previously for every action that needed to mutate state, we created a new mutation to handle this. We replaced them all with a single mutation. Here is our single mutation:</p>

<pre class="prettyprint"><xmp>
const mutations = {
    mutate(state, payload) {
       state[payload.property] = payload.with;
    }
};</xmp></pre>

<p>If an action needs to store data in state, we call this mutation like this:</p>

<pre class="prettyprint"><xmp>
commit('mutate', {
    property: <propertyNameHere>,
    with: <valueGoesHere>
});</xmp></pre>

<h2>Conclusion</h2>

<p>We have greatly simplified our actions and mutations in our stores by having just one action and one mutation.</p>