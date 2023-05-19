# For Loops: An Introduction
Repetition is a beautiful thing. If you've ever listened to the music of Daft Punk, you might be familiar with their hit song "[Around the World](https://www.youtube.com/watch?v=dwDns8x3Jb4)." The song goes something like this:

```
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
Around the world, around the world
```

Luckily for them, they did not have to sing through a vocoder every single time; they were able to make a sample, and simply _repeat_ the same line over and over again.

Lucky for JavaScript developers, there is a similar utility that allows _code_ to be repeated over and over: the `for` loop!

## Around the World Example
Imagine developing a website that displayed the lyrics to "Around the World" by Daft Punk. It would be _very annoying_ to write out every single line:

```js
function daftPunk() {
  alert("Around the world");
  alert("Around the world");
  alert("Around the world");
  alert("Around the world");
  /* ... */
  alert("Around the world");
}
```

Then, imagine Daft Punk comes to you and tells you they are changing the lyrics to "Around the world in eighty days" instead. It would be _even more annoying_ to go change every single instance, or update the number of times the line is displayed. Thank goodness there is a better way:

```js
for (let i = 0; i < 144; i++) {
  alert("Around the world");
}
```

This code will display the "Around the world" message 144 times. Let's break down how that works.

## The Structure of a `for` Loop
Each for loop looks something like this:

```js
for (initialization; condition; increment) {
  // body
}
```

It is similar to an `if` statement, but with _three_ expressions within the parentheses. Those three expressions are:

1. Initialization
1. Condition
1. Increment

They may go by different names according to different sources, but the important part is when and how they execute.

<div class="box">
  <h3>Initialization</h3>
  <p>The <b>initialization</b> expression is always the <i>very first thing</i> to execute for a <code>for</code> loop. It runs exactly once, to kick off the whole looping process.</p>

  <h3>Condition</h3>
  <p>The <b>condition</b> expression is evaluated <i>before each entry into the loop</i>. If the condition is <code>true</code>, the loop continues. If the condition is <code>false</code>, the loop ends.</p>

  <h3>Increment</h3>
  <p>The <b>increment</b> expression runs <i>after each loop execution</i>.</p>
</div>

In addition to these three expressions in the parentheses, there is the body.

### The Body
The **body** of the loop is between the `{` and `}`. It is the actual _execution of the loop_. It will run repeatedly for as long as the **condition** is `true`.

## The Typical Use Case
Anything can go in the place of those three expressions; even nothing at all! However, the most general way to use a `for` loop is to start a counter at `0`, and continue executing until a certain limit is reached:

```js
for (let i = 0; i < SOME_NUMBER; i++) {
  // do something
}
```

This loop will execute `SOME_NUMBER` of times.

## Breaking Down an Example: Mantra
In the practice of meditation, a [mantra](https://blog.mindvalley.com/mantra-meditation/) is a word, sound, or phrase repeated to aid concentration. Take a look at some code for a mantra `for` loop, and see how it translates to its individual parts.

```js
for (let i = 0; i < 3; i++) {
  alert("All I need is within me");
}

alert("All done :)");
```

The loop will execute like so:

```js
let i = 0; // initialization, first thing to run, only once

if (i < 3) { // condition: 0 < 3 is true, so enter the body of the loop
  alert("All I need is within me");
  i++; // increment, run after body executes
}

if (i < 3) { // 1 < 3 is true, so enter the body of the loop
  alert("All I need is within me");
  i++;
}

if (i < 3) { // 2 < 3 is true, so enter the body of the loop
  alert("All I need is within me");
  i++;
}

if (i < 3) { // 3 < 3 is FALSE, so exit the loop
  // BODY DOES NOT RUN
  alert("All I need is within me");
  i++;
}

alert("All Done :)");
```

## Conclusion
Loops can become quite a bit more advanced, but if you have a solid grasp of the basic structure, that should go a long way. Just try to remember this:

```js
for (let i = 0; i < NUM; i++) {
  /* body */
}
```

That's usually all you'll need! For a more rigorous introduction, including other types of loops, check out the [JAVASCRIPT.INFO guide](https://javascript.info/while-for).
