const profileDataArgs = process.argv.slice(2, process.argv.length);
const [Name, github] = profileDataArgs;
const fs = require('fs');



const generatePage = (Name, github) => {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content"width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Portfolio Demo</title>
    </head>
    
    <body>
      <h1>${Name}<h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `; 
};

fs.writeFile('index.html', generatePage(Name, github), err => {
    if (err) throw err;

    console.log('Portfolio Complete! Check out index.html to see your output!')
});