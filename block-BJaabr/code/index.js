// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}



// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration

function addOne(number){
  return Number(number) +1
}

// - Write a Function Expression

let addOne = function(number) {
  return Number(number) + 1
}

// - Write an Arrow Function without curly brackets(if possible)

let addOne = (number) => Number(number) + 1;

// - Write an Arrow Function with curly brackets

let addOne = (number) => {
  return Number(number) + 1
}

// - Execute the function

addOne(45)

// - Execute the function and store the return value in a variable.
let add = addOne(47)

// - What is the typeof returnValue

//number

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(n){
  return n -1
}


// - Write a Function Expression
let substractOne =function (n){
  return n-1
}


// - Write an Arrow Function without curly brackets(if possible)

let substractOne = (n) => n-1

// - Write an Arrow Function with curly brackets

let substractOne = (n)=>{
  return n-1
}

// - Execute the function

substractOne(3) 

// - Execute the function and store the return value in a variable.

let subtract = substractOne(4)

// - What is the typeof returnValue

//number

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a= 0 , b= 0){
   return a + b
}
// - Write a Function Expression

const sum = function (a,b){
  return a +b
}

// - Write an Arrow Function without curly brackets(if possible)

const sum = (a,b) => a +b

// - Write an Arrow Function with curly brackets

const sum = (a,b) => {
  return a + b
}

// - Execute the function

sum(6,8)

// - Execute the function and store the return value in a variable

let summation = sum(2,3)

// - What is the typeof returnValue

//number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(n){
  return n *n
}


// - Write a Function Expression

const square = function (n){
  return n*n
}

// - Write an Arrow Function without curly brackets(if possible)

const square = (n) => n*n

// - Write an Arrow Function with curly brackets

const square = (n) => {
  return n*n
}

// - Execute the function

square(2)

// - Execute the function and store the return value in a variable

const squ = square(3)

// - What is the typeof returnValue

//number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x,y){
  if (x>y){
    return true
  }else{
    return false
  }
}

// - Write a Function Expression

const isGreater = function (x,y){
  if (x>y){
    return true
  }else{
    return false
  }
}


// - Write an Arrow Function without curly brackets(if possible)

const isGreater = (x,y) => {
  if (x>y){
    return true
  }else{
    return false
  }
}

// - Write an Arrow Function with curly brackets
const isGreater = (x,y) => {
  if (x>y){
    return true
  }else{
    return false
  }
}



// - Execute the function

isGreater(9,10)

// - Execute the function and store the return value in a variable

let isGREAT = isGreater(8,9)

// - What is the typeof returnValue

//Boolean

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(number){
    if(number % 2 === 0 ){
      return `number is even`
    }else{
      return `number is odd`
    }
}


// - Write an anonymous Function Expression

const oddOrEven =function (number){
  if(number % 2 === 0){
    return `number is even`
  }else{
    return `number is odd`
  }
}

// - Write an named Function Expression

const oddOrEven =function oddandeven(number){
  if(number % 2 === 0){
    return `number is even`
  }else{
    return `number is odd`
  }
}


// - Write an Arrow Function without curly brackets (hint: use ternary operator)

const oddOrEven = (number) => number % 2 === 0 ? `number is even` : `number is odd`; 

// - Write an Arrow Function with curly brackets

const oddOrEven = (number) => {
    if(number % 2 === 0){
      return `number is even`
    }else{
      return `number is odd`
    } 
}

// - Execute the function

oddOrEven(6)

// - Execute the function and store the return value in a variable

let storestring = oddOrEven(7)

// - What is the typeof returnValue

//String