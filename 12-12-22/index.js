// norm
// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(
//     (key) => firstObj[key] !== secondObj[key]
//   );
// }

// good
function compareObjects(firstObj, secondObj) {
  return Object.keys({ ...firstObj, ...secondObj }).every(
    (key) => firstObj[key] === secondObj[key]
  );
}

// // bad
// function compareObjects(firstObj, secondObj) {
//   const biggerObj =
//     JSON.stringify(firstObj).length > JSON.stringify(secondObj).length
//       ? firstObj
//       : secondObj;
//   return !Object.keys(biggerObj).some(
//     (key) => firstObj[key] !== secondObj[key]
//   );
// }

// const compareObjects = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);
//   if (firstObjKeys.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return !firstObjKeys.some((key) => firstObj[key] !== secondObj[key]);
// };

// const compareObjects2 = (firstObj, secondObj) =>
//   JSON.stringify(Object.entries(firstObj).sort()) ===
//   JSON.stringify(Object.entries(secondObj).sort());

// function compareObjects(firstObj, secondObj) {
//   const firstArray = Object.keys(firstObj);
//   if (firstArray.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstArray.reduce((acc, element) => {
//     if (firstObj[element] !== secondObj[element]) {
//       acc = false;
//     }
//     return acc;
//   }, true);
// }

const compareObjects = (firstObj, secondObj) =>
  Object.keys(firstObj).reduce(
    (acc, key, index) =>
      firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1,
    0
  ) === Object.keys(secondObj).length;
