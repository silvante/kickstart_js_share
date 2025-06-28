#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);
const command = args[0];

if (!command) {
  console.log(`
  📦 Kickstart JS CLI

  Usage:
    kickstart_js new <project-name>    Create a new project
    kickstart_js info                  Show information about this CLI

  Examples:
    kickstart_js new my-store
    kickstart_js info

  Available Commands:
    new     Clone the starter project into a new directory
    info    Display project and CLI information

  ✨ Tip: Don't forget to give your project a name!
`);
}

switch (command) {
  case "new":
    const projectName = args[1] || "kickstarter";
    console.log(
      `\n    🚀 Cloning your project into "${projectName}" directory...\n`
    );
    try {
      execSync(
        `git clone https://github.com/silvante/kickstart_js.git ${projectName}`,
        {
          stdio: "inherit",
        }
      );
      execSync(`rm -rf ${path.join(projectName, ".git")}`);

      console.log("\n    📦 installing node_modules for server...");
      execSync(`cd ${projectName}/server && npm install`);
      console.log("\n  ✅ installed");

      console.log("\n    📦 installing node_modules for client...");
      execSync(`cd ${projectName}/server && npm install`);
      console.log("\n  ✅ installed");

      console.log("\n    📦 Project cloned and ready!\n");
    } catch (error) {
      console.error("❌ Failed to clone project:", error.message);
    }
    break;
  case "info":
    console.log(`
    🛠️  Welcome to Kickstart CLI!

    🚀 Modern Authentication generator with ready to use configuration.
    📦 kickstart_js gives you ready to use project scaffold with multy-provider auth.

    📦 Project Info:
      • Name:          Kickstart JS
      • Version:       1.0.0
      • Author:        Mardonbek Khamidov (https://github.com/silvante)
      • Repository:    https://github.com/silvante/kickstart_js
      • Description:   Scaffolds a full-stack app using preconfigured templates.

    🧪 Usage:
      $ kickstart_js new <project-name>    Create your own project
      $ kickstart_js info                  gives an information about CLI
      $ kickstart_js version               Shows current version

    📌 Example:
      $ mypackage new my-app

    ✨ Happy Coding!
    `);

    break;
  case "version":
    const { version } = require("./package.json");
    console.log(`\n📦 Kickstart JS CLI version: v${version}\n`);

    break;
  default:
    if (command == undefined) {
      break;
    }
    console.error(`
    ❌ Unknown command "${command}"

    Usage:
      kickstart_js new <project-name>

    Example:
      kickstart_js new my-store

    Available commands:
      new => Create a new project by cloning the starter repo
      You also should enter name
      info => gives the information about kickstart js
    `);
    break;
}
