# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

> You have three hours to complete this challenge. Plan your time accordingly.

## Description

You will notice there are several JavaScript files being brought into the index.html file. Each of those files contain JavaScript problems you need to solve. If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

**A: When using the `.forEach`, you are executing a function for each of the items within the array and then you can return your results. `.forEach` can return anything that the function may be executing. When you use `.map`, you are essentially creating a new array with the same length as the original, but modifying each array item in the function. `.map` returns a whole new array, based on your function.**

2. Explain the difference between a callback and a higher order function.

**A: A callback is a function that you use inside another function when passed as an argument. So basically, a callback means you are passing that function to be used inside another function. A higher order function, is a function that relies on a callback function in order to work. So in short, a callback function is the function being passed as an argument, while the higher order function is the function using that callback function.**

3. What is closure?

**A: A closure happens when a function uses a variable from the lexical scope. This means that it is using a variable that is outside the function, but it is reachable within its scope. For example, a function that is using a variable from the global scope is considered a closure, since it is using a variable outside from its arguments, but still reachable within the lexical scope.**

4. Describe the four rules of the 'this' keyword.

**A: When we use the `this` keyword, we are referring to the parent object from where it is called. The `this` keyword has 4 key principles(or rules). The first one is the Window Binding principle. This is when the `this` is referencing the object of global scope, since we have not declared object to be used with it. The second ons is the Implicit Binding principle. This is when we have declared object, and we are using the `this` keyword within it, in order to be able to reference any property from that object specifically. The third one is the 'new' Binding principle. This is when we create a new object using a constructor function, and then using the 'new' operator with that constructor. The fourth and last one is the Explicit Binding principle. This is when we combine and link 2 constructor functions(essentially creating a child constructor using a parent constructor's properties) by using the `call()` or `apply()` methods.**

5. Why do we need super() in an extended class?

**A: When we create an extended class, we MUST always reference all of the parent's(or main class) properties. Otherwise, it will not work as an extension, but more like a new class.**

### Task 1 - Project Set up

Follow these steps to set up and work on your project:
Make sure you clone the branch that the TK links to: the vnext branch, NOT master!

- [x] Create a forked copy of this project.
- [x] Add TL as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Create a pull request before you start working on the project requirements. You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE
- [x] Implement the project on your Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

### Task 2 - Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.

- [x] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started. Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope.

- [x] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.

- [x] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.

- [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3 - Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission Format

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by merging the branch back into master.
