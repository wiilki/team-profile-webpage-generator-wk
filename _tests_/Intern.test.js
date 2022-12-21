const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("getName", () => {
        it("should return name", () => {
            const name = "Dave";
            const result = new Intern(name);
            expect(result.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it("should return ID", () => {
            const id = 12312315;
            const result = new Intern("Dave", id);
            expect(result.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should return email", () => {
            const email = "dave@email.com";
            const result = new Intern("Dave", 12312315, email);
            expect(result.getEmail()).toBe(email);
        });
    });

    describe("getSchool", () => {
        it("should return school", () => {
            const school = "Some School";
            const result = new Intern("Dave", 12312315, "dave@email.com", school);
            expect(result.getSchool()).toBe(school);
        });
    });

    describe("getRole", () => {
        it("should return role", () => {
            const role = "Intern";
            const result = new Intern("Dave", 12312315, "dave@email.com", "Some School");
            expect(result.getRole()).toBe(role);
        });
    });
});