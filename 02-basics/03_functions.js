// function myName(){
//     console.log("Saurabh");
    
// } //Function

// myName() //Saurabh


// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(10,10) //20

function addTwoNumbers(number1, number2){
    // const result = number1+number2;
    // return result;
    return number1+number2;
}
// const result = addTwoNumbers(5, 5);
// console.log("Result is: ", result);

function loggedInUserMessage(userName){
    if(!userName){
        return `Please enter a valid username.`;
    } 
    else{
        return `Hello! ${userName}. Good Morning!`;
    }
}

// const message = loggedInUserMessage("Saurabh");
// console.log(message);//Hello! Saurabh. Good Morning!

// const message = loggedInUserMessage("");
// console.log(message);//Hello! . Good Morning!

// const message = loggedInUserMessage();
// console.log(message);// Hello! undefined. Good Morning!

function calculatecartPrice(...num1){
    return num1
}

//console.log(calculatecartPrice(1,2,3));// [1,2,3]

const user = {
    username: "Saurabh",
    price: 200
}

function handleObject(randomObject){
    console.log(`Username is: ${randomObject.username} and price is: ${randomObject.price}`);
}

// handleObject(user);/Username is: Saurabh and price is: 200

const myNewArray = [1,2,3,4,5];
function myRandomNumber(randomArray){
    return randomArray[3]
}
// console.log(myRandomNumber(myNewArray));//4

