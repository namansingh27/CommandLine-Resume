const inquirer = require("inquirer");

const cp = require("child_process");

function displayList() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["About", "Skills", "Projects", "Contact"],
      },
    ])
    .then(function (answer) {
      if (answer.selection == "About") {
        console.log(`A passionate,innovative and hardworking Web developer who has a keen interest in developing web pages and learning new technologies.
        I also have a decent knowledge of Data Structures & Algoritms and love to solve new problems. `);
        displayNext();
      } else if (answer.selection == "Skills") {
        console.log(
          "JavaScript , Java , React , Python , SQL , Android"
        );
        displayNext();
      } else if (answer.selection == "Projects") {
        cp.execSync("open -a 'google chrome' https://github.com/namansingh27");
        displayNext();
      } else if (answer.selection == "Contact Me") {
        cp.execSync(
          "open -a 'google chrome' https://www.linkedin.com/in/naman-singh-9aa209209/"
        );
        displayNext();
      }
    });
}

displayList();

function displayNext() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["Go Back", "Exit"],
      },
    ])
    .then(function (answer) {
      if (answer.selection == "Go Back") {
        displayList();
      } else if (answer.selection == "Exit") {
        console.log("Resume Closed");
      }
    });
}
