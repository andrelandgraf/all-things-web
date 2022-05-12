# Topics

## React & Vanilla JavaScript

Why do we need React? What does React give us that we cannot achieve with vanilla JavaScript?

Well the answer is, technically we could achieve the same thing with vanilla JavaScript, but React abstracts away the painful DOM manipulations and gives us a more declarative way to write code!

You can find a quick and dirty vanilla JS Tic Tac Toe game in the [index.html](/tictactoe/vanilla-js/index.html) file. Please notice the `draw` function inside the `TicTacToe` class. Notice how messy the code is. Please feel free and try to clean it up a bit! But either way, the code is going to be hard to read and hard to maintain.

That's why we need React!

Find the same game written with React inside the [index.jsx](/tictactoe/react/app/routes/index.jsx) file.

Notice how much easier it is to declare our dynamic HTML? And the best thing? It is all declarative and easy to maintain. The state variables in React will trigger are re-rendered automatically anytime we change the state of the game! No `draw` function needed!

## OOP in JavaScript

How do we use classes in JavaScript? What are the benefits of using classes?

JavaScript is an object-oriented programming language and offers a prototype-based inheritance model. We can define classes in JavaScript and use them to create objects. Classes are great to encapsulate data (properties) and behavior (functions) together!
Classes are definetly not as frequently used in JavaScript as in other languages, but they are still a popular choice for creating objects.

Let's say we want to implement a [Tic Tac Toe](/tictactoe/vanilla-js/index.html) game. We can create a class called `TicTacToe` and define its properties and methods. One object of this class is going to represent one game. All functions of the class are going to alter the game state. We can create as many objects as we want. Each will represent a different game.



