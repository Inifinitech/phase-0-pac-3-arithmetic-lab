// function to add
function add(a, b) {
    return a + b;
} 
console.log(add());

// function to subtract
function subtract(a, b) {
    return a - b;
} 
console.log(subtract());

// function to multiply
function multiply(a, b) {
    return a * b;
} 
console.log(multiply());

// function to divide
function divide(a, b) {
    return a / b;
} 
console.log(divide());

// function to increment
function increment(n) {
    return ++n;
}
console.log(increment());

// function to decrement
function decrement(n) {
    return --n;
}
console.log(decrement());

// function to parse a string
function makeInt(string) {
    return parseInt(string, 10);
}
console.log(makeInt());

// function to parse a string and return it as a float
function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal());
