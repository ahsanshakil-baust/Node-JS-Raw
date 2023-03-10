const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello, Ahsan Shakil");
        res.write("This is home");
        res.end();
    } else if (req.url === "/about") {
        res.write("This is about page");
        res.end();
    } else {
        res.write("not found");
        res.end();
    }
});

server.listen(3005);

console.log("listening on port 3005");
