// Helper functions
function add(a: number, b: number): number{
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number{
    if(b === 0){
        throw new Error('You cannot divide by zero!')
    }

    return a / b;
}

// Main function
function operate(a: number, b: string, c: number) {
    switch(b){
        case "=":
            console.log("= is selected!")
        case "=":
            console.log("= is selected!")
        case "=":
            console.log("= is selected!")
        case "=":
            console.log("= is selected!")
        case "=":
            console.log("= is selected!")
    }
}