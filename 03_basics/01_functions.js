function sayMyName() {
    console.log("A");
    console.log("S");
    console.log("J");
    console.log("A");
    console.log("D");
}

// sayMyName();

function userLogin(username) {
    if(!username){
        return `please enter a username.`
    }
    return `${username} just logged in.`
}

// console.log(userLogin('Asjad'))

//Rest operator in javascript
function addCart(...num1) {
    return num1;//returns a array of namy parameters passed in num1
}
console.log(addCart(20, 30, 500, 100))//[ 20, 30, 500, 100 ]

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));