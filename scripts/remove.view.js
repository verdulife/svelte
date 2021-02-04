const { unlinkSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const name = process.argv[2];

const labelWithTime = " Done in";
console.time(labelWithTime);

unlinkSync(join(__dirname, "..", "src", "views", `${name}.svelte`));
unlinkSync(join(__dirname, "..", "src", "content", `${name}.json`));

/* let app = readFileSync(join(__dirname, "..", "src", "App.svelte"), { encoding: 'utf8', flag: 'r' });
let nav_component = readFileSync(join(__dirname, "..", "src", "components", "Nav.svelte"), { encoding: 'utf8', flag: 'r' });
let nav_content = readFileSync(join(__dirname, "..", "src", "content", "Nav.json"), { encoding: 'utf8', flag: 'r' });

app = app.replace(`<script>import ${name} from "./views/${name}.svelte";`, "");
app = app.replace(`<Route path="/${name.toLowerCase()}" component={${name}} /></div>`, "");
writeFileSync(join(__dirname, "..", "src", "App.svelte"), app, { encoding: "utf8" });

nav_component = nav_component.replace(`<li><a href="/${name.toLowerCase()}" use:link>{ui.${name.toLowerCase()}}</a></li></ul>`, "");
writeFileSync(join(__dirname, "..", "src", "components", "Nav.svelte"), nav_component, { encoding: "utf8" });

nav_content = JSON.parse(nav_content.slice(0, -1).replaceAll(`,"${name.toLowerCase()}": "${name}"}`, ""));
nav_content = JSON.stringify(nav_content, null, 4);
writeFileSync(join(__dirname, "..", "src", "content", "Nav.json"), nav_content, { encoding: "utf8" }); */

console.log("\x1b[31m", `❌ ${name} view`);
console.log(" ❌ Content file");
console.log("\x1b[3m");
console.timeEnd(labelWithTime);
