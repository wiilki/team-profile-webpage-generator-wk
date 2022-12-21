const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("addIntern", () => {
      it("should return an Intern object containing name, id, email, and school", () => {
        const info = {
            name: 'Dave',
            id: '23423',
            email: 'dave@email.com',
            school: 'Some School'
          }
        const obj = new Intern(info);  
        expect(obj.info).toBe(info);        
      });
    });
  });