const inquirer = require("inquirer");
const fs = require("fs");

const readMeDoc = ({
  projectTitle,
  motivation,
  purpose,
  solve,
  learn,
  installation,
  usage,
  credits,
  license,
  gitname,
  email,
}) => {

  return `

    # ${projectTitle} 

    ## Description

    ${motivation}

    ${purpose}

    ${solve}

    ${learn}

    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation 

    ${installation}

    ## Usage 

    ${usage} 

    ## Credit

    ${credits} 

    ## License
    
    This project uses the following license: ${license}. Please refer to [https://choosealicense.com/](https://choosealicense.com/).

    ## Questions

    You can see my GitHub Profile at https://github.com/${gitname}.

    You can reach me at my email: ${email}

    All code source should be found in the index.js file within the repo.
    `;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project title? ",
    },
    {
        type: "input",
      message: "What was your motivation for this project?",
      name: "motivation",
    },
    {
        type: "input",
      message: "Why did you build this project?",
      name: "purpose",
      
    },
    {
        type: "input",
      message: "What problem does this project solve?",
      name: "solve",
      
    },
    {
        type: "input",
      message: "What did you learn while creating this project?",
      name: "learn",
      
    },
    {
        type: "input",
      message: "What steps are required to install your project? Provide a step by step description of how to get the development enviornment running.",
      name: "installation",

    },
    {
        type: "input",
      message: "Please provide instructions and examples for project use?",
      name: "usage",
      
    },
    {
        type: "input",
      message: "Please list any colaborators of this project or type in `none`",
      name: "credits",
      
    },
    {
        type: "list",
      message: "Which open source license is needed for your project?",
      name: "license",
      choices: ["Unlicense", "MIT", "GP", "Apache", "None"],
      
    },
    {
        type: "input",
      message: "What is your Github user name?",
      name: "gitname",
      
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    
    },
  ])
  .then((answers) => {
    console.log(answers)
    const filename = `${answers.projectTitle.toLowerCase()}.md`

    fs.writeFile(filename, readMeDoc(answers), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
