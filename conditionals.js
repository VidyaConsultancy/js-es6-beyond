// control flow statements in js
// conditionals - if, if else, if else if, if else if else, switch
const a = 20;
const b = 20;

// any condition that evaluates to a boolean
// truthy value > 1, string with at least one char, true, [], {}
// falsy value null, undefined, false, 0, empty string
if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if (a === b) {
  console.log(`${a} is equal to ${b}`);
} else if (a === b) {
  console.log(`${a} is equal to ${b}`);
} else if (a === b) {
  console.log(`${a} is equal to ${b}`);
} else if (a === b) {
  console.log(`${a} is equal to ${b}`);
} else if (a === b) {
  console.log(`${a} is equal to ${b}`);
} else {
  console.log(`${a} is greater than ${b}`);
}
console.log("Normal flow");
// template literal back ticks `a valid string`
// const fname = 'Arpit';
// const lname = 'Jain';
// const fullName = `${fname} ${lname}`;
// loops
const fruit = "apple";
switch (fruit) {
  case "mango":
  case "alphonso":
    console.log("I am mango");
    break;
  case "grapes":
    console.log("I am grape");
    break;
  case "apple":
    console.log("I am apple.");
  // break;
  case "orange":
    console.log("I am orange");
  // break;
  default:
    console.log(`I don't know who I am.`);
    break;
}
