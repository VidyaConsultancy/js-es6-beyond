1. Write a function to generate the table of the given number and return it.

```javascript
function generateTable(n) {
  return null;
}

generateTable(2)
```
`[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];`

2. Write a function to generate the below pattern.
```
* * * * *
  * * *
    *
```

3. We have the below object
```javascript
const rahul = {
  name: 'Rahul',
  gender: 'Male',
  books: ['Think and Grow Rick', 'Rich Dad Poor Dad', 'The Power of Now'],
  movies: [{
    id: 1,
    name: 'Spiderman Homecoming'
  }, {
    id: 2,
    name: 'Spiderman Far From Home'
  }, {
    id: 1,
    name: 'Spiderman No way home'
  }]
}
```
Create a copy of this object called robin. Update the object robin in such a way that the rahul object is not modified.
name => Robin
book-> The Power of Now => The Power of Subconcious Mind
movies-> Spiderman Far From Home => Avengers Endgame

4. Write a function that takes arbitary number of numbers as params and returns the sum of it. Do it using reduce function.
```javascript
// work on the params
function calculateSumOfNumbers() {
  let sum = 0;
  /**
   * Your code goes here
  */
  return sum;
}
```

5. Write a function that returns string generating function with specific greeter prefix. i.e.
```javascript
function createGreeter(greetMessage) {

}
const heyGreeter = createGreeter('hey');
heyGreeter('John')
// output: hey John
const helloGreeter = createGreeter('hello');
helloGreeter('John')
// output: hello John
helloGreeter('Jane')
// output: hello Jane
```

6. Write a class `Book` that will have below member variables `id`, `name`, `author`. Write another class `Fiction` that will extend the base Book class. Write another class `NonFiction` that will also extend the base Book class. Both `Fiction` and `NonFiction` will have member variable `category` and their respective values will be `Fiction` and `Non Fiction`. Also create a method on Book named `introduce` that will return an introduction message like `I am ${bookName} authored by ${author}`. Override this method for Fiction and NonFiction class that should return `I am ${bookName} authored by ${author}. I am a ${cateogry} book.`
