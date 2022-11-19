const chalk = require("chalk");
const prompt = require("prompt-sync")();

const { WIN_VERSIONS } = require("../constants/versions");

module.exports = () => {
    console.log(`${chalk.underline("Options")}`);

    let i = 0;
    const winVersionsDynamic = WIN_VERSIONS;
    while (i < Object.keys(WIN_VERSIONS).length) {
        Object.values(WIN_VERSIONS).forEach((value, num) => {
            if (i !== 0 && i % 5 === 0) {
                console.log("");
            }

            console.log(`${num + 1}) ${value}`);
            i++;
        });

        return prompt(
            `Enter your option ${chalk.bold(
                `(1-${Object.values(WIN_VERSIONS).length})`
            )}, or ^C to Cancel: `
        );
    }
};
