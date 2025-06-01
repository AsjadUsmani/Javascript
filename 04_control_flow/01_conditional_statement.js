const userLoggedIn = true;

if (userLoggedIn) {
    // console.log("User is logged in.");
} else {
    // console.log("User is not logged in please log in.");
}

//switch statement.
const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("November");
        break;
    case 2:
        console.log("December");
        break;
    default:
        break;
}


//falsy values: "", 0, BigInt 0n, undefined, null, NaN

const arr = [];
if (arr.length == 0)//checks array length;
{
    console.log("Array is empty.");
}

//check objects length.
let obj = {};
if (Object.keys(obj).length == 0) {
    console.log("object is empty.");
}

//nullish coelescing operator (??): null defined.

let val1 = null ?? 10;//10
let val2 = undefined ?? 20;// 20
let val3 = 30 ?? 40; // 30

// console.log(val1, val2, val3);
