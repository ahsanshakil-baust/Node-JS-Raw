const handler = {};

handler.sampleHandle = (requestProperties, callback) => {
    callback(200, {
        msg: "This is a sample url",
    });
};

module.exports = handler;
