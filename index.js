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
        message: "What is the project description?: "
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps for installation? "
    },
    {
        type: "input",
        name: "usage",
        message: "Instructions for use? "
    },
    {
        type: "checkbox",
        name: "licence",
        message: "What type of licence do you need? ",
        choices: [
            {
                name: "None"
            },
            {
                name: "Apache Licence 2.0"
            },
            {
                name: "GNU General Public Licence v3.0"
            },
            {
                name: "MIT Licence"
            }
            ]
    },
    {
        type: "input",
        name: "contributing",
        message: "List all collaborators "
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any tests? "
    },
    {
        type: "input",
        name: "questions",
        message: "Are there any questions? "
    }
    ])
        let username = questions.username;
        let projectTitle = questions.projectTitle;
        let description = questions.description;
        let installation = questions.installation;
        let usage = questions.usage;
        let licence = questions.licence;
        let contributing = questions.contributing;
        let tests = questions.tests;
        let anyQuestions = questions.questions;

        

        const gitName = username;
        const apiURL = `https://api.github.com/users/` + `${gitName}`;
        
        const userResponse = await axios.get( apiURL );
        
        let image = userResponse.data.avatar_url;
        let email = userResponse.data.email;
        
    

        let readmeWrite = `![logo](${image})\n ### Username: ${username}\n ### Email: ${email}\n ## Project Title: ${projectTitle}\n ## Project Description\n ${description}\n ## Installation\n ${installation}\n ## Usage\n ${usage}\n ## Licence\n ${licence}\n ## Project Contributors\n ${contributing}\n ## Tests\n ${tests}\n ## Questions\n ${anyQuestions}\n`

        let writeFile = fs.writeFileSync("README.md", readmeWrite)


        
        
}

main();

