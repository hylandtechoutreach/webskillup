# Variables, Data Types, and `prompt`
Read through this guide to familiarize yourself with the concept of variables, and learn how to use `prompt` to retrieve data.

## Variables
In computer science, a **variable** is a named storage location. Each variable has**value**, which can be a number, a block of text, or some other piece of data.

![](../Assets/VariableVisual.jpg)

### Creating a Variable
The following statement uses the `let` keyword to create (or in other words, _declare_) a new variable named `team`:

```js
let team;
```

>Note: `var` may be used in place of `let`, but it is the "older" way of writing JavaScript

To actually give a value to the variable, use the equals sign (`=`):

```js
let team;

team = "Seattle SuperSonics";
```

>Note: A single equals sign is for _assignment_ in JavaScript, not comparison

These are generally combined, like so:

```js
let team = "Seattle SuperSonics";
```

### Setting a Variable
If a variable has already been declared, it can be set with the equals sign:

```js
let team = "Seattle SuperSonics";

team = "Oklahoma City Thunder";
```

The **value** of the variable changes, but the **name** stays the same.

## Basic Data Types
There are a ton of different types of data available on the web. Two of the most basic types of data are **string**s and **numbers**.

### Strings
In JavaScript, [strings](https://www.w3schools.com/js/js_strings.asp) are sequences of characters; essentially, blocks of text. Strings are surrounded by quotation marks. For example, here, the data type of the `team` variable would be **string**:

```js
let team = "Cleveland Cavaliers";
```

Strings can be _concatenated_ (added together) with the `+` operator:

```js
let city = "Cleveland";
let team = "Cavaliers";

alert(city + " " + team);
```

This example would display a message of **Cleveland Cavaliers**.

### Numbers
In JavaScript, [numbers](https://www.w3schools.com/js/js_numbers.asp) are any numeric value, including integers, decimal numbers, and negative numbers. They are written just like numbers:

```js
let wins = 51;
```

Basic arithmetic can be performed on numbers, like so:

```js
let wins = 51;
let losses = 31;

alert(wins + losses);
```

This example would print the total number of games played with `wins` and `losses` combined (**82**).

### Conversions
Sometimes, it will be necessary to add numbers to strings. Be careful! Strange results can occur, like these:

![](../Assets/JsNumbersWeird.jpg)

When working with a string that is meant to be a number, it is often a good idea to convert it to an actual number with `Number`, like so:

```js
let myAge = "20";
alert(myAge + 1); // This would display 201

let myAgeNum = Number(myAge);
alert(myAgeNum + 1); // This would display 21
```

## Asking Questions with `prompt`
Websites can be much more interesting when they involve user input of some kind. It is possible to ask questions using `prompt`. For example, to ask **What is your name?**, the code would look like this:

```js
prompt("What is your name?");
```

And the pop-up works a lot like an `alert`:

![](../Assets/Prompt.png)

### Storing the Result
The most important part of `prompt` is to do something with the answer. Often, answers are stored in variables, like so:

```js
let userName = prompt("What is your name?");
```

When this code runs, the value of the `userName` variable will be whatever the user enters in the input box.

### Using the Result
After the result has been stored, it can be used. Here is an example:

```js
let userName = prompt("What is your name?");
alert("Hi, " + userName);
```

This code would say "Hi" to the user with their name.

## Further Reading
[Click here for some additional articles diving deeper into these concepts.](FurtherReading.md)
