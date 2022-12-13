/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

//input obj, key, value
//output new obj

// function addPropertyV1(obj, key, value) {
//   // put your code here
//   obj[key] = value;
//   return obj;
// }

// const transaction1 = {
//   value: 170,
// };

// addPropertyV1(transaction1, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV1(transaction1, 'currency', 'USD'));

// put your code here

//input obj1 obj2
//output obj

// function addPropertyV2(obj, key, value) {
//   // put your code here
//   return Object.assign(obj, { [key]: value });
// }

// const transaction2 = {
//   value: 170,
// };
// const user = {
//   name: 'Tom',
// };

// console.log(addPropertyV2(transaction2, 'currency', 'USD'));
// console.log(transaction2);
// console.log(addPropertyV2(transaction2, 'currency', 'EUR'));
// console.log(transaction2);
// console.log(addPropertyV2(user, 'age', '22'));
// console.log(user);
// addPropertyV2(transaction2, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

// // put your code here
// function addPropertyV3(obj, key, value) {
//   // put your code here
//   return Object.assign({ [key]: value }, obj);
// }

// const transaction2 = {
//   value: 170,
// };
// const user = {
//   name: 'Tom',
// };

// console.log(addPropertyV3(transaction2, 'currency', 'USD'));
// console.log(transaction2);
// console.log(addPropertyV3(transaction2, 'currency', 'EUR'));
// console.log(transaction2);
// console.log(addPropertyV3(user, 'age', '22'));
// console.log(user);
// addPropertyV3(transaction2, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

// // put your code here

//example1
// function addPropertyV4(obj, key, value) {
//   // put your code here
//   const { ...copy } = obj;
//   copy[key] = value;
//   return copy;
// }

//example2
function addPropertyV4(obj, key, value) {
  // put your code here
  return Object.assign({ ...obj }, { [key]: value });
}

const transaction2 = {
  value: 170,
};

const user = {
  name: 'Tom',
};

console.log(addPropertyV4(transaction2, 'currency', 'USD'));
console.log(transaction2);
console.log(addPropertyV4(transaction2, 'currency', 'EUR'));
console.log(transaction2);
console.log(addPropertyV4(user, 'age', '22'));
console.log(user);
