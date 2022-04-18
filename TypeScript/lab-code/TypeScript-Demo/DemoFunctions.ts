
// Declaration of function with annotation for parameter
// types and return type
function firstAdd(a: number, b:number) : number {
    let result = a + b;
    return result;
}

let getResult1:number = firstAdd(3,5);
// This two other statements don't work because of type mismatch
// in return type or parameter type
// let getResult2:string = firstAdd(3,5);
// let getResult3:number = firstAdd('dog', 3); 

// Inference that return type is string
function secondAdd(a: number, b:number) {
    let result = "Added the two numbers " + (a+b);
    return result;
}

let getResult4:string = secondAdd(3, 5);

// Return type and parameter types can also be union types
type specialReturnType = number | boolean;
type specialParameterType = number | string;

function specialFunc(a: specialParameterType, b: specialParameterType ) : specialReturnType {

    if ((typeof a) === 'number')
        return 35;
    else 
        return false;
}

let getResult5:any = specialFunc(3,'cat');
console.log("first call to specialFunc returns : ", getResult5);
getResult5 = specialFunc('dog',9);
console.log("second call to specialFunc returns : ", getResult5);

// If function is not expected to return a value specify void

function nothingBack() : void {
    console.log("This function does not return anything");
}

// If no return type is specified, inferred that it is void

function nothingBack2() {
    console.log("This function also does not return anything");
}

// Parameter c is optional 
function addSomeNumbers(a: number, b: number, c?: number): number {

    // This is known as a type guard to check
    // value of c before performing the required operation
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

console.log("Calling addSomeNumbers with 3,4,5 gives : ",addSomeNumbers(3,4,5));

console.log("Calling addSomeNumbers with 3,4 gives : ",addSomeNumbers(3,4));

// An alternative to optional parameters is to provide default parameters
function addDefaultNumbers(a: number, b = 10, c = 15) {

    return a + b + c;

}

console.log("Calling addDefaultNumbers with 3,4,5 gives : ", addDefaultNumbers(3,4,5));
console.log("Calling addDefaultNumbers with 3,4 gives : ", addDefaultNumbers(3,4));
console.log("Calling addDefaultNumbers with 3 gives : ", addDefaultNumbers(3));

function restFunc(greeting: string, ...names: string[]) {
    console.log("First parameter : ",greeting);
    console.log("The array names is of length ", names.length);
    console.log("The contents of the array are : ");
    for (let content of names) {
        console.log(content);
    }
}
console.log("Calling restFunc with 3 parameters");
restFunc('cat','dog','mouse');

console.log("Calling restFunc with 1 parameter");
restFunc('cat');

