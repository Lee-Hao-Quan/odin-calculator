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
        throw new Error('fuck you');
    }
    return a / b;
}
console.log(divide(2, 0));
export {};
//# sourceMappingURL=script.js.map