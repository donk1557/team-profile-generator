const Manager = require("team-profile-generator/lib/Manager");

describe("Manager", () => {
  const manager = new Manager();

  test("defines getRole()", () => {
    expect(typeof manager.getRole).toBe("function");
  });

  test("getRole() returns string when called", () => {
    expect(manager.getRole()).toBe("Manager");
  });
});