const anotherNumbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 123];

//input callback
//output	newArr

//callback
//input el, index, arr
//output bool

// function filterCallback(el) {
//   return el > 5;
// }

// const filterResult = anotherNumbersList.filter(filterCallback);

// console.log(filterCallback);

const filterResult2 = anotherNumbersList.filter((el) => el > 5);

console.log(filterResult2);
