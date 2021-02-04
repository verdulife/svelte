const { writeFileSync, readFileSync } = require("fs");
const { join } = require("path");

const name = process.argv[2];

const view = `
<script>
  import { locale } from "../locale";
  import content from "../content/${name}.json";

  const ui = content[locale];
</script>

<h1>{ui.view}</h1>

<style lang="scss">

</style>
`;

const content = `
  {
    "es": {
      "view": "${name}"
    },
    "en": {
      "view": "${name}"
    }
  }
`;

const labelWithTime = " Done in";
console.time(labelWithTime);

console.log(" 🔥\x1b[31m Cooking files...\x1b[0m");
console.log(" ");

writeFileSync(join(__dirname, "..", "src", "views", `${name}.svelte`), view, { encoding: "utf8" });
writeFileSync(join(__dirname, "..", "src", "content", `${name}.json`), content, { encoding: "utf8" });

let app = readFileSync(join(__dirname, "..", "src", "App.svelte"), { encoding: 'utf8', flag: 'r' });
let nav_component = readFileSync(join(__dirname, "..", "src", "components", "Nav.svelte"), { encoding: 'utf8', flag: 'r' });
let nav_content = readFileSync(join(__dirname, "..", "src", "content", "Nav.json"), { encoding: 'utf8', flag: 'r' });

app = app.replace("<script>", `<script>\n  import ${name} from "./views/${name}.svelte";`);
app = app.replace("</div>", `  <Route path="/${name.toLowerCase()}" component={${name}} />\n    </div>`);
writeFileSync(join(__dirname, "..", "src", "App.svelte"), app, { encoding: "utf8" });

nav_component = nav_component.replace("</ul>", `  <li><a href="/${name.toLowerCase()}" use:link>{ui.${name.toLowerCase()}}</a></li>\n  </ul>`);
writeFileSync(join(__dirname, "..", "src", "components", "Nav.svelte"), nav_component, { encoding: "utf8" });

nav_content = JSON.parse(nav_content.slice(0, -1).replaceAll("}", `,    "${name.toLowerCase()}": "${name}"\n      }`) + "}");
nav_content = JSON.stringify(nav_content, null, 4);
writeFileSync(join(__dirname, "..", "src", "content", "Nav.json"), nav_content, { encoding: "utf8" });

console.log(" ✔ New view:\x1b[32m", `${name}`);
console.log("\x1b[0m", "✔ Content file created");
console.log("\x1b[34m");
console.timeEnd(labelWithTime);
