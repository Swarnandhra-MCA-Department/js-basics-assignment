const assert = require("node:assert/strict");
const {
  studentName,
  studentAge,
  isEnrolled,
  greet,
  sum,
  parseAndGreet
} = require("../src/solution");

// Variables
assert.equal(typeof studentName, "string");
assert.ok(studentName.length > 0, "studentName must be non-empty");
assert.equal(typeof studentAge, "number");
assert.ok(Number.isFinite(studentAge) && studentAge >= 0, "studentAge must be >= 0");
assert.equal(typeof isEnrolled, "boolean");

// Functions
assert.equal(greet("Ada"), "Hello, Ada!");
assert.equal(sum(2, 3), 5);
assert.equal(
  parseAndGreet("name=Rama\nage=21\n"),
  "Hello, Rama. You are 21."
);

console.log("OK");
