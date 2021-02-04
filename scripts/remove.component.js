const { unlinkSync } = require("fs");
const { join } = require("path");

const name = process.argv[2];

const labelWithTime = " Done in";
console.time(labelWithTime);

unlinkSync(join(__dirname, "..", "src", "components", `${name}.svelte`));
unlinkSync(join(__dirname, "..", "src", "content", `${name}.json`));

console.log("\x1b[31m", `❌ ${name} component`);
console.log(" ❌ Content file");
console.log("\x1b[3m");
console.timeEnd(labelWithTime);
