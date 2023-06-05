# Code-Along: Darth Vader Quoteboard
Create a new webpage featuring buttons that will say some Darth Vader quotes.

- [Click here for Darth Vader quote source](https://www.quora.com/What-are-some-famous-Darth-Vader-quotes)

Start by forking [this starter Repl](https://replit.com/@HylandOutreach/JavaScriptStarter). Then, follow the instructions below to build out the website.

## Part 1 - Basic Elements
Add some basic elements to the webpage, and update a couple styles.

1. In the **index.html** file, in the `<body></body>` element, add an `<h1></h1>` header that says "Darth Vader Quoteboard"
1. Beneath the `<h1>`, add a `<p></p>` paragraph
1. Within the `<p></p>`, add an `<img />` with its `src` attribute set to `"https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg"`
1. In the **style.css** file, set the page's background color to `black` and text color to `red`

At this point, the code should look something like this:

#### index.html

```html
<html>
    <head>
        <link href="style.css" rel="stylesheet">
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Darth Vader Quoteboard</h1>
        <p><img src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg"></p>
    </body>
</html>
```

#### style.css

```css
body {
    background: black;
    color: red;
}
```

## Part 2 - Button With Quote
Add a button which will display a Darth Vader quote when clicked.

1. In the **index.html** file, under the `<p>` in the `<body></body>`, add a `<button>` element that says "Technological Terror"
1. In the **script.js** file, _define a function_ named `technologicalTerror`
    - Start with the `function` keyword
    - Next, add a space and the function name
    - Next, add left and right parentheses
    - Finally, add left and right curly brackets
1. In the body of the `technologicalTerror` function (between `{` and `}`), add an `alert` statement that says "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force."
1. Back in the **index.html** file, add the `onclick` attribute to the `<button>` and make it _call_ the `technologicalTerror` function

The added code should look something like this:

#### index.html

```html
<button onclick="technologicalTerror()">Technological Terror</button>
```

#### script.js

```js
function technologicalTerror() {
    alert("Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.");
}
```

Run the project, click on the "Technological Terror" button, and ensure that the quote appears!

## Part 3 - More buttons
Follow the same steps as above to add more buttons! See below for a list of quotes, each with accompanying button text and function name.

| Button Text | Function Name | Quote |
|-|-|-|
| Faith | `faith` | I find your lack of faith disturbing. |
| Presence | `presence` | I sense something. A presence I have not felt since... |

For each of these quotes:

- Create a new `<button>` element in the **index.html** file
- Define a new function in the **script.js** file
- In the body of the new function, use an `alert` to display the quote
- Hook up the `<button>` in the **index.html** file to the function by setting its `onclick` attribute
    - It should _call_ the function using the name from the **script.js** file

Make sure to test that each button works after the function has been defined and called!

## Challenges
Try to complete these additional challenges.

### New Characters
Create new buttons or new full pages for additional characters - from Star Wars, or any other property!

#### Bonus: Dark Helmet Quotes
Include these quotes from Dark Helmet:

1. "I am your father's brother's nephew's cousin's former roommate."
1. "Jammed? Raspberry. There's only one man who would dare give me the raspberry! Lone Starr!"

### Dynamic Responses
Although Darth Vader never actually says "Luke, I am your father," the phrase has swept through the cultural consciousness in such a way that it is perhaps more recognizable than any other Darth Vader quote. Add a button that will display this quote, only with one small twist... it should ask the user for _their_ name, and say "`yourName`, I am your father." This will be possible using a `prompt`.

### Actual Sound
Do some [research](https://stackoverflow.com/questions/9419263/how-to-play-audio) on how to use JavaScript to play actual audio. Then, find some audio files, and play them when the buttons are clicked!

## Next Steps
After completing this code-along, take a look at some of the [guided activities](FunctionsGuidedActivities.md).
