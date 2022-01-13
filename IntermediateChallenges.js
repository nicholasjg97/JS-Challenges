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