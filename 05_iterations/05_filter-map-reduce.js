//forEach() method never returns a value even if you return a value so it is always undefined.
//filter() method is used to return an array of elements by checking conditions.

let numbers = [1, 2, 3, 4, 5, 6];
const greaterThanFive = numbers.filter( (num) => num > 5);
// console.log(greaterThanFive);//[6];


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (book) => book.genre == "Science")
// console.log(userBooks);

//map()

const yourNumber = [10, 3, 50, 18, 20, 34];


// adding 10 to each number in array yourNumber
const newNumber = yourNumber.map( (num) => num + 10);
// console.log(newNumber);//[ 20, 13, 60, 28, 30, 44 ]


//reduce method in js
const reducedNums = yourNumber.reduce( (acc, currval) => {
  return acc + currval;
}, 0);

console.log(reducedNums);


const cart = [
  {
    course: "Data Science",
    price: 12999
  },
  {
    course: "Python",
    price: 999
  },
  {
    course: "Mobile dev course",
    price: 5999
  },
  {
    course: "Web Dev",
    price: 1999
  }
];

const total = cart.reduce( (acc, currPrice) => acc + currPrice.price, 0);
console.log(total);
