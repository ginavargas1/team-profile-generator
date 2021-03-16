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
    htmlPage();
};

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
                    
                    // if they say no then html is ready
                    //html - employees generate
                    employees.push(teamMembers);
                    addHtml(teamMembers)
                    .then(function(){
                        if(addMembers === "Yes"){
                            teamAssemble();
                        }else {
                            completeHtml();
                        }
                    });
                    
                    


                    console.log(teamMembers);
                });

        });
    

}

// html page 
// each role will need to be defined
// info will have to populate in html (js append OR FS writefile)
function htmlPage() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="jumbotron text-center">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
    </div>
    
    <div class="container">
        <div class="row">
    `;
    
    fs.writeFile('index.html', html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    
    console.log('start');
}

function addHtml(team) {
    return new Promise (function(resolve, reject) {
        const name = team.getName();
        const role = team.getRole();
        const id = team.getId();
        const email = team.getEmail();
        let data = '';

        if (role=== 'Engineer') {
            const github = team.getGithub();
            data = `
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                <div class="card h-100">
                <div class="card-body">
                <h5 class="card-header text-center">Engineer<br /><br />${name}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${github}</li>
            </ul>
            </div>
            </div>
            </div>
            `;
        } else if (role ==='Intern') {
            const school = team.getSchool();
            data = `
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                <h5 class="card-header text-center">Intern<br /><br />${name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School Name: ${school}</li>
                </ul>
            </div>
            </div>
            `
        } else {
            const officeNumber = team.getOfficeNumber();
            data = `
            <div class="col">
                <div class="card h-100">
                <div class="card-body">
                <h5 class="card-header text-center">Manager<br /><br />${name}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officeNumber}</li>
            </ul>
            </div>
            </div>
            </div>
            `
        }
        console.log('assembling team members')
        fs.appendFile('index.html', data, function(err){
            if (err) {
                return reject (err);
            };
            return resolve();
        });

    });
}

function completeHtml () {
    const html = `
    </div>
    </div>

    </body>
    </html>
    `;

    fs.appendFile('index.html', html, function (err) {
        if (err) {
            console.log(err);
        };
        console.log('finished');
    });
 

}

//   .catch(error => {
//     console.log(error)
//     if(error.isTtyError) {
//     } else {
//     }
//   });

myTeam();


