const inquirer = require("inquirer");
const fs = require("fs");
const Shapes = require("./lib/shapes");
const Circle = Shapes.Circle;
const Triangle = Shapes.Triangle;
const Rectangle = Shapes.Rectangle;

inquirer
  .prompt([
    {
      name: "text",
      message: "Enter 3 letters to be on your logo",
      type: "input",
    },
    {
      name: "textColor",
      message: "What color would you like the logo TEXT to be?",
      type: "input",
    },
    {
      name: "shape",
      message: "Whhich shape would you like your logo to be?",
      type: "list",
      choices: ["Circle", "Triangle", "Rectangle"],
    },
    {
      name: "shapeColor",
      message: "What color would you like the SHAPE of the logo to be?",
      type: "input",
    },
  ])
  .then((answers) => {
    fs.writeFile("logo.svg", fileGenerator(answers), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("completed");
    });
  });

const fileGenerator = ({ text, textColor, shape, shapeColor }) => {
  let newShape;
  switch (shape) {
    case "Circle":
      newShape = new Circle(text, textColor, shapeColor);
      break;

    case "Triangle":
      newShape = new Triangle(text, textColor, shapeColor);
      break;

    case "Rectangle":
      newShape = new Rectangle(text, textColor, shapeColor);
      break;
  }

  return `${newShape.render()}`;
};

function indexstart() {}

indexstart();
