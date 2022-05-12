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


/*
// Function Constructor
function Person(name, age, energy = 100) {
  this.name = name;
  this.age = age;
  this.energy = energy;
}

Person.prototype.walk = function () {
  if (this.energy <= 0) return `I can't walk. Out of energy.`;
  if (this.energy < 40) return `Not enough energy to walk`;
  this.energy -= 40;
  return `I am walking`;
};

function Employee(name, age, dept) {
    Person.call(this, name, age);
    this.dept = dept;
}
console.log(Object.create({}))

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.walk = function () {
  Person.prototype.walk();
  return `Employee is walking`
}

const john = new Person("John", 29);
const jane = new Person("Jane", 22);
const e1 = new Employee('Jonas', 28, 'HR');
console.log(john);
console.log(jane);
console.log(e1);
// console.log(jane.walk())
// console.log(john.walk());
// console.log(john.walk());
// console.log(john.walk());
*/