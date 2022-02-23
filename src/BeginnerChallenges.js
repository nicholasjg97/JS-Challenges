// Area of a Triangle -- Write a function that takes the base and height of a triangle and return its area.

function area (base, height) {
    return (base * height) / 2
}

// Convert Hours into Seconds -- Write a function that converts hours into seconds.

function howManySeconds(hours) {
    return (hours * 60) * 60
}

// Power Calculator -- Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
    return voltage * current;
}

// Buggy Code (Part 1) -- Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function cubes(a) {
    return a ** 3;
}

// Add up the Numbers from a Single Number -- Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// Return the Sum of Two Numbers -- Create a function that takes two numbers as arguments and return their sum.

function addition(a, b) {
    return a + b;
}

// Convert Minutes into Seconds -- Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
    return minutes * 60;
}

// Find the Perimeter of a Rectangle -- Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length, width) {
    return (length * 2) + (width * 2);
}

// Return Something to Me! -- Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
    return "something " + a;
}

// Basketball Points -- You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers) {
    return (twoPointers * 2) + (threePointers * 3);
}

// First Reverse -- Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order

function FirstReverse(str) {
    // split the string so every character is it's own string
    // reverse the whole array and combine the array in one string
    return str.split('').reverse().join('');
}

// Print numbers from 1 to 10

function numbers () {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}


// Print the odd numbers less than 100

function oddNum () {
    for (var i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}


// Print the multiplication table with 7

function sevenTable () {
    for (var i = 1; i <= 12; i++) {
        var table = '7 * ' + i + ' = ' + (7 * i);
        console.log(table);
    }
}


// Calculate the sum of odd numbers greater than 10 and less than 30

function customOdd () {
    var sum = 0;
    for (var i = 11; i <= 29; i += 2) {
        sum += i;
    }
    console.log(sum)
}

// Create a function that will convert from Celsius to Fahrenheit

function celciusToFahren (n) {
    return n * 1.8 + 32;
}

// Create a function that will convert from Fahrenheit to Celsius

function fahrenToCelcius (n) {
    return (n - 32) / 1.8;
}