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