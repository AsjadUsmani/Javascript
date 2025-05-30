//singleton

const tinderUser = new Object({
    isLoggedIn: false,
    fullname: {
        userfullname: {
            firstName: "asjad",
            lastName: "usmani"
        }
    }
});

console.log(tinderUser.fullname.userfullname.firstName);
console.log(tinderUser);

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "b"}
let obj3 = {5: "a", 6: "b"}

// let obj = {obj1, obj2, obj3}//{
//   obj1: { '1': 'a', '2': 'b' },
//   obj2: { '3': 'a', '4': 'b' },
//   obj3: { '5': 'a', '6': 'b' }
// }

// let obj = Object.assign({}, obj1, obj2, obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//using spread operator.
let obj = {...obj1, ...obj2, ...obj3}
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(obj);

//database se values aise aate hai
let userDetails = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
];
// console.log(userDetails[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));//koi bhi object ki saari keys dega array ke ander till depth level 1.
console.log(Object.values(tinderUser));//koi bhi object ki saari values dega array ke ander till depth level 1.


//literal object.
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
// console.log(user);

//Object.freeze(user);//user object gets freezed and no changer after this line to object user gets applied.

// user.email = "asjad@yahoo.com"
// console.log(user);


user.greeting = function() {
    console.log("Hello JS user.");
}

user.greeting2 = function() {
    console.log(`Hello JS user ${this.name}.`);
}

// console.log(user.greeting());
// console.log(user.greeting2());
