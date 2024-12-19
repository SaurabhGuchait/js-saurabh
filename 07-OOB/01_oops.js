const user={
    userName: "Saurabh",
    email: "abc@abc.com",
    isLoggedIn: true,
    getUserDetails: function(){
        console.log(`UserName is: ${this.userName}`);
        console.log(this);
        // {
        //     userName: 'Saurabh',
        //     email: 'abc@abc.com',
        //     isLoggedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
}
// console.log(user.userName);//Saurabh
// console.log(user.getUserDetails());//UserName is: Saurabh
// console.log(this);//{}

