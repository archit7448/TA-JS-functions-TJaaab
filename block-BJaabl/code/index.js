/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/

let names = prompt("enter your name")

function sayHello(name){
  alert(`hello ${name}`)
}

sayHello(names)

/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/


let firstName = prompt("enter your first name")
let lastName = prompt("enter your last name")

function getFullName(name1,name2){
  alert(`${name1} ${name2}`)
}

getFullName(firstName,lastName)

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/

function addTwoNumbers(firstNum,secondNum){
   if (isNaN(firstNum)){
     alert("enter valid value")
   }else if(isNaN(secondNum)){
     alert("enter valid value")
   }else{
    let  sum = firstNum + secondNum ;
     alert(`sum is the ${sum}`)
   }
}

let firstNum = Number(prompt("enter the number"))
let secondNum = Number(prompt("enter the second number"))

addTwoNumbers(firstNum,secondNum)

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

let numA = Number(prompt("enter the first number for calculation"))
let numB = Number(prompt("enter the first number for calculation"))
let operation = String(prompt("enter the opeartion in term of the add,sub,mul,div"))


function calc(numA,numB,operation){
  if(isNaN(numA)){
    alert("enter the valid value ")
  }else if(isNaN(numB)){
    alert("enter the valid value")
  }else if(operation == "add"){
     let add = numA +numB ;
     alert(`the sum is ${add}`)
  }else if(operation == "mul"){
    let multiply = numA * numB
    alert(`the multiply is ${multiply}`)
  }else if(operation == "div"){
    let divide = numA/numB
    alert(`the divide is ${divide}`)
  }else if(operation == "sub"){
     let subtract = numA - numB;
     alert(`the subtraction is ${subtract}`)
  }
}

calc(numA,numB,operation)

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/


let year = Number(prompt("enter the year"))

function isLeapYear(year){
   if(year % 4 == 0){
     alert(`true`)
   }else{
     alert(`false`)
   }
}

isLeapYear(year)

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

let number = Number(prompt("enter the number for the factorial"))
let factorial = 1

function getFactorial(number){
  if (isNaN(number)){
    alert("invalid input")   
  }
  for(let i=number; i >0 ; i=i-1){
     factorial = factorial * i
  }alert(`the factorial of the ${number} is ${factorial}`)
}

getFactorial(number)