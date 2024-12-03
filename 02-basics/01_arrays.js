const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array(6, 7, 8, 9, 10)
// console.log(myArr2.length);
// console.log(myArr2[3]);
// console.log(myArr2.concat(myArr));
// console.log(myArr2);

// myArr.push(6);
// console.log(myArr);
// myArr.pop();//remove last value from array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// console.log("A ", myArr);//A  [ 0, 1, 2, 3, 4, 5 ]
// const myArr3 = myArr.slice(1,3);//It just shows the number which we sliced from original array. Original array is as it is. 
// console.log(myArr3);//[ 1, 2 ] does not include last index
// console.log("B ", myArr);//B  [ 0, 1, 2, 3, 4, 5 ]
// const myArr4 = myArr.splice(1,3);// it totally deletes the spliced numbers from original array. 
// console.log(myArr4);//[ 1, 2, 3 ] - included last index
// console.log("C ", myArr);//C  [ 0, 4, 5 ] - Splice Snatched the 3 numbers form original array, leaving the original array with left over numbers. 

const heroes = ["ironman", "spiderman", "thor"];
const dc = ["superman", "flash", "batman"];
// heroes.push(dc);
// console.log(heroes);//[ 'ironman', 'spiderman', 'thor', [ 'superman', 'flash', 'batman' ] ]
// console.log(heroes[3]);//[ 'superman', 'flash', 'batman' ]
// console.log(heroes[3][2]);

// const allheros = heroes.concat(dc);//concat only returns new array
// console.log(allheros);

const allheros = [...heroes, ...dc];// Works same as concat but is called as spread operator
// console.log(allheros);

// console.log(Array.isArray("Saurabh"));//false
// console.log(Array.from("Saurabh"));//converts every element into an array[
//     'S', 'a', 'u',
//     'r', 'a', 'b',
//     'h'
//   ]

//console.log(Array.from({name: "Saurabh"}));//[] - we have to specify if we want key array or value array

