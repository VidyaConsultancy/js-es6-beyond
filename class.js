// Function Constructor
class Person {
  constructor(name, age, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  walk() {
    if (this.energy <= 0) return `I can't walk. Out of energy.`;
    if (this.energy < 40) return `Not enough energy to walk`;
    this.energy -= 40;
    return `I am walking`;
  }
}

class Employee extends Person {
  constructor(name, age, dept) {
    super(name, age);
    this.dept = dept;
  }

  walk() {
    super.walk();
    return `Employee is walking.`;
  }
}

const john = new Person("John", 29);
const jane = new Person("Jane", 22);
const e1 = new Employee("Jonas", 28, "HR");
console.log(john);
console.log(jane);
console.log(e1);
console.log(jane.walk());
console.log(e1.walk());
// console.log(john.walk());
// console.log(john.walk());
// console.log(john.walk());
