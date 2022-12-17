const Employee = require("./lib/Employee");
const inquirer = require('inquirer');

// Array to store employee info
const allEmployees = [];

// Prompts for general info
const generalInfo = () => {
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
            }
        ])
};

// Prompts for manager office number
const addManager = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'officeNum',
                message: "Enter manager's office number:",
            }
        ])
};

// Prompts to choose employee type
const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Choose role:",
                choices: ['Engineer', 'Intern']
            }
        ])
};

// Prompts for Engineer's Github
const addEngineer = () => {
    return inquirer
        .prompt([
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
                name: 'school',
                message: "Enter intern's school:",
            },
        ])
};

// Call to functions
console.log("ENTER MANAGER'S INFO")
generalInfo()
    .then(addManager)
    .then(generalInfo)
    .then(addEmployee)
    .then(addEngineer)
    .then(addIntern)
    .catch(err => {
        console.log(err);
    });
