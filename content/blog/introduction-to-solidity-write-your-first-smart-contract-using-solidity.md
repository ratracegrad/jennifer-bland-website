---
title: Introduction to Solidity - Write Your First Smart Contract using Solidity
description: Learn how to write your first smart contract using Solidity.
date: 2022-05-08
image: https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

Solidity is a programming language used for writing smart contracts on the Ethereum blockchain. I will show you how to get started with solidity and how to write your very first hello world smart contract. 

## What is Solidity

Solidity is an object-oriented high-level language for implementing smart contracts. Solidity is influenced by other programming languages like JavaScript C++ and Python. 

The syntax of the solidity programming language is similar to JavaScript. If you're familiar with JavaScript, then you should find it easier to learn and understand solidity. But there are some differences between JavaScript and solidity. 

<!--more-->

## JavaScript vs Solidity

The first difference is solidity is a statically typed language. So what does that mean? It means that you must declare the type of every variable you create in solidity.

Let me give you an example: in JavaScript, you can declare a variable by giving it a name like **myPhrase**. You can then assign the myPhrase variable a value like the string "hello world". That variable would then be a string data type. But in JavaScript, you can then assign a new value to the myPhrase variable and give it a numeric variable like the number 17. Now the myPhrase variable is an integer data type.

In solidity, you cannot do this. Once you declare a variable in solidity, you have to specify exactly what data type that variable will be. You cannot assign to that variable a type that you did not initially define for the variable. 

Another difference is that solidity is a compiled language. Once you've written your code in solidity, you will need to compile it before you can run it. The compiler converts your high-level solidity code into machine-level code that runs on the Ethereum virtual machine. 

JavaScript on the other hand is an interpreted language. You don't need a compiler to make it run. It just runs through your code, interprets it, and then executes it for you. 

Another difference is where you can actually run the languages. Solidity can only run on the blockchain. It cannot be run anywhere else. Whereas JavaScript can be run in multiple places. It can be run in a browser, or it can actually be run on a server using Node.js.

## Getting Started with Remix

If you're a JavaScript developer, you are familiar with using an IDE to write your JavaScript code. Some of the most common IDEs to use for JavaScript development are Visual Studio Code, VIM, SublimeText, WebStorm, and even notepad++.

The tools you can use to write solidity code include products like Remix, HardHat, and Truffle. The one I will be showing you how to use is a product called Remix. 

Remix is an online IDE. It includes all the tools that you will need to write smart contracts for the Ethereum blockchain, including:

- an editor
- a compiler
- ability to deploy and run your smart contracts. 

To get started with remix, you go to the URL [remix.ethereum.org](remix.ethereum.org). This is the home page that you will see when you go to that URL:

![Screen Shot 2022-05-04 at 9.28.14 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651714110334/5k8AA2q8L.png align="left")

Before we get started writing our very first smart contract. Let me take a minute and show you all the options that you have on this page.

### File Explorer

On the left-hand side of the screen, you have your navigation for this page. The first item that you can click on in the menu is File Explorer.

![Screen Shot 2022-05-04 at 9.30.30 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651714265406/20O4CVwZ7.png align="left")

The File Explorer contains a folder called **contracts**. This folder will contain a file for every smart contract that you write. By default, Remix will provide three sample contracts for you as you can see in the image below:

![Screen Shot 2022-05-04 at 9.34.19 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651714505423/F_AfBx4ed.png align="left")

### Solidity Compiler

Below the File Explorer, you have the solidity compiler. This is where you compile your solidity code into machine code that can be run on the Ethereum virtual machine. 

![Screen Shot 2022-05-04 at 9.36.42 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651714616330/5wtCWMX2D.png align="left")

### Solidity Deploy and Run

Below the solidity compiler, you have the deploy and run entry in the navigation. After your solidity code has been compiled, you would go here to deploy it to the Ethereum blockchain.

![Screen Shot 2022-05-04 at 9.37.23 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651714875289/2OC0KG3Er.png align="left")

### Plugins

At the bottom of the navigation, you have, have plugins. You can add plugins to your IDE to provide specific functionality.  By default, remix installs two plugins for you: HardHat and Solidity. 

![Screen Shot 2022-05-04 at 9.44.40 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651715093610/KbLqlGWY-.png align="left")

### Settings

And the very last thing you have in the navigation is the cog icon. Clicking on this icon shows settings. One item you can set under settings is the theme that you're using. Remix provides several themes and you can select the one that you like.

![Screen Shot 2022-05-04 at 9.47.28 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651715267842/mG1PFSJcH.png align="left")


## Writing Your First Smart Contract

To get started we will need to create a file in which we will write our smart contract code. Click on the File Explorer in the navigation menu. Then click on the contracts folder.  Click on the file icon to create a new file.

![Screen Shot 2022-05-04 at 9.56.31 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651715870331/XWC9OkZTO.png align="left")

The rule of thumb in naming files is the filename is the same as the name of your contract. We will name our first smart contract HelloWorld. Name the file HelloWorld.sol.


![Screen Shot 2022-05-04 at 9.58.23 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651716011811/eFFwEYKOi.png align="left")

Smart contracts will always have an extension of *.sol* to signify that this is a solidity language product that it's running. 

