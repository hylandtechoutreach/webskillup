# Code-Along: About Me Styles
In this activity, update your [About Me](../Lesson01Html/AboutMeCodeAlong.md) site with some style.

## Setting Up
Start by opening your **About Me** Repl project.

### Creating the Style File
First, it will be necessary to create a new file in the project. On the left, click the "New file" icon, and enter **style.css** as the name.

### Linking the Style File
Now that the file exists, it needs to be linked! This is possible using the `<link>` element, which is typically within the `<head></head>` (just above the `<body>`).

1. Open the **index.html** file for editing
1. Make a new line within the `<html>` element, above the `<body>`
1. There, add the `<head></head>` element
1. Between the `<head>` and `</head>`, add the `<link>` element
    - _Note: like the `<img>` element, `<link>` has no closing tag!_
1. Add the `href` attribute to the `<link>`, pointing to **style.css**
1. Add the `rel` attribute to the `<link>`, setting it to **stylesheet**

The added code should look something like this:

```html
<head>
  <link href="style.css" rel="stylesheet">
</head>
```

## Styling the Full Page
Now it's time to get into the styles! First, style the whole page.

1. Open the **style.css** file for editing
1. Add the `body` selector and curly brackets
    - The `<body>` is the HTML element that contains everything!
1. Add the following properties:
    - `color`
    - `background`
    - `font-family`
    - `font-size`

Run the project to see the page change! The added CSS should look like this:

```css
body {
  color: pink;
  background: black;
  font-family: arial;
  font-size: 14px;
}
```

## Highlighting Some List Items
HTML elements can be selected in CSS by their type, but it's also possible to style only certain elements. To highlight _some_ of the `<li></li>` elements, use the `class` attribute/selector.

### HTML: Adding the `class` Attribute
Start by updating the HTML to designate certain `<li>` elements as `highlight`ed.

1. Open the **index.html** file for editing
1. Find two of your favorite hobbies in the list
1. Add the `class` attribute to each of them, set to `highlight`

It won't change anything yet, but the updated code should look like this:

```html
<ul>
  <li class="highlight">Watching TV</li>
  <li>Watching Movies</li>
  <li class="highlight">Listening to Music</li>
</ul>
```

### CSS: Selecting by the Class
Now it's time to style those particular elements!

1. Open the **style.css** file for editing
1. Make a new line at the bottom of the page
    - Under the `}`
1. Make a new ruleset to style `.highlight`
    - This looks for HTML elements with `class="highlight"`
1. In the ruleset, set the `background` color
1. Additionally, set the `max-width` to `120px`

Run the project to see the highlights! The added code should look something like this:

```css
.highlight {
  background: darkblue;
  max-width: 120px;
}
```

## Underlining One Header
The class selector is good for when there are multiple elements that should be classified in a certain way. Sometimes, though, it is helpful to identify one element uniquely - this is possible with the `id` attribute/selector.

### HTML: Adding the `id` Attribute
This works a lot like the `class`, just with `id` instead! In the **index.html** file, find the `<h2>Form</h2>`, and add the `id` attribute set to **form-head**, like this:

```html
<h2 id="form-head">Form</h2>
```

### CSS: Selecting by the Class
Next, select that specific heading with CSS. Instead of a `.` like with classes, `id`s use `#`.

1. Open the **style.css** file for editing
1. Add a new ruleset for `#form-head`
1. In the ruleset, set the `border-bottom` property
    - There are a few options for this - figure out what looks good!

Run the project to see the underlined header! The added code should look something like this:

```css
#form-head {
  border-bottom: 1px solid pink;
}
```

## Just for Fun: More Styles
This next step just shows off some additional styles that can be applied to `<div>` elements.

### HTML: Adding the `id` Attribute
Find the `<div></div>` element in the **index.html** file, and add an `id` of **fun** to it:

```html
<div id="fun">Just for fun</div>
```

### CSS: Adding Properties
Open the **style.css** file, and make a new ruleset, selecting the `<div id="fun">`. Add the following properties:

- `text-align`: alignment of text
- `margin`: space surrounding the element
- `padding`: space between the border and the content
- `border`: space between the margin and the padding
- `font-size`: how big the font is, using `em` for relative sizing

Run the project to see it work! The added CSS might look something like this:

```css
#fun {
  text-align: center;
  margin: 10px;
  padding: 10px;
  border: 5px dotted pink;
  font-size: 2em;
}
```

## Conclusion
There are a ton more properties, and a lot more that CSS can do, but after this activity you should have a solid grasp of the basics. 

### Final Code
The code in the **style.css** file might look something like this:

```css
body {
  color: pink;
  background: black;
  font-family: arial;
  font-size: 14px;
}

.highlight {
  background: darkblue;
  max-width: 120px;
}

#form-head {
  border-bottom: 1px solid pink;
}

#fun {
  text-align: center;
  margin: 10px;
  padding: 10px;
  border: 5px dotted pink;
  font-size: 2em;
}
```

### Self-Paced Work
[Click here to access the self-paced work instructions.](CssExplorationSelfPacedWork.md)
