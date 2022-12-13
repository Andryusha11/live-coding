//input obj
//output obj[]

//algo
//1. create res arr
//2. get key/value
//3. add new key id to value
//4. push to the arr
//5. sort obj by age
const getCustomersList = (obj) => {
  const resArr = [];
  const entries = Object.entries(obj);

  for (let index = 0; index < entries.length; index++) {
    resArr.push({ ...entries[index][1], id: entries[index][0] });
  }

  resArr.sort((a, b) => a.age - b.age);

  return resArr;
};

// const getCustomersList = (obj) =>
//   Object.entries(obj)
//     .map(([key, value]) => ({ ...value, id: key }))
//     .sort((a, b) => a.age - b.age);

const users = {
  'users-id-1': {
    name: 'Tom',
    age: 22,
  },
  'users-id-2': {
    name: 'Bob',
    age: 65,
  },
  'users-id-3': {
    name: 'Rick',
    age: 12,
  },
};

console.log(getCustomersList(users));
console.log(users);
