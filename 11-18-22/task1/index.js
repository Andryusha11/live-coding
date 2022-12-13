'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

//algo
//1. create empty obj
//2. iterate keylist
//3. add key/value to the obj
//4. return obj

// function buildObject(keysList, valuesList) {
//   // put you code here
//   const obj = {};
//   for (let index = 0; index < keysList.length; index++) {
//     obj[keysList[index]] = valuesList[index];
//   }
//   return obj;
// }

function buildObject(keysList, valuesList) {
  // put you code here
  const obj = keysList.reduce((acc, el, index) => {
    return { ...acc, [el]: valuesList[index] };
  }, {});
  return obj;
}
// examples
const keys = ['name', 'address', 'age', 'city name', 'start', 'transactions'];
const values = [
  'Bob',
  'Ukraine',
  34,
  'New York',
  () => console.log('I am starting'),
  [100, 200, 300],
];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
result.start();

console.log(result);
