#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
import figlet from "figlet";

console.log(figlet.textSync("Kamran Calculator!",));

const add = (a: number, b: number) : number => { return a + b; }
const sub = (a: number, b: number) : number => { return a - b; }
const mul = (a: number, b: number) : number => { return a * b; }
const div = (a: number, b: number) : number => { return a * b; }

function calculate(){

inquirer.prompt(
    [{
    name : 'num1',
    type : 'number',
    message : 'Enter 1st number:',
    }, 
    {    
        name : 'operation',
        type : 'input',
        message : 'Enter + (Addition) or - (Subtraction) or * (Multiplication) or / (Division):'
    }, 
    {    
    name : 'num2',
    type : 'number',
    message : 'Enter 2st number:'
    }]).then((input) => {
        if (input.operation === '+')
        {
            console.log(chalk.greenBright.bold(`The answer is : ${add(input.num1, input.num2)}`))
        }
        else if (input.operation === '-')
        {
            console.log(chalk.greenBright.bold(`The answer is : ${sub(input.num1, input.num2)}`))
        }
        else if (input.operation === '*')
        {
            console.log(chalk.greenBright.bold(`The answer is : ${mul(input.num1, input.num2)}`))
        }
        else if (input.operation === '/')
        {
            console.log(chalk.greenBright.bold(`The answer is : ${div(input.num1, input.num2)}`))
        }
        else
        {
            console.log(`Enter a valid input`)
        }

        inquirer.prompt({
            name : 'confirmation',
            type : 'input',
            message : 'Do you want to continue (y/n)?'}).then((click) => {
                
                if (click.confirmation === 'y')
                {
                    calculate();
                }
                else
                {
                    console.log(chalk.bgCyan.whiteBright.bold('The end'));
                    
                }
        })
    })
}
calculate();
