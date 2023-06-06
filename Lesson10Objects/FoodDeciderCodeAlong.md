# Code-Along: Food Picker
In this code-along, create a website to help visitors decide which food they should eat!

## Setting Up
[Click here to go to the Food Decider project.](https://replit.com/@HylandOutreach/FoodDecider#script.js)

Notice that there is some existing code in the **script.js** file - the `items` array contains objects, each with these properties:

- `restaurant`
- `name`
- `picture`
- `price`

This data will power the food picking process.

## Hooking Up the Button
The first step is to add basic functionality to the button. Open the **script.js** file, scroll down, and define a function named `getFood` at the bottom. The HTML `<button>` is already setup to call a function by this name. In the body of the function, display an `alert` that says `"Calculating..."`.

Run the project, click the button, and verify that the function works. The code should look something like this:

```js
function getFood() {
  alert("Calculating...");
}
```

>_Note: Feel free to remove the `alert` because it might get annoying_

## Getting a Random Item
The algorithm to decide which food item to display will be a simple random choice. Luckily, there is already a `getRandomInt` function defined for this exact purpose.

In the body of the `getFood` function, get a random integer that will randomly choose between all possible indices of the `items` array. Then, get the item object at that index, and store it in a variable.

The added code should look something like this:

```js
let randomItemIndex = getRandomInt(items.length);
let item = items[randomItemIndex];
```

The button will not do anything yet... but now the function has all the necessary information about the item.

## Displaying the Random Item Name
Now it is time to display the item information.

1. Grab the `<p id="food-name"></p>` element from the HTML, and store it in a variable
  - Use `document.querySelector`
1. Create a formatted piece of text so that the item name and restaurant are displayed nicely together
  - e.g., **McDouble (McDonald's)**
1. Set the `textContent` of the element to the nicely formatted text

Run the project, click the button, and verify that a random food item from the array appears on the page! The added code for this part should end up looking something like this:

```js
let foodNameElement = document.querySelector("#food-name");
let foodNameText = `${item.name} (${item.restaurant})`;
foodNameElement.textContent = foodNameText;
```

## Displaying the Random Item Picture
The name is good, but it would be much more appetizing with a picture. Luckily, there are already some pictures built into the Repl, in the **pictures** folder.

1. Grab the `<img id="food-name">` element from the HTML, and store it in a variable
  - Use `document.querySelector`
1. Create a formatted piece of text properly pointing to the image file location
  - e.g., **pictures/mcdouble.jpg**
1. Set the `src` of the element to the image file location text

Run the project, click the button, and verify that a random food item picture is properly displayed. The additional code should look something like this:

```js
let foodPictureElement = document.querySelector("#food-pic");
let foodPictureUrl = `pictures/${item.picture}`;
foodPictureElement.src = foodPictureUrl;
```

## Creating More Items
The page should now be fully functional, but it could use some more items. There are a number of ways to add additional objects to the `items` array; practice some of the different ones by adding items from Panera.

### Creating a Mac n Cheese Object
Start by adding a Mac n Cheese item to the original `items` initialization. It should have these properties:

- `name`: Mac n Cheese
- `restaurant`: Panera
- `price`: 7
- `picture`: **macncheese.jfif**

Simply add a comma to the end of the last object in the list, then add the new object directly. It should look just like the other objects in the `items` array. The bottom should end up looking something like this:

```js
/* ... */
    picture: "quesadilla.webp",
  },
  {
    name: "Mac n Cheese",
    restaurant: "Panera",
    price: 7,
    picture: "macncheese.jfif"
  }
];
```

Run the project, click the button a few times, and verify that it is possible to see the Mac n Cheese appear.

### Creating a Greek Salad Object
Next, add a Greek Salad in a slightly different way. The `price` for this item is $`10`, and the picture is `greeksalad.jpg`. At the bottom of the **script.js** file, use `let` to create an entirely new object with the proper properties. It should look something like this:

```js
let greekSalad = {
  restaurant: "Panera",
  price: 10,
  picture: "greeksalad.jpg"
};
```

Now, at this point, it would make sense to simply add a `name` property to the original object initialization. However, to practice using _dot notation_, set the `name` property separately, like so:

```js
greekSalad.name = "Greek Salad";
```

Finally, add the `greekSalad` object to the list using `push`:

```js
items.push(greekSalad);
```

Run the project, click the button a few times, and verify that the Greek Salad eventually appears!

### Creating a Soup Object
It is also possible to add a new item directly without creating a separate variable. Simply call `push` on the `items` array, and create the new object right between the parentheses!

Add "Soup" to the possible food items in this manner. It should have a `price` of `6` and a `picture` of `"panerabread.jpg"`.

Once it has been added, run the project, and verify that Soup is one of the food options. The additional code should look something like this:

```js
items.push({
  name: "Soup",
  restaurant: "Panera",
  price: 6,
  picture: "panerabread.jpg"
});
```

## Conclusion
At this point, it should be possible to click the button, and see a variety of different foods appear.

[Click here to view the self-paced work instructions.](FoodDeciderUpdates.md)
