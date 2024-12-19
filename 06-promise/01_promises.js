const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    setTimeout(function(){
        //console.log("async task is complete");
        resolve()
    }, 2000)
});

promiseOne.then(function(){
    //console.log("Promise Consumed");
    
})

//Another Approach
new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //console.log("Async task 2 Completed");
        resolve()
    }, 2000)
}).then(()=>{
    //console.log("Promise 2 is consumed");
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "chai", email: "abc@abc.com"})
    }, 2000)
}).then((user)=>{
    //console.log(user);
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "chai", email: "abc@abc.com"})
        } else{
            reject('Something Went Wrong')
        }
    }, 2000)
}).then((user)=>{
    //console.log(user);
    return user.username
}).then((userName)=>{
    //console.log(userName);
}).catch((error)=>{
    //console.log(error);
}).finally(()=>{
    //console.log("The promise is either resolved or rejected");
})

const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "Saurabh", email: "abc@gmail.com"})
        } else{
            reject('OOPS! It is wrong')
        }
    }, 2000)
})

async function consumePromise() {
    try {
        const value = await promiseTwo;
        //console.log(value);
    } catch (error) {
        //console.log("Oops! Error");
    }
}
consumePromise()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((values)=>{
    //console.log(values);
}).catch((error)=>{
    //console.log("Oops! it is an error", error);
})
 
// Note: fetch works as high priority