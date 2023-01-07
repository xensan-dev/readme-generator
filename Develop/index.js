// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = (data) => 
`# Title
${data.title}
![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

## Description
${data.description} 

[Alt text](./"Link to attached video file of your project)

## Table of Contents
1.  [title](#title)
2.  [description](#description)
3.  [installation](#installation)
4.  [useage](#useage)
5.  [license](#license)
6.  [contributing](#contributing)
7.  [tests](#tests)
8.  [questions](#questions)

## Installation
${data.installation}

## Usage
${data.useage}

## License
![${data.license}](https://img.shields.io/badge/license-${data.license}-blue)

## Contributing
${data.contributing}

## Tests 
${data.tests}

## Github
[${data.username}](https://github.com/${data.username})
`

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
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

//prompt user function
const promptUser = function(){
    return inquirer.prompt(questions)
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, generateReadMe(data), function(err){
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
