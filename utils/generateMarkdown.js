// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellow.svg)`
  }
  return ""
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `[${license} license](https://opensource.org/licenses/${license})`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `License`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [${renderLicenseSection(data.license)}](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)

## ${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation
To install dependencies, run the following command: 

${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributions}

## Testing
To run tests, run the following command: 

${data.testing}

## Questions
* https://github.com/${data.username}

* For further questions, email me at ${data.email}

`;
}

module.exports = generateMarkdown;
