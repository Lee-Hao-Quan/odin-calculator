# Calculator Project using Typescript and OOP
## "Reversed engineering" the GeeksForGeeks Article

https://www.geeksforgeeks.org/typescript/calculator-app-using-typescript/

1. Create a calculator class

2. within that class, have properties which are private for operator, current input and previous input

3. Add a updateDisplay() function to update the DOM and assign the currentInput to it

4. Have a clear() function to remove previous and currentInput as well 
as the operator.

5. have a chooseOperator function that checks for the operator and assigns the value to it then prev input = currentInput

6. have a compute() function to perform all the computing with prev and current inputs

7. appendNumber() function that accepts the current input and replaced the dom with updateDisplay()