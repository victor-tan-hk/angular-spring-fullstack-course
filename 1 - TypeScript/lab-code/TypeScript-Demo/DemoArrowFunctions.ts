
// Function declared and invoked in the normal fashion
function basicAddition(x: number, y:number ) {
    return x + y;
}

let result1 = basicAddition(3,5);

// Function declared in arrow function style

let anotherAddition = (x:number, y:number) => x + y;

result1 = anotherAddition(3,5);

// A more complex function
function complexFunc(x: number, y: number) {
    if (x > y) 
        return x + y;
    else
        return x - y;
}

//The same function declared in arrow function style

let complexArrow = (x:number, y:number) => {
    if (x > y) 
        return x + y;
    else
        return x - y;
};

console.log('complexArrow(3,5) is :',complexArrow(3,5));
console.log("the type of complexArrow is : ", typeof complexArrow);

//Syntax for an arrow function that no parameters

let simpleArrow = () => console.log("so simple !");
simpleArrow();

let simpleNumArray = [3, 4, 5, 6];

// Say we want to create a new array which contains all the elements in 
// simpleNumArray transformed by adding 3 to each them.

let newArrayResult: number[] = [];
for (let i = 0; i < simpleNumArray.length; i++) {
    newArrayResult.push(simpleNumArray[i] + 3);
}

function getArrayContentAsString(numArray: number[]) : string {
    let accString:string = '';
    for (let num of numArray) {
        accString += ' ' + num;
    }
    return accString;
}

console.log("contents of newArrayResult using old approach");
console.log(newArrayResult);


// We can use the array map function with an arrow function to accomplish the same thing
newArrayResult = simpleNumArray.map(item => item + 3);

console.log("contents of newArrayResult for simple map");
console.log(newArrayResult);


// More complex: We want to add 10 to the even numbers in the array, odd numbers
// remain the same
// [1, 2, 3, 4, 5, 6, 7, 8, 9] => [1, 12, 3, 14, 5, 16, 7, 18, 9]

simpleNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newArrayResult = simpleNumArray.map(item => {
    if ((item % 2) == 0)
        return item + 10;
    else
        return item;
});

console.log("contents of newArrayResult for more complex map");
console.log(newArrayResult);

// Filtering using the map function: 
//  E.g. We only want to retrieve even numbers from an array
// [1, 2, 3, 4, 5, 6, 7, 8, 9] => [2, 4, 6, 8]

simpleNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newArrayResult = simpleNumArray.filter(
    item => (item % 2) == 0
);

console.log("contents of newArrayResult for a simple filter");
console.log(newArrayResult);

let people = [
    { name: "John", age: 35 },
    { name: "Anne", age: 24 },
    { name: "Tom", age: 41 },
    { name: "Andrew", age: 55 },
    { name: "Mary", age: 18 },
];

// Filtering to get people above the age of 40: Tom and Andrew
let aboveForty = people.filter(person => person.age > 40);

console.log("contents of aboveForty for filtering on array of objects");
console.log(aboveForty);

