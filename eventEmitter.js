// const EventEmitter = require("events");

// const emitter = new EventEmitter();

const School = require("./school");

// register a listener for bellRing event

// emitter.on("bellRing", ({ period, text }) => {
//     console.log("We need to run because " + period + text);
// });

// raise an event

// emitter.emit("bellRing", { period: "second", text: " period ended." });

const school = new School();

// register a listener for bellRing event
school.on("bellRing", ({ period, text }) => {
    console.log("We need to run because " + period + text);
});

school.startPeriod();
