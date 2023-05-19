# Challenge: Fully DOM Quiz
[Previously](../Lesson06Conditionals/ConditionalChallenges.md), there was a challenge to create a quiz about yourself. Up the ante a bit by updating this quiz so that it works fully through the DOM. There should be no need for any `alert` or `prompt` statements.

For example, for the first question, you could add HTML like this:

```html
<p>What is my name?</p>
<p><input id="answer1"></p>
```

Then, instead of setting the answer variable based on a `prompt`, you could grab the value from the `<input id="answer1">` like this:

```js
let answer1Input = document.querySelector("#answer1");
let answer1 = answer1Input.value;
```

From there, the `answer1` variable could be used in the same way.

### DOM Dropdowns or Radio Buttons
Another option would be to use `<select>` dropdowns or `<input type="radio">` buttons for a multiple choice quiz.

- [Dropdowns](https://www.w3schools.com/tags/tag_select.asp)
- [Radio Buttons](https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/)

The code may need a little more updating, but the user experience will be excellent!
