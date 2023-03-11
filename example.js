const fs = require("fs");

const http = require("http");

// req === "Readable stream";
// res === "Writeable stream";

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(__dirname + "/data.txt", "utf8");
    myReadStream.pipe(res);
});

server.listen("5000");
console.log("server running");
