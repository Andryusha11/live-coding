/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

function sum(from, to, resolver) {
  // put your code here
  let result = 0;
  for (let i = from; i <= to; i++) {
    result += i;
  }

  resolver(result);
}

function printResult(res) {
  // put your code here
  console.log(res);
}

// test data
sum(10, 15, printResult);

function alertResult(res) {
  // put your code here
  alert(res);
}

sum(10, 15, alertResult);
