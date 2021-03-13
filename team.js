// node modules 
const inquirer = require ("inquirer");
const fs = require("fs")

// constructors
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require ("./lib/Employee");

inquirer
  .prompt([ 
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager', 'Intern', 'Engineer'],
    }
  
  ])
  .then(answers => {
    console.log(answers)
    if(answers.role==="Intern") {
        inquirer
            .prompt([ 
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the name of your school?',
                },
            ])
            .then(answers => {
                console.log(answers)
            })
    }
    else if(answers.role==="Manger") {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'officeNum',
            message:'What is you office phone number?'
          }
        ])
    }
    else if(answers.role==="Engineer") {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'gitHub',
            message:'What is your GitHub?'
          }
        ])
    }
})
  .catch(error => {
    console.log(error)
    if(error.isTtyError) {
    } else {
    }
  });
