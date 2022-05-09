// Arithmetic operators
const a = 38;
const b = 16;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);
// increment decrement operators
let count = 0;
// console.log(count++)
// console.log(count++)
// console.log(count--)
// console.log(++count)
// console.log(--count)
// console.log(count)
const sum = 10 + ++count;

// Relational operators
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// Logical Operators
console.log(50 > b && 50 < a);
console.log(50 > b || 50 < a);
console.log(!(a < b));

// Equality Operators
console.log("==================== equality ==================");
console.log("20" == 20);
console.log("20" != 20);
console.log("20" === 20);
console.log("20" !== 20);

// assignment operators
let x = 20;
x += 20; // x = x + 20
console.log(x);
x -= 10; // x = x - 10
console.log(x);
x *= 2; // x = x * 2
console.log(x);
x /= 4; // x = x / 4
console.log(x);
x **= 2;
console.log(x);
x %= 5;
console.log(x);

const str =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy? The dog says, that I am not lazy. The dog says, that I am not lazy.";

console.log(
  str.replaceAll(str.substring(52), "monkey") + str.substring(55, 84)
);

let t = 0;
const result = str.replace(/DOG/ig, function (match) {
  t++;
  console.log(match, t);
  return t === 2 ? "monkey" : match;
});
console.log(result);

const lastIndex = str.lastIndexOf('dog');
const updatedStr = str.slice(0, lastIndex) + str.slice(lastIndex, lastIndex + 4).replace('dog', 'monkey') + str.slice(lastIndex + 4);
console.log(updatedStr);
