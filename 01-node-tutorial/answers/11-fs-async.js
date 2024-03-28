const fs = require("fs");

console.log("at start");
fs.writeFile("./temporary/output.txt", "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    fs.writeFile("./temporary/output.txt", "This is line 2\n", { flag: 'a' }, (err, result) => {
      console.log("at point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        fs.writeFile("./temporary/output.txt", "This is line 3\n", { flag: 'a' }, (err, result) => {
          console.log("at point 3");
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("File write complete.");
            fs.readFile("./temporary/output.txt", "utf8", (err, data) => {
              if (err) {
                console.log("Error reading file:", err);
              } else {
                console.log("File Contents:", data);
              }
            });
          }
        });
      }
    });
  }
});
console.log("at end");
