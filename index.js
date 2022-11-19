const sys = require("process");

const winVersions = require("./src/functions/winVersions");

const { WIN_VERSIONS } = require("./src/constants/versions");

require("./src/functions/title");

const winVersion = winVersions(true);
console.log(winVersion);
