const os = require("os");

// platform
// console.log(os.platform());

// information
// console.log(os.cpus());

// architecture
// console.log(os.arch());

// free memory - tizimda hozirda mavjud bo‘sh operativ xotira (RAM) hajmini qaytaradi. Ushbu funksiya baytlarda qiymat qaytaradi.
// console.log(os.freemem());

// total memory
// console.log(os.totalmem());

// entry point
// console.log(os.homedir());

// Tizim haqida qisqacha hisobot

console.log(`Platforma: ${os.platform()}`);
console.log(`Arxitektura: ${os.arch()}`);
console.log(`Xost nomi: ${os.hostname()}`);
console.log(`Bo'sh RAM: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`Jami RAM: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`Uptime: ${(os.uptime() / 60).toFixed(2)} daqiqa`);
console.log("CPUlar:", os.cpus());
