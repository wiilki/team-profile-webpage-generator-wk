const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName", () => {
        it("should return name", () => {
            const name = "Dave";
            const result = new Manager(name);
            expect(result.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it("should return ID", () => {
            const id = 12312315;
            const result = new Manager("Dave", id);
            expect(result.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should return email", () => {
            const email = "dave@email.com";
            const result = new Manager("Dave", 12312315, email);
            expect(result.getEmail()).toBe(email);
        });
    });

    describe("getGithub", () => {
        it("should return github", () => {
            const github = "davesgithub";
            const result = new Engineer("Dave", 12312315, "dave@email.com", github);
            expect(result.getGithub()).toBe(github);
        });
      });
          
      describe("getRole", () => {
          it("should return role", () => {
              const role = "Engineer";
              const result = new Engineer("Dave", 12312315, "dave@email.com", "davesgithub");
              expect(result.getRole()).toBe(role);
          });
      });
});