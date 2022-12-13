// input: arr, callback
//output: arr

//input: el, index, arr
//output: bool

// algo
//1. iterate arr - loop
//2. call callback for each el
//3. if callback true => push el

const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index++) {
    const callbackRes = callback(arr[index], index, arr);
    if (callbackRes === true) {
      resultArr.push(arr[index]);
    }
  }
  return resultArr;
};

const mapArrayElements = (arr, callback) => {
  // put you code here
  const resultArr = [];
  for (let index = 0; index < arr.length; index++) {
    const elem = arr[index];
    resultArr.push(callback(elem, index, arr));
  }
  return resultArr;
};

const example = [1, 2, 3, 4, 5, 6, 7];
const exampleCallback = (el) => el % 2 === 0;
console.log(filterArrayElements(example, exampleCallback));

const example1 = ['andrew', 'anna', 'kiril', 'emma'];
const exampleCallback1 = (el) => el.includes('an');
console.log(filterArrayElements(example1, exampleCallback1));

const exampleCallback2 = (el, index, arr) => el * 2 + 3;
console.log(mapArrayElements(example, exampleCallback2));

const exampleCallback3 = (el) => el + '2';
console.log(mapArrayElements(example1, exampleCallback3));
