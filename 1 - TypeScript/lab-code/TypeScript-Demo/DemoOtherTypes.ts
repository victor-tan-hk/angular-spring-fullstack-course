
// Variables of any type
// can have any value assigned to them
let special1: any = 35;
console.log("The type of special1 is now : ", typeof special1);
special1 = 'cool';
console.log("The type of special1 is now : ", typeof special1);
special1 = false;
console.log("The type of special1 is now : ", typeof special1);


// If no type is specified for a declared variable, 
//TypeScript infers any
let special2;
special2 = 35;
special2 = 'cool';

// Union type

let special3: number | string;
special3 = 'awesome';
special3 = 35;
// The next statement results in a compile time error
// special3 = false;


// Array type

let firstArray: string[] = ['Java','Python','JavaScript'];

let secondArray: number[] = [];
secondArray[0] = 22;
secondArray[1] = 35;
console.log("First element of secondArray is : ", secondArray[0]);

// Can use any of the JavaScript array methods and properties
secondArray.push(50);
console.log("Third element of secondArray is : ", secondArray[2]);
console.log("Popped value from secondArray is : ", secondArray.pop());
console.log("Number of items in secondArray is : ",secondArray.length);

// Array of union types
let thirdArray: (string | number) [] = ['Jane', 5, 'Scot', 4];
console.log(`Item 0 of thirdArray is ${thirdArray[0]} which is a ${typeof thirdArray[0]}`);
console.log(`Item 1 of thirdArray is ${thirdArray[1]} which is a ${typeof thirdArray[1]}`);


//Enum type

enum DaysOfWeek {Mon, Tues, Wed, Thurs, Fri, Sat, Sun};
let specialDay:DaysOfWeek = DaysOfWeek.Mon;
// Internally, enum variables are represented as constant numbers
console.log("specialDay is ",specialDay);

// Can assign specific constant values to the enum type
enum Months {Jan = 10, Feb, Mar, Apr, May};
console.log("In Months, Jan is ", Months.Jan);
console.log("In Months, Feb is ", Months.Feb);
console.log("In Months, Mar is ", Months.Mar);

// As an alternative to enum, can use union with string literals

let moreWeekDays: 'Mon' | 'Tues' | 'Wed'| 'Thurs'| 'Fri'| 'Sat' | 'Sun';
moreWeekDays = 'Tues'; 
moreWeekDays = 'Sat';
// The statement below is no longer valid because it is not one of the 
// limited string values that moreWeekDays can accept
// moreWeekDays = 'Funny value'; 

// object type as a type literal

let employee: {
    name: string;
    age: number;
    jobTitle: string;
};

employee = {
    name: 'Peter Parker',
    age: 25,
    jobTitle: 'Web Slinger'
};

console.log(`Employee job title is : ${employee.jobTitle}`);

// Ok to assign to another object of the same shape or type
employee = {
    name: 'Clark Kent',
    age: 30,
    jobTitle: 'Laser eyes'
};

// Assigning to a different object type as below fails
// employee = {
//     name: 'Clark Kent',
//     age: 30,
//     identity: 'Superman'
// };

// Using type alias to make it easier to reuse type unions
type NumAndString = string | number;

let numStr1: NumAndString = 5;
numStr1 = 'wonderful';

let numStr2: NumAndString = 'cool';
numStr2 = 10;

// Using type alias to make it easier to reuse type literals

type employeeType =  {
    name: string;
    age: number;
    jobTitle: string;
};

let spiderman: employeeType;
let superman: employeeType;
let ironman: employeeType;

ironman = {
    name: 'Tony Stark',
    age: 33,
    jobTitle: 'CEO Stark Industries'
}

