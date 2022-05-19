# Topics

## What are promises and when do we use them?

Promises are objects that represent the eventual result of an asynchronous operation. You can use the `Promise` class to create a `new` promise. But usually, you don't create the `Promise` yourself, but you will call a function that returns a `Promise`.

Example of functions that return promises:

- `fetch` from the web fetch API.
- `json` function of the Response object.
- any database functions you are using.
- some file system functions.

Promises can be awaited. `await` is a keyword that tells the JavaScript engine to wait for the result of the promise.

**Note:** If you await something, you make your code asynchronous. Thus, if you await something, you have to do that inside an async function. An async function is a function that returns a promise. Once you await something, all your code is asynchronous as well! And that code can now be awaited. A little confusing! 

### When do we actually create a promise?

I found this [nice blog post](https://www.aleksandrhovhannisyan.com/blog/javascript-promise-tricks/). Usually, you create a promise, if:

- You mock something that is asynchronous.
- You want to delay something (setTimeout/sleep).
- You work with older JavaScript libraries that don't support promises and you have to wrap them in a promise in order to await them.

## What is the event loop?

I mentioned that all asynchronous code creates a new "task" for our worker. The JavaScript runtime manages these tasks through a "task queue". The JavaScript runtime acts as an [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop). 

Let's try and see if we can translate our [index.js](/promises/index.js) into different tasks for the event loop. Please note, I might not get this right!

We run `node promises/index.js`, which starts node and starts the node JavaScript environment. The event loop starts, and the first task is to load the module `promises/index.js`. The event loop then starts to execute the code in the module (*Task 1*).

We call the `main` function in the module (Line 71). The event loop then starts to execute the code in the `main` function. We encounter the `await` keyword (Line 55). *Task 1* initializes the calls to `getAllUsers` and `getAllTweets` in line 55 but it will not wait for the result of these calls. 

Why is that? Because we are not awaiting the `main` function call (Line 71)! So our *Task 1* (whos job was it to call `main`) is not interested in the result of the `main` function call. Thus, it stops executing the code in the `main` function and continues the script, it realizes we reached the end and it stops! *Task 1*  is done.

Once both `getAllUsers` and `getAllTweets` return, the event loop receives the results of these calls. It then executes the code in the `main` function again (*Task 2*). We execute the rest of the `main` function and since this is the end of our call stack, we terminate the script!
