let myDate = new Date();
// console.log(myDate);//2024-12-03T07:34:08.828Z
// console.log(myDate.toString());//Tue Dec 03 2024 07:34:08 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Tue Dec 03 2024
// console.log(myDate.toISOString());//2024-12-03T07:34:08.828Z
// console.log(myDate.toJSON());//2024-12-03T07:34:08.828Z
// console.log(myDate.toLocaleDateString());//12/3/2024
// console.log(myDate.toLocaleString());//12/3/2024, 7:34:08 AM
// console.log(myDate.toLocaleTimeString());//7:34:08 AM


//let myNewDate = new Date(2024, 4, 13);// Month is JS starts from 0
// console.log(myNewDate.toLocaleString());//5/13/2024, 12:00:00 AM
// console.log(myNewDate.toLocaleDateString());//5/13/2024
// console.log(myNewDate.toLocaleTimeString());//12:00:00 AM

let myNewDate = new Date("01-01-2001");
// console.log(myNewDate.toLocaleString());

// console.log(Date.now());//Gives in mili
// console.log(Math.floor(Date.now()/1000));//gives in sec

let newDate = new Date("05-13-1993");
// console.log(newDate.toDateString());//Thu May 13 1993
// console.log(newDate.getDay());// 4

console.log(newDate.toLocaleString("default", {
    weekday: "long"
}));




