module.exports = {
  testMatch: ["<rootDir>/built/test/**/*.[jt]s?(x)"],
  coverageReporters: ["html"],
  reporters: ["default", "jest-html-reporters"],
};
