# Code-Along: About Me
Build a simple website about yourself, and learn about some HTML concepts along the way!

## Getting Started
Start by forking the [starter project](https://replit.com/@hylandOutreach/AboutMeBegin). Make sure the **index.html** file is selected on the left to view the HTML code, and click the "Run" button. Notice how the code in the HTML creates the text on the website.

### HTML Elements
Every individual thing you see on a website is an _HTML element_. Elements in HTML can be headers, blocks of text, pictures, videos, or anything else! Elements are the building blocks of HTML websites.

### Tags
HTML elements are created with _tags_. Tags tell the website what type of element to display. Most HTML elements have an _opening tag_ and a _closing tag_, with some _content_ in between.

For example, the header at the top of the website is created with these components:

- Opening Tag: `<h1>`
- Content: `My Website`
- Closing Tag: `</h1>`

Each tag is surrounded with these symbols: `<` and `>`. In HTML, it is common practice to refer to these as _angle brackets_. To break down the example further, the `<h1>` opening tag is created with these parts:

- Left Angle Bracket: `<`
- Element Name: `h1`
- Right Angle Bracket: `>`

For _closing tags_, there is also a slash (`/`) right before the element name, like this: `</h1>`.

### Challenge: Update the Header
Unless your name is Carlito, this site is not accurate as of now! Update the code so that it has your name instead of Carlito.

## Adding a Paragraph
Another common HTML element is the `<p></p>`: the paragraph element. Make a new line, and add a `<p></p>` element that welcomes the user to your site. It could look something like this:

```html
<p>Hi, welcome to my site.</p>
```

## Adding a List of Hobbies
Next up, it's time to add a list of hobbies. To do this, it will be necessary to _nest_ multiple elements together.

### Nesting: Parent/Child Relationship
Nesting is one of the most important features of HTML; it allows some elements to _contain_ other elements. For example, a list might look like this:

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
```

Here, the `<ul></ul>` element is an unordered list. It _contains_ the `<li></li>` elements - those are list items. This is what's called a parent/child relationship - the `ul` is the parent, and each `li` is a child. Typically, children are _indented_ in the code.

### Adding the List
Make a new line, and add an `h2` header with text that says **My Hobbies**. Under that, create the `<ul></ul>`, and add at least three `<li></li>` elements with three hobbies. It could end up looking like this:

```html
<h2>My Hobbies</h2>
<ul>
  <li>Watching TV</li>
  <li>Watching Movies</li>
  <li>Listening to Music</li>
</ul>
```

## Adding an Image
Next up, it's time to add an image. This is possible with the `<img>` element. This element is a little different; there is no closing tag, and an _attribute_ is required to tell the element what picture to show. These are set _inside_ of the opening tags. 

Make a new line, and create another `h2` header that says **A Cool Image**. Under that, add the `<img>` element. Then, add the `src` attribute, and make it point to one of the images in the project. It might end up looking like this:

```html
<h2>A Cool Image</h2>
<img src="animals/cat.png">
```

## Adding an Input
Another powerful element is the `<input>` element; this is how you allow users to provide your site with data. Like the `<img>` element, the `<input>` element does not have a closing tag, and it requires an attribute to determine the type. There are a ton of different types, but the most basic one is `text`.

Make a new line, and create another `h2` header that says **Form**. Under that, add the `<input>` element. Then, add the `type` attribute, and make it `text`. Also, add the `placeholder` attribute, and make it say **Please enter a message**. It might end up looking like this:

```html
<h2>Form</h2>
<input type="text" placeholder="Please enter a message">
```

## Organizing with `<div>` Elements
The `div` element is different in another way - it is specifically designed to contain other elements. It is used to help organize the page. It is a **block-level** element, which means its contents are displayed on their own line by default. Without CSS, they will not do much - but it is important to be able to recognize these elements and understand their purpose.

Add a `<div>` element to the page just for fun.

## Conclusion
There are a ton more elements, and a lot more that HTML can do, but after this activity you should have a solid grasp of the basics. 

### Final Code
The code in the **index.html** file might look something like this:

```html
<html>
  <body>
    <h1>About Carlito</h1>
    <p>Hi, welcome to my site.</p>

    <h2>My Hobbies</h2>
    <ul>
      <li>Watching TV</li>
      <li>Watching Movies</li>
      <li>Listening to Music</li>
    </ul>

    <h2>A Cool Image</h2>
    <img src="animals/cat.png">

    <h2>Form</h2>
    <input type="text" placeholder="Please enter a message">

    <div>Just for fun</div>
  </body>
</html>
```

### Self-Paced Work
[Click here to access the self-paced work instructions.](AboutMeSelfPacedWork.md)
