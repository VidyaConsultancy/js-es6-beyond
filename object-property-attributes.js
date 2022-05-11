const person = {};
// person.name = 'Jane Doe';
Object.defineProperties(person, {
  name: {
    value: "John Doe",
    writable: true,
    enumerable: true,
    configurable: false,
  },
  age: { value: 28, enumerable: true },
});
// Object.defineProperty(person, "name", { value: "Jane Doe", writable: false });
// Object.defineProperty(person, "age", { value: 28 });
console.log(person);
for (const key in person) {
  console.log("In for in");
  console.log(`${key}:: ${person[key]}`);
}
person.name = "John Doe";
console.log(person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

console.log(Object.isSealed(person));
// Object.seal(person);
person.name = "John Doe";
Object.freeze(person);
if (Object.isExtensible(person)) {
  Object.defineProperty(person, "height", { value: 173 });
}
person.name = "Jonas Doe";
console.log(person);
console.log(Object.isSealed(person));

const arr = new Array();
const obj = new Object();
console.log(arr, obj);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for (const key of Object.keys(person)) {
  console.log(`${key}:: ${person[key]}`);
}
for (const value of Object.values(person)) {
  console.log(`${value}`);
}
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}:: ${value}`);
}
