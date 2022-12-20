const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');


// Array to store employee info
const allEmployees = [];

// Prompts to choose employee type
const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Choose role:",
                choices: ['Manager', 'Engineer', 'Intern', 'Done adding employees']
            }
        ])
        .then(({ role }) => {
            if (role === 'Manager') {
                addManager();
            } else if (role === 'Engineer') {
                addEngineer();
            } else if (role === 'Intern') {
                addIntern();
            } else {
                console.log(generateHTML());
            }
        })
        .catch(err => {
            console.log(err);
        });
};


// Prompts for manager office number
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter id #:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter email:",
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
            console.log(allEmployees);
            addEmployee();
        })
};


// Prompts for Engineer's Github
const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter id #:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter email:",
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
            console.log(allEmployees);
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
                message: "Enter name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter id #:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter email:",
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
            console.log(allEmployees);
            addEmployee();
        })
};


// Call to functions
addEmployee()