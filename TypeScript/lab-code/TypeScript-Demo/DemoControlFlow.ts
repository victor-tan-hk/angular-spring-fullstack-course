
let firstNum = 10;

// if-else
if (firstNum > 5)
    console.log("firstNum is more than 5");
else
    console.log("firstNum is less or equal to 5");

// if-else-if
if (firstNum >= 0 && firstNum <=5)
    console.log("firstNum is between 0 and 5");
else if (firstNum > 5 && firstNum <= 10)
    console.log("firstNum is between 6 and 10");
else 
    console.log("firstNum is larger than 10");


let doCount = 1;
// Ternary operator ?
// Format: condition ? action-if-true : action-if-false;
doCount < 5 ? doCount++ : doCount += 20; 
console.log("doCount new value is ", doCount);

// Another example of ternary operator
doCount < 5 ? console.log("Small") : console.log("Big");


// simple swith-case
let myChoice = 'lunch';

switch (myChoice) {
    case 'breakfast':
        console.log('Breakfast is important');
        break;
    case 'lunch':
        console.log('Lunch is not so important');
        break;
    case 'dinner':
        console.log('Skip dinner already !');
        break;
}

// grouping case
let month = 2, year = 2020;
let day = 0;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);

// Counting from 1 to 5
console.log("Simple loop demo");
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// 3 ways to iterate through an array

let myNumbers = [2, 4, 6, 8, 10];

console.log("Approach #1 to iterate through the contents of an array")
// Use standard for loop and access array indices
for (let i = 0; i < myNumbers.length; i++) {
    console.log(myNumbers[i]);
    // This approach also allows you to change the value 
    // of each array item 
    // for e.g. you could add 10 to each item
    myNumbers[i] += 10;
}

console.log("Approach #2 to iterate through the contents of an array")
// Use the forEach method that accepts a function
// which can easily be expressed as an arrow function

myNumbers.forEach(x => {console.log(x)});

// We CANNOT use this approach to change the value
// of each array item. The invocation below
// does not change the value of the array item

myNumbers.forEach(x => {x + 3});


console.log("Approach #3 to iterate through the contents of an array")
// Using for-of loop

for (let i of myNumbers) {
    console.log(i);
}

// We CANNOT use this approach to change the value
// of each array item. The code below
// does not change the value of the array items

for (let i of myNumbers) {
    i += 20;
}

//The break statement "jumps out" of a loop.
//The continue statement "jumps over" one iteration in the loop.
console.log("Demo break and continue");
for (let i = 1; i < 100; i++) {
    if (i > 10)
        break;
    if (i === 5)
        continue;
    console.log ("Count : ", i);
}

console.log("Demo while loop");
let startNum = 1;
while (startNum < 5) {
    console.log(" startNum is now : ",startNum);
    startNum++;
}

console.log("Demo do-while loop");
// Loop body is guaranteed to execute at least once 
startNum = 10;
do {
    console.log(" startNum is now : ",startNum);
    startNum++;
} while (startNum < 5);
