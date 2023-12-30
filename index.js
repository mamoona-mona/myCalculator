#! usr/bin/env node 
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowtitle = chalkAnimation.rainbow(' welcome to the world of calculation ');
    await sleep();
    rainbowtitle.stop();
    console.log(`
     ____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operations",
            message: "which operation you wants to perfoam?",
            choices: ["Addition", "Subtractions", "Multiplication", "Division"]
        },
        //. Using inquirer to take input for first numeric value
        {
            type: "input",
            name: "fristNumber",
            message: "Enter first number"
        },
        //. Using inquirer to take input for second numeric value
        {
            type: "input",
            name: "secondNumber",
            message: "Enter second number"
        },
        //. Using inquirer to take input for operation
        {
            type: "list",
            name: "operation",
            message: "Select the operation",
            choices: ["+", "-", "*", "/"]
        }
    ]);
    const { fristNumber, secondNumber, operation } = answers;
    const maths = (fristNumber, secondNumber, operation) => {
        //. Condition for plus operation
        if (operation === "+") {
            return fristNumber + secondNumber;
        }
        //. Condition for minus operation
        else if (operation == "-") {
            return fristNumber - secondNumber;
        }
        //. Condition for multiplication operation
        else if (operation == "*") {
            return fristNumber * secondNumber;
        }
        //. Condition for division operation
        else if (operation == "/") {
            return fristNumber / secondNumber;
        }
        //. Final else to ensure that operation is not possible
        else {
            return "Operation not possible";
        }
    };
    console.log(maths(Number(fristNumber), Number(secondNumber), operation));
}
;
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue? press y or n: "
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes');
}
await startAgain();
