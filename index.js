const Employee = require("./lib/Employee");

const addEmployee = [
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'empName',
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
];