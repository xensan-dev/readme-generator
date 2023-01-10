const fs = require('fs');


//creates license section if there is a license
function renderLicenseSection(license) {
    if (license === 'Unlicensed') {
        return ``;
    } else {
        return `## License
        This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
    }
}

//returns a license badge from which license is selected
function renderLicenseBadge(license) {
    //if there is no license return empty
    if(license === 'Unlicensed') {
        return '';
    } else {
        return `[![${license} license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicenseLink(license)})`;
    }
}

//returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
      return `https://lbesson.mit-license.org/`
    }
    if (license === 'GPL') {
      return `http://perso.crans.org/besson/LICENSE.html`
    }
    if (license === 'CC--0') {
      return `https://creativecommons.org/licenses/by-nd/4.0` 
    }
}

// Generate markdown for README
function generateMarkdown(data) {
    return `# Title
${data.title}

${renderLicenseBadge(data.license)}
    
## Description
${data.description} 
    
[Alt text](./"Link to attached video file of your project)
    
## Table of Contents
1.  [title](#title)
2.  [description](#description)
3.  [installation](#installation)
4.  [usage](#useage)
5.  [license](#license)
6.  [contributors](#contributors)
7.  [tests](#tests)
8.  [questions](#questions)
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
${renderLicenseSection(data.license)}
    
## Contributors
${data.contributors}
    
## Tests 
${data.tests}
    
## Questions
Have any questions about this project? Reach me here
[${data.username}](https://github.com/${data.username})
`
}

module.exports = generateMarkdown;