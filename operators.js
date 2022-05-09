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
console.log(count++);
console.log(count++);
console.log(count--);
console.log(++count);
console.log(--count);
console.log(count);
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
x **= 2; // x = x ** 2
console.log(x);
x %= 5; // x = x % 5
console.log(x);

// Ternary operator
// general syntax const expValue = exp ? value1 : value2;
const value = a < b ? "a is less than b" : a + b;
const value1 =
  a < b
    ? "a is less than b"
    : a > b
    ? "a is greater than b"
    : "a is equal to b";
console.log(value);
console.log(value1);
