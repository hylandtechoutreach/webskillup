# Guided Activity: Calculator
In this activity, build a simple website that can perform basic arithmetic operations.

### IMPORTANT NOTE
This guide involves some very contrived examples. In reality, it would be easier to create the same functionality without all the extra functional work. However, the purpose of this activity is to practice using functions, so it may be helpful to suspend your disbelief a bit, and pretend there is no simpler way to accomplish this calculator application 😇

## Setting Up
[**Click here to view the starter project.**](https://replit.com/@HylandOutreach/CalculatorStart) Fork the project to begin.

### The Starter Code: HTML
The **index.html** file is fairly simple; there is a header, and a "Sum" button that calls a function named `sum` when it is clicked.

### The Starter Code: JavaScript
The **script.js** file has two functions:

- The `plus` function takes in two numeric parameters, and returns the two numbers added together.
- The `sum` function prompts the user for two values, converts them to numbers, calls the `plus` function on them, and displays the result.

### The Goal: More
The goal will be to add more functionality to the calculator!

## Adding a Difference Button
First, add the ability to subtract one number from another.

### HTML Button
Start by adding another `<button>` element in the **index.html** file. It should call a function named `difference` when it is clicked, and "Difference" should be the text on the button.

### JavaScript Function
Now the `difference` function is called, but it has yet to be defined! The next step is to define the `difference` function.

1. Open the **script.js** file for editing, and make a new line at the bottom
1. There, define a function named `difference`
    - It should take no parameters
1. In the body of the `difference` function, ask the user for two numbers
    - Use `prompt` and `Number`
    - This will be identical to the `sum` function
1. Under that, calculate the difference of the two numbers using the `plus` function
    - Add the A number to the opposite of the B number
1. Display the answer with an `alert`

Run the project, click the "Difference" button, and verify that it works properly!

## Refactoring the Prompts
Now, it would be possible to continue adding functionality in this fashion, but... there's a bit of repeated code that could become quite tedious. This code can be [refactored](https://en.wikipedia.org/wiki/Code_refactoring) so that it works the same, but is easier to maintain and scale. The logic can be encapsulated into a helper function!

### The Repeated Code
The code in question is the couple of `prompt` statements that retrieve the numbers from the user:

```js
let aString = prompt("Number A:");
let aNum = Number(aString);

let bString = prompt("Number B:");
let bNum = Number(bString);
```

Instead of this, there could be a new function that automatically converts a prompt response into a number!

### Defining the New Function
At the top of the **script.js** file, just under the `plus` function definition, make a new line. There, define a new function named `numPrompt`.

- It should take one parameter: a message for the `prompt` call
- In the body, it should call `prompt` with the parameter value
  - The response should be stored in a variable
- It should then use `Number` on the result of the `prompt`, and `return` that value

### Calling the `numPrompt` Function
Now, the `numPrompt` function can replace anywhere that `prompt` and `Number` are used in sequence. Replace each of these instances. At this point, there should be a total of **four** calls to the `numPrompt` function (two in the `sum` function and two in the `difference` function).

### Testing
The interesting thing about refactoring is that the functionality of the code should remain exactly the same. This can be a little less rewarding than creating a spiffy new feature, but it can be a huge help down the line.

Test out the buttons again, and verify that they work exactly the same as they did before the refactoring!

## Adding a Product Button
With the code updated, it is time to add a button for multiplication. This will require two new functions.

### The `times` Function
First, right under the `plus` function in the **script.js** file, make a new line. There, define a function named `times`.

- It should take two parameters: `a` and `b`
- It should `return` the product of those two parameter values

### The `product` Function
Next, define the function that will _use_ the `times` function. At the bottom of the **script.js** file, define a new function named `product`.

- It should take no parameters
- In the body, it should get an `aNum` and a `bNum` using the `numPrompt` function
- Under that, it should call the `times` function to get the product of `aNum` and `bNum`
- Finally, it should display the result with an `alert`

### The Button
All that is left is to actually create a button to call the function. In the **index.html** file, create another new `<button>` element that says "Product" and calls the `product` function when clicked.

## Adding a Quotient Button
There is one more basic arithmetic operation that the calculator should handle: division.

- Create the `<button>` element in the **index.html** file
- Define a function named `quotient` in the **script.js** file
- In the `quotient` function, use the `times` function to calculate the quotient of two numbers

That should be it for the basic calculations!

## Conclusion
This activity may have seemed a bit trivial, but hopefully it showed some basic applications of functions beyond handling button clicks.

### Final HTML
By the end, the code in the **index.html** file should look something like this:

```html
<html>
  <head>
    <script src="script.js"></script>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1>Calculator</h1>
      <button onclick="sum()">Sum</button>
      <button onclick="difference()">Difference</button>
      <button onclick="product()">Product</button>
      <button onclick="quotient()">Quotient</button>
    </div>
  </body>
</html>
```

### Final JavaScript
By the end, the code in the **script.js** file should look something like this:

```js
function plus(a, b) {
  return a + b;
}

function times(a, b) {
  return a * b;
}

function numPrompt(message) {
  let answer = prompt(message);
  return Number(answer);
}

function sum() {
  let aNum = numPrompt("Number A:");
  let bNum = numPrompt("Number B:");

  let result = plus(aNum, bNum);
  alert("The answer is: " + result);
}

function difference() {
  let aNum = numPrompt("Number A:");
  let bNum = numPrompt("Number B:");

  let result = plus(aNum, -1 * bNum);
  alert("The answer is: " + result);
}

function product() {
  let aNum = numPrompt("Number A:");
  let bNum = numPrompt("Number B:");

  let result = times(aNum, bNum);
  alert("The answer is: " + result);
}

function quotient() {
  let aNum = numPrompt("Number A:");
  let bNum = numPrompt("Number B:");

  let result = times(aNum, 1 / bNum);
  alert("The answer is: " + result);
}
```

### Next Steps
To continue building out the calculator, try to add some additional calculations:

- Perimeter of a Rectangle
- Area of a Triangle
- [Quadratic Formula](https://en.wikipedia.org/wiki/Quadratic_formula)
