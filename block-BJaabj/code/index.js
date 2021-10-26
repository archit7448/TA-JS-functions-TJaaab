/*
1. Create a function named `sayHello` that alerts a message `Hello World!`.
*/

function sayHello(){
  alert("Hello World!")
}

/*
2. Create a function named `fullName` with the following steps:

  - Prompts a message saying `Enter your first name` and store the value into variable named `firstName`
  - Prompts a message saying `Enter your last name` and store the value into variable named `lastName`
  - Concat the value of fistName and lastName and store it in another variable named `fullName`.
  - Alert `fullName`
*/

var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")

function fullName(){
      var fullName = firstName + " " + lastName;
      alert(`full name is ${fullName}`)
}
fullName()

/*
3. Create a function named `addTwoNumbers` with the following steps:

  - Prompts a message saying `Enter the first number` and store the value into variable named `firstNum`
  - Prompts a message saying `Enter the second` and store the value into variable named `secondNum`
  - Add the value of firstNum and secondNum and store it in another variable named `sum`.
  - Alert `sum`
*/

let firstNum = Number(prompt("Enter the first number"))
let secondNum = Number(prompt("Enter the secon NUmber"))

function addTwoNumbers(){
        var sum = firstNum + secondNum;
        alert(`sum is ${sum}`)
}

addTwoNumbers()
/*
4. Create a function named `getTable` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named `num`
  - Using `console.log` logs the Multiplication Table of the number entered by the user.
  - Example: Number is 9

  9 * 1 = 9
  9 * 2 = 18
  9 * 3 = 27
  9 * 4 = 36
  9 * 5 = 45
  9 * 6 = 54
  9 * 7 = 63
  9 * 8 = 72
  9 * 9 = 81
  9 * 10 = 90
*/

let num = Number(prompt("Enter a number"))

function getTable(){
  for(let i = 1 ; i< 11 ; i= i+1){
    console.log(`${num} * ${i} = ${num * i} `)
  }
}

getTable()
 
/*
5. Create a function named `isLeapYear` with the following steps:

  - Prompts a message saying `Enter a year` and store the value into variable named`year`
  - Alert `[year] is a leap year` otherwise `[year] is not a leap year`
*/


let year = Number(prompt("Enter a year"))

function isLeapYear(){
  if(year % 4 === 0){
    alert(`${year} is leap year`)
  }else{
    alert(`${year} is not leap year`)
  }
}

isLeapYear()

/*
6. Create a function named `getFactorial` with the following steps:

  - Prompts a message saying `Enter a number` and store the value into variable named`number`
  - Alert `The factorial of [number] is [factorial]`

*/

let number = Number(prompt("enter a number"))

let factorial = 1

function getFactorial(){
  for(i = number ; i>0 ; i = i-1){
  factorial = factorial * i
  }alert(`factorial of the ${number} is ${factorial}`)

}

getFactorial()