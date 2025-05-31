const user = {
    username: "Asjad Usmani",
    price: 999,
    greetingMessage: function() {
        console.log(`Welcome ${this.username}`);
    }
}

// user.greetingMessage();

user.username = "Shaikh Mohammed Afzal";

// user.greetingMessage();

console.log(this);//{} <- aisa isiliye hota hai ki js ye node hai or agar console pe krte to window object milta hai.

//Arrow Function:-
//NOTE: "this" ye keyword lhali object ke liye kaam aata hai na ki function me.

// const fun1 = () => {
//     let username = "Asjad";
//     console.log(this.username);
// }

const add = (num1, num2) => num1 + num2;//if you have a single line of function then no need to write return keyword as it directly returns a value.

console.log(add(5, 10));
