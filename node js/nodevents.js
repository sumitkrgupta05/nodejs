const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", () => {
  console.log("Please turn on the motor!");
  setTimeout(() => {
    console.log("Arre band krde bhai motor");
  }, 3000);
});
console.log("the script is running");
myEmitter.emit("WaterFull");
console.log("the script is still running");
