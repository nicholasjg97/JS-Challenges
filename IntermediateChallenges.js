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

