const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
                choices: ['Engineer', 'Intern', 'Manager']
            }
        ])
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
};

// Call to functions
addEmployee()
    .then(({ role }) => {
        if (role === 'Manager') {
            addManager();
        } else if (role === 'Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
    .catch(err => {
        console.log(err);
    });
