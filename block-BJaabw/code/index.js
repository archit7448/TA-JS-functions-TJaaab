// Use default parameter where ever you can

/* 1. minToSec

Write a function named minToSec that takes an integer minutes and converts it to seconds.


minToSec(50) ➞ 3000
minToSec(13) ➞ 780
minToSec(2) ➞ 120
*/

// - Write a Function Decleration for above problem

function minToSec(n) {
    let seconds = n * 60  
    console.log(seconds)
}
// - Execute the function with required parameter

minToSec(50) 
minToSec(13) 
minToSec(2) 

/* 2. 
Create a function named isInRange which validates whether a number n is exclusively within the bounds of lower and upper.
Return true and false based on that.

The function accepts three parameter lower, upper and the number.
isInRange(1, 20, 9); // true
isInRange(1, 10, 19); // false
*/

// - Write a Function Decleration for above problem
function isInRange(a,b,c) {
  if(a<b && b<c){
    return console.log("true")
  }else{
    return  console.log("false")
  }
}
// - Execute the function with required parameter

isInRange(1, 20, 9); 
isInRange(1, 10, 19); 

/* 2. calculateBMI


Take two arguments weight and height and return `Underweight`, `Normal` etc based on data.

Body mass index(BMI) is calculated as follows: bmi = weight / (height x height). Write a function which calculates bmi.
BMI is used to broadly define different weight groups.
Check if a person is underweight, normal, overweight or obese based the information given below.

These are the conditions:

Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

*/

function calculateBMI(w,h) {
  let BMI = Number(w) / Number(h * h)
  console.log(BMI)
  if(BMI < 18.5){
    return console.log(`Underweight: BMI is less than 18.5`)
  }else if(BMI >= 18.5 && BMI <= 24.9){
    return console.log(`Normal weight: BMI is 18.5 to 24.9`)
  }else if(BMI >= 25 && BMI <= 29.9){
    return console.log(`Overweight: BMI is 25 to 29.9`)
  }else if (BMI >= 30){
    return console.log(`Obese: BMI is 30 or more`)
  }
}


calculateBMI(96,1.9)

/* 3. appropiateDrinks

Create a function that take the age are return the appropiate drink based on these conditions:

- Under 14 years old — return "drink fruit juice"
- Under 18 years old — return "drink soda"
- Under 21 — return "drink fruit-flavored beer"
- 21 years or older — return "drink throat-piercing vodka"

*/

function appropiateDrinks(age) {
  if(age<14){
    return console.log(`drink fruit juice`)
  }else if(age < 18){
    return console.log("drink soda")
  }else if(age < 21){
    return console.log("drink fruit-flavored beer")
  }else if(age > 21){
    return console.log("drink throat-piercing vodka")
  }
}


appropiateDrinks(4)
appropiateDrinks(16)
appropiateDrinks(20)
appropiateDrinks(34)

/* 4. Add two numers or string

Write a function that accepts two numbers or string and returns the sum of the numbers and concatenation of the strings.
Twist is when user passes anything other than number, or string value you should be able to handle that.

- If both values are number add them
- If both values are string concat theme
- Anything other than that alert "Enter valid values"

*/

function isItString(v1,v2){
  if(typeof v1 == "string" && typeof v2 == "string"){
    return true
  }else{
    return false
  }
}

function isItNumber(v1,v2){
  if(typeof v1 == "number" && typeof v2 == "number"){
    return true
  }else{
    return false
  }
}

function sum(v1,v2) {
   if(isItString(v1,v2) == true){
     let string = v1 +" " + v2
     return console.log(string)
   }else if(isItNumber(v1,v2) == true){
      let  number = v1 + v2 ;
      return console.log(number) 
   }else{
     return console.log("enter valid values")
   }
}

// Function Test
sum(2, 4); // 6
sum('Arya', 'Stark'); // "Arya Stark"
sum('Arya', 2); // Enter valid Values
sum(null, 2); // Enter valid Values
sum(undefined, 2); // Enter valid Values
