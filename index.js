#!/usr/bin/env node

const chalk = require ("chalk");
const boxen = require("boxen");
const terminalImage = require('terminal-image');
 
const data = {
    name: chalk.black.bgMagentaBright("Pierre Ricci"),
    work: chalk.white("Web Dev Junior at BeCode.org"),
    npm: chalk.gray("https://npmjs.com/") + chalk.magenta("~ricci_pierre"),
    github: chalk.gray("https://github.com/") + chalk.magenta("RicciPierre"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.magenta("pierre-ricci-15b353202"),
    npx: chalk.magenta("npx") + " " + chalk.white("ricci"),
    labelNpm: chalk.white.bold("npm:"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelCard: chalk.white.bold("Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

(async () => {
    const image = await terminalImage.file('me.jpg', {width: 50, height: 30});
    console.log( image,
        chalk.redBright(
            boxen(
                [
                    `${data.name}`,
                    EMPTYLINE,
                    `${data.work}`,
                    EMPTYLINE,
                    `${data.labelNpm} ${data.npm}`,
                    `${data.labelGitHub} ${data.github}`,
                    `${data.labelLinkedIn} ${data.linkedin}`,
                    EMPTYLINE,
                    `${data.labelCard} ${data.npx}`,
                ].join(NEWLINE),
                {
                    align: 'center',
                    padding: 2,
                    margin: 3,
                    borderStyle: "doubleSingle",
                },
            ),
        ),
    );
})();

