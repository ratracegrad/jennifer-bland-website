---
title: Form Validation with Vuetify in a Vue App
description: Learn how to create client-side form validation using Vuetify.
date: 2019-11-16
image: https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Your forms can provide a great user experience. Here is how.

Almost every website today has a form that they ask users to fill out. A basic Wordpress blog will have a contact us form. An e-commerce website will have a cart checkout form. Even our local traffic courts have a form to fill out to request rescheduling a court date.

The biggest complaint people have with forms is that they do not provide enough feedback when you are completing the form. Users fill out a form and submit it. They get an error message and have to start all over in filling out the form again.

You can minimize customer frustration by having effective form validations. I will show you how to create client-side form validation using Vuetify.

<!--more-->


<h2>Creating a Vue Application</h2>

The first step is to create a Vue application. I am going to use the Vue CLI to create a new application. If you do not have the Vue CLI installed you can install it with this command:

<pre class="prettyprint">npm install -g @vue/cli</pre>

To create a new vue application use this command:

<pre class="prettyprint">vue create vuetify-form-validation</pre>

The CLI will ask you if you want to select the default presets or manually select them. We are going to use the defaults so you can just hit enter for all the prompts.

[caption id="" align="alignnone" width="1064"]<img class="size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1573846169/1_MvZt50Na2fs-TSGtK9Tyvw_qytwio.png" alt="Vue default presets" width="1064" height="194" /> Select defaults for our new Vue application[/caption]

&nbsp;
Once the CLI has finished creating our new application you will need to CD into the directory with this command:

<pre class="prettyprint">cd vuetify-form-validation</pre>

<h2>Adding Vuetify to our application</h2>

Next we want to add Vuetify to our application. Make sure you have changed into the directory where our application was created. Then use this command to add vuetify to your application:

<pre class="prettyprint">vue add vuetify</pre>

You will be asked which preset you want to use. Select the default.

[caption id="" align="alignnone" width="832"]<img class="size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1573846313/1_Pze-PYgfnnw976wkyAnZwQ_pzu6g5.png" alt="Select preset" width="832" height="240" /> Select default preset for Vuetify[/caption]

Now let's verify that we have everything installed correctly. In your terminal enter this command to start your application:

<pre class="prettyprint">npm run serve</pre>

Then open your browser and navigate to <strong>localhost:8080</strong>. You should see the following in your browser.

[caption id="" align="alignnone" width="2400"]<img class="size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1573846420/1_g0KjTPJWiYIRNPNafhHINw_sn2kpj.png" alt="Vue app with Vuetify" width="2400" height="1309" /> Our Vue application with Vuetify[/caption]
&nbsp;

<h2>What we will be creating</h2>

The goal of this article is to show you a wide range of validations that you can utilize on forms with Vuetify. To do this we will be building out the following forms:
<ul>
 	<li>Login Form</li>
 	<li>Registration Form</li>
</ul>

Each of these forms will be created as separate components. To be able to easily toggle between all the forms we will be using the tabs component in Vuetify. We will have add a tab for every form we create allowing you to easily transition from one form to another.

<h2>Login Form</h2>

The first form we will be creating is a login form. This form will have two fields:

<ul>
 	<li>Email</li>
 	<li>Password</li>
</ul>

For this form we will learn how to add validation to the form. The first validation we will implement is just to make sure the user has entered something in both of the fields.

In the components folder create a new file called <strong>LoginForm.vue</strong>.

<h2>Creating our v-card</h2>

Open up the file you just created. We are going to create a template section that will be used to display our form. In the template section we are going to use Vuetify's v-card component to wrap our login form.

The v-card template in Vuetify has several sections. Including:

<ul>
 	<li>v-card-title - has the title of our form</li>
 	<li>v-card-text - our form will be here</li>
 	<li>v-card-actions - the button to submit the form</li>
</ul>

So let's implement each of these sections. In the template section of the LoginForm file, add the following items:

<pre class="prettyprint"><xmp><template>
    <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
    </v-card>
</template></xmp></pre>

Next let's start fill in our form. We can start by adding a title. So update the title to be:

<pre class="prettyprint"><xmp><v-card-title>Login Form</v-card-title></xmp></pre>

Next let's add a button to submit our form. In the v-card-actions section add a button with the text of Login. To make the button look colorful I am going to set the button's color to <strong>primary</strong>. This is what it should look like:

<pre class="prettyprint"><xmp><v-card-actions>
    <v-btn color="primary">Login</v-btn>
</v-card-actions></xmp></pre>

Next we are going to create our form. Our form will have two fields for email and password. Here is the bare minimum entry for our form:

