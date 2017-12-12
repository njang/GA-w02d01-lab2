// # ADVANCED (Bonus material)
// You might have used `.sort()` to sort a regular array, but you can also use `.sort()` to sort an array of objects by the values stored in each object.

// Example:

// unsorted array:

// ```javascript
// const movies = [
//   { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
//   { title: "Eraserhead", director: "David Lynch", year: 1978 },
//   { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
// ]
// ```

// sorted by 'title':

// ```javascript
// [ { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 },
//   { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
//   { title: 'L\'Avventura', director: 'Michelangelo Antonioni', year: 1960 } ]
// ```

// If you just use `.sort()` on an array of objects, there are no criteria to sort by (which object comes first?), so the array will not be sorted.

// However, you can provide `.sort()` with arguments to tell JavaScript which **object key** to use to sort the array. In the above example, we sorted by **title**.

// Read the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) -- scroll down to: **Objects can be sorted given the value of one of their properties.**

// ### 1. use .sort() to sort the solar system array alphabetically according to the name of each planet

// <br>

// EXTRA CHALLENGE-CHALLENGE

// ### 2. write a function `sortArrayOfObjects` with two parameters: `arr` and `key` that will sort any array of objects by the `key` input.

// Example of sorting the movies array:

// ```javascript
// console.log(sortArrayOfObjects(movies, "title"));
// ```

// Result sorted by title:

// ```javascript
// [ { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 },
//   { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
//   { title: 'L\'Avventura', director: 'Michelangelo Antonioni', year: 1960 } ]
// ```

// Example of sorting the movies array:

// ```javascript
// console.log(sortArrayOfObjects(movies, "year"));
// ```

// Result sorted by year:

// ```javascript
// [ { title: 'L\'Avventura',
//     director: 'Michelangelo Antonioni',
//     year: 1960 },
//   { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
//   { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 } ]
// ```

// Example of sorting the movies array:

// ```javascript
// console.log(sortArrayOfObjects(movies, "director"))
// ```

// Result sorted by director:

// ```javascript
// [ { title: 'Eraserhead', director: 'David Lynch', year: 1978 },
//   { title: 'Dayereh', director: 'Jafar Panahi', year: 2000 },
//   { title: 'L\'Avventura',
//     director: 'Michelangelo Antonioni',
//     year: 1960 } ]
// ```

// <hr>
