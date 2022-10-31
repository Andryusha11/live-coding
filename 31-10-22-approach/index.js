// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// input number
// output undefined

//algo
// 1. iterate from 2 to num
// 2. check if number is prime
//  2.1 create counter
//  2.2 iterate from 2 to number
//  2.3 if number % index === 0 -> count ++
//  2.4 if counter === 1 -> is not prime
// 3. if prime --> console

function getPrimes(num) {
  // put your code here
  for (let number = 2; number <= num; number += 1) {
    let counter = 0;

    for (let index = 1; index <= number; index += 1) {
      if (number % index === 0) {
        counter += 1;
      }
    }
    console.log('FOR NUMBER ' + number + ' COUNTER FOUND ' + counter);
    if (counter === 2) {
      console.log(number);
    }
  }
}

getPrimes(11);
getPrimes(15);
getPrimes(4);
