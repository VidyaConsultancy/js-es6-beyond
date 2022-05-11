function greet(gender, name = "Guest") {
  // default parameter value
  return `Hello ${name}`;
}

console.log(greet("John"));
console.log(greet("Jane"));
console.log(greet());

function namedParams({ name, age, gender, ...restParams }) {
  // named parameters + rest parameter to handle arbitary number of items
  console.log(`Hi, I am ${name}. I'm ${age} year old ${gender}.`, restParams);
}

namedParams({
  height: 160,
  gender: "Female",
  name: "Jane Doe",
  weight: 60,
  age: 24,
});

function variableLengthParams(a, b, c, ...params) {
  // rest operator to handle arbitary number of parameters
  console.log(a, b, c, params);
}
const numbers = [10, 20, 30, 40, 50];
variableLengthParams(...numbers, ...numbers); // spread operator to send multiple values
variableLengthParams(10, 20, 30, 40, 50, 10, 20, 30, 40, 50);
