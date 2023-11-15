import inquirer from 'inquirer'
import fs from 'fs'

inquirer
// take input from user with inquirer
  .prompt([
    {
        type:'input',
        message: 'please enter 3 characters',
        name:'char'
    },
    {
        type:'input',
        message:'please enter a hexadecimal or color for text',
        name:'color'
    },
    {
        type:'list',
        message:'please choose a shape',
        name:'shape',
        choices:['circle','triangle','square']
    },
    {
        type:'input',
        message: 'please enter shape color or hexadecimal',
        name:'shapeColor'
    }

    
  ])
  .then((answers) => {
    let createSVG// declare svg variable
    if(answers.shape === 'circle'){
      //if the answer is circle generate this html for the svg
      createSVG = `<svg width="300" height="200"><circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/><text x="150" y="125" font-size="40" text-anchor="middle" fill="${answers.color}">${answers.char}</text></svg>`
    }
    else if(answers.shape === 'triangle'){ 
      createSVG = `<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/><text  x="100" y="100" font-size="40" text-anchor="middle" fill="${answers.color}">${answers.char}</text></svg>`
    }
    else if(answers.shape === 'square'){
      createSVG = `<svg width="300" height="200"><rect width="100" height="100" x="100" y="80" fill="${answers.shapeColor}"/><text x="100" y="100" font-size="40" text-anchor="middle" fill="${answers.color}">${answers.char}</text></svg>`
    }
    //using writeFile to create file
    console.log("Generated logo.svg")
    fs.writeFileSync('./logo.svg', createSVG)
  })