//singleton

//literal

const sym = Symbol("my-key");//defining symbol

const user = {
    name: "asjad",
    location: "maharashtra",
    [sym]: "myKey1",//using symbol inside an object.
    age: 21,
    isLoggedIn: false
}

// console.log(user[sym]);
// console.log(typeof sym);

user.email = "asjad@google.com";
console.log(user);

//Object.freeze(user);//user object gets freezed and no changer after this line to object user gets applied.

// user.email = "asjad@yahoo.com"
// console.log(user);


user.greeting = function() {
    console.log("Hello JS user.");
}

user.greeting2 = function() {
    console.log(`Hello JS user ${this.name}.`);
}

console.log(user.greeting());
console.log(user.greeting2());
