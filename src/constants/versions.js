const chalk = require("chalk");

// const WIN_VERSIONS = [
//     {
//         win95a: `Windows ${chalk.red("95 (RTM), 95A (OSR1)")}`,
//         win95bc: `Windows ${chalk.yellow("95B, 95C")}`,
//         nt40: `Windows ${chalk.green("NT 4.0")}`,
//         win98fe: `Windows ${chalk.blue("98 FE (First Edition)")}`,
//         win98se: `Windows ${chalk.magenta("98 SE (Second Edition)")}`,
//     },
//     {
//         win2000: "Windows 2000",
//         winme: "Windows Me",
//         winxphe: "Windows XP Home Edition",
//         winxppe86: "Windows XP Professional Edition x86",
//         winxppe64: "Windows XP Professional Edition x64",
//     },
//     {
//         winvista: "Windows Vista",
//         win7: "Windows 7",
//         win8: "Windows 8",
//         win81: "Windows 8.1",
//         win10: "Windows 10",
//     },
//     {
//         win11: "Windows 11",
//     },
// ];

const WIN_VERSIONS = {
    win95a: `${chalk.red("Windows 95")}`,
    nt40: `${chalk.yellow("Windows NT 4.0")}`,
    win98fe: `${chalk.green("Windows 98")}`,
    win2000: `${chalk.blue("Windows 2000")}`,
    winme: `${chalk.magenta("Windows Me")}`,

    winxphe: `${chalk.red("Windows XP")}`,
    winvista: `${chalk.yellow("Windows Vista")}`,
    win7: `${chalk.green("Windows 7")}`,
    win8: `${chalk.blue("Windows 8.x")}`,
    win10: `${chalk.magenta("Windows 10")}`,

    win11: `${chalk.red("Windows 11")}`,
};

module.exports = {
    WIN_VERSIONS: WIN_VERSIONS,
};
