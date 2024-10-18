const Events = require("events");

class Logger extends Events {
  log(a, b) {
    this.emit("calculate", a + b);
  }
}

const logger = new Logger();

logger.on("calculate", (data) => {
  console.log(data);
});

logger.log(5, 10);
logger.log(11, 12);
logger.log(17, 9);
logger.log(12, 5);
