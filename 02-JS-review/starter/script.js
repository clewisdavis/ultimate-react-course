const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


// Destructuring
/*
const books = getBooks();

// Helpful whenever you need to get some data out of an obejct. 

const book = getBook(3);

// const title = book.title;
// const author = book.author;
// author;
// title;

// Object Destructuring

const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;

console.log(author, title);

// Destructuring with Arrays

console.log(genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// For arrays, just use the square brackets and point to the array. 

const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

console.log(primaryGenre, secondaryGenre, otherGenre);


// The Rest/Spread Operator, just use the ..., you can only place the spread operator at the end, must be last in the destructuring
// Same syntax, ..., is also used for the spread operator

const newGenres = [...genres, 'epic game'];
// want an array that contains each, take all the value out of array and place them one by one. 
newGenres;

// objects, add new properties and update existing
// Adding a new property
// Overwriting an existing property

const updatedBook = { 
  ...book, 
  moviePublicationDate: '2001-12-19', 
  pages: 1210,
};
updatedBook;

// Template Literals
// allows you to create strings that contain any JS within the strings
// use the backticks, ``, indicate to JS this is JS. 
// add the ${} to add in a JS expression

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, is a book with ${pages}-page long book, written by ${author} and published in ${getYear(publicationDate)}. 
The book ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;

summary;

// Ternary operator
// Operator that has three parts
// 1. check condition, 2. result if true, 3. result if false

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
pagesRange

console.log(`The book has ${pagesRange} pages`)

// Arrow Functions
// ES6 one line functions

// function getYear(str) {
//   return str.split("-")[0];
// }

// automatically returned without having to write the return keyword, single line
//const getYear = (str) => str.split("-")[0];

//console.log(getYear(publicationDate));


// Logical Operators, short circuit. 
// operator will immediately return the first value
// helpful to use as an if statement

console.log(true && 'Some value');
console.log(false && "Some value");

console.log(hasMovieAdaptation && 'This book has a movie');

// truthy, any value that is not a false
// falsy, 0, '', null, undefined

console.log('jonas' && 'Some string');
console.log(0 && 'Some string');

// or operator
console.log(true || 'some strung');
console.log(false || 'some string');

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || 'no data';
// countWrong;

// ?? will return the second value when it's 'null' or 'undefined'.
// const count = book.reviews.librarything.reviewsCount ?? 'no data';
// count;

// Optional Chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything.reviewsCount;
  return goodreads + librarything;
}

// console.log(getTotalReviewCount(book));

// Optional Chaining
// ask JS to only keep the parts that are defined. 
// in this case, book.reviews.librarything is undefined. 
// add an optional chaining '?' to the end of it, if undefined will not result in error
// set a default with ?? 0
// helpful if some of the value do not exist

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  // optional chaining
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;

}

console.log(getTotalReviewCount(book));


// Array map Method, functional array methods
// return new array based on original one

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  // optional chaining
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
books;
// map will loop over an array and return a new one
const x = [1,2,3,4,5].map(el => el * 2);
console.log(x);

const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  }
));

essentialData;

// filter method
// filter some elements of the array based on some condition

// filter out some books that have more than 500 pages

const longBooks = books
    .filter((book)=>book.pages > 500)
    .filter(book=>book.hasMovieAdaptation);

longBooks;

// combine filter and map
const adventureBooks = books
    .filter(books=>books.genres.includes('adventure'))
    .map(book=>book.title);
adventureBooks;


// reduce method
// most common use case, add together numbers
// to reduce entire array to one value, final value
// arguments, callback function and default value
const pagesAllBooks = books.reduce((sum, book)=> sum + book.pages, 0);
pagesAllBooks;

// array sort method
const arr = [3, 7, 1, 9, 6];
// sort in a ascending way, use a - b, lowest to highest
// when you do, b - a, it will be descending
// follow this as a recipe
// sort mutates the original array
// not a good practice to mutate data
// so use .slice() in front to make a copy
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

// more practical, array of objects, sort by page number, ascending
const sortedByPages = books.slice().sort((a,b) => b.pages - a.pages);
sortedByPages;

// Immutable, not change the original array
// add, delete, and update array w/o changing the original
// array of objects

// 1. Add book object to array
const newBook = {
  id: 6,
  title: "Harry Botter and the Chamber of Candy",
  author: 'Frank Wilson',
};
// spread the new book into the new array
const booksAfterAdding = [...books, newBook];
booksAfterAdding;

// 2. Delete a book from array
// use the .filter method
// condition, !==, returns a false value, this object will not be in the final array
const booksAfterDelete = booksAfterAdding.filter(book => book.id !== 6);
booksAfterDelete;

// 3. Update a book object in the array
// in the callback function, spread in the book array, then update property you want.
const booksAfterUpdate = booksAfterDelete.map(book=> book.id === 1 ? {...book, pages: 1210 } : book);
booksAfterUpdate;

 */

// Async to load data, promise method
// fetch data from an API
// use a dummy API placeholder, jsonplaceholder
// fetching the data will take some time to download, 
// have to wait for the data to do something with it before JS move on to next line, promise
// Promise, pending, rejected, fulfilled
// fulfilled, use the .then method once the data is arrived
// .then(), add a callback function

/*
// fetch fired off the request to the API, then JS moved on to the next line
fetch('https://jsonplaceholder.typicode.com/todos')
    // JS moved to this line, registering this to be executed later, promise
    // after some time passed and the data was retrieved, JS comes back and executes this callback function
    // converted to JSON
    .then(res => res.json())
    // same here, to be executed later
    // receive the data and log it 
    .then((data) => console.log(data));

// then JS executed this line of code. 
console.log('chris');

*/


// Async/Await
// async, will not automatically move forward
async function getTodos() {
  // await, pausing the code in the function
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();

console.log('chris');