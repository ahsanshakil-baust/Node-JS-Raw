// const fs = require("fs");

// const ourReadStream = fs.createReadStream(`${__dirname}/data.txt`, "utf-8");

// ourReadStream.on("data", (chunk) => {
//     console.log(chunk);
// });

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<html><title>Stream Buffer</title>");
        res.write(
            `<body><form action="/process" method="post"><input name="message"/></form></body></html>`
        );
        res.end();
    } else if (req.url === "/process" && req.method === "POST") {
        let data = [];
        req.on("data", (chunk) => {
            data.push(chunk);
        });
        req.on("end", () => {
            const textData = Buffer.concat(data).toString();
            console.log(textData);
            res.write("Successfull !");
            res.end();
        });
    } else {
        res.write("Not found");
        res.end();
    }
});

server.listen("5000");
console.log("server running");
