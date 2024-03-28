const path = require("path");

const windowsPath = path.join("C:", "Users", "lanval", "node-express-course", "01-node-tutorial", "answers");
const unixPath = path.join("/", "Users", "lanval", "node-express-course", "01-node-tutorial", "answers");

console.log("Windows Path:", windowsPath);
console.log("Unix Path:", unixPath);