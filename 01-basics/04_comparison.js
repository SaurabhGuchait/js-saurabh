// console.log("2" > 1); //Auto converted string to number so it is not recommened to compare diff data types else appropriate results does not comes in.
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);
/* Equality Operator == and comparison operator works differently,
Comparison converts null to a number, treating it as 0.
that's why null>0 came as false and null>=0 came as true*/

// console.log(undefined > 0);// false
// console.log(undefined >= 0);// false
// console.log(undefined == 0);// false

// === not only checks value but also there datatype

console.log("3">=2);


