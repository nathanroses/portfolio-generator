const profileDataArgs = process.argv.slice(2, process.argv.length);
const [Name, github] = profileDataArgs;



const generatePage = (userName, githubName) => {
    return`
    Name: ${userName} 
    Github: ${githubName}
    `; 
};

console.log(Name, github);
console.log(generatePage(Name, github));