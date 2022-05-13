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


// Function Constructor
function NewPerson(name, age, energy = 100) {
  this.name = name;
  this.age = age;
  this.energy = energy;
}

NewPerson.prototype.walk = function () {
  if (this.energy <= 0) return `I can't walk. Out of energy.`;
  if (this.energy < 40) return `Not enough energy to walk`;
  this.energy -= 40;
  return `I am walking`;
};

function Employee(name, age, dept) {
    NewPerson.call(this, name, age);
    this.dept = dept;
}
console.log(Object.create({}))

Employee.prototype = Object.create(NewPerson.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.walk = function () {
  NewPerson.prototype.walk();
  return `Employee is walking`
}

const jonas = new Person("Jonas", 29);
const jenny = new Person("Jenny", 22);
const e1 = new Employee('Jonas', 28, 'HR');
console.log(jonas);
console.log(jenny);
console.log(e1);
// console.log(jane.walk())
// console.log(john.walk());
// console.log(john.walk());
// console.log(john.walk());