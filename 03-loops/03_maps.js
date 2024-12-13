// const coding = ["js","ruby","python","cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);//undefined  - for each does not return any value

// const myNum = [1,2,3,4,5,6];
// const randomNum = myNum.filter((num) => num>4 )
// console.log(randomNum);//[ 5, 6 ] - filter does return values

const myNum = [1,2,3,4,5,6];
const randomNum = myNum.filter((num) => {return num>4} )
//console.log(randomNum);//[5,6] - If we are using breaces then return is mandatory esle it would give blank array []

