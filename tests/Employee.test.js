const Employee = require("./lib/employee.js");

test("creates an employee section", () => {
    
    const employee = new Employee("Will", 65165165, "something@gmail.com");
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toContain("@"); 
    expect(employee.idNumber).toEqual(expect.any(Number));
  });