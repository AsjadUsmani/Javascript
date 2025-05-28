let age = "33abc";

// console.log(typeof age);

let ageInNumber = Number(age);

// console.log(typeof ageInNumber);
// console.log(ageInNumber);

/*Numbers me convert karte waqt :-
null - agar null hoti value to uska type object
or uska number conversion baad value hai wo
0 rehti
undefined - iski value NaN rehti hai
boolian - iski value true hai to 1 or false hai to 0
rahegi
*/

let login = 1;
let emptyString = "";
let name = "Asjad";

console.log(Boolean(login));
console.log(Boolean(emptyString));
console.log(Boolean(name));
/* Boolean:-
1 => true
0 => false
"" => false
"Asjad" => true
*/