// type 1 of declaration

// const event = require ("events")
// const EventEmitter=new event.EventEmitter();

// type 2 of declaration

const EventEmitter = require("events");
const event = new EventEmitter();

// creating and emitting the event

// event.on("sayMyName", () => {
//   console.log("My name is sumit");
// });

// event.on("sayMyName", () => {
//   console.log("My name is kumar");
// });

// event.on("sayMyName", () => {
//   console.log("My name is gupta");
// });

// event.emit("sayMyName");

event.on("checkPage", (sc, msg) => {
  console.log(`Your status code is ${sc} and the page is ${msg}`);
});
event.emit("checkPage", 200, "fully loaded");
