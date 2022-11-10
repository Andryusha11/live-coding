const numberList1 = [1, 2, 3, 4, 5];

//input none
//output number

console.log('BEFORE POP', numberList1);
const resPop = numberList1.pop();
console.log(resPop);
console.log('AFTER POP', numberList1);

// ===================================================

const numberList2 = [1, 2, 3, 4, 5];

//input number
//output number(new length)

console.log(numberList2);

const pushRes = numberList2.push(10);
console.log(numberList2);
console.log(pushRes);

// ===================================================

const numberList3 = [1, 2, 3, 4, 5];

//input number
//output number(new length)

console.log('BEFORE UNSHIFT', numberList3);
const resUnshift = numberList3.unshift(9);
console.log(resUnshift);
console.log('AFTER UNSHIFT', numberList3);

// ===================================================

const numberList4 = [1, 2, 3, 4, 5];

//input
//output

// console.log('BEFORE UNSHIFT', numberList3);
// const resUnshift = numberList3.unshift(9);
// console.log(resUnshift);
// console.log('AFTER UNSHIFT', numberList3);
