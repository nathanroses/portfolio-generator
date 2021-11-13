const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

//const fs = require('fs');

//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(Name, github);

const promptUser = () => {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
      },
      {
        type: 'confirm',
        name: 'age',
        message: 'Confirm you are over the age of 18'
     },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username?'
     },
     {
        type: 'input',
        name: 'about',
        message: 'Provide information entailing to yourself?'
     }
  ]);
};
 


 const promptProject = () => {
     console.log(`
     =================
     Add a New Project
     =================
     `);
      
     return inquirer.prompt([
         {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
         },
         {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (REQUIRED).'
         },
         {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
         },
         {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project (REQUIRED).'
         },
         {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
         },
         {
            type: 'confirm',
            name: 'confrimAddProject',
            message: 'Would you like to enter another project?',
            default: false
         }

     ]);
 };

 promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));


//fs.writeFile('index.html', generatePage(Name, github), err => {
 //   if (err) throw err;

   // console.log('Portfolio Complete! Check out index.html to see your output!')
//});