<pre class="prettyprint"><xmp><v-card-text>
    <v-form>
        <v-text-field label="Email"></v-text-field>
        <v-text-field label="Password"></v-text-field>
    </v-form>
</v-card-text></xmp></pre>

We need to add some more functionality to our form. So let's start doing that. Each of our fields will need to have a field that stores the value that the user enters. To store that value we need to add a v-model prop to each field. Our updated form now looks like this:

<pre class="prettyprint"><xmp><v-form>
  <v-text-field 
          label="Email" 
          v-model="email"
  ></v-text-field>
  <v-text-field 
          label="password" 
          v-model="password"
  ></v-text-field>
</v-form></xmp></pre>

Right now the way our form is setup, if a person types in their password then anybody looking at the computer screen will be able to see what they are typing. This is not what we want. Instead we want what the user types to be hidden from view. We can can change the type of the text field to be password. This will place bullets in the field when the user types their password so nobody can see the actual text of their password. Let's update our password field to have a type of password.

<pre class="prettyprint"><xmp><v-text-field
        label="password"
        v-model="password"
        type="password"
></v-text-field></xmp></pre>

<h2>Adding validations to our fields</h2>

To add validation to our fields, we have to do two things:
<ul>
 	<li>make field a required field</li>
 	<li>create the validation rules for the field</li>
</ul>

To make the field required we just need to add the prop <strong>required</strong> to both fields. Our fields now look like this:

<pre class="prettyprint"><xmp><v-text-field
        label="Email"
        v-model="email"
        required
></v-text-field>
<v-text-field
        label="password"
        v-model="password"
        type="password"
        required
></v-text-field></xmp></pre>

Next we need to add our rules that we will use to validate against whatever input the user types into the fields. For our first validation we just want to make sure the user has entered something into the fields.

For field validations we add a prop called <strong>rules</strong>. This prop will have an array of validation methods that are applied to the user's input.

The method will have a parameter that is the value that the user inputs into the field. Our validation method will check if the user has entered something. If they have entered something then our validation method passes. If not then we provide an error message that will be displayed to the user.

Here is what our fields look like now with our validation rule added.

<pre class="prettyprint"><xmp><v-text-field
        label="Email"
        v-model="email"
        :rules="[v => !!v || 'Email is required']"
        required
></v-text-field>
<v-text-field
        label="Password"
        v-model="password"
        type="password"
        :rules="[v => !!v || 'Password is required']"
        required
></v-text-field></xmp></pre>

<h2>Adding our form to our application</h2>

When we installed Vuetify it modified the App.vue file and added a navigation bar and Vuetify logo. We are going to remove all the information that they provided and instead show our Login Form.

Open up the App.vue file. Delete everything inside the v-app-bar. Add a title to the the app bar that just says <em>Vuetify Form Validation</em>. It should look like this:

<pre class="prettyprint"><xmp><v-app-bar
  app
  color="primary"
  dark
>
  <v-toolbar-title>Vuetify Form Validation</v-toolbar-title>
</v-app-bar></xmp></pre>

Next delete everything inside the <code>v-content area</code>. We are going to add vuetify's tab component. We will eventually have a tab for each form we create.

Delete everything inside the <code>v-content</code>. We will be putting our tabs inside here.

Tabs in Vuetify consist of two things. First is the v-tabs which list all items in the tabs inside a v-tab.

Then below that we will have the v-tabs-item. The content to be displayed for each tab is nested inside a v-tab-item.

This is what your content should look like:

<pre class="prettyprint"><xmp><v-content>
  <v-tabs v-model="tab" centered>
    <v-tab>Login</v-tab>
  </v-tabs>
  <v-tabs-item v-model="tab">
    <v-tab-item>
      <LoginForm></LoginForm>
    </v-tab-item>
  </v-tabs-item>
</v-content></xmp></pre>

If you noticed in that code I am displaying the Login Form. We need to import this component and include it in the components object. Add this as the first line in your script section:

<pre class="prettyprint">import LoginForm from './components/LoginForm';</pre>

Next we need to add the component that we just imported. Add a components section like this:

<pre class="prettyprint"><xmp>export default {
  name: 'App',
  components: {
    LoginForm,
  }
};</xmp></pre>

The last thing we need to do is is add a <strong>tab</strong> variable in our data object. For both our v-tabs and v-tabs-items we have a v-model that points to a value called tab. Add a data section that sets the value initially to null. Your entire script section should look like this:

<pre class="prettyprint"><xmp><script>
import LoginForm from './components/LoginForm';

