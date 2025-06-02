const programming = ["js", "Python", "Ruby", "c++", "java"];

// programming.forEach(function(item) {
//     console.log(item);
// })

//using arrow function.
// programming.forEach( (item) => {
//     console.log(item);
// });

//it will not only take each element of arrar, i.e item but also 2nd paramenter as intex and 3rd parameter as whole array.

programming.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
});
// // output:-
// js 0 [ 'js', 'Python', 'Ruby', 'c++', 'java' ]
// Python 1 [ 'js', 'Python', 'Ruby', 'c++', 'java' ]
// Ruby 2 [ 'js', 'Python', 'Ruby', 'c++', 'java' ]
// c++ 3 [ 'js', 'Python', 'Ruby', 'c++', 'java' ]
// java 4 [ 'js', 'Python', 'Ruby', 'c++', 'java' ]

//database se value array ek form me hoti hai or har element vo array ka ek object hota hai.
// [{}, {}, {}];

let database = [
    {
        languageName: "Python",
        LanguageExtension: "py"
    },
    {
        languageName: "Ruby",
        LanguageExtension: "rb"
    },
    {
        languageName: "JavaScript",
        LanguageExtension: "js"
    },
    {
        languageName: "java",
        LanguageExtension: "java"
    }
];

database.forEach( (item) => {//har item ek object hai
    console.log(item.languageName);
});