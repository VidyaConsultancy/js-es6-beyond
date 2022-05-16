// call, bind, apply

function add(a, b, c) {
  console.log(this);
  return a + b + c;
}

console.log(add(10, 20, 30));
console.log(add.call({ key: "outer" }, 10, 20, 30));
console.log(add.apply({}, [10, 20, 30]));
const add10 = add.bind({}, 10, 20);
console.log(add10(20));

function addTemp() {
  Object.create({});
}
