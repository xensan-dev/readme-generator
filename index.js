// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name:"username"
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title'
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description'
    },
    {
        type: 'checkbox',
        message: 'Include a table of contents?',
        choices: ['yes', 'no'],
        name:"tableOfContents"
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributors'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Apache', 'MIT', 'AGPL', 'Unlicensed'],
        name: 'license'
    }
];

//prompt user function
const promptUser = function(){
    return inquirer.prompt(questions)
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, generateMarkdown(data), function(err){
        if (err) return console.log(err)
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => writeToFile('README.md', answers))
        .then(() => console.log('You have successfully generated your project\'s readme!'))
        .catch((err) => console.log(err));
}


// Function call to initialize app
init();
