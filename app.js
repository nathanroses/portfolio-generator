const inquirer = require('inquirer');

//const fs = require('fs');

//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(Name, github);


inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?'
      }
  ])
   .then(answers => console.log(answers));


//fs.writeFile('index.html', generatePage(Name, github), err => {
 //   if (err) throw err;

   // console.log('Portfolio Complete! Check out index.html to see your output!')
//});

