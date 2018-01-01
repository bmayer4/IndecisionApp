//arguments object - no longer bound with arrow functions
//this - no longer bound their own this value with arrow functions. They use the this value of the context they were created in


//challenge

const multiplier = {
    numbers: [2, 4, 7],
    multiplyBy: 3,
    multiply: function() {
        const newArray = this.numbers.map((num) => {  //gets this bound to object
            return num * this.multiplyBy; //arrow, this is bound by parent this
        });
        return newArray;
    }
};

console.log(multiplier.multiply)  //(6, 12, 21) 


//below, es6 method definition syntax, no arrow or anything, just cleans it up
// const multiplier = {
//     numbers: [2, 4, 7],
//     multiplyBy: 3,
//     multiply() {
//         const newArray = this.numbers.map((num) => {  
//             return num * this.multiplyBy; 
//         });
//         return newArray;
//     }
// };





// const squareArrow = (x) => {
//     return x * x;
// };

//es6 arrow expression syntax
const squareArrow = (x) => x * x;    //return is implicit