const fs = require("fs");

const lines = ["Line 1", "Line 2", "Line 3"];

lines.forEach((line, index) => {
    const flag = index === 0 ? undefined : 'a';
    fs.writeFileSync("./temporary/fileA.txt", `${line}\n`, { flag });
});

const fileContent = fs.readFileSync("./temporary/fileA.txt", "utf8");
console.log("File Contents:", fileContent);