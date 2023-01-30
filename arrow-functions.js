/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code Block
    return a + b
}
let sum= addTwoNumbers (3, 5);
console.log("Sum 1: ", sum)

// Arrow Function With Parameters

const addTwoNumbersV2 = (a, b) => {
    // Code Block
    return a + b
}

let sum2= addTwoNumbersV2 (1, 2);
console.log("Sum 2: ", sum2)

// Single Line Arrow Function With Parameters
// Also valid : const addTwoNumbersV3 = (a, b) => (a + b);
const addTwoNumbersV3 = (a, b) => a + b;
let sum3 = addTwoNumbersV3(3, 2)
console.log("Sum 3: ", sum3)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello World!");

const sayBye = () => console.log("Good Bye!");
sayBye();


// Returning Multiple Lines

const returnMultiple = () => (
    `    <p>
        This is a
        multiline
        text string.
    </p>`
)
console.log(returnMultiple())