const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("addEngineer", () => {
      it("should return an Engineer object containing name, id, email, and github username", () => {
        const info = {
            name: 'Dave',
            id: '23423',
            email: 'dave@email.com',
            github: 'davesgithub'
          }
        const obj = new Engineer(info);  
        expect(obj.info).toBe(info);        
      });
    });
  });