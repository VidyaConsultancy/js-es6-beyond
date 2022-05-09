// loops
// for(init; cond; incr/dec)
// while
// do...while
// for...of
// for...in
let i = 0;
for (let i = 0; i < 5; i++) {
  console.log("Outside:: Hello, world!");
  for (let j = i; j < 5; j++) {
    console.log("Before:: Hello, world!");
    if (i >= 2) continue;
    console.log("Inside:: Hello, world!");
  }
}
let count = 0;
while (count < 5) {
  console.log("while:: ", count);
  count++;
}

do {
  console.log("do:: ", count);
  count++;
} while (count < 5);

const fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];
const person = { name: "John Doe", age: 28, height: 170, weight: 60 };
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    console.log(`${key}::\t${person[key]}`);
  }
}
