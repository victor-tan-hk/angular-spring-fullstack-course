
// Declaring variables with explicit annotation using :

// Declare and assign later using let
let num1: number;
num1 = 23;

// Declare and assign using var
// not recommended, used only in older code
var oldNum: number;
oldNum = 15; 

// Declare and assign in a single statement
// floating point value
let num2: number = 9.3789;

// Declare and assign two (or more variables) in a single statement
let num3: number = 100, num4: number = 200;

// Declare binary, octal and hex numbers
let binaryNum: number = 0b011011;
let octalNum: number = 0o72;
let hexadecimal: number = 0XA;

//Boolean type
let isFast: boolean = true;

// null and undefined type, equivalent to in JS
let nothingHere: null = null;
let nothingKnown: undefined = undefined;

// String type
let name1: string = 'peter';


// Can access any of the standard String methods on
// a primitive via autoboxing
let name2: string = name1.toLocaleUpperCase();
console.log(name1 + " converted to uppercase is : ", name2);

// Can use any of the standard Number methods on
// a primitive via autoboxing
let roundString: string = num2.toFixed(1);
console.log(num2 + " rounded to 1 decimal point is : " + roundString);

// Can use backticks to create multi-line strings
let description: string = `This TypeScript string can 
span multiple 
lines
`; 

console.log("Description : ", description)

// Can use interpolation to embed variables into a multi-line string
let interpolatedString: string = `value of name2 is ${name2} 
and value of num2 is ${num2}`;

console.log("Interpolated string : ", interpolatedString)

// Once the type of a variable has been fixed
// you cannot assign values of a different type to it
// Uncomment the code below to see the compiler errors

// name1 = 35;
// num3 = 'Jane';
// isFast = 22;

// Automatically infers that num5 is a number type
let num5 = 32;
// Attempting to assign a value of a different type
// will again result in an error
// num5 = 'spiderman';

// Automatically infers that name3 is a number type
let name3 = 'john';
// Attempting to assign a value of a different type
// will again result in an error
// name3 = false;

const myFirstVal = 35;
// Attempting to reassign another value, even of the correct
// type will result in an error
// myFirstVal = 10;