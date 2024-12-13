const user = {
    userName: "Saurabh",
    price: 999,
    welcomeMessage: function(){
        //console.log(`${this.userName}, Welcome!`);
        //console.log(this);
        
    }
}

// user.welcomeMessage()//Saurabh, Welcome!
// user.userName = "Guchait"
// user.welcomeMessage()//Guchait, Welcome!

//console.log(this);//{}

// function chai(){
//     let userName= "Saurabh";
//     console.log(this.userName);// undefined - can't use this inside function    
// }
// chai()

// const chai = () => {
//     let userName= "Saurabh";
//     console.log(this.userName);//undefined
// }
// chai()

//() => {} //arrow function

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
//console.log(addTwo(10,10));//20

// const addTwo = (num1, num2) => num1+num2
// console.log(addTwo(10,10))//20

//const addTwo = (num1, num2) => (num1+num2)//if we put it under curly braces then return keyword is required, but if we put it under brackets then return keyword not required. - Implicit Return

