console.log(this);

function sayHi() {
  console.log(`Hello ${this.userName}`);
}

const user = {
  userName: 'Andrii',
};
const sayHiBinded = sayHi.bind(user);
sayHiBinded();
