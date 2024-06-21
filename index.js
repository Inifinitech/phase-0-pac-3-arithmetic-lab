// function to add
function add(a, b) {
    return a + b;
} 
console.log(add(9,4));

// function to subtract
function subtract(a, b) {
    return a - b;
} 
console.log(subtract(9,6));

// function to multiply
function multiply(a, b) {
    return a * b;
} 
console.log(multiply(9,7));

// function to divide
function divide(a, b) {
    return a / b;
} 
console.log(divide(9, 9));

// function to increment
function increment(n) {
    return ++n;
}
console.log(increment(9));

// function to increment
function increment(n) {
    return ++n;
}
console.log(increment(9));

// function to decrement
function decrement(n) {
    return --n;
}
console.log(decrement(9));

// function to parse a string
function makeInt(string) {
    return parseInt(string, 10);
}
console.log(makeInt("70.9999991"));

// function to parse a string and return it as a float
function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal("993.93900"));