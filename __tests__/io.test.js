const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

const cli = path.join(__dirname, "..", "src", "index.js");

function run(input) {
  const res = spawnSync("node", [cli], {
    input,
    encoding: "utf8"
  });
  if (res.error) throw res.error;
  return { stdout: res.stdout, stderr: res.stderr, status: res.status };
}

// Test #1
{
  const { stdout, stderr, status } = run("name=Rama\nage=21\n");
  assert.equal(stderr, "");
  assert.equal(status, 0);
  assert.equal(stdout, "Hello, Rama. You are 21.");
}

// Test #2
{
  const { stdout, stderr, status } = run("name=Alice\nage=33\n");
  assert.equal(stderr, "");
  assert.equal(status, 0);
  assert.equal(stdout, "Hello, Alice. You are 33.");
}

console.log("OK");
