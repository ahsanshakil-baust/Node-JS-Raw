const handler = {};

handler.notFoundHandle = (requestProperties, callback) => {
    callback(404, { msg: "Your requested url was not found" });
};

module.exports = handler;