## Structure of a Smart Contract

### SPDX-License-Identifier

On the first line of a smart contract, you will have an entry for your SPDX License Identifier. Trust in smart contracts can be better established if their source code is available. Since making source code available always touches on legal problems with regard to copyright, the Solidity compiler encourages the use of machine-readable SPDX license identifiers. Every source file should start with a comment indicating its license. Add the following code 

```
// SPDX-License-Identifier: MIT
```

### Pragmas

The pragma keyword is used to enable certain compiler features or checks.  As the solidity programming language evolves, new versions are released. You need to specify which version of the compiler you want to use to compile your code. On the second line enter the following:

```
pragma solidity ^0.8.12;
```

### Name of contract

The rule of thumb is you leave a blank line after the pragma entry. After the blank line, you enter the name of your contract. Your contract name should match the filename you used when you created the file. The contents of your smart contract are enclosed in squirrelly brackets. Add this line:

```
contract HelloWorld {

}
``` 

### State Variables

Earlier I talked about solidity being a statically typed language. If you define a state variable you have to declare what type it will be. We are going to declare a variable called *myPhrase* that will be a string.

Variables can be public or private. Public variables are accessible from outside of the smart contract whereas private variables are not. For this smart contract, we want to have the *myPhrase* variable accessible outside of the smart contract. We also want to assign an initial value for this variable. I will assign it the value *Hello World*.

Here is the code you will need to add:

```
 string public myPhrase  = 'Hello World';
``` 

## Compiling and Running our Smart Contract

Click on Compiler in the navigation. In the Compiler tab, there is a button to compile your solidity smart contract. Click that button.

![Screen Shot 2022-05-04 at 10.30.39 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651717884485/EG69PlYcY.png align="left")

If your smart contract compile successfully, you will see a green checkmark next to the compiler icon in the navigation.

![Screen Shot 2022-05-04 at 10.32.38 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651717971789/1NN5Oq7Iq.png align="left")

Click on the Deploy and Run icon in the navigation. In the Deploy and Run tab, you will have a dropdown menu listing all the available smart contracts. It should show your HelloWorld contract. If not click the dropdown and select it.

Below the dropdown menu is a button that says *Deploy*. Click that button.

![Screen Shot 2022-05-04 at 10.34.03 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651718143795/v1U82khYW.png align="left")

At the bottom of the Deploy and Run tab, you will have a list of all deployed contracts. You will see your smart contract listed.

![Screen Shot 2022-05-04 at 10.37.12 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651718275284/zcJEWSovW.png align="left")

If you expand this entry, it will show all items - state variables or functions - that are defined as *public* in your smart contract. We have only one item that is public and that is the variable *myPhrase*. If you click on the button it will show the value assigned to the variable below it.

![Screen Shot 2022-05-04 at 10.40.38 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1651718534723/-4_ZybkJ9.png align="left")

## Creating Functions

Now that we've written our very first smart contract, the next thing I want to show you is how to create a function in solidity. We are going to create two functions. The first function will return the value assigned to the *myPhrase* variable. The second function will allow you to change the value assigned to the *myPhrase* variable. These functions are generally called getter and setter functions.

To create a function we will give it a name and define it as public or private. Since we want to be able to access this function outside of our smart contract we will make it public. The first function we will create will be called *getPhrase*.

Now you might be asking why do we need a function to return the value of the variable *myPhrase* if that variable is public? Solidity will automatically create a getter function for any variable that is defined as public. So why duplicate this. Well for two reasons: 1) we are going to make our variable private and 2) I want to show you how to write both getter and setter functions.

Remove the private declaration on your state variable. It should look like this now:


```
string myPhrase  = 'Hello World';
``` 

When you declare a function you give it a name, declare its visibility (public or private) and if the function returns a value then you have to define the type of data to be returned. Sounds like a mouthful but this is what our getter function looks like:


```
function getPhrase() public view returns (string memory) {
    return myPhrase;
}
``` 

The last function we will write will set the value of the *myPhrase* variable. This function will need a parameter which will contain the new value we will assign to *myPhrase*. We will call this function *setPhrase*. It will be a public function.  The parameter that will be passed in will be a string variable. We will also declare this parameter to be memory so that its value is not written out to the blockchain. As a rule of thumb, a memory variable is declared with a *_*. The variable will be called *_newPhrase*.

Here is what our setter function looks like:

```
function setPhrase(string memory _newPhrase) public  {
    myPhrase = _newPhrase;
}
``` 
 
Now before we compile and run our finished smart contact, here is the entire contents of our smart contract:


```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract HelloWorld {

    string myPhrase  = 'Hello World';

    function getPhrase() public view returns (string memory) {
        return myPhrase;
    }

    function setPhrase(string memory _newPhrase) public  {
        myPhrase = _newPhrase;
    }
}
``` 

Follow the steps we did earlier and compile your smart contract. After it compiles successfully, deploy it. You can click on the *getPhrase* function to get the initial value of the *myPhrase* variable.

To change the value, enter a new string next to the *setPhrase* function and then click the button to set the new value.

You can validate that they *myPhrase* variable was updated by clicking on the *getPhrase* function.

Congratulations you have written your very first Hello World smart contract in solidity!

