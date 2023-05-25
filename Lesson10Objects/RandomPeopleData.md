# Challenge: Random People Display
In this challenge, take some data about random people, and display it in a nice way. This challenge is like the [NBA Display](NbaDisplay.md) challenge, but quite a bit more open ended. It will up to you to figure out the best way to surface the information in the data object.

## The Starter Code
[Click here for the starter project.](https://replit.com/@HylandOutreach/RandomPeople) Fork the project to begin.

The code in the **data.js** file creates a new array of objects, stored in a variable named `randomPeople`. This `randomPeople` array should power the information shown on the site.

### Working with the Data
Currently, the **script.js** file contains this code:

```js
const peopleContainer = document.querySelector("#people-container");

for (person of randomPeople) {
  let newElement = document.createElement("div");
  newElement.innerHTML = `${person.first_name} ${person.last_name}`;
  peopleContainer.appendChild(newElement);
}
```

It loops through each person, and adds a new `<div></div>` element to the `<div id="people-container">` element with their first and last name.

## The Challenge
There are no specific challenges for this project; just try to make all the data look good. Find which pieces of information are the most relevant, and display them in a way that looks good! Here are some ideas:

- Create a "card" for each person
- Create a table, where each row contains information about one person
- Create a "link" for each person which, when clicked, reveals more information about them
- Add the ability to filter the list in some way
- Add the ability to edit people in the list (create, update, delete)

Make sure to update the CSS styles to make everything look good, and feel free to add some additional HTML as well if desired.
