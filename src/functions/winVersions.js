const chalk = require("chalk");
const prompt = require("prompt-sync")();

const { WIN_VERSIONS } = require("../constants/versions");

module.exports = (result) => {
    console.log(`${chalk.underline("Options")}`);

    let i = 0;
    while (i < Object.keys(WIN_VERSIONS).length) {
        Object.values(WIN_VERSIONS).forEach((value, num) => {
            if (i !== 0 && i % 5 === 0) {
                console.log("");
            }

            console.log(`${num + 1}) ${value}`);
            i++;
        });

        const promptResult =
            Number(
                prompt(
                    `Enter your option ${chalk.bold(
                        `(1-${Object.values(WIN_VERSIONS).length})`
                    )}, or ^C to Cancel: `
                )
            ) - 1;

        if (!result) {
            return promptResult;
        } else {
            if (promptResult === null || typeof promptResult === "undefined") {
                process.exit(0);
            }

            return Object.keys(WIN_VERSIONS)[promptResult];
        }
    }
};
