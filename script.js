const numberButton = document.querySelectorAll('.num');
const displayInput = document.querySelector('.display-input');
console.log(displayInput);
// Helper functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error('You cannot divide by zero!');
    }
    return a / b;
}
// Main function
function operate(a, b, c) {
    switch (b) {
        case "+":
            console.log("= is selected!");
        case "-":
            console.log("= is selected!");
        case "":
            console.log("= is selected!");
        case "=":
            console.log("= is selected!");
        case "=":
            console.log("= is selected!");
    }
}
export {};
//# sourceMappingURL=script.js.map