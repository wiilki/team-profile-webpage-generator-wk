const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return name", () => {
            const name = "Dave";
            const result = new Employee(name);
            expect(result.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it("should return ID", () => {
            const id = 12312315;
            const result = new Employee("Dave", id);
            expect(result.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("should return email", () => {
            const email = "dave@email.com";
            const result = new Employee("Dave", 12312315, email);
            expect(result.getEmail()).toBe(email);
        });
    });

    describe("getRole", () => {
        it("should return role", () => {
            const role = "Employee";
            const result = new Employee("Dave", 12312315, "dave@email.com");
            expect(result.getRole()).toBe(role);
        });
    });
});