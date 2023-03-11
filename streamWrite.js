const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/data.txt`);

const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on("data", (chunk) => {
//     ourWriteStream.write(chunk);
// });

ourReadStream.pipe(ourWriteStream);