export default {
  name: 'App',
  components: {
    LoginForm,
  },
  data: () => ({
    tab: null
  }),
};
</script></xmp></pre>

<h2>Testing our form validation</h2>

We want to make sure our form validation is working. If you don't have your server running then you can start it with the command:

<pre class="prettyprint">npm run serve</pre>

Open your browser and navigate to the URL:

<pre class="prettyprint">localhost:8080</pre>

You should see the login form. Put your cursor in the email field and then tab over to the password field. You should get an error message stating that this field is required. If you tab out of the password field then you will get an error message for that field too.

<img src="https://res.cloudinary.com/ratracegrad/image/upload/v1573847345/1_IEK372_tuy_q4Ng6eJtjgA_pk8lb6.png" width="798" height="292" class="alignnone size-large" />

&nbsp;
<h2>Adding our data for capturing the field values</h2>

For each of our fields we have added a v-model. This will contain the value that the user entered into the field. For this demo I am not going to be doing anything with the stored data but if you implement this form in a production app then you will need to send these values to the backend. So let's add a script section. In there, add the data object that will contain the values for our email and password fields.

Here is what our script section looks like:
<pre class="prettyprint"><xmp><script>
export default {
  name: "LoginForm",
  data: () => ({
    email: null,
    password: null
  })
};
</script></xmp></pre>

<h2>Disable Login Button</h2>

Another thing we can do is to disable the login button until the user has submitted something for both fields. To do this we will need to add field whose value will resolve to <em>true</em> or <em>false</em> based on if all our form validations pass or not. Then we will disable the Login button if this field is false.

The field we are going to be using is <strong>isValid</strong>. Add a v-model to our form and set its value to this field.

<pre class="prettyprint"><xmp><v-form v-model="isValid"></xmp></pre>

Next add this field to our data object and set its initial value to true.

<pre class="prettyprint"><xmp>data: () => ({
  email: null,
  password: null,
  isValid: true
})</xmp></pre>

Next add a disabled prop to our Login button and set its value to be not isValid.

<pre class="prettyprint"><xmp><v-btn 
    color="primary" 
    :disabled="!isValid"
>Login</v-btn></xmp></pre>

Now if you go back to your browser and refresh the page, you will see that the Login button is now disabled.

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1573848344/1_LP9t00jpZXGR7rr8hiCN8w_cnd1ap.png" alt="Login Form" width="731" height="285" />

If you type something into both the email and password field then the Login button will be enabled.

<img class="alignnone size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1573848305/1_pEBRk5COo4OXZOIES7UV8w_vyjsxc.png" alt="Login form" width="800" height="279" />

<h2>Registration Form</h2>

Now we are ready to create our next form which is our registration form. In your components create a new file called <strong>RegistrationForm.vue</strong>.

To make things easier copy the entire content of your LoginForm.vue file and paste it into this file. Then change the form title to say Registration Form instead of Login Form.

<pre class="prettyprint"><xmp><v-card-title>Registration Form</v-card-title></xmp></pre>

Change the text of the button from Login to Register.

<pre class="prettyprint"><xmp><v-btn
        color="primary"
        :disabled="!isValid"
>Register</v-btn></xmp></pre>

Last thing you need to change is then name of the component. Change it from LoginForm to RegistrationForm.

<pre class="prettyprint">name: "RegistrationForm"</pre>

<h2>Creating Multiple Validation Rules</h2>

To validate our fields we added an array with a single validation method. We are going to add multiple validation rules for both fields in our registration form. You can have as many entries as you want in your validation array.

For email we are going to require:
<ul>
 	<li>User inputs something</li>
 	<li>It is a properly formatted email address</li>
</ul>

For password we are going to require:
<ul>
 	<li>User inputs something</li>
 	<li>Password has to be at least 5 characters</li>
 	<li>Must have 1 uppercase letter</li>
 	<li>Must have 1 number</li>
 	<li>Must have 1 special character from !@#$%</li>
</ul>

<h2>Creating Email Rules</h2>

To make things easier to read, I want to move our rules from the v-text-field and put it in the data object. For the email field change the rules to point to our emailRules:

<pre class="prettyprint">:rules="emailRules"</pre>

Next in our data section add emailRules and set its value to our initial array.

<pre class="prettyprint"><xmp>emailRules: [v => !!v || 'Email is required']</xmp></pre>

Let's add a validation method that checks if the email the user inputs is a properly formatted email message. This can be doing by testing the input against a RegExp. This is what your emailRules should look like:

<pre class="prettyprint"><xmp>emailRules: [
    v => !!v || 'Email is required',
    v => /.+@.+/.test(v) || 'E-mail must be valid'
]</xmp></pre>

