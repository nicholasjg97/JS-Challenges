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

//function cubes(a) {
// 	retunr a ** 3
// }

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

