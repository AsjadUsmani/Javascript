const marvelHeroes = ["thor", "iron-man", "Hulk"];
const dcHeroes = ["Batman", "Superman", "Flash"];

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);

//Using concat() method
/*
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);
*/

//using spread operator(mostly used)
const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

const anotherArray = [1, 2, 3, 4, [5, 6], 7, [2, 4, 5, [3, 6, 7]]];

console.log(anotherArray);//[ 1, 2, 3, 4, [ 5, 6 ], 7, [ 2, 4, 5, [ 3, 6, 7 ] ] ]

const newAnotherArray = anotherArray.flat(Infinity);//Array ko infinite depth tak flat krega
// console.log(newAnotherArray);[
//   1, 2, 3, 4, 5, 6,
//   7, 2, 4, 5, 3, 6,
//   7
// ]


// Array methods
console.log(Array.isArray("Asjad"));//checks if this is an array(false)

console.log(Array.from("Asjad"));//converts in array.
//[ 'A', 's', 'j', 'a', 'd' ]


let score1 = 100;
let score2 = 200;
let score3 = 300;

//mujhe in variables ka array chahiye to?
console.log(Array.of(score1, score2, score3));
//[ 100, 200, 300 ]