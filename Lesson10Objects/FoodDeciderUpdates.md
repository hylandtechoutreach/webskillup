# Self-Paced Work: Food Decider Updates
Follow these instructions to update the Food Decider website.

## 1. New Items
Feel free to add any new items desired. At minimum, add one new item for each existing restaurant:

| Restaurant | Item Name | Price | Picture |
|-|-|-|-|
| McDonald's | McPlant | 10.99 | mcplant.jpg |
| Chipotle | Chips | 5.00 | chips.png |
| Taco Bell | Cheesy Roll Up | 1.00 | cheesyroll.jpg |
| Panera | Bagel | 4.50 | bagel.jpg |

Add these items directly into the `items` array at initialization, or `push` them separately - either way works. Make sure it is possible to click the button and see all items appear.

## 2. Price Display
There is a `price` property stored with every object in the `items` array, but it is currently not being used at all. Display a price along with each item name and picture.

### HTML: Price Paragraph
Add a new `<p></p>` element to the page to store the price, and make sure it has an `id` set.

### JavaScript: Setting the Food Price
Next, update the value of the `<p id="food-price>` element with the proper price. This should happen within the body of the `getFood` function:

1. Grab the new `<p></p>` element from the HTML
1. Properly format the `price` property of the `item` object as a currency
1. Set the `textContent` to be the nicely formatted price text

Run the project, click the button, and verify that the proper prices appear.

## 3. Always New
Currently, when generating a random food item, it is possible to choose the same item. Fix this issue so that there is a brand new item every time someone clicks the "Get Food" button. Use an `if` statement to check if the current `textContent` is equal to the content for the randomly chosen item, and if it is, run the `getFood` function again, and `return`.

Run the project, click the button a few times, and verify that the item is always new.

## 4. CHALLENGE: Vegetarian Filter
There may be some vegetarians who visit the site - these people would not like to see any items that contain meat. Update the code so they can select only vegetarian items.

### HTML: Vegetarian Only Checkbox
Start by creating a new element in the HTML where the user can check whether they'd like only vegetarian items. Use an `<input type="checkbox">`, and make sure it has an `id` and it is properly labeled.

### JavaScript: Vegetarian Property
Currently, the item objects do not have a property denoting which items are vegetarian.

Go through each item object in the `items` array, and manually add a `veg` property - it should be set to `true` of the item can be vegetarian, and `false` if the item contains meat.

### JavaScript: Filtering the List
There is a very helpful [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function that makes it possible to filter arrays based on functions that return booleans. Passing functions as variables and using arrow function syntax are advanced concepts, but they actually make the code a lot less verbose.

1. Get the `<input type="checkbox">` from the HTML using `document.querySelector`
1. Get the `checked` property of the checkbox, and store it in a variable
1. Create an `if` statement checking the `checked` property
1. If the box is checked, call `filter` on the `items` array
1. For the `filter` call, pass in a function checking if an `item` object has the `veg` property set to `true`
    - `item => item.veg`
1. Under that, complete the same random choice functionality, only using the `filter`ed array

Run the project, check the box, and verify that only vegetarian items appear.
