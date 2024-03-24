#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
// const randomNumber = Math.random(); // give value from 0.1 to 0.99
let Loop = true;
while (Loop) {
    const randomNumber = Math.floor(Math.random() * 6 + 1); // + 1 is used for you will not get zero number 
    const answers = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: "Please guess a number from 1 - 6 :",
        },
    ]);
    // console.log (answers);
    if (answers.userGuessedNumber === randomNumber) {
        console.log("Conguratulation! you guessed the correct number");
        const playMore = await inquirer.prompt({
            type: "confirm",
            name: "more",
            message: "Do you want to play more ?",
            default: false
        });
        if (!playMore.more) {
            Loop = false;
            console.log("\n Thank you!");
        }
    }
    else {
        console.log("You guessed number is wrong");
    }
}
