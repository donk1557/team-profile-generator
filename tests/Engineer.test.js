const Engineer = require("team-profile-generator/lib/Engineer");

describe("Engineer", () => {
  const engineer = new Engineer();

  test("defines getRole()", () => {
    expect(typeof engineer.getRole).toBe("function");
  });

  test("getRole() returns string when called", () => {
    expect(engineer.getRole()).toBe("Engineer");
  });

  test("defines getGithub()", () => {
    expect(typeof engineer.getGithub).toBe("function");
  });
});