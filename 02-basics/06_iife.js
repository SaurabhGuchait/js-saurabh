//Immediately Invoked function expressions (iife)

// function chai(){
//     console.log("I am Connected");
    
// }
// chai()//I am Connected - Without iife

// (function chai(){
//     console.log("I am Connected");//I am Connected - with iife
// })();//Remember to use ; else it would throw an error to end the code

//To avoid global scope pollution we used iife

// (
//     () => {
//         console.log("I am Connected");
//     }
// )()//I am Connected - using arrow function iife

(
    (name) => {
        console.log(`I am Connected ${name}`);//I am Connected Saurabh
    }
)("Saurabh")