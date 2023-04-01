import inquirer from "inquirer";
import chalk from "chalk";

function alphabetcheck()
{

    inquirer.prompt({
        name : 'char',
        type : 'input',
        message : 'Enter an Alphabet:',
    }).then((input) => 
    {
        let char:string = input.char;

        char = char.toLowerCase();
    
        if (char === 'a')
        {
            console.log(chalk.greenBright.bold('Vowel'));
        }
        else if (char === 'e')
        {
            console.log(chalk.greenBright.bold('Vowel'));
        }
        else if (char === 'i')
        {
            console.log(chalk.greenBright.bold('Vowel'));
        }
        else if (char === 'o')
        {
            console.log(chalk.greenBright.bold('Vowel'));
        }
        else if (char === 'u')
        {
            console.log(chalk.greenBright.bold('Vowel'));
        }
        else
        {
            console.log(chalk.redBright.bold('Consonent'));
        }

        inquirer.prompt({
            name : 'confirmation',
            type : 'input',
            message : 'Do you want to continue (y/n)?'}).then((click) => {
                
                if (click.confirmation === 'y')
                {
                    alphabetcheck();
                }
                else if (click.confirmation === 'n')
                {
                    console.log(chalk.bgCyan.whiteBright.bold('The end'));
                    
                }
                else
                {
                    console.log('You entered an invalid input..');
                    
                }
            })
    })

}
alphabetcheck();

