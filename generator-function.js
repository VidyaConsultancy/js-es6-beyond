// generator functions
function* generator() {
  console.log("First line");
  yield;
  console.log("Second line");
  yield "Hello world";
}

const myGen = generator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

function* countGenerator() {
  let count = 1;
  while (true) {
    if (count > 10) return "done";
    yield count++;
  }
}

const countIterator = countGenerator();
for (const iterator of countIterator) {
  console.log(iterator);
}
