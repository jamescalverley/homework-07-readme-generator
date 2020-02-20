// look at .split() and .join()



var inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");


async function main(){
    const questions = await inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "Enter your username: "
    },
    {       
        type: "input",
        name: "projectTitle",
        message: "Enter the project title: "
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?:  "
    }
    ])
        let username = questions.username;
        let projectTitle = questions.projectTitle;
        let description = questions.description;

        console.log(`Username: ${username}`);
        console.log(`Project Title: ${projectTitle}`);
        console.log(`Project Description: ${description}`);

        const gitName = username;
        const apiURL = `https://api.github.com/users/` + `${gitName}`;
        
        const userResponse = await axios.get( apiURL );
        
        let image = userResponse.data.avatar_url;
    
        // >>>>> write the README file
        let readmeWrite = `
        ![logo](${image})\n 
        # Title\n 
        Username: ${username}\n 
        Project Title: ${projectTitle}\n 
        ## Description\n 
        Project Description: ${description}\n `

        let writeFile = fs.writeFileSync("JC-readme.md", readmeWrite)
        
}
//  !!!!!look at md file styling guide 
// commit changes
// prompt all sections
main();

function writeToFile(fileName, data) {

return 

}

function init() {

}

init();
