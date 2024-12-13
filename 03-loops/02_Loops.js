//for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } Syntax

// let sum = 0;
// for(let i=0;i<10;i++){
//     sum = sum + i;
// }
// console.log(sum);//45

// break and continue

// for (let i = 0; i < 20; i++) {
//     if(i == 5){
//         console.log(`Value of i is: ${i}`);//value of i is: 5
//         break
//     }
// }

// for (let i = 0; i < 10; i++) {
//     if(i != 5){
//         console.log(`Value of i is: ${i}`);
//         continue
//     }
// }

//for-of loop
// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }

//map
const mymap = new Map
mymap.set(1,"a");
mymap.set(2,"b");
mymap.set(3,"c");

//console.log(mymap);

//loop on map
// for (const [key,value] of mymap) {
//     console.log(key);
//     console.log(value);
// }

//for-each loop

const coding = ["js","ruby","python","cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

const myCoding = [
    {
        name: "Java",
        sign: "Java"
    },
    {
        name: "Python",
        sign: "py"
    },
    {
        name: "Salesforce",
        sign: "Salesforce"
    }
]

myCoding.forEach( (Item) => {
    //console.log(Item.sign);
})