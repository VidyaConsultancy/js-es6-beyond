const rahul = {
  name: "Rahul",
  gender: "Male",
  books: ["Think and Grow Rick", "Rich Dad Poor Dad", "The Power of Now"],
  movies: [
    {
      id: 1,
      name: "Spiderman Homecoming",
    },
    {
      id: 2,
      name: "Spiderman Far From Home",
    },
    {
      id: 1,
      name: "Spiderman No way home",
    },
  ],
};

const robin = { ...rahul };
robin.books = [...rahul.books];
robin.movies = [
  { ...rahul.movies[0] },
  { ...rahul.movies[1] },
  { ...rahul.movies[2] },
];
robin.name = "Robin";
robin.books[2] = "The Power of Subconcious Mind";
robin.movies[1].name = "Avengers Endgame";
robin.movies.push({ id: 4, name: "Avengers Infinity Wars" });
console.log(robin, rahul);
const john = _.cloneDeep(robin);
john.name = "John Doe";
john.books[0] = "The Alchemist";
john.movies[0].name = "Justice League";
console.log(john, robin, rahul);

//prymaid program
//2nd Question
let a = 3;
let b = 5;
let string = "";
for (let i = a; i >= 1; i--) {
  for (let j = b - i; j >= 1; j--) {
    string += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

const numb = [3, 7, 6, 2];
function add(previous, current) {
  const returns = previous + current;
  console.log(`previous:${previous},current:${current}`);
  return returns;
}
console.log(numb.reduce(add));

// let line = 3;
// let star = 5;
// let space = 0;
// for (let i = 1; i <= line; i++) {
//   for (let s = 1; s <= space; s++) {
//     console.log(" ");
//   }
//   for (let j = 1; j <= star; j++) {
//     console.log("*");
//   }
//   console.log();
//   star -= 2;
//   space++;
// }

class Book {
  constructor(id, name, author) {
    this.id = id;
    this.name = name;
    this.author = author;
  }

  introduce() {
    return `I am ${this.name} authored by ${this.author}`;
  }
}

class Fiction extends Book {
  constructor(id, name, author) {
    super(id, name, author);
    this.category = "Fiction";
  }

  introduce() {
    return `${super.introduce()}. I am a ${this.category} book.`;
  }
}

class NonFiction extends Book {
  constructor(id, name, author) {
    super(id, name, author);
    this.category = "Non Fiction";
  }

  introduce() {
    return `${super.introduce()}. I am a ${this.category} book.`;
  }
}

const b1 = new Book(1, "The Think and Grow Rick", "Napolian Hill");
const nf1 = new NonFiction(2, "The Wings on Fire", "A.P.J. Kalam");
const f1 = new Fiction(3, "The Alchemist", "Paulo Cohelo");
console.log(b1.introduce());
console.log(nf1.introduce());
console.log(f1.introduce());

// using function constructor
function BookFC(id, name, author) {
  this.id = id;
  this.name = name;
  this.author = author;
}

BookFC.prototype.introduce = function () {
  return `I am ${this.name} authored by ${this.author}`;
};

function FictionFC(id, name, author) {
  BookFC.call(this, id, name, author);
  this.category = "FictionFC";
}

FictionFC.prototype = Object.create(BookFC.prototype);
FictionFC.prototype.constructor = FictionFC;
FictionFC.prototype.introduce = function () {
  return `${BookFC.prototype.introduce.call(this)}. I am a ${
    this.category
  } book.`;
};

function NonFictionFC(id, name, author) {
  BookFC.call(this, id, name, author);
  this.category = "Non Fiction";
}

NonFictionFC.prototype = Object.create(BookFC.prototype);
NonFictionFC.prototype.constructor = NonFictionFC;
NonFictionFC.prototype.introduce = function () {
  return `${BookFC.prototype.introduce.call(this)}. I am a ${
    this.category
  } book.`;
};

const b2 = new BookFC(1, "The Think and Grow Rick", "Napolian Hill");
const nf2 = new NonFictionFC(2, "The Wings on Fire", "A.P.J. Kalam");
const f2 = new FictionFC(3, "The Alchemist", "Paulo Cohelo");
console.log(b2, nf2, f2);
console.log(b2.introduce());
console.log(nf2.introduce());
console.log(f2.introduce());

let line = 3;
let star = " ";
for (let i = 0; i < line; i++) {
  for (let s = 0; s < i; s++) {
    star += " ";
  }
  for (let j = 0; j < 2 * (line - i) - 1; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);