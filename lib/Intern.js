const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email);
        this.school = school;
    }
}

// getSchool()
// getRole()//—overridden to return 'Intern'