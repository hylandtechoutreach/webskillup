# Custom Elements
Custom elements are an extremely powerful feature of HTML. They allow for the creation of custom tags that can encapsulate more functionality than the basic HTML elements do.

## Background: The Shadow DOM
Some HTML elements are more than just basic blocks; they contain additional pieces and parts within them. For example, the `<input>` element can have a number of different internal elements depending on the `type` attribute:

![](../Assets/ShadowDom.png)

Custom elements use the shadow DOM to pull together features and modularize them into standalone components.

## Exploration
Fork the [Example Project](https://replit.com/@HylandOutreach/CustomElements#index.html) to check out some very basic custom elements in action!

Don't worry about looking at the **script.js** or **style.css** files yet; just try to use HTML to add more of the `<my-card>` and `<help-text>` elements! These aren't elements that come from the HTML spec; they are totally new and bespoke.

Being able to understand and _use_ custom elements, even if you're not the one creating them, can be extremely helpful when working with frameworks.
