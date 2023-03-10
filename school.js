const EventEmitter = require("events");

class School extends EventEmitter {
    startPeriod = () => {
        console.log("class Started...");

        // raise event when bell rings
        this.emit("bellRing", { period: "second", text: " period ended." });
    };
}

module.exports = School;
