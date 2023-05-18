# Code-Along: Shopping List
In this activity, create a functional shopping list that allows for the adding and removing of grocery items.

[**Click here to view the Repl project.**](https://replit.com/@HylandOutreach/ShoppingList) Fork the project to begin.

## Background
So far, the project does not have much significant code. The **index.html** file contains these important elements:

- an `<input>` with an `id` of `item`
- a `<button>` with an `onclick` of `addItem()`
- a `<ul>` with nothing in it

The **script.js** file has an empty function definition for `addItem`, but that's all there is. All changes for this activity will take place there, in the body of the `addItem` function.

### Goal
The goal is to build the logic to add a new `<li>` each time the user enters an item into the `<input>` and clicks the "Add item" button. The item should contain the text entered into the text box. The text box should clear after the item is added to the list.

## Part One: Getting the Input
First, it will be necessary to grab the text data the user entered into the text box.

1. Create a new variable named `itemInput`
1. Use `document.querySelector` to grab the `<input id="item">`, and store it in the variable
1. Under that, create another new variable named `itemText`
1. Use `.value` to grab the actual text data from the `itemInput` element
1. Under that, set the `.value` of `itemInput` to `""`
1. For testing purposes, use an `alert` to display the value of the `itemText` variable

Run the project, enter an item in the text box, click the button, and verify that the text appears! The code should look something like this:

```js
function addItem() {
  let itemInput = document.querySelector("#item");
  let itemText = itemInput.value;
  itemInput.value = "";
}
```

>_Note: Be sure to remove the `alert` after testing_

## Part Two: Creating the List Item
Now the text is available as a variable, so the `<li>` can be created!

1. Make a new line in the body of the function
1. There, create a new variable named `newListItem`
1. Use `document.createElement` to create a new `<li>`, and store it in `newListItem`
1. Under that, use `.textContent` to set the text of the `<li>` to `itemText`

When this code runs, the `newListItem` variable should contain a full `<li>` element. The code should look something like this:

```js
let newListItem = document.createElement("li");
newListItem.textContent = itemText;
```

>_Note: The item should not appear just yet..._

## Part Three: Adding the Item to the List
The next step is to make the item actually appear on the website. It should be added as a child of the `<ul></ul>` that already exists on the page.

1. Make a new line in the body of the function
1. There, create a new variable named `itemList`
1. Use `document.querySelector` to grab the `<ul></ul>`, and store it in the variable
1. Under that, use `.appendChild` to add `newListItem` as a child of `itemList`

Run the project, enter an item, click the button, and verify that the item appears in the list! The added code should look something like this:

```js
let itemList = document.querySelector("ul");
itemList.appendChild(newListItem);
```

Now, the list has all its basic functionality! It may be somewhat difficult to manage, though...

## Advanced: Delete Button
>_Note: This section involves advanced techniques, including [`addEventListener`](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) and [arrow functions](https://www.w3schools.com/js/js_arrow_function.asp)_

One of the main features missing is the ability to _remove_ items from the list. Add this by appending a `<button>` to each list item that will remove the item from the list when clicked.

### Creating the Button
First, create the new `<button>` element and add it to the list item.

1. Create a new variable named `deleteButton`, set to a new HTML `<button>` element
1. Set the text of the button to say "delete"
1. Append the `deleteButton` element to the `newListItem` element

Run the project, and verify that a new button appears with each item! The code should look something like this:

```js
let deleteButton = document.createElement("button");
deleteButton.textContent = "delete";
newListItem.appendChild(deleteButton);
```

### Making the Button Work
Now the button appears, but it does not work yet. It's time to make it functional... _arrow_ functional!

1. Call the `deleteButton.addEventListener` function
1. Pass in `"click"` as the first argument
1. For the second argument, pass in a new arrow function: `() => {}`
1. In the body of the arrow function, use `itemList.removeChild` to get rid of `newListItem`

Run the project, add an item, and verify that it can be removed! The additional code should look something like this:

```js
deleteButton.addEventListener("click", () => {
  itemList.removeChild(newListItem);
});
```

## Conclusion
This simple example showed how it is possible to retrieve input data from `<input>` elements, and update the HTML on a webpage dynamically. It may not look too exciting, but these concepts empower the web to be much more interactive and user-friendly.

### Final Code
By the end of the activity, the code in the **script.js** file should look something like this:

```js
function addItem() {
  let itemInput = document.querySelector("#item");
  let itemText = itemInput.value;
  itemInput.value = "";

  let newListItem = document.createElement("li");
  newListItem.textContent = itemText;

  let itemList = document.querySelector("ul");
  itemList.appendChild(newListItem);

  /* optional advanced section */
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  newListItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    itemList.removeChild(newListItem);
  });
}
```

### Next Steps
[Click here for some challenges relating to the DOM.](DomChallenges.md)
