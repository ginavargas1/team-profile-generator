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
        choices: ['Manager', 'Intern', 'Engineer', 'New Role'],
    },
  
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

    else if(answers.role==="Manager") {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'officeNum',
            message:'What is you office phone number?'
          }
        ])
        .then(answers => {
            console.log(answers)
        })
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
        .then(answers => {
            console.log(answers)
        })
    }

    else if(answers.role==="New Role") {
    
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'addMembers',
              choices: ['Add Engineer', 'Add Intern', 'Add Manager', 'No, team is complete'],
              message: 'Which role would you like to add?'
            }
          ])
        
          .then(answers => {
              console.log(answers);
              if (answers.role === 'Add Engineer') {
                  console.log(Engineer)
              } else if(answers.role === 'Add Intern'){
                  console.log(Intern)
              } else if(answers.role === 'Add Manager'){
                console.log(Manager)
              } else {
                console.log(answers)
              }

          
    
      
        })
 
  .catch(error => {
    console.log(error)
    if(error.isTtyError) {
    } else {
    }
  });
