# Self-Paced Work: Movie Watchlist Updates
Follow these instructions to update the movie watchlist website.

## Numbered HTML List
Currently, the list displays with bullet points. Update the code in the **index.html** file to make the list display as an _ordered_ list.

## More Different Starting Movies
Currently, there should be three movies when the `moviesToWatch` array is initially created. Under that, add some new movies to the list! In addition to adding new movies, update some of the existing movies as well.

Remember, to add an item to an array, use the `push` function. It should look something like this for an array named `myArray`:

```js
myArray.push("My new item");
```

To update an existing value in an array, use the array name, square brackets, and the index of the value. It should look something like this for an array named `myArray`:

```js
myArray[1] = "My updated second item";
```

Note that the updates to the array values should _not_ happen when the array is initially created! The line below should remain the same:

```js
let moviesToWatch = ["The Godfather", "Dog Day Afternoon", "The Deer Hunter"];
```

## Movie Edits
Currently, there is no way to adjust a movie once it has been added to the Watchlist. First, create a new `<button></button>` in the HTML, and hook it up to a function named `editMovie`. Then, in the body of the `editMovie` function:

1. Get an index for a movie to edit with a `prompt`
1. Get a new movie title with another `prompt`
1. Set the value of the array at the index to be the new movie title
1. Call the `displayList` function

Test out the button to make sure it is possible to edit the existing list.

## Challenge 1 - Item Number Instead of Index
Currently, the `editMovie` function will edit an item by its index. For example, if the user entered `1` for the index, it would edit the _second_ item in the array. Update this so that instead of using the index directly, it subtracts one from what the user enters; that way, if for example the user enters `2` for the item they want to edit, it will edit the item at index `1` (the actual _`2`nd_ element).

## Challenge 2 - Deleting a Movie
Currently, there is no way to remove a movie from the watchlist. Add a button that allows the user to delete an item by its index.

### Background
Unfortunately, there is not a direct way to do this in JavaScript; however, the `splice` method generally works fairly well. Here is an [example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_remove), and here is some more in-depth [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### Process
The process will be similar to the other functionality. Create a new `<button>`, and hook it up to a function that:

1. Gets the index
1. Removes the value from the array
1. Calls the `displayList` function

After adding the code, test it out to make sure movies can be removed from the list.

## Challenge 3 - Persistent Movies
This challenge will require a bit of additional research. The goal is to store the list of movies somewhere so that if a user reloads the page, it remembers what the movies were.

>_Note: This guide is quite detailed, but feel free to implement this functionality without reading through all the specifics. Just know that `localStorage` makes it possible._

### Background: Local Storage
This is possible using something called [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - it's basically a way to store data in the browser for a given user. This can make basic front-end web applications much more powerful!

`localStorage` has two main functions: storing values (setting), and retrieving values (getting).

#### Setting an Item
Setting an item looks like this:

```js
let myName = "John Cazale";

localStorage.setItem("name", myName);
```

#### Getting an Item
If an item has already been stored, you can get it like this:

```js
let myValue = localStorage.getItem("name");
```

### Background: JSON Strings
The `localStorage` object can only store string values - this means that we cannot directly store an array. However, it is possible to work around this using [JSON](https://en.wikipedia.org/wiki/JSON) strings. Essentially, we can convert an array to a string to store it, and then convert it back to an array when we grab it.

#### Array to String
To convert an array into a string, use `JSON.stringify` like this:

```js
let myArray = ["Sunday", "Monday", "Tuesday"];
let myString = JSON.stringify(myArray);

// myString will be the string version of the array: `["Monday","Tuesday","Wednesday"]`
```

#### String to Array
To convert a string into an array, use `JSON.parse` like this:

```js
let myString = `["Sunday","Monday","Tuesday"]`;
let myArray = JSON.parse(myString);

// myArray will be the actual array object: ["Monday", "Tuesday", "Wednesday"]
```

### Background: `localStorage` + JSON Strings
Combine these two concepts to successfully store array objects within `localStorage`! Here is a [brief explanation](https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage).

```js
// Storing myArray in localStorage
let myArray = ["Leonardo", "Raphael", "Donatello", "Michelangelo"];
let myArrayString = JSON.stringify(myArray);
localStorage.setItem("myArray", myArrayString);

// Retrieving myArray from localStorage
let myStoredArrayString = localStorage.getItem("myArray");
let myStoredArray = JSON.parse(myStoredArrayString);

// At this point, myStoredArray will contain the array object from myArray!
```

### Implementation: Updating the Movie Watchlist
After trying to grasp the concepts of `localStorage` and JSON strings, apply them to the Movie Watchlist website!

#### Storing the Movies Array
A good place to store the current movies would be in the `displayList` function.

1. Go to the bottom of the `displayList` function
1. Create a new variable named `stringToStore`
1. Call the `JSON.stringify` function on `moviesToWatch`, and store it in the `stringToStore` variable
1. Under that, call the `localStorage.setItem` function
1. Pass in `"moviesToWatch"` as the first argument, and `stringToStore` as the second argument

This should successfully store the value in `localStorage` every time the user clicks the "Display List" button. It is possible to check this out by opening up developer tools, going to the "Application" window, and clicking on the "localStorage" option. Here is a [quick example](https://stackoverflow.com/questions/9404813/how-to-view-or-edit-localstorage) - it's not necessary to look at it there, but it's pretty cool!

#### Retrieving the Movies Array
Now that the movies array has been stored, it can be retrieved! Instead of setting the `moviesToWatch` array statically at the top of the file, use `localStorage` to check if there is a stored version of the array.

1. At the very top of the file, create a new variable named `storedMoviesString`
1. Call the `localStorage.getItem` function, passing in `"moviesToWatch"` as the argument
    - Set `storedMovieString` to this value
1. Under that, create the `moviesToWatch` variable - but with no value!
1. Under that, create an `if`/`else` structure
1. For the `if` condition, simply pass in `storedMoviesString`
    - This checks if the variable has any value
1. In the body of the `if` (between `{` and `}`), set the `moviesToWatch` variable
1. Call `JSON.parse`, and pass in `storedMoviesString` - store that result inb `moviesToWatch`
1. In the body of the `else`, set the `moviesToWatch` variable to the original starter array

Now, the first time the page loads, it should set the `moviesToWatch` array to `["The Godfather", "Dog Day Afternoon", "The Deer Hunter"]`. However, if the user decides to add, edit, or delete any movies, the `moviesToWatch` array should update, and persist to `localStorage`. When the page is loaded again, it should retrieve the stored movie list!
