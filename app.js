const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [Name, github] = profileDataArgs;

const generatePage = require('./src/page-template');





fs.writeFile('index.html', generatePage(Name, github), err => {
    if (err) throw err;

    console.log('Portfolio Complete! Check out index.html to see your output!')
});