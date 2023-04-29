const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const svgAttributes = ({
    text,
    textColor,
    shape,
    shapeColor,
  }) => {}

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Please input up to 3 characters for the logo.",
    },
    {
        type: "input",
      message: "What color would you like the logo text to be?",
      name: "textColor",
    },
    {
        type: "list",
      message: "What shape would you like the logo to be?",
      name: "shape",
      choices: ["Circle", "Triangle", "Rectangle"],
      
    },
    {
        type: "input",
      message: "What color would you like the logo to be?",
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    console.log(answers)
    const filename = `logo.svg`

    fs.writeFile(filename, readMeDoc(answers), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });