// function declaration
// function expression
// immediately invoked function expression IIFE
// arrow function
funFun("Javascript", "fun");

function funFun(lang, adjective) {
  const sentence = `${lang} is a ${adjective} language`;
  return sentence;
  console.log("I am outside scope");
}

console.log(funFun("Python", "powerful"));
// anotherFun(); // invalid
const anotherFun = function () {
  console.log("Javascript is a tricky language");
};
anotherFun();

const result = (function (c) {
  const a = 10;
  console.log("IIFE");
  function fun3() {
    console.log("Fun 3");
  }
  fun3();
  const b = function () {
    console.log("Inside IIFE");
  };
  b();
  return a + c;
})(10);
console.log(result);

const add = (a) => 10 + a;
console.log(add(10));
