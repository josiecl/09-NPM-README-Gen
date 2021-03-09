// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'list',
        message: 'What license is your project using?',
        name: 'license',
        choices: ['MIT', 'Apache', 'None'],
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'What is the information for usage of the project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can people continue to contribute to your project?',
        name: 'contributions',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        writeToFile("NEWREADME.md", generateMarkdown({...response}))
    })
}

// Function call to initialize app
init();
