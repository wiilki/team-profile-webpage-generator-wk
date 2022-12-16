const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

// getSchool()
// getRole()//—overridden to return 'Intern'