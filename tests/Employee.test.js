const Employee = require("team-profile-generator/lib/Employee");

describe("Employee", () => {
  const employee = new Employee();

  test("defines getName()", () => {
    expect(typeof employee.getName).toBe("function");
  });

  test("getName() returns undefined when called", () => {
    expect(employee.getName()).toBe("undefined");
  });

  test("defines getId()", () => {
    expect(typeof employee.getId).toBe("function");
  });

  test("defines getEmail()", () => {
    expect(typeof employee.getEmail).toBe("function");
  });

  test("getRole() returns string when called", () => {
    expect(employee.getRole()).toBe("Employee");
  });
});