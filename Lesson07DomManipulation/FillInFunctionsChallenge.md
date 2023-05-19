# 🔷 Advanced: Fill in the Functions
There is a [starter project](https://replit.com/@HylandOutreach/DomChallenges) with a few different challenges built into it. Some additional research will likely be required. The goal is to fill out the functions in the **script.js** file with some DOM-manipulating code. Try to accomplish these challenges without updating any of the code in any of the other files!

## Challenge 1: Toggle Highlight
When the "Toggle highlight" button is clicked, it should add or remove a highlight to the _second paragraph_ in the section. Update the `toggleHighlight` function to:

- Find the second paragraph in the section, and store it in a variable
- If the `highlight` class is not present, add it - otherwise, remove it
    - E.g., `<p>Text</p>` should become `<p class="highlight">Text</p>` and vice versa

Test the code by clicking the button, and verifying that the highlight appears and disappears properly.

## Challenge 2A: Tweet Validation
When the "Check tweet" button is clicked, it should add a red outline to the `<textarea>` element if there are more than `140` characters. If there are `140` or fewer characters, no outline should appear. The `validateTweet` function takes a `textarea` parameter that already holds the `<textarea>` element; update it to:

- Find the length of the `textarea` input value
- Set the `aria-invalid` attribute to `true` if there are more than `140` characters
- Set the `aria-invalid` attribute to `false` if there are `140` or fewer characters

Test the code by clicking the button, changing the text in the box, and clicking the button again. Make sure it properly changes based on the number of characters in the tweet.

## Challenge 2B: Automatic Validation
Instead of validating when the button is clicked, set it up so that the validation happens every time the text in the tweet changes. Update the `validateTweetOnInput` function to:

- Find the `<textarea>` element, and store it in a variable
- Add an event listener for the `"input"` event on the `<textarea>`
- In the event handler, call the `validateTweet` function, passing in the `<textarea>` as an argument

Test the code by updating the text in the tweet field _without_ clicking the button. It should add or remove the red outline automatically as you type.

## Challenge 3: Toggle Hiding
When the "Toggle picture" button is clicked, the image below should hide. It should reappear when the button is clicked again. Update the `setupToggleButton` function to:

- Find the proper `<button>`, and store it in a variable
- Add an event listener to the `<button>` for `"click"`
- In the event handler, find the next sibling following the button, and store it in a variable
- Set the `hidden` property of the sibling to be the opposite of what it currently is

Test the code by clicking the button multiple times, and verifying that the picture below hides and shows properly.
