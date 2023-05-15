# Challenge: Event Handlers
[Handling events](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers) is an important part of building websites, and it's a great way to practice using callbacks and arrow functions. Try to complete all of the challenges without looking at the solutions, but feel free to check them if needed.

[Click here to open the starter project.](https://replit.com/@HylandOutreach/Events#script.js) The text on the page describes what should happen upon each event.

### Rundown
The goal will be to handle the following events using JavaScript:

- [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event): Set the background to black
- [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event): Set the background to a random color
- [`auxclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event): Set the text to a random color
- [`contextmenu`](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event): Disable right-click menu
- [`scroll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event): Change the font size
- [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event): Change the animation speed

For each event, there should be a call to `document.addEventListener`, passing in the event name and the callback function.

## Double Click
When the page is [double clicked](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event), the background color should change to black. This is possible by setting  `document.body.style.background = SOME_COLOR_VALUE`. 

## Click
When the page is [clicked](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), the background color should change to a random dark color. Colors can be created by combining **R**ed, **G**reen, and **B**lue values all between `0` and `255`.

### Random Number from Range
It will be helpful to have a function that [generates a number in a given range](https://www.google.com/search?q=js+random+value+from+range). There should be two parameters: `low` and `high`. Practice defining this function with the arrow syntax.

### Random Color
Next, it will be necessary to create a color from three randomized values. This should take place in another new function. There should be again two parameters: `low` and `high`. The color should be returned as an `rgb(X, Y, Z)` string.

### Event Handling
Hook up the random color function to the event handler with `document.addEventListener`. The color should be between `0` and `120` for each of the three RGB values.

## Right Click
When the page is [right clicked]((https://developer.mozilla.org/en-US/docs/Web/API/Element/auxclick_event)), the text should change to a random light color. This is possible by setting  `document.body.style.color = SOME_COLOR_VALUE`. The color values should be between `180` and `255`.

### Preventing Context Menu
Additionally, use the [`preventDefault`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) function to prevent the context menu from appearing when right clicking the page.

## Scroll
When the page is [scrolled](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event), the font size should change. It should be updated relative to the scroll position, available via `window.scrollY`.

A decent conversion would be `20` + `window.scrollY`/`20` pixels. Set the `document.body.style.fontSize` to change it on the page.

## Keydown
When a [numeric key is pressed](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event), the animation speed of the spinning square in the corner should change. It should be updated relative to the number pressed, available via `Event.key`. This value should be converted into a number, and then the `animation-duration` should be calculated.

A decent conversion would be `2` / (`1` +`KEYDOWN_VALUE`) seconds. Set the `document.body.style.animationDuration` to change it on the page.

## Final Code
After setting up all the event handlers, the code in the **script.js** file should look something like this:

<input type="checkbox" id="reveal1" class="reveal-checkbox" />

<label for="reveal1" class="reveal-label">Click to Reveal Code</label>

```js
document.addEventListener("dblclick", e => {
  document.body.style.background = "black";
});

let getRandomRange = (low, high) => {
  let range = high - low;
  return low + Math.random() * range;
};

let getRandomColor = (low, high) => {
  let colorR = getRandomRange(low, high);
  let colorG = getRandomRange(low, high);
  let colorB = getRandomRange(low, high);

  return `rgb(${colorR}, ${colorG}, ${colorB})`;
};

document.addEventListener("click", e => {
  document.body.style.background = getRandomColor(0, 120);
});

document.addEventListener("auxclick", e => {
  document.body.style.color = getRandomColor(180, 255);
});

window.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("scroll", e => {
  document.body.style.fontSize = `${20 + window.scrollY/20}px`;
});

document.addEventListener("keydown", e => {
  let value = 2/(1 + Number(e.key));
  document.body.style.animationDuration = `${value}s`;
});
```