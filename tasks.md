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