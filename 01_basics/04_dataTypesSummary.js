 /*basically we have 2 types of data and they are categorized by how to store and accesss them : 
 PrimitiPve(Call by Value) and non Primitive Data types(Reference type) : 
 ---Primitive Datypes - 
                            7 : Number
                                Boolean
                                Null
                                Undefineed
                                String
                                Symbol
                                BigInt

---Non Primitive Types - 
                                Arrays
                                Object
                                Function

 */

const score = 100
const scoreValue = 10.5
const isLoggedIn = false
const temp = null
const bigValues = 12546875325478555656565656632n  //big data

let userEmail; // - > undefined or we can manually set as let userEmail = undefined;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

// ------- Referenced ( Non - Primitives ) -----------

const namesOfPrimeMinisters = ["Narendra Modi00", "Indira Gandhi", "Sardar manmohan"]

let myObj = {
    name : "Aayu",
    age : 21
}

const myFunction = function(){
    console.log("Hello Woorld ✌️");
}

// types of all above : ---
console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn)
console.log(typeof temp)
console.log(typeof bigValues)
console.log(typeof userEmail)
console.log(typeof id)
console.log(typeof namesOfPrimeMinisters)
console.log(typeof myObj)
console.log(typeof myFunction)

/*
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
*/


