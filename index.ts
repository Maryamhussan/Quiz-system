#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.rgb(112,326,799)("\nWho Wants To Be A Typescript Millionare?\n\n"))
console.log(chalk.bold.bgBlue("\tINTODUCTION "));
console.log((`\tHello!I am `)+chalk.bold.bgRed(`"TYPESCRIPT MASTERY QUIZ".`));
console.log("\tI am here to check your knowledge about typescript.");
//console.log("\tIf you get any question wrong I will be killed");
console.log("\tHope You get all the questions right...\n");


let playername=await inquirer.prompt([{
    "name":"name",
    "type":"input",
    "message":"What is Your Name?"
}]);
let name=playername.name.toUpperCase()
let lowername=playername.name.toLowerCase()
let startgame=await inquirer.prompt([{
    "name":"name",
    "type":"list",
    "message":`What Would You Like To Do ${lowername} : `,
    choices:["Start Game","Quit Game"]
}])
if (startgame.name==="Start Game") {
    interface Question {
        question: string;
        choices: string[];
        correctAnswer: string;
      }
      
      const questions: Question[] = [
        {
          question: "What is TypeScript?",
          choices: [
            "A superset of JavaScript",
            "A CSS framework",
            "A database management tool",
            "A type of coffee"
          ],
          correctAnswer: "A superset of JavaScript"
        },
        {
          question: "Which company developed TypeScript?",
          choices: [
            "Google",
            "Microsoft",
            "Facebook",
            "Amazon"
          ],
          correctAnswer: "Microsoft"
        },
        {
          question: "Which of the following is a TypeScript type?",
          choices: [
            "Number",
            "String",
            "Boolean",
            "All of the above"
          ],
          correctAnswer: "All of the above"
        },
        {
          question: "How do you define a variable with a specific type in TypeScript?",
          choices: [
            "let variable: type;",
            "var variable = type;",
            "let variable = type;",
            "const variable: type;"
          ],
          correctAnswer: "let variable: type;"
        },
        {
          question: "Which file extension is used for TypeScript files?",
          choices: [
            ".ts",
            ".js",
            ".tsx",
            ".json"
          ],
          correctAnswer: ".ts"
        },
        {
          question: "Which of the following is a TypeScript feature that JavaScript does not have?",
          choices: [
            " Prototypes",
            "Static type checking",
            "Closures",
            " Asynchronous programming"
          ],
          correctAnswer: "Static type checking"
        },
      {
      question: "How do you declare a variable in TypeScript that can only hold string values?",
      choices:[
      " let variable: any;",
      " let variable: string;",
       "let variable: number;",
       "let variable: boolean;" ],
       correctAnswer: " let variable: string;"
      },
      
       {
      question:"What is the purpose of the never type in TypeScript?",
      choices:
       ["To represent a value that is always true",
      "To represent values that never occur",
       "To declare optional properties",
       "To represent a variable that can hold any value"
      ],
       correctAnswer: "To represent values that never occur"
      },
      {
      question:"How do you create an array of numbers in TypeScript?",
      choices:
       ["let arr: number[] = [1, 2, 3];",
       "let arr: Array = [1, 2, 3];",
       "let arr: Array<number> = [1, 2, 3];",
       "Both a and c",],
      correctAnswer: "Both a and c"
      },
      {
      question:"What is the correct way to define a function in TypeScript that takes a string and returns a number?",
      choices:[
          "function myFunc(str: string): number { }",
      "function myFunc(str): number { }",
      "function myFunc(str: string): any { }",
      "function myFunc(str: any): number { }"
      ],
      correctAnswer: "function myFunc(str: string): number { }"},
      ];
      
      async function quiz() {
        let score = 0;
        
        for (const question of questions) {
          const answer = await inquirer.prompt([{
            name: "userAnswer",
            type: "rawlist",
            message: question.question,
            choices: question.choices
          }]);
          
          if (answer.userAnswer === question.correctAnswer) {
            console.log(chalk.green(`Nice work ${lowername}.That's the Correct Answer!`));
            score++;
          } else {
            console.log(chalk.red(`Too bad ${lowername},That's an Incorrect Answer!.`));
          }
        }
        
        console.log(chalk.blue(`You scored ${score} out of ${questions.length}`));
        if (score===questions.length) {
            console.log(`\t--------------------------------------------`)
        console.log(chalk.rgb(415,76,514)(`\t\tCongratulations ${lowername},You Won!`))
        console.log(`\t--------------------------------------------`)
        console.log(chalk.yellow(`\t\tTHANKS FOR PLAYING ! ${name}.`))
        console.log(`\t--------------------------------------------`)

        } else if (score != questions.length) {
            console.log(`\t--------------------------------------------`)
            console.log(chalk.red.bold(`\t\tGame Over !!! You Lost ${lowername}.`));
            console.log(`\t--------------------------------------------`)

        }
      }
      
      
      quiz();
      
} else if(startgame.name==="Quit Game"){
    console.log(`\t--------------------------------------`)
    console.log(chalk.rgb(111,22,3033)(`\t\tTHANKS FOR PLAYING ! ${name}.`))
    console.log(`\t--------------------------------------`)

    process.exit()
}
