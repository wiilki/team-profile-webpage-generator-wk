const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');


// Array to store employee info
const allEmployees = [];

// Prompts for manager's info
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter manager's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter manager's id #:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter manager's email:",
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "Enter manager's office number:",
            }
        ])
        .then(managerInfo => {
            const { name, id, email, officeNum } = managerInfo;
            const manager = new Manager(name, id, email, officeNum);
            allEmployees.push(manager);        
            addEmployee();
        })
};

// Prompts to add additional employee
const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Choose role:",
                choices: ['Engineer', 'Intern', 'Finish building my team']
            }
        ])
        .then(({ role }) => {
          if (role === 'Engineer') {
                addEngineer();
            } else if (role === 'Intern') {
                addIntern();
            } else {
                writeFile();
                
            }
        })
        .catch(err => {
            console.log(err);
        });
};

// Prompts for Engineer's info
const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter engineer's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter engineer's id #:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter engineer's email:",
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter engineer's Github username:",
            },
        ])
        .then(engineerInfo => {
            const { name, id, email, github } = engineerInfo;
            const engineer = new Engineer(name, id, email, github);
            allEmployees.push(engineer);
            addEmployee();
        })
};

// Prompts for intern's school
const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter intern's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter intern's id #:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter intern's email:",
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter intern's school:",
            },
        ])
        .then(internInfo => {
            const { name, id, email, school } = internInfo;
            const intern = new Intern(name, id, email, school);
            allEmployees.push(intern);
            addEmployee();
        })
};

const writeFile = (fileName, data) => {
    fs.writeFile('./dist/index.html', generateHTML(allEmployees), err => {
        err ? console.log(err) : console.log('Successfully created index.html!')
    })
};

// Call to functions
addManager()