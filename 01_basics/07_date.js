const myDate = new Date(2026, 4, 12);

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

myDate.toLocaleString('default', {
    day: "numeric"
});
