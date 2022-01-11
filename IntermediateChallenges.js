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