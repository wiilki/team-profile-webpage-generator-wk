const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("addManager", () => {
      it("should return an Manager object containing name, id, email, and office number", () => {
        const info = {
            name: 'Dave',
            id: '23423',
            email: 'dave@email.com',
            officeNumber: '2342343433'
          }
        const obj = new Manager(info);  
        expect(obj.info).toBe(info);        
      });
    });
  });