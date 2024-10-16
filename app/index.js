// console.log("Hello world");

// const logger = () => console.log("Hello logger");

// logger();

// console.log("Hello world", __dirname);
// console.log("Hello world", __filename);

// =========================

const userData = require("./user");
const carData = require("./car").default;

console.log(userData.user);
userData.userLogger();

console.log(carData.car);
carData.carLogger();
