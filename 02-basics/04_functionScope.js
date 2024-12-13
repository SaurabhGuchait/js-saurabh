let a = 10;
//const b = 20;
var c = 30;

//console.table({a,b,c});

if(true){
    let a = 50;
    var e = 60;
    const f = 70;
}

//console.log(d);//d is not defined
//console.log(e);// 60
//console.log(f);//f is not defined

function Outer(){
    let a = 10;
    function Inner(){
        let b = 20;
        //console.log(a);
    }
    
    Inner();
    //console.log(b);// Undefined
}
Outer();// 10
        // Undefined b

/******Interesting******* */

function one(num){
    return num + 1;
}

let z = one(5)
//console.log(z);


const addTwo = function(num){
    return num+2;
}
let y = addTwo(5)
//console.log(y);

