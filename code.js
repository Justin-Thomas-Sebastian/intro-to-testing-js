// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
const obj ={}; // empty object for testing
const foo = function(){}; // empty function for testing

function sayHello(name){
    if(name === true || name === false || arguments.length === 0 || name === null || name === ''){
        return "Hello, Stranger!";
    } else if (typeof name === "number" || typeof name === "object" || typeof name === "function"){
        return "Hello, World!";
    } else {
        return "Hello, " + name + "!";
    }
}

// isFive function
function isFive(num){
  return num === 5;
}

// isEven function
function isEven(num){
    if(num === true || num === false){
        return false;
    }
    let num2 = Number(num);
    if(isNaN(num2)){
        return false;
    }
    return num % 2 === 0;
}

// isVowel function
function isVowel(char){
    if(typeof char !== "string"){
        return false;
    }

    let charLower = char.toLowerCase();
    switch(charLower){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

// add function
function add(a, b){
    return Number(a) + Number(b);
}