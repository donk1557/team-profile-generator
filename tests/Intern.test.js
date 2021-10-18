const Intern = require("team-profile-generator/lib/Intern");

describe("Intern", () => {
  const intern = new Intern();

  test("defines getRole()", () => {
    expect(typeof intern.getRole).toBe("function");
  });

  test("getRole() returns string when called", () => {
    expect(intern.getRole()).toBe("Intern");
  });

  test("defines getSchool()", () => {
    expect(typeof intern.getSchool).toBe("function");
  });
});