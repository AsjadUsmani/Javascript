const str = "Hello World";
for (const char of str) {
    if (char == " ") {
        continue;
    }
    else{
        // console.log(`Each Charcter is ${char}`);
    }
}

const map = new Map();
map.set('IN', 'India');
map.set('FR', 'France');
map.set('AR', 'Armenia');
map.set('NI', 'Nigeria');

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}
//forof loop doesn't work for objects but does for map.
//for object we will be using forin loop.

const myObject = {
    py: 'Python',
    cpp: 'C++',
    rb: 'Ruby',
    js: 'JavaScirpt'
}

for (const key in myObject) {
    console.log(`${key} is Shortcut for ${myObject[key]}`);
}

//Map() iteratable nahi hota hai isiliye uske upper forin loop nahi kaam krega.
//array pe agar forin loop lagaoge to key uska index hota hai.