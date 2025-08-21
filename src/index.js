// CLI entry: read from STDIN and print exactly one line (no trailing newline)
const { parseAndGreet } = require("./solution");

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  const out = parseAndGreet(input);
  // Write without extra newline
  process.stdout.write(out);
});

// If the process is run with no stdin (e.g., double-click), do nothing until it ends.
