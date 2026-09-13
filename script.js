class Calculator {
    currentInput = '';
    prevInput = '';
    operator = null;
    // This function appends another number, 
    // e.g., 8 is in display, user clicks 9, it becomes 89
    appendNumber(number) {
        if (number === '.' && this.currentInput.includes('.'))
            return;
        // Check if the current input is zero and if number to input is not a decimal point
        // Basically sets the initial value
        if (this.currentInput === '' && number === '.') {
            this.currentInput = '0.';
        }
        else if (this.currentInput === '') {
            this.currentInput = number;
        }
        else {
            this.currentInput += number;
        }
        this.updateDisplay();
    }
    removeNumber() {
        if (this.currentInput === '')
            return;
        if (this.currentInput !== '') {
            this.currentInput = this.currentInput.slice(0, -1);
        }
        this.updateDisplay();
    }
    updateDisplay() {
        const display = document.querySelector('.display-input');
        display.innerText = this.currentInput || this.operator || '0';
    }
    chooseOperator(operator) {
        if (this.currentInput === "" && this.prevInput === "")
            return;
        if (this.currentInput !== "" && this.prevInput !== "") {
            this.compute();
        }
        const operators = ['-', '+', '÷', '×'];
        const lastChar = this.currentInput.slice(-1);
        if (operators.includes(lastChar)) {
            return;
        }
        this.operator = operator;
        // Set the previous input correctly
        this.prevInput = this.currentInput;
        // reset the reference input
        this.currentInput = '';
        this.updateDisplay();
    }
    compute() {
        let currentInput = parseFloat(this.currentInput);
        let prevInput = parseFloat(this.prevInput);
        let calculate = 0;
        switch (this.operator) {
            case '+':
                calculate = prevInput + currentInput;
                break;
            case '-':
                calculate = prevInput - currentInput;
                break;
            case '÷':
                calculate = prevInput / currentInput;
                break;
            case '×':
                calculate = prevInput * currentInput;
                break;
            // In the case of equal
            default:
                return;
        }
        this.currentInput = (Math.round(calculate * 100) / 100).toString();
        this.operator = null;
        this.prevInput = '';
        this.updateDisplay();
    }
    clear() {
        this.currentInput = '';
        this.operator = null;
        this.prevInput = '';
        this.updateDisplay();
    }
}
const calculator = new Calculator();
document.getElementById('buttons')?.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('num')) {
        calculator.appendNumber(target.innerText);
    }
    if (target.classList.contains('del')) {
        calculator.removeNumber();
    }
    if (target.classList.contains('operator')) {
        calculator.chooseOperator(target.innerText);
    }
    if (target.classList.contains('equal')) {
        calculator.compute();
    }
    if (target.classList.contains('clear')) {
        calculator.clear();
    }
});
export {};
//# sourceMappingURL=script.js.map