// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/


let puppyAge = Number(prompt("puppy age"))

function calculateDogAge(age) {
   let puppyAgeHuman = age * 7;
   return `dog age in the based of human are ${puppyAgeHuman}`
}

calculateDogAge(puppyAge)

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/




function calculateMoviesToWatch(age , number){
        let maxAge = 90 ;
        let yearRemaining = maxAge -age;
        let moviesWatch = Number(yearRemaining * 48 *number)
        console.log(`movies to watch is ${moviesWatch}`)
}

calculateMoviesToWatch(20, 3)

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
         let fahrenheit = (celsius * 9/5) + 32 ;
         console.log(`the fahrenhit is ${fahrenheit}`)
}

celsiusToFahrenheit(10)


/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9
  console.log(`the ceslsius is ${celsius}`)
}

fahrenheitToCelsius(45)

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  if( n < 0){
    return `the number below 1 is not allowed`
  }else{
    let power =  x ** n;
    return `the power is ${power}`
  }
  
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n, operation) {
  let sum = 0
  let multiply = 1
  if(operation == "sum"){
    for(let i = n ; i > 0 ; i = i-1){
      sum = sum + i
    }alert (sum)
  }else if(operation == "product"){
    for(let k = n ; k >0 ; k= k-1 ){
      multiply = multiply* k
    }alert(multiply)
  }else{
    alert("Not a valid input")
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  let sum = 0
    for(let i = n ; i > 0 ; i = i-1){
      sum = sum + i
    }alert (sum)
}

sumOfN(10)

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/


// Your code goes here

function sumOfN57(n){
  let sum = 0
  for(let i = n ; i > 0 ; i = i-1){
    if(i % 5 == 0 || i % 7 == 0){
      console.log(i)
      sum = sum + i
    }
  }console.log (sum)
}

sumOfN57(20)

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a , b) {
  if(a > b){
    return console.log(b)
  }else {
    return console.log(a)
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/


function typeCheck(argument) {
     let typeCheck = typeof argument;
     return console.log(typeCheck)  
}

typeCheck("hello")
typeCheck(45)
typeCheck(true)
