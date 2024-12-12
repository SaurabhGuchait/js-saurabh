// singleton - When we create via constructor - object.create

// Object Literals
const mySym = Symbol("key1")
 const userJS = {
    name: "Saurabh",
    [mySym]: "myKeyOne",
    age: 31,
    location: "Bengaluru",
    email: "abc@abc.com",
    isLoggedIn: false
 };

//  console.log(userJS.email);// abc@abc.com
//  console.log(userJS["email"]);// abc@abc.com
// console.log(userJS[mySym]);
// console.log(typeof userJS[mySym]);

// userJS.email = "bcd@bcd.com"
// console.log(userJS["email"]);// bcd@bcd.com

// Object.freeze(userJS);
// userJS.age = 32;
// console.log(userJS["age"]);// 31

// console.log(userJS);

userJS.greetings = function(){
    //console.log("Hello World");
}
userJS.greetingsTwo = function(){
    //console.log(`Hello World ${this.name}`);// using this we can access all the properties of the object
}

// console.log(userJS.greetings);// [Function (anonymous)] Just a reference that it is a function

// console.log(userJS.greetings());// Hello World undefined

// console.log(userJS.greetingsTwo());

const tinderUser = new Object();
tinderUser.id = "12345abc";
tinderUser.name = "Saurabh";
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    fullname: {
        userFullName: {
            firstName: "Saurabh",
            lastName: "Guchait"
        }
    }
};

// console.log(regularUser.fullname);// { userFullName: { firstName: 'Saurabh', lastName: 'Guchait' } }
// console.log(regularUser.fullname.userFullName);// { firstName: 'Saurabh', lastName: 'Guchait' }
// console.log(regularUser.fullname.userFullName.firstName);// Saurabh

// const obj3 = Object.assign({}, userJS, regularUser);
// console.log(obj3);

// const obj3 = {...userJS, ...regularUser};
// console.log(obj3);

//console.log(tinderUser);//{ id: '12345abc', name: 'Saurabh', isLoggedin: false }
// console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedin' ] - Stores in a Array




 
 