<h2>Creating our Password Rules</h2>

Let's start by moving our password rules array to the data object like we did for email. Your password field rules should point to passwordRules.

<pre class="prettyprint"><xmp>:rules="passwordRules"</xmp></pre>

In our data object add passwordRules.

<pre class="prettyprint"><xmp>passwordRules: [v => !!v || 'Password is required']</xmp></pre>

Let start by adding the requirement that our password must be at least 5 characters in length. Update your passwordRules to be:

<pre class="prettyprint"><xmp>passwordRules: [
    v => !!v || 'Password is required',
    v => (v && v.length >= 5) || 'Password must have 5+ characters'
]</xmp></pre>

For our remaining validations we will be using a RegExp to test the input to make sure the user has entered at least 1 uppercase character, 1 number and 1 special character. Here is my updated passwordRules:

<pre class="prettyprint"><xmp>passwordRules: [
    v => !!v || 'Password is required',
    v => (v && v.length >= 5) || 'Password must have 5+ characters',
    v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
    v => /(?=.*\d)/.test(v) || 'Must have one number',
    v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
]</xmp></pre>

<h2>Adding Tab for Registration Form</h2>

To be able to see our new Registration Form we need to add a tab for it. Open up the App.vue file.

We need to add a new tab so update the v-tabs section to include an entry for Registration. It should look like this:

<pre class="prettyprint"><xmp><v-tabs v-model="tab" centered>
  <v-tab>Login</v-tab>
  <v-tab>Registration</v-tab>
</v-tabs></xmp></pre>

Add a new v-tab-item that will display our RegistrationForm component. It should look like this:

<pre class="prettyprint"><xmp><v-tabs-items v-model="tab">
  <v-tab-item>
    <LoginForm></LoginForm>
  </v-tab-item>
  <v-tab-item>
    <RegistrationForm></RegistrationForm>
  </v-tab-item>
</v-tabs-items></xmp></pre>

Next we need to import our RegistrationForm.

<pre class="prettyprint">import RegistrationForm from "./components/RegistrationForm";</pre>

Last we need to add our Registration form to our components.

<pre class="prettyprint"><xmp>components: {
  LoginForm,
  RegistrationForm
},</xmp></pre>

<h2>Testing our Registration Form</h2>

Start your server with the command:

<pre class="prettyprint">npm run serve</pre>

Open your browser to

<pre class="prettyprint">localhost:8000</pre>

You should see a tab for both form. Click on Registration tab to see your new form. If you just put your cursor in both fields and tab out of the field without typing in anything you will see the same error message we saw with our Login form.

[caption id="" align="alignnone" width="800"]<img class="size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1573847911/1_aPWLD-tQ_iTZ0_K4ajjtDQ_pumbe3.png" alt="Registration Form error messages" width="800" height="280" /> Error messages for Registration form[/caption]
&nbsp;
The error message does not show all of the errors. For example for our password field it does not tell us that:
<ul>
 	<li>Must be at least 5+ characters</li>
 	<li>We need at least 1 uppercase letter</li>
 	<li>We need at least 1 number</li>
 	<li>We need at last 1 special character</li>
</ul>
This is not a good user experience because if the user types in something then they will get only the first error message in the array that fails validation.

Luckily Vuetify's <code>v-text-field</code> does provide an option to display as many error messages as you want. You can do this by adding the prop <code>error-count</code> and setting its value to the number of error messages you want displayed.

Go back to your <strong>RegistrationForm.vue</strong>. For the email field we want to show 2 error messages. For the password field we want to show 5 error messages. Update these two fields so they look like this:

<pre class="prettyprint"><xmp><v-text-field
        label="Email"
        v-model="email"
        :rules="emailRules"
        error-count="2"
        required
></v-text-field>
<v-text-field
        label="Password"
        v-model="password"
        type="password"
        :rules="passwordRules"
        error-count="5"
        required
></v-text-field></xmp></pre>

Now if you tab through both fields without typing in anything you will see error message like this.

[caption id="" align="alignnone" width="789"]<img class="size-large" src="https://res.cloudinary.com/ratracegrad/image/upload/v1573848092/1_vMo7oFLO8W2XYZsAIbnx1Q_qawwk9.png" alt="Registration form error messages" width="789" height="372" /> Registration Form showing all error messages[/caption]
&nbsp;
Now if a user fails validation for their input in either field they will see all the reasons why it failed. This is a much better user experience.

<h2>Conclusion</h2>

It is easy to add client-side form validation using Vuetify. In this article I showed you how to get started with adding validation. I also showed you how you can add as many validation rules as necessary for any input field.