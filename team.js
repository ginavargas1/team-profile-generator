// node modules 
const inquirer = require("inquirer");
const fs = require("fs")

// constructors
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const employees = [];

function myTeam() {
    teamAssemble();
    // htmlPage();
}

// employee questions 
function teamAssemble() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Intern', 'Engineer'],
        },
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
            message: 'What is your email address?'
        }

    ])

        // adding roles
        .then(function ({ role, name, id, email }) {
            let roleInfo = "";
            // if/else statement to roles
            if (role === 'Engineer') {
                roleInfo = 'Github username';
            } else if (role === 'Intern') {
                roleInfo = 'School Name';
            } else {
                roleInfo = 'Office Phone Number'
            }

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'roleInfo',
                    message: `Enter team members ${roleInfo}`
                },
                {
                    type: 'list',
                    name: 'addMembers',
                    massage: 'Would you like to additional members?',
                    choices: ['Yes', 'No']
                }

            ]
            )

                //adding new members
                .then(function ({roleInfo, addMembers}) {
                    let teamMembers;

                    console.table(roleInfo)
                    if (role === 'Engineer') {
                        teamMembers = new Engineer(name, id, email, roleInfo);
                        employees.push(teamMembers)
                    } else if (role === 'Intern') {
                        teamMembers = new Intern(name, id, email, roleInfo);
                        employees.push(teamMembers)
                    } else if (role === "Manager") {
                        teamMembers = new Manager(name, id, email ,roleInfo);
                        employees.push(teamMembers)
                    };

                    if (data.addMembers == "Yes") {
                        teamAssemble()

                    }// if they say no then html is ready
                    //html - employees loop 
                    // each role will need to be defined
                    // info will have to populate in html (js append OR FS writefile)


                    console.log(teamMembers);
                });

        });

}

// // html page 
// function htmlPage() {
//     const html = 




//   .catch(error => {
//     console.log(error)
//     if(error.isTtyError) {
//     } else {
//     }
//   });

myTeam();