require("svelte/register");

const { join } = require("path");
const express = require("express");
const App = require("./src/App.svelte").default;

const server = express();

const code = App.render();

console.log(code);

/* server.use(express.static(join(__dirname, "public")));

server.get("*", function (req, res) {
  const { html } = app.render({ url: req.url });

  res.write(`
    <!DOCTYPE html>
    <link rel='stylesheet' href='build/bundle.css'>
    <div id="app">${html}</div>
    <script src="build/bundle.js"></script>
  `);

  res.end();
});

const port = process.env.port || 3000;
server.listen(port, () => console.log(`Listening on port ${port}`)); */
