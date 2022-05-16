class Person {
  constructor(name, hobbies) {
    this.name = name;
    this.hobbies = hobbies;
  }

  listHobbies() {
    // const _this = this;
    this.hobbies.forEach(
      (hobby) => {
        console.log(`Hi, this is ${this.name}. I like to ${hobby}`);
      } /* this */
    );
  }
}

const john = new Person("John Smith", ["read", "write", "code", "sleep"]);
john.listHobbies();

function PersonFC(name, hobbies) {
  this.name = name;
  this.hobbies = hobbies;
}

PersonFC.prototype.listHobbies = function () {
  this.hobbies.forEach((hobby) => {
    console.log(`Hi, this is ${this.name}. I like doing ${hobby}`);
  });
};

const jane = new Person("Jane Smith", ["read", "write", "code", "sleep"]);
jane.listHobbies();
