// Find the Smallest and Biggest Numbers -- Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    arr.sort();
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [min, max];
}

// Chat Room Status -- Write a function that returns the number of users in a chatroom based on the following rules:
//
// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".

function chatroomStatus(users) {
    if (users.length == 0) {
        return 'no one online';
    } else if (users.length == 1) {
        return users[0] + ' online';
    } else if (users.length == 2) {
        return users[0] + ' and ' + users[1] + ' online';
    } else if (users.length > 2) {
        return users[0] + ', ' + users[1] + ' and ' + (users.length - 2) + ' more online'
    }
}

// First Factorial -- Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it

function FirstFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

// Create a function that receives an array of numbers and returns an array containing only the positive numbers

function positiveNumbers (arr) {
    var onlyPositive = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            onlyPositive.push(arr[i])
        }
    }
    return onlyPositive;
}

// Create a function that will return a Boolean specifying if a number is prime

function isPrime (n) {
    // prime number is a number greater than 1 that cannot be divisible by any other number other than itself.
    if (n < 2) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    var div = Math.sqrt(n);
    for (var i = 2; i <= div; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function hundredPrime (primes) {
    var x = 0;
    var i = 2;

    while (x < primes) {
        if (isPrime(i)) {
            console.log(x + "-->" + i);
            x++
        }
        i++
    }
}

// Calculate the sum of first 100 prime numbers

function sumHundredPrime (n) {
    var primes = 0;
    var i = 2;
    var sum = 0;
    while (prime < n) {
        if (isPrime(i)) {
            primes++;
            sum += i;
        }
        i++
    }
    return sum;
}

// Print the distance between the first 100 prime numbers
function printPrimeDistances (n) {
    var lastPrime = 2;
    var i = lastPrime + 1;
    var prime = 1;
    while (prime < n) {
        if (isPrime(i)) {
            console.log((i - lastPrime) + "\t" + i + " - " + lastPrime);
            prime++;
            lastPrime = i;
        }
        i++
    }
}

// Create a function that will return the number of words in a text

function countWords (text) {

    var words = 0;

    if (text.length > 0 && !isSeparator(text[0])) {
        words++
    }
    for (var i = 0; i < text.length; p++) {
        var currChar = text[i];
        var preChar = text[i - 1];
        if (!isSeparator(currChar) && isSeparator(preChar)) {
            words++;
        }
    }
    return words;
}

function isSeparator (c) {
    var separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

// Create a function that will convert a string containing a binary number into a number

function binaryNumber (num) {
    return parseInt(num, 2);
}

// Print "Hello, world" with a delay of 3 seconds

setTimeout(function () {
    console.log('Hello, world');
}, 3000)

// Write a function which can concatenate 2 arrays. If only one array is passed it will duplicate it

function arrMerge (arr1, arr2 = arr1) {
    return [...arr1, ...arr2];
}

// Sort the given array of integers in ascending or descending order
// sort method sorts the elements of an array in place and returns the sorted array
// It receives a function as an argument, which is used for comparision

arr.sort((a, b)=> a - b) // ascending
arr.sort((a, b)=> b - a) // descending

// Write the code to remove the duplicates from the array
// Set is a data structure which does not allow duplicate elements

const set = new Set(...arr);
const newArr = [...set];

// Extract the list of all the elements from the list of numbers given in 2 arrays

const arrOne = new Set(...arr1);
const arrTwo = new Set(...arr2);
const newArr = [...arrOne, ...arrTwo];

// Show the different ways of creating an array

const arr = []; // literal form
const arr2 = new Array(); // constructor form
const arr3 = new Array(10); // pre defined slots
const arr4 = [1, true, "string"]; // with values
const arr5 = new Array(1, true, "string"); // constructor with values

// Show the different ways of emptying an array which has values

arr20 = [];
arr20.length = 0;
while (arr20.length > 0) {
    arr20.pop();
}
arr20.splice(0, arr20.length);

// Check if given input is an array or not

Array.isArray(arr);

// Write a program to store values in to a set

const setEx = new Set();
set.add(5);
set.add(false);
set.add("some text");

const setEx2 = new Set([3, 6, 9]);

// Write a function which returns another function and execute it after calling

function callingFunction () {
    function functionCalled () {
        console.log("function is being called by higher order function")
    }
    return functionCalled();
}

// Write a function which executes another function recieved as an argument

function functionExecuting (func) {
    if (typeof func === "function") {
        func();
    }
}

// Create a function having no parameters declared and print all the arguments passed to it

function noParam () {
    for (let value of arguments) {
        console.log(value)
    }
}

// Show the most common ways of creating functions in JavaScript

function funcName (params) { // regular function statement
    // code
}

const funcName2 = function (params) { // regular function expression
    // code
}

const funcName3 = (params) => { // arrow function expression
    // code
}

// Code an Immediately Invoked Function Expression (IIFE) and show the different ways of executing it

(function IIFE () {
    console.log("I am an immediately invoked function");
})();

(function IIFE () {
    console.log("I am an immediately invoked function");
}());

// Show the different ways of creating an object
// look on the internet for this one

const object1 = Object.create({ key: value});

const object2 = {
    key: value
}

function getObject (key, value) {
    this[key] = value;
}
const object3 = new getObject('key', 'value');

// Write a function which returns true if given value of number is an integer without using any inbuilt functions

function isInt (int) {
    return value % 1 === 0;
}

// Write a program to reverse a string

const str = "a string to type";
str.split("").reverse().join("");

// Write a program to reverse a string by words. Also show the reverse of each words in place

const str1 = "another simple string to type";
str.split(" ").reverse().join(" ");

// Write a program to reverse a given integer number

let num1 = 2019;
let numStr = String(num1);
numStr.split("").reverse().join("");

// Write a code to replace all the spaces of the string with underscores

str.split(" ").join("_");
// str.replaceAll(" ", "_");

// Show the conversion from number to string and vice versa

const num3 = 12;
// String(num3);
// num3.toString();
// num3 + "";

const str3 = "12";
// NUmber(str3);
// +str3;
// parseInt(str3);

// Show the frequently and commonly used methods available on Number object with coding examples

Number.isInteger(4.2);
Number.isInteger(-18);

Number.parseInt('9.1');
Number.parseInt('439x');

Number.parseFloat('10.456');
Number.parseFloat('-68.32x');

Number.isNaN(NaN);
Number.isNaN("text" - 25);
Number.isNaN("text");

// Number.toFixed?

// Number.toPrecision?