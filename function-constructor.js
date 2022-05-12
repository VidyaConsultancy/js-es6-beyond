// Function Constructor
function Person(name, age, energy = 100) {
  this.name = name;
  this.age = age;
  this.energy = energy;

  this.walk = function () {
    if (this.energy <= 0) return `I can't walk. Out of energy.`;
    if (this.energy < 40) return `Not enough energy to walk`;
    this.energy -= 40;
    return `I am walking`;
  };
}

const john = new Person("John", 29);
console.log(john.walk());
console.log(john.walk());
console.log(john.walk());
const jane = new Person("Jane", 22);
console.log(john);
console.log(jane);
function Book(name) {
  console.log(name);
}
const book = new Book();
console.log(book);
console.log(jane instanceof Person);
