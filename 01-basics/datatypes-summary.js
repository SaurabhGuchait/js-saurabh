/*
    -Primitive Datatypes(Call by value)
        - String
        - Number
        - Boolean
        - null
        - undefined
        - Symbol - to make value unique
        - BigInt

    - Non-Primitive Datatype/Reference(Call by ref)
        - Arrays
        - Objects
        - functions

    -JS is dynamically typed language

    - const temperature = null; means it's empty not even 0; 
    - const temperature; undefined as we have not assigned any value

    -const id = Symbol("123")
        console.log(id); - Symbol(123) - return type is Symbol

    -const anotherId = Symbol("123")
        console.log(id === anotherId); - false regarless value is same but it would give false as we are using Symbol to make it unique.

    -const heroes = ["IronMan", "WonderWoman"]; typeof 
     - object
    -let myRecord = {
        name: "Saurabh",
        age: 30
    } typeof - object
    
    -const myfunc = function(){
        console.log("Hello World");
    } typeof function/object function

    - typeof null - Gives Object

    --Memories
    -Stack(Primitve)
        -let myName = "Saurabh"
        -let anotherName = myName
        anotherName = "Guchait" //myName = Saurabh
        //anothername = Guchait
    -Heap(Non-primitive)
        -let user = {
            name: "Saurabh",
            upi: "user@ybl"
        }
        -let userTwo = user
        userTwo.name = "Guchait"
        console.log(user.name)//Guchait
        console.log(userTwo.email)//Guchait
*/