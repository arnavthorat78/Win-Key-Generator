const winVersions = require("./src/functions/winVersions");

require("./src/functions/title");

const winVersion = winVersions();

console.log(winVersion);
