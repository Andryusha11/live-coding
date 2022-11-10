// // input callback
// // output newArray

// // input number
// // output number

// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// const mapResult = numbersList.map((el) => (el > 0 ? el * el : el));
// console.log(mapResult);

// // input callback
// // output el or undefined

// // input el
// // output boolean

// const findResult = numbersList.find((el) => el > 100);
// console.log(findResult);

// // input callback
// // output undefined

// // input el
// // output undefined

// const forEachResult = numbersList.forEach((el) => {
//   console.log(el > 0 ? el : 'Error');
// });

// input callback
// output something you want

// input accumulator, el, index, array, initualValue
// output accumulator

const transaction = [5, 0, -50, 8, -100, 10, -4, 50];
// const reduceResult = transaction.reduce((acc, el) => {
//   if (el < 0) {
//     acc += el;
//   }
//   return acc;
// }, 0);

const reduceResult = transaction.reduce(
  (acc, el) => (el < 0 ? (acc += el) : acc),
  0
);
