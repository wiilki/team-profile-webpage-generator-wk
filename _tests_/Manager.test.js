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

    describe("getOfficeNumber", () => {
        it("should return officeNumber", () => {
            const officeNumber = "123-456-7890";
            const result = new Manager("Dave", 12312315, "dave@email.com", officeNumber);
            expect(result.getOfficeNumber()).toBe(officeNumber);
        });
    });

    describe("getRole", () => {
        it("should return role", () => {
            const role = "Manager";
            const result = new Manager("Dave", 12312315, "dave@email.com", "123-456-7890");
            expect(result.getRole()).toBe(role);
        });
    });
});