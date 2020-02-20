// look at .split() and .join()



var inquirer = require("inquirer");
var fs = require("fs");
var axios = require("axios");


async function askQuestions(){
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

        let writeFile = fs.writeFileSync("username.md", `Username: ${username}`)

        // let personalToken = " 96f7cd5aea19d593ca87496c19dd43b9290d799a";


        const gitName = username;
        console.log(`gitname: ${gitName}`)
        const apiURL = `https://api.github.com/users/${gitName}`
        const userResponse = await axios.get( apiURL );
        console.log(apiURL);


        // use axios to make the api call with the input username
}


askQuestions();



function writeToFile(fileName, data) {

return 

}

function init() {

}

init();
