"use stric";

/*
    Here we will read about Strings Datatype in JS
    We will see the basics of Strings
*/

// Declaration : -
const str = new String('A string primitive') // 1 way new keyword creates a space on heap  (using string constructor)
const str2 = 'Aayushi' // 2 way  (using  string literals)
const str3 = new String('Aayushi')
const str4 = 'Aayushi'

// console.log(str)
// console.log(str2)

// Access : -
console.log(str2.charAt(2))  //based on indexing : what element is on that index
console.log(str[2])
console.log(str.indexOf('i')) // only single 'i' which is used in the string. but here are more than 1 'i' . and if we want to know the all i then we have to use loop too 


// lets compare strs (with or without new keyword)
console.log(str2==str3)
console.log(str2==str4)

console.log(typeof(str))

// some operations : - string interpolation  : where we can inject var 
const name ='Aayushi'
const age = 21
console.log(`I am ${name} and im ${age} year's old`)  // here we used backtick (`)
// or
console.log("Hi i am" + name + " " +  age + " years old.") // not a good practice

// operations: - toUpperCase . lowercase , lenght

console.log(str.length)