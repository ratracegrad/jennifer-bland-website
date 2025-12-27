---
title: Grid to List Toggle Using Flexbox
description: Learn how to create a toggle to display items in a grid from a list. This will be using basic JavaScript skills with no external code or libraries. We will be using Flexbox.
date: 2023-01-05
image: https://images.unsplash.com/photo-1765211002539-20dd0b54a240?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
minRead: 7
author:
  name: Jennifer Bland
  avatar:
    src: /JenniferBlandHeadshot.jpeg
    alt: Jennifer Bland
---

In this article, I will show you how to create a toggle to display items in a grid from a list. This will be using basic JavaScript skills with no external code or libraries. We will be using Flexbox.

## What we will be creating

![grid to list in plain JavaScript](https://res.cloudinary.com/ratracegrad/image/upload/v1672606619/gridList_tyuymu.gif)

<!--more-->

## Create our starter files

Let's start by creating three files called `index.html` and `style.css` and `app.js`. In your `index.html` file add the following starter code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Flexbox Grid List Toggle</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

	<script src="app.js"></script>
</body>
</html>
```

In the `style.css` file add the following starter code:

```css
body{
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: azure;
}
```

For now, we will leave the `app.js` file blank. We will put in the code later.

## Adding our toggle buttons

The first thing we want to do is to create two buttons. These two buttons will have a title `Grid` and `List`. When clicked these buttons will change the layout of the cards on the screen.

The entire content of the page will be placed inside a div with a class of `container`. The two buttons will be placed inside a div with a class of `buttons`. Each button will have a class of `btn`. Each button will have a unique id assigned to it. Later on we will use this id to handle when the button is clicked.

Add the following code inside the `body` tag in your `index.html` file:

```html
	<div class="container">
		<div class="buttons">
			<button class="btn" id="gridBtn">Grid</button>
			<button class="btn" id="listBtn">List</button>
		</div>
	</div>
```

## Styling our Container and Buttons

Everything we display is wrapped inside a div with a class of `container`. We want this container to have a specified width that is centered on the screen.

Add this code to your `style.css` file:

```css
.container {
	width: 90vw;
	max-width: 800px;
	margin: 50px auto;
}
```

Next, we want our two buttons to be centered on the screen. The buttons are wrapped by a div with a class of `buttons`. This class will use Flexbox to center the buttons.

We want these two buttons to have a blue background with white text. To make them look like they are lifted off the page we will add a box shadow.

Add the following code to your `style.css` file:

```css
.btn {
	height: 55px;
	background: #2364d2;
	color: white;
	padding: 10px 20px;
	margin-right: 20px;
	border: none;
	border-radius: 5px;
	font-size: 22px;
	font-weight: 500;
	font-family: "Source Sans Pro", sans-serif;
	box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
}
```

This is what our buttons look like:

![buttons](https://res.cloudinary.com/ratracegrad/image/upload/v1672609734/Screenshot_2023-01-01_at_4.48.43_PM_ozo4hs.png)

## Adding the cards

I want to add 6 cards that will be displayed. Each card will have a title and a paragraph of Lorem Ipsum text.

I want all of the cards to be contained within a div. The styling on this div will determine if the cards are displayed in a grid or in a list. I will add both an id and a class to this div.

Each card is wrapped by a div with a class of `card`. It will have a title and a paragraph of text. Since each card will be the same, once I have created one card, I can copy and paste it to create a total of 6 cards.

Add this code to your `index.html` file:

```html
		<div id="card-wrapper" class="list">
			<div class="card">
				<h3>Title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non felis euismod lectus convallis interdum eget eu eros.</p>
			</div>
		</div>
```

## Styling our cards

We will not add much styling to the card. We will give each card a border and some padding so that the text is not next to the border. We will also add a margin below each card.

Add the following code to your `style.css` file:

```css
.card {
	border: 1px solid black;
	padding: 10px;
	background: white;
	margin-bottom: 20px;
}
```

This is what our card looks like:

![single card](https://res.cloudinary.com/ratracegrad/image/upload/v1672610307/Screenshot_2023-01-01_at_4.58.13_PM_r0ffnu.png)

In your `index.html` file copy the code for the single card and paste it so there are a total of 6 cards.

## Styling our Grid and List

The style for the list will be easy to create because we are using the default style for a div. We want each card to be on a line by itself. 

Add the following code to your `style.css` file:

```css
.list {
	display: block;
}
```

To create our grid we will use Flexbox. Add the following code to your `style.css` file:

```css
.grid {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
```

Now if you change the class in the `card-wrapper` div to be `grid`, you might expect our cards to be a grid. In fact, that does not happen. The reason is that each card is a div and by default, a div will take up all the space on a row. We need to be able to tell each card to take up a specified percentage of the screen.

We have 6 cards. In grid mode, I want to have 2 rows with 3 cards each. You might think you can set each card to have a width of 33%. That would work but each card would be right next to the other.

Instead, I want to set each card to have a width of 30%. With 3 cards that would take up 90% of the width of the container. The extra 10% can be padding between each card.

To do this add this one line to the `.card` class style in the `style.css` file:

`flex: 0 1 30%;`

This is what our grid looks like:

![grid](https://res.cloudinary.com/ratracegrad/image/upload/v1672611719/Screenshot_2023-01-01_at_5.21.41_PM_ejrzbg.png)

## Toggling between Grid and List when clicking a button

Now we will add our JavaScript code. At a high level what we want to do is create a variable that points to each button. We will add a `click` event listener to the buttons.

When either button is clicked it will call a function. This function will programmatically change the class assigned to the div with an id of `card-wrapper`. When the Grid button is clicked the class will be `grid`. Likewise when the List button is clicked the class will be `list`.

Add the following code to your `app.js` file:

```javascript
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
```

Now that we have our variable for each button we need to add an event listener to handle when the button is clicked. For now, I am going to call the two functions `clickGrid` and `clickList`.

Add the following code to your `app.js` file:

```javascript
gridBtn.addEventListener('click', clickButton);
listBtn.addEventListener('click', clickButton);
```

Next, we need to create our `clickButton` function. The function will remove the current class assigned to the `card-wrapper` div. Then it will add a class that corresponds to which button was clicked.

Since we are calling the same function when either button is clicked, how will we determine which button was actually clicked? The simple answer is that the function will be passed a parameter called `event`. We can use this to get the id of the button.

The id of the grid button is `gridBtn` and the id of the list button is `listBtn`. Those is correspond almost to the name of our class we will provide to the `card-wrapper` div. We need to get the id and remove the `Btn` part of the title.

Add the following code to your `app.js` file:

```css
function clickButton(event) {
	e.preventDefault();
	let newStyle = event.target.id;
	newStyle = newStyle.replace('Btn', '');
}
```

This gives us part of the functionality we need. The next step is to assign the class to the `card-wrapper` div.

For simplicity, I do not know what class is currently assigned to this div. For that reason, I am going to remove both classes. If the class is present it will be removed. For the other class that is not present it will do nothing. Then I will add a class that corresponds to which button was clicked using the `newStyle` variable we have already created.

Add the following code to your `clickButton` function in the  `app.js` file.

```javascript
	const element = document.getElementById("card-wrapper");
  element.classList.remove("grid");
	element.classList.remove("list");
	element.classList.add(newStyle);
```

## Final Result

Now when you view the code in your browser, you will see the layout change as your click each of the buttons.

Here is what it looks like:

![final layout](https://res.cloudinary.com/ratracegrad/image/upload/v1672606619/gridList_tyuymu.gif)

## Let's Connect

Thanks for reading my article today. You can get the [source code here](https://github.com/ratracegrad/javascript-flexbox-grid-list-toggle).

If you like my content, please consider [buying me a coffee](https://www.buymeacoffee.com/JenniferBland) ☕.