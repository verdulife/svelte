const { writeFileSync } = require("fs");
const { join } = require("path");

const name = process.argv[2];

const component = `
<script>
  import { locale } from "../locale";
  import content from "../content/${name}.json";

  const ui = content[locale];
</script>

<h1>{ui.component}</h1>

<style lang="scss">

</style>
`;

const content = `
  {
    "es": {
      "component": "${name}"
    },
    "en": {
      "component": "${name}"
    }
  }
`;

const labelWithTime = " Done in";
console.time(labelWithTime);

console.log(" 🔥\x1b[31m Cooking files...\x1b[0m");
console.log(" ");

writeFileSync(join(__dirname, "..", "src", "components", `${name}.svelte`), component, { encoding: "utf8" });
writeFileSync(join(__dirname, "..", "src", "content", `${name}.json`), content, { encoding: "utf8" });

console.log(" ✔ New component:\x1b[32m", `${name}`);
console.log("\x1b[0m", "✔ Content file created");
console.log("\x1b[34m");
console.timeEnd(labelWithTime);
