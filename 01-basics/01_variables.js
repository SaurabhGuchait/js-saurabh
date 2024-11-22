 const accountId = 12345;
 let accountEmail = "saurabhguchait@gmail.com";
 var accountPassword = "12345";
 accountCity = "Ranchi";
 let accountState;

//  accountId = 45678; - Not allowed as we can't change the value declared to const.
 console.log(accountId);
 console.log(accountEmail);
 console.log(accountPassword);
 console.log(accountCity);

 accountPassword = "9999";
 accountEmail = "abc@gmail.com";

/* Prefer not to use var because of issue in block scope and functional scope
*/
 
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //easier way to print all the values at once
 
 
 
 