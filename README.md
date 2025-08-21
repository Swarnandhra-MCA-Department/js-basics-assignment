# JS Basics: Comments, Variables, Read & Print

**Goal:** Practice comments, variables, and terminal input/output.

## Tasks
1. **Comments:** Add one single-line, one multi-line, and one JSDoc comment in `src/solution.js`.
2. **Variables:** Export these variables from `src/solution.js`:
   - `studentName` (non-empty string)
   - `studentAge` (number ≥ 0)
   - `isEnrolled` (boolean)
3. **Functions:** Implement and export:
   - `greet(name)` → `"Hello, <name>!"`
   - `sum(a, b)` → `a + b`
   - `parseAndGreet(input)` takes text like:
     ```
     name=Rama
     age=21
     ```
     and returns exactly: `Hello, Rama. You are 21.`
4. **Read & Print:** `src/index.js` must:
   - Read all STDIN
   - Print **only** the result of `parseAndGreet(input)` (no extra text or newline)

## Run locally
```bash
npm ci
node src/index.js <<EOF
name=Rama
age=21
EOF
# => Hello, Rama. You are 21.
