const greetModule = require("./build/Release/greet.node");

console.log("Greet Module: ", greetModule);
console.log("Greet Hello: ", greetModule.greetHello());
