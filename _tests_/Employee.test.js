const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("addEmployee", () => {
      it("should return an employee object containing name, id, and email", () => {
        const info = {
            name: 'Dave',
            id: '23423',
            email: 'dave@email.com',
          }
        const obj = new Employee(info);  
        expect(obj.info).toBe(info);        
      });
    });
  });