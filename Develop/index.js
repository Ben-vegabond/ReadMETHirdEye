const generateMarkdown = require('./utils/generateMarkdown');



const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What kind of license does your project have?',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Provide a brief description of your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How do we use your project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How can users contribute to your project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Provide a brief description of your project:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How can a user test your project?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'If a user has questions, how can they reach you?',
        name: 'questions',
      }
      // Add more questions as needed
];

const fs = require('fs')

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`README file '${fileName}' created successfully!`);
        }
      });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
      });
    
}

// Function call to initialize app
init();
