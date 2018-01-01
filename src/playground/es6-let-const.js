//Block scoping

var fullName = 'Brett Mayer';

if (fullName) {  //not a function
    var firstName = fullName.split(' ')[0];
    console.log(firstName);  //Brett
}

console.log(firstName);  //Brett, because var based variables are function scoped. let/const are block scoped



if (fullName) {
    let firstName = fullName.split(' ')[0];  //same with const
    console.log(firstName);  //Brett
}

console.log(firstName);  //fails, can only access it inside block it was defined in


//if you want to access it outside of block scope, do below
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];  //same with const
    console.log(firstName);  //Brett
}

console.log(firstName);  //Brett