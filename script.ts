type Operator = '+' | '-' | '÷' | '×' | '=';

class Calculator {
    private currentInput: string = '';
    private prevInput: string = '';
    private operator: Operator | null = null;

    // This function appends another number, 
    // e.g., 8 is in display, user clicks 9, it becomes 89
    public appendNumber(number: string): void {
        if (number === '.' && this.currentInput.includes('.')) return;

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

    public removeNumber(): void {
        if(this.currentInput === '') return;

        if(this.currentInput !== ''){
            this.currentInput = this.currentInput.slice(0, -1);
        }
        
        this.updateDisplay();
    }

    public updateDisplay() {
        const display = document.querySelector('.display-input') as HTMLElement;
        display!.innerText = this.currentInput || '0';
    }

    public chooseOperator(operator: Operator): void{
        if(this.currentInput === "" && this.prevInput === "") return;

        if(this.currentInput!== "" && this.prevInput !== ""){
            this.compute();
        }

        const operators = ['-', '+', '÷', '×'];
        const lastChar = this.currentInput.slice(-1)

        if(operators.includes(lastChar)){
            return
        }

        this.operator = operator;
        this.prevInput = this.currentInput

        console.log('this is current' + this.currentInput)
        console.log('this is prev' + this.prevInput)
        this.updateDisplay();
    }

    public compute(){
        const currentInput = this.currentInput;

        for(const letter of currentInput){
            switch(this.operator){
                case '-':
                    
                    
            }
        }
    }
}

const calculator = new Calculator();

document.getElementById('buttons')?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('num')) {
        calculator.appendNumber(target.innerText);
    }
    if(target.classList.contains('del')){
        calculator.removeNumber()
    }
    if(target.classList.contains('operator')){
        calculator.chooseOperator(target.innerText as Operator);
    }
    if(target.classList.contains('equal')){
        calculator.compute()
    }
})