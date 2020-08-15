// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

console.log("==== Closures ====");

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:
console.log(
  `The nested function that is insied "muFunction()" can access the variable "internal" because that variable is within its lexical scope, meaning, it is within the scope in which it can reach it. It the variable was outside of "myFunction()", then it would be outside its lexical scope, thus being unreachable`
);

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let counter = 0;

function summation(num) {
  for (let i = 0; i <= num; i++) {
    counter += i;
  }
  return counter;
}

console.log(sumation(4));
