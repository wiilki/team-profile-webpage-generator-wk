const Employee = require("./lib/Employee");
const inquirer = require('inquirer');

const generalInfo = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter employee's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter employee's id #:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter employee's email:",
            }
        ])
};

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


const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "Choose employee's role:",
                choices: ['Engineer', 'Intern']
            }
        ])
};

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

generalInfo()
    .then(addManager)
    .then(addEmployee)
    .then(addEngineer)
    .then(addIntern)
    .catch(err => {
        console.log(err);
    });
