const promiseOne = new Promise(function (resolve, reject){
    setTimeout(() => {
        console.log("Async in JS");
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("done");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async in JS");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async resolved.");
    
})

const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({username: "Asjadusmani@gmail.com", password: 123});
        }else{
            reject("ERROR!, Something wrong occured.");
        }   
    }, 1000);
});

//first method.
promiseTwo.then(function(response) {
    return response.username;
}).then(function(response) {
    console.log(response);
}).catch(function(err) {
    console.log(err);
}).finally(function() {
    console.log('Program either executed or failed');
});

// 2nd method.
async function consumePromiseTwo(response) {
    try {
        const result = await promiseTwo;//try catch is used ti handle if error occued in promise.
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseTwo();