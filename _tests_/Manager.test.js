const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName", () => {
        it("should return name", () => {
          const name = 'Dave';
          const result = new Manager().getName(name); 
          expect(result.name).toBe(name);        
        });
      });
    describe("getId", () => {
        it("should return ID", () => {
          const id = 12312315;
          const result = new Manager().getId(id); 
          expect(result).toBe(id);        
        });
      });
      describe("getEmail", () => {
        it("should return email", () => {
          const email = "dave@email.com"
          const result = new Manager().getEmail(email); 
          expect(result).toBe(email);        
        });
      });
      describe("getOfficeNum", () => {
        it("should return office number", () => {
          const officeNum = 1234567890;
          const result = new Manager().getOfficeNumber(officeNum);
          expect(result).toBe(officeNum);        
        });
      });
  });