const Employee = require("./lib/Employee");

const addManager = [
    inquirer
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
];


const addEmployee = [
    inquirer
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
            },
            {
                type: 'list',
                name: 'role',
                message: "Choose employee's role:",
                choices: ['Engineer', 'Intern']
            }
        ])
];
