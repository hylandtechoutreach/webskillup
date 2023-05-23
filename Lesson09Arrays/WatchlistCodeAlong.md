# Code-Along: Movie Watchlist
Follow these instructions to build a movie watchlist website.

## Getting Started
To begin, fork [this Starter Repl project](https://replit.com/@HylandOutreach/Watchlist#index.html). It contains some HTML and CSS, but no JavaScript yet.

## Creating the Array
The first step is to create the array that will store the list of movies.

1. Open the **script.js** file for editing
1. At the top of the file, create a new variable named `moviesToWatch`
1. Set it equal to a new array with square brackets: `[` and `]`
1. In the array, add three string values, separated by commas:  
    - `"The Godfather"`
    - `"Dog Day Afternoon"`
    - `"The Deer Hunter"`

Feel free to change up the films if desired! The code should end up looking something like this:

```js
let moviesToWatch = ["The Godfather", "Dog Day Afternoon", "The Deer Hunter"];
```

## Defining the `displayList` Function
Now it's time to start making the buttons functional. In the **index.html** file, there is a `<button>` with an `onclick` set to call the `displayList` function... but it doesn't exist yet. Define the function, and add an `alert` statement for testing purposes.

Run the project, and verify that clicking the "Display List" button properly executes the code in the newly defined function. It should look something like this:

```js
function displayList() {
  alert("Displaying List...");
}
```

## Looping Through the Array
Now that the button is hooked up to a function, it has to do something. The goal is for this function to display each movie in the `moviesToWatch` array. Add the code to use a `for` loop to loop through each film in the array, and simply `alert` it.

Run the project, click the "Display List" button, and verify that all movie titles are displayed. The code in the body of the `displayList` function should look something like this:

```js
for (let i = 0; i < moviesToWatch.length; i++) {
  let movieTitle = moviesToWatch[i];

  alert(movieTitle);
}
```

## Displaying Movies in HTML
Showing the movies in pop-ups is functional, but the user experience could definitely be better. Use some DOM manipulation to add the array items to the HTML list instead.

### Getting the List Element
The first step will be to grab the HTML `<ul id="list"></ul>` so that we can add things to it. Use `document.querySelector` to accomplish this, and make sure to clear out any existing HTML within the element.

Nothing should change at this point, but storing the value will make it possible to add list items for each movie. The additional JavaScript code should look something like this: 

```js
let listElement = document.querySelector("#list");
listElement.innerHTML = "";
```

### Creating the List Items
Now that the `<ul id="list"></ul>` has been attained, it will be possible to add some list items. All of this will take place in the _body_ of the `for` loop. Use `document.createElement` to make a new `<li></li>`, use `textContent` to set the text to the movie title, and then append the `<li></li>` to the `<ul></ul>`

Run the project, click the button, and verify that the movies are added to the page as bulleted list items. The additional code should look something like this:

```js
let itemElement = document.createElement("li");
itemElement.textContent = movieTitle;

listElement.appendChild(itemElement);
```

## Defining the `addMovie` Function
Now the basic list is all set up, but it should also be possible to add a movie. There is an "Add Movie" button, but the function must be defined. Define the `addMovie` function like so:

```js
function addMovie() {

}
```

## Getting the New Movie
The function should start by getting a new movie to add. The easy way to do this is with a `prompt`, but an HTML input could work as well. Make sure to store the new movie title in a variable, something like this:

```js
let movieToAdd = prompt("Which movie do you want to add?");
```

## Adding the New Movie
The next step is to add the movie title to the array using `push`. After that, call the `displayList` function to refresh the list with the new array value. It should look like this:

```js
moviesToWatch.push(movieToAdd);
displayList();
```

That's all for the basic watchlist!

## Final Code
By the end of the activity, the JavaScript code in the **script.js** file should look something like this:

```js
let moviesToWatch = ["The Godfather", "Dog Day Afternoon", "The Deer Hunter"];

function displayList() {
  let listElement = document.querySelector("#list");
  listElement.innerHTML = "";

  for (let i = 0; i < moviesToWatch.length; i++) {
    let movieTitle = moviesToWatch[i];

    let itemElement = document.createElement("li");
    itemElement.textContent = movieTitle;

    listElement.appendChild(itemElement);
  }
}

function addMovie() {
  let movieToAdd = prompt("Which movie do you want to add?");
  moviesToWatch.push(movieToAdd);
  displayList();
}
```
