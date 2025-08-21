/**
 * JSDoc comment: Provide exported variables and functions used by tests.
 */

// Single-line comment: initialize student profile values below.

/*
 Multi-line comment:
 You may change the values while keeping the required types.
*/

const studentName = "Your Name";       // string, non-empty
let studentAge = 18;                   // number, >= 0
const isEnrolled = true;               // boolean

function greet(name) {
  // Return "Hello, <name>!"
  return `Hello, ${name}!`;
}

function sum(a, b) {
  return a + b;
}

/**
 * parseAndGreet
 * @param {string} input - lines like "name=Rama\nage=21\n"
 * @returns {string} - exactly "Hello, Rama. You are 21."
 */
function parseAndGreet(input) {
  const lines = String(input)
    .split(/\r?\n/)
    .filter(Boolean);
  const kv = Object.fromEntries(
    lines.map((line) => {
      const idx = line.indexOf("=");
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      return [key, value];
    })
  );
  const name = kv.name ?? "";
  const age = Number(kv.age);
  return `Hello, ${name}. You are ${age}.`;
}

module.exports = {
  studentName,
  studentAge,
  isEnrolled,
  greet,
  sum,
  parseAndGreet
};
