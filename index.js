const Employee = require("./lib/Employee");

const generalInfo = [{
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
}]

const addManager = [
    inquirer
        .prompt([
            {...generalInfo},
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
            {...generalInfo},
            {
                type: 'list',
                name: 'role',
                message: "Choose employee's role:",
                choices: ['Engineer', 'Intern']
            }
        ])
];

const addEngineer = [
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'github',
                message: "Enter engineer's Github username:",
            },
        ])
];

const addIntern = [
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'school',
                message: "Enter intern's school:",
            },
        ])
];

