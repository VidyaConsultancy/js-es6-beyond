// array destructuring
const fruit = "Grapes";
const fruits = ["Apple", "Banana", "Mango", "Orange", fruit];
// const apple = fruits[0];
// const banana = fruits[1];
// const restFruits = fruits.slice(2);
const [apple, , ...restFruits] = fruits;
console.log(apple, restFruits);

// const copyOfFruits = [].concat(fruits);
const copyOfFruits = [...fruits];
console.log(copyOfFruits, fruits);
copyOfFruits.push("Pineapple");
console.log(copyOfFruits, fruits);

// object destructuring
const weight = 60;
const person = {
  name: "John Doe",
  gender: "Male",
  age: 28,
  height: 173,
  weight,
  address: { street: "MG Road" },
  hobbies: ["Reading"],
};
// const name = person.name;
// const gender = person.gender;
// const restAttr = {age: person.age, height: person.height};
const { name, height, ...restAttr } = person;
console.log(name, height, restAttr);
// const copyOfPerson = Object.assign({}, person);
const copyOfPerson = { ...person };
// deep copy
// const copyOfPerson = {
//   ...person,
//   address: { ...person.address },
//   hobbies: [...person.hobbies],
// };
console.log(copyOfPerson, person);
copyOfPerson.address.pincode = 400078;
copyOfPerson.hobbies[0] = "Writing";
console.log(copyOfPerson, person);
