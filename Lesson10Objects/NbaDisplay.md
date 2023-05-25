# Challenge: NBA Display
In this challenge, take some data about NBA players, and display it in a nice way.

## The Starter Code
[Click here for the starter project.](https://replit.com/@HylandOutreach/NbaDisplay#script.js) Fork the project to begin.

There is some code in the **getData.js** file that pulls data from an external source, but don't worry about that file. The important piece for this challenge is the `getHtmlForPlayer` function in the **script.js** file:

```js
function getHtmlForPlayer(playerObject) {
  let fname = playerObject.first_name;
  let lname = playerObject.last_name;
  
  return `
<p>${fname} ${lname}</p>
`;
}
```

Right now, it takes in a `playerObject` parameter, and returns some HTML text that simply displays the player's first and last name in a paragraph element. Run the project to see it in action - it works, but it looks very boring, and lacks a lot of important information.

### Data to HTML
The `playerObject` data will be structured like this:

```js
let playerObject = {
  "id":237,
  "first_name":"LeBron",
  "last_name":"James",
  "position":"F",
  "height_feet": 6,
  "height_inches": 8,
  "weight_pounds": 250,
  "team":{
    "id":14,
    "abbreviation":"LAL",
    "city":"Los Angeles",
    "conference":"West",
    "division":"Pacific",
    "full_name":"Los Angeles Lakers",
    "name":"Lakers"
  }
}
```

That's a lot more information than just the first and last name - and all of it _might_ be important depending on the needs of the user.

In general, turning data into HTML is a huge part of real front-end web development. There are several libraries and frameworks that do this, but it is also possible to do it with all the concepts covered by this course so far. It's one thing to simply put all the data on the page; it's another thing to make it look sensible, cohesive, and good. 

## Adding Some Style
Right now, the black and white default font plaintext is somewhat uninspired. Add some CSS to style each `<div class="player">` in a more pleasing way. They could have background colors, borders, fonts, positioning (like [flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)), or anything else that might look good. Keep in mind that there will also be more data in these `<div>`s, so 

## Adding More Data
Currently, the page only displays the first and last name of the player. Add the other relevant data in a nice format! Take the time to make it look really nice.

## Team Background
Dynamically set the background color for each player `<div>` based on their team. It may be necessary to look up team colors to accomplish this. Try updating the text color as well. It could be a good idea to store this color data in a separate object, perhaps like this:

```js
let teamColors = {
  LAL: {
    primary: "gold",
    secondary: "purple"
  },
  BOS: {
    primary: "green",
    secondary: "white"
  }
}
```

## Conference Symbol
Add [this symbol](https://sportsfly.cbsistatic.com/fly-0476/bundles/sportsmediacss/images/conference-logos/nba/WEST.svg) to the HTML for teams from the western conference, and [this symbol](https://sportsfly.cbsistatic.com/fly-0476/bundles/sportsmediacss/images/conference-logos/nba/EAST.svg) to the HTML for teams from the eastern conference.
