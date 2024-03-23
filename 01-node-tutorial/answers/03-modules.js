const names = require("./04-names");
const greet = require("./05-utils");
const { add, subtract } = require("./06-alternative-flavor");
require("./07-mind-grenade");

console.log("Names:", names);
greet("Alice");
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));