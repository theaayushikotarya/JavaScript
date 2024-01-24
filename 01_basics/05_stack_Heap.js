/*
Stack -> Primitive Dtypes --> values copy
Heap -> Non - Primitive Dtypes --> reference
*/

let name = "Aayushi"
let anotherName = name

anotherName = "Aayush"
console.log(name);
console.log(anotherName);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let user = {
    email : "aayu@fb.com",
    upi : "aayu@ayu"
}

let userTwo = user
userTwo.email = "aayushi@link.com"

console.log(user.email);
console.log(userTwo.email);