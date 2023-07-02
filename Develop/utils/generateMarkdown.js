
// If there is no license, return an empty string
function renderLicenseBadge(license) {}


// If there is no license, return an empty string
function renderLicenseLink(license) {}


// If there is no license, return an empty string
function renderLicenseSection(license) {}


function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me via the contact information provided below:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

module.exports = generateMarkdown;
