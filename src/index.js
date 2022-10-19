// task 1: Write a function that console.logs 'Hello World'
function printHelloWorld() {
  console.log("Hello World!");
}

printHelloWorld();
// task 2: Write a function that console.logs whatever you
//    want it to say by using 1 parameter. This would be a
//    good time to use string interpolation!

function writeConsole(inString) {
  console.log(inString);
}

writeConsole("This is Typhoon!");
writeConsole("Jokes on you!");

// task 3: Write a function that prints a random number
//    between 1 and whatever number is for the provided argument
//    (so there will be one parameter for this function!). You
//    might need to search how to generate a random number and how
//    to round it up :)
function randomNumberConsole(maxRandomNumber) {
  let randomNumber = Math.floor(Math.random() * maxRandomNumber) + 1;
  console.log("Random Number is: ", randomNumber);
}

randomNumberConsole(20);
randomNumberConsole(100);
randomNumberConsole(100);
randomNumberConsole(100);

// task 4: Write a function that takes 3 parameters and returns
//    one number, which is the product of the first two numbers
//    raised to the power of the third number. e.g. passing this
//    function 1, 2, 3 should give you back the answer to (1 * 2)^3,
//    which is 8. You may need to search how to raise the power
//    of a number!
function product(num1, num2, power) {
  return (num1 * num2) ** power;
}

let result = product(1, 2, 3);
console.log("Product of 1 * 2 ** 3 = ", result);

// task 5: Write a function that converts Celsius in Fahrenheit.
//    This function should take one parameter. The formula to convert
//    Celsius to Fahrenhiet: F = (C * 1.8) + 32
function convertCelsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

let celsiusValue = 0;
result = convertCelsiusToFahrenheit(celsiusValue);
console.log("Convert " + celsiusValue + "\u00B0 C to " + result + "\u00B0 F");

celsiusValue = 25;
result = convertCelsiusToFahrenheit(celsiusValue);
console.log("Convert " + celsiusValue + "\u00B0 C to " + result + "\u00B0 F");

// task 6: Write a function that takes a word as the parameter and
//    consoles the letters in alphabetical order. You'll need to break
//    the word apart, sort the letters, and bring them back together
//    for this!
function sortWord(word) {
  return word.split("").sort().join("");
}

result = sortWord("hello");
console.log("Sorted letters for hello is: " + result);

// BONUS FUNCTIONS!
// Write a function to reverse a number.
function reverseNumber(number) {
  return number.toString().split("").reverse().join("");
}

result = reverseNumber(123);
console.log("Reverse Number 123 = " + result);

// Write a function that prints the message “This number is EVEN!”
//    to the console when the number is even and “This number is
//    ODD!” if the number is odd.
function numberOddEven(number) {
  if (number % 2 === 0) {
    console.log("This number " + number + " is EVEN!");
  } else {
    console.log("This number " + number + " is ODD!");
  }
}

numberOddEven(10);
numberOddEven(11);

// Write a function that prints every between 1 and 100.
//    This requires a loop - you may need to look this up!
function printLoop() {
  for (let i = 0; i < 100; i++) {
    console.log(i + 1);
  }
}

printLoop();

// Write a function that prints every EVEN number between 1 and 100.
//    This requires a loop - you may need to look this up!

function printEvenNumberLoop() {
  for (let i = 0; i < 100; i++) {
    if ((i + 1) % 2 === 0) {
      console.log(i + 1);
    }
  }
}
printEvenNumberLoop();
