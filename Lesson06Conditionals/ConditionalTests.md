# Conditional Tests
For this challenge, there is a mocked-up version of a test harness, and it's up to you to make sure all the tests pass. [Click here for the project.](https://replit.com/@HylandOutreach/ConditionalTests#script.js) Add code to the **script.js** file for each challenge.

## Challenge 1: Which Number is Greater?
Determine which of two numbers is larger.

- Function Name: `greaterNum`
- Parameter 1: First Number (Number)
- Parameter 2: Second Number (Number)
- Return: The larger of the two numbers (Number)

Examples:

```js
let result = greaterNum(20, 21);
alert(result); // Should display: 21

let result2 = greaterNum(14, 9);
alert(result2); // Should display: 14
```

## Challenge 2: Global Greeting
Translate the "Hello, World" message depending on the given locale.

- Function Name: `helloWorld`
- Parameter 1: Language Code (`"fr"`, `"es"`, `"en"`) (String)
- Return: The greeting in the given language, defaulting to English

Examples:

```js
let result = helloWorld("en");
alert(result); // Should display: Hello, World

let result2 = helloWorld("fr");
alert(result2); // Should display: Bonjour tout le monde
```

## Challenge 3: Letter Grades
Given a numeric score, return the associated letter grade (A, B, C, etc).

- Function Name: `assignGrade`
- Parameter 1: Score (Number)
- Return: The letter grade for the score

Ranges:

| Score | Grade |
|-|-|
| 90-100 | A |
| 80-89 | B |
| 70-79 | C |
| 65-69 | D |
| 0-4 | F |

Examples:

```js
let result = assignGrade(42);
alert(result); // Should display: F

let result2 = assignGrade(99);
alert(result2); // Should display: A
```

## Challenge 4: Pluralizer
Given a noun and a count, properly pluralize it into a grammatically correct phrase.

- Function Name: `pluralize`
- Parameter 1: Noun (String)
- Parameter 2: Count (Number)
- Return: The pluralized noun phrase

Special Cases: sheep and geese

Examples:

```js
let result = pluralize("dog", 5);
alert(result); // Should display: 5 dogs

let result2 = pluralize("cat", 1);
alert(result2); // Should display: 1 cat

let result3 = pluralize("sheep", 99);
alert(result3); // Should display: 99 sheep

let result4 = pluralize("goose", 2);
alert(result4); // Should display: 2 geese
```

## Challenge 5: Two Questions
Create a _very_ simplified version of the Twenty Questions game, specific to cartoon animals.

- Function Name: `twoQuestions`
- Parameter 1: Species (String)
- Parameter 2: Owner (String)
- Return: The proper cartoon animal based on the input

The value should be determined based on this chart:

<table>
  <tr>
    <th></th>
    <th>Dog</th>
    <th>Bear</th>
  </tr>
  <tr>
    <th>Disney</th>
    <td>Pluto</td>
    <td>Winnie the Pooh</td>
  </tr>
  <tr>
    <th>Hanna Barbera</th>
    <td>Scooby-Doo</td>
    <td>Yogi Bear</td>
  </tr>
  <tr>
    <th>Seth MacFarlane</th>
    <td>Brian</td>
    <td>Ted</td>
  </tr>
</table>

Examples:

```js
let result = twoQuestions("dog", "Disney");
alert(result); // Should display: Pluto

let result2 = twoQuestions("bear", "Hanna Barbera");
alert(result2); // Should display: Yogi Bear

let result3 = twoQuestions("bear", "Disney");
alert(result3); // Should display: Winnie the Pooh
```
