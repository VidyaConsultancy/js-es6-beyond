// object literal syntax
const person = {
  name: "John Doe",
  gender: "Male",
  age: 29,
  height: 172,
  walk: () => console.log("I can walk."),
  "can-talk": () => true,
  hobbies: ["reading", "coding", "music"],
  address: {
    street: "MG Road",
    city: "Mumbai",
    country: "India",
    pincode: 400078,
  },
};
const canWalk = "walk";
console.log(person.name);
console.log(person["can-talk"]);
console.log(person[canWalk]);
console.log(person.hobbies[0]);
console.log(person.address.pincode);
person.name = "Jane Doe";
console.log(person.name);
console.log(person);
person.weight = 60;
person.hobbies.shift();
console.log(person);

for (const key in person) {
  const value = person[key];
  console.log(`${key} => ${value}`);
}
