// closures
function createCounter() {
  let count = 0;
  function increment() {
    ++count;
  }
  function getCount() {
    return count;
  }
  return { inc: increment, count: getCount };
}

const counter = createCounter();
console.log(counter.inc());
console.log(counter.count());
console.log(counter.inc());
console.log(counter.count());
console.log(counter.inc());
console.log(counter.count());

function createAddFun(addValue) {
  return function (value) {
    return value + addValue;
  };
}

const add10 = createAddFun(10);
console.log(add10(3));
const add7 = createAddFun(7);
console.log(add7(10));
