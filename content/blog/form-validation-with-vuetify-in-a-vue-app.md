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

Your forms can provide a great user experience. Here is how. Almost every website today has a form that they ask users to fill out. A basic Wordpress blog will have a contact us form. An e-commerce website will have a cart checkout form. Even our local traffic courts have a form to fill out to request rescheduling a court date. The biggest complaint people have with forms is that they do not provide enough feedback when you are completing the form. Users fill out a form and submit it. They get an error message and have to start all over in filling out the form again. You can minimize customer frustration by having effective form validations. I will show you how to create client-side form validation using Vuetify.

## Creating a Vue Application

The first step is to create a Vue application. I am going to use the Vue CLI to create a new application. If you do not have the Vue CLI installed you can install it with this command:

npm install -g @vue/cli

To create a new vue application use this command:

vue create vuetify-form-validation

The CLI will ask you if you want to select the default presets or manually select them. We are going to use the defaults so you can just hit enter for all the prompts. ![Vue default presets](https://res.cloudinary.com/ratracegrad/image/upload/v1573846169/1_MvZt50Na2fs-TSGtK9Tyvw_qytwio.png)

*Select defaults for our new Vue application*   Once the CLI has finished creating our new application you will need to CD into the directory with this command:

cd vuetify-form-validation

## Adding Vuetify to our application

Next we want to add Vuetify to our application. Make sure you have changed into the directory where our application was created. Then use this command to add vuetify to your application:

vue add vuetify

You will be asked which preset you want to use. Select the default. ![Select preset](https://res.cloudinary.com/ratracegrad/image/upload/v1573846313/1_Pze-PYgfnnw976wkyAnZwQ_pzu6g5.png)

*Select default preset for Vuetify* Now let's verify that we have everything installed correctly. In your terminal enter this command to start your application:

npm run serve

Then open your browser and navigate to **localhost:8080**. You should see the following in your browser. ![Vue app with Vuetify](https://res.cloudinary.com/ratracegrad/image/upload/v1573846420/1_g0KjTPJWiYIRNPNafhHINw_sn2kpj.png)

*Our Vue application with Vuetify*  

## What we will be creating

The goal of this article is to show you a wide range of validations that you can utilize on forms with Vuetify. To do this we will be building out the following forms:

-   Login Form
-   Registration Form

Each of these forms will be created as separate components. To be able to easily toggle between all the forms we will be using the tabs component in Vuetify. We will have add a tab for every form we create allowing you to easily transition from one form to another.

## Login Form

The first form we will be creating is a login form. This form will have two fields:

-   Email
-   Password

For this form we will learn how to add validation to the form. The first validation we will implement is just to make sure the user has entered something in both of the fields. In the components folder create a new file called **LoginForm.vue**.

## Creating our v-card

Open up the file you just created. We are going to create a template section that will be used to display our form. In the template section we are going to use Vuetify's v-card component to wrap our login form. The v-card template in Vuetify has several sections. Including:

-   v-card-title - has the title of our form
-   v-card-text - our form will be here
-   v-card-actions - the button to submit the form

So let's implement each of these sections. In the template section of the LoginForm file, add the following items:

```
<template>
    <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
    </v-card>
</template>
```

Next let's start fill in our form. We can start by adding a title. So update the title to be:

```
<v-card-title>Login Form</v-card-title>
```

Next let's add a button to submit our form. In the v-card-actions section add a button with the text of Login. To make the button look colorful I am going to set the button's color to **primary**. This is what it should look like:

```
<v-card-actions>
    <v-btn color="primary">Login</v-btn>
</v-card-actions>
```

Next we are going to create our form. Our form will have two fields for email and password. Here is the bare minimum entry for our form:

```
<v-card-text>
    <v-form>
        <v-text-field label="Email"></v-text-field>
        <v-text-field label="Password"></v-text-field>
    </v-form>
</v-card-text>
```

We need to add some more functionality to our form. So let's start doing that. Each of our fields will need to have a field that stores the value that the user enters. To store that value we need to add a v-model prop to each field. Our updated form now looks like this:

```
<v-form>
  <v-text-field 
          label="Email" 
          v-model="email"
  ></v-text-field>
  <v-text-field 
          label="password" 
          v-model="password"
  ></v-text-field>
</v-form>
```

Right now the way our form is setup, if a person types in their password then anybody looking at the computer screen will be able to see what they are typing. This is not what we want. Instead we want what the user types to be hidden from view. We can can change the type of the text field to be password. This will place bullets in the field when the user types their password so nobody can see the actual text of their password. Let's update our password field to have a type of password.

```
<v-text-field
        label="password"
        v-model="password"
        type="password"
></v-text-field>
```

## Adding validations to our fields

To add validation to our fields, we have to do two things:

-   make field a required field
-   create the validation rules for the field

To make the field required we just need to add the prop **required** to both fields. Our fields now look like this:

```
<v-text-field
        label="Email"
        v-model="email"
        required
></v-text-field>
<v-text-field
        label="password"
        v-model="password"
        type="password"
        required
></v-text-field>
```

Next we need to add our rules that we will use to validate against whatever input the user types into the fields. For our first validation we just want to make sure the user has entered something into the fields. For field validations we add a prop called **rules**. This prop will have an array of validation methods that are applied to the user's input. The method will have a parameter that is the value that the user inputs into the field. Our validation method will check if the user has entered something. If they have entered something then our validation method passes. If not then we provide an error message that will be displayed to the user. Here is what our fields look like now with our validation rule added.

```
<v-text-field
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
></v-text-field>
```

## Adding our form to our application

When we installed Vuetify it modified the App.vue file and added a navigation bar and Vuetify logo. We are going to remove all the information that they provided and instead show our Login Form. Open up the App.vue file. Delete everything inside the v-app-bar. Add a title to the the app bar that just says _Vuetify Form Validation_. It should look like this:

```
<v-app-bar
  app
  color="primary"
  dark
>
  <v-toolbar-title>Vuetify Form Validation</v-toolbar-title>
</v-app-bar>
```

Next delete everything inside the `v-content area`. We are going to add vuetify's tab component. We will eventually have a tab for each form we create. Delete everything inside the `v-content`. We will be putting our tabs inside here. Tabs in Vuetify consist of two things. First is the v-tabs which list all items in the tabs inside a v-tab. Then below that we will have the v-tabs-item. The content to be displayed for each tab is nested inside a v-tab-item. This is what your content should look like:

```
<v-content>
  <v-tabs v-model="tab" centered>
    <v-tab>Login</v-tab>
  </v-tabs>
  <v-tabs-item v-model="tab">
    <v-tab-item>
      <LoginForm></LoginForm>
    </v-tab-item>
  </v-tabs-item>
</v-content>
```

If you noticed in that code I am displaying the Login Form. We need to import this component and include it in the components object. Add this as the first line in your script section:

import LoginForm from './components/LoginForm';

Next we need to add the component that we just imported. Add a components section like this:

```
export default {
  name: 'App',
  components: {
    LoginForm,
  }
};
```

The last thing we need to do is is add a **tab** variable in our data object. For both our v-tabs and v-tabs-items we have a v-model that points to a value called tab. Add a data section that sets the value initially to null. Your entire script section should look like this:

```
<script>
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
</script>
```

## Testing our form validation

We want to make sure our form validation is working. If you don't have your server running then you can start it with the command:

npm run serve

Open your browser and navigate to the URL:

localhost:8080

You should see the login form. Put your cursor in the email field and then tab over to the password field. You should get an error message stating that this field is required. If you tab out of the password field then you will get an error message for that field too. ![](https://res.cloudinary.com/ratracegrad/image/upload/v1573847345/1_IEK372_tuy_q4Ng6eJtjgA_pk8lb6.png)  

## Adding our data for capturing the field values

For each of our fields we have added a v-model. This will contain the value that the user entered into the field. For this demo I am not going to be doing anything with the stored data but if you implement this form in a production app then you will need to send these values to the backend. So let's add a script section. In there, add the data object that will contain the values for our email and password fields. Here is what our script section looks like:

```
<script>
export default {
  name: "LoginForm",
  data: () => ({
    email: null,
    password: null
  })
};
</script>
```

## Disable Login Button

Another thing we can do is to disable the login button until the user has submitted something for both fields. To do this we will need to add field whose value will resolve to _true_ or _false_ based on if all our form validations pass or not. Then we will disable the Login button if this field is false. The field we are going to be using is **isValid**. Add a v-model to our form and set its value to this field.

```
<v-form v-model="isValid">
```

Next add this field to our data object and set its initial value to true.

```
data: () => ({
  email: null,
  password: null,
  isValid: true
})
```

Next add a disabled prop to our Login button and set its value to be not isValid.

```
<v-btn 
    color="primary" 
    :disabled="!isValid"
>Login</v-btn>
```

Now if you go back to your browser and refresh the page, you will see that the Login button is now disabled. ![Login Form](https://res.cloudinary.com/ratracegrad/image/upload/v1573848344/1_LP9t00jpZXGR7rr8hiCN8w_cnd1ap.png) If you type something into both the email and password field then the Login button will be enabled. ![Login form](https://res.cloudinary.com/ratracegrad/image/upload/v1573848305/1_pEBRk5COo4OXZOIES7UV8w_vyjsxc.png)

## Registration Form

Now we are ready to create our next form which is our registration form. In your components create a new file called **RegistrationForm.vue**. To make things easier copy the entire content of your LoginForm.vue file and paste it into this file. Then change the form title to say Registration Form instead of Login Form.

```
<v-card-title>Registration Form</v-card-title>
```

Change the text of the button from Login to Register.

```
<v-btn
        color="primary"
        :disabled="!isValid"
>Register</v-btn>
```

Last thing you need to change is then name of the component. Change it from LoginForm to RegistrationForm.

name: "RegistrationForm"

## Creating Multiple Validation Rules

To validate our fields we added an array with a single validation method. We are going to add multiple validation rules for both fields in our registration form. You can have as many entries as you want in your validation array. For email we are going to require:

-   User inputs something
-   It is a properly formatted email address

For password we are going to require:

-   User inputs something
-   Password has to be at least 5 characters
-   Must have 1 uppercase letter
-   Must have 1 number
-   Must have 1 special character from !@#$%

## Creating Email Rules

To make things easier to read, I want to move our rules from the v-text-field and put it in the data object. For the email field change the rules to point to our emailRules:

:rules="emailRules"

Next in our data section add emailRules and set its value to our initial array.

```
emailRules: [v => !!v || 'Email is required']
```

Let's add a validation method that checks if the email the user inputs is a properly formatted email message. This can be doing by testing the input against a RegExp. This is what your emailRules should look like:

```
emailRules: [
    v => !!v || 'Email is required',
    v => /.+@.+/.test(v) || 'E-mail must be valid'
]
```

## Creating our Password Rules

Let's start by moving our password rules array to the data object like we did for email. Your password field rules should point to passwordRules.

```
:rules="passwordRules"
```

In our data object add passwordRules.

```
passwordRules: [v => !!v || 'Password is required']
```

Let start by adding the requirement that our password must be at least 5 characters in length. Update your passwordRules to be:

```
passwordRules: [
    v => !!v || 'Password is required',
    v => (v && v.length >= 5) || 'Password must have 5+ characters'
]
```

For our remaining validations we will be using a RegExp to test the input to make sure the user has entered at least 1 uppercase character, 1 number and 1 special character. Here is my updated passwordRules:

```
passwordRules: [
    v => !!v || 'Password is required',
    v => (v && v.length >= 5) || 'Password must have 5+ characters',
    v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
    v => /(?=.*\d)/.test(v) || 'Must have one number',
    v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
]
```

## Adding Tab for Registration Form

To be able to see our new Registration Form we need to add a tab for it. Open up the App.vue file. We need to add a new tab so update the v-tabs section to include an entry for Registration. It should look like this:

```
<v-tabs v-model="tab" centered>
  <v-tab>Login</v-tab>
  <v-tab>Registration</v-tab>
</v-tabs>
```

Add a new v-tab-item that will display our RegistrationForm component. It should look like this:

```
<v-tabs-items v-model="tab">
  <v-tab-item>
    <LoginForm></LoginForm>
  </v-tab-item>
  <v-tab-item>
    <RegistrationForm></RegistrationForm>
  </v-tab-item>
</v-tabs-items>
```

Next we need to import our RegistrationForm.

import RegistrationForm from "./components/RegistrationForm";

Last we need to add our Registration form to our components.

```
components: {
  LoginForm,
  RegistrationForm
},
```

## Testing our Registration Form

Start your server with the command:

npm run serve

Open your browser to

localhost:8000

You should see a tab for both form. Click on Registration tab to see your new form. If you just put your cursor in both fields and tab out of the field without typing in anything you will see the same error message we saw with our Login form. ![Registration Form error messages](https://res.cloudinary.com/ratracegrad/image/upload/v1573847911/1_aPWLD-tQ_iTZ0_K4ajjtDQ_pumbe3.png)

*Error messages for Registration form*   The error message does not show all of the errors. For example for our password field it does not tell us that:

-   Must be at least 5+ characters
-   We need at least 1 uppercase letter
-   We need at least 1 number
-   We need at last 1 special character

This is not a good user experience because if the user types in something then they will get only the first error message in the array that fails validation. Luckily Vuetify's `v-text-field` does provide an option to display as many error messages as you want. You can do this by adding the prop `error-count` and setting its value to the number of error messages you want displayed. Go back to your **RegistrationForm.vue**. For the email field we want to show 2 error messages. For the password field we want to show 5 error messages. Update these two fields so they look like this:

```
<v-text-field
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
></v-text-field>
```

Now if you tab through both fields without typing in anything you will see error message like this. ![Registration form error messages](https://res.cloudinary.com/ratracegrad/image/upload/v1573848092/1_vMo7oFLO8W2XYZsAIbnx1Q_qawwk9.png)

*Registration Form showing all error messages*   Now if a user fails validation for their input in either field they will see all the reasons why it failed. This is a much better user experience.

## Conclusion

It is easy to add client-side form validation using Vuetify. In this article I showed you how to get started with adding validation. I also showed you how you can add as many validation rules as necessary for any input field.
