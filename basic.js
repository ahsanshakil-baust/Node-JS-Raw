//***** */ Path

const path = require("path");
const myPath = "D:/Web Development/Node Js 2023/day_1/index.js";
// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

//***** */ OS

const os = require("os");
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());

//***** */FS

const fs = require("fs");

fs.writeFileSync("myfile.txt", "hello programmers");
fs.writeFile("myfile.txt", "hello programmers I'm Asyncronous", (err) => {
    if (!err) console.log("write successfully");
    else console.log("Error occurred");
});

fs.appendFileSync("myfile.txt", " My name's what?");
fs.appendFile("myfile.txt", " Hello content!", (err) => {
    if (!err) console.log("appended successfully");
    else console.log("Error occurred");
});

const data = fs.readFileSync("myfile.txt");
// console.log(data);
fs.readFile("myfile.txt", (err, data) => {
    if (!err) console.log(data.toString());
    else console.log("Error occurred");
});
