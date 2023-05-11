# Code-Along: Mad Libs
Follow these instructions to build a simple [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) game using JavaScript.

Begin by creating a fork of [this starter Repl project](https://replit.com/@HylandOutreach/JavaScriptStarter).

## The Story: Biography of LeBron James
The original story is as follows:

>LeBron James is an American professional basketball player. He is widely considered one of the greatest players of all time. In 2020, he won a championship with the Los Angeles Lakers.

To make this into a Mad Libs story, some words will have to be replaced! Here is the story again, with a list of replacements, with each part of speech within `[` and `]`:

```
LeBron James is an American [adjective] basketball player.
He is widely considered one of the greatest [plural  noun] of all time.
In 2020, he won a championship with the [city] Lakers.
```

The goal is to create a program that will ask the user for each of those replacements! In all, the user should be prompted for these words:

- Adjective
- Plural Noun
- City

## Part 1: Asking for the Words
Start by asking the user for each word they will need to replace.

1. Open the **script.js** file for editing
1. At the top of the file, add an `alert` statement welcoming the user to the page
    - It should say "Welcome to the Mad Libs game."
1. Under that, create a new variable named `adjective`
1. Set the value of the `adjective` variable to a `prompt`, with the message `"Enter an adjective"`
1. Under that, create a new variable named `pluralNoun`
1. Set the value of the `pluralNoun` variable to a `prompt`, with the message `"Enter a plural noun"`
1. Under that, create a new variable named `city`
1. Set the value of the `person` variable to a `prompt`, with the message `"Enter a city"`

Try running the code at this point, and make sure it successfully prompts the user for these four words!

The code so far should look something like this:

```js
alert("Welcome to the Mad Libs game.");

let adjective = prompt("Enter an adjective");
let pluralNoun = prompt("Enter a plural noun");
let city = prompt("Enter a city");
```

## Part 2: Building the New Sentences
Next, it's time to write out the new sentences with the words replaced.

1. Under the existing code, create a new variable named `sentence1`
1. Set `sentence1` to be the first sentence up until the new word
    - "LeBron James is an American "
1. After that, use `+` to concatenate the `adjective` variable
1. Finally, finish out the sentence with another `+`

The code for the first sentence should look something like this:

```js
let sentence1 = "LeBron James is an American " + adjective + " basketball player. ";
```

Repeat the steps for the next two sentences. In total, there should be three new variables:

- `sentence1`
- `sentence2`
- `sentence3`

## Part 3: Displaying the New Story
Now, all that's left is to add them all together and display them. Use an `alert` statement, and use `+` to combine all three sentences. The code should look something like this:

```js
alert(sentence1 + sentence2 + sentence3);
```

Try running the code again. The program should ask for some words, and then display the modified story with each entered word replacing one from the original story!

## Conclusion
This activity may seem quite trivial, but working with text data in this way can be quite a valuable skill.

### Final Code
The code in the **script.js** file should look something like this:

```js
alert("Welcome to the Mad Libs game.");

let adjective = prompt("Enter an adjective");
let pluralNoun = prompt("Enter a plural noun");
let city = prompt("Enter a city");

let sentence1 = "LeBron James is an American " + adjective + " basketball player. ";
let sentence2 = "He is widely considered one of the greatest " + pluralNoun + " of all time. ";
let sentence3 = "In 2020, he won a championship with the " + city + " Lakers.";

alert(sentence1 + sentence2 + sentence3);
```

### Next Steps
After completing the code-along, [click here to check out the challenges](VariablesChallenges.md).
