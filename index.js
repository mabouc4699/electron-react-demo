const dllModule = require("./build/Release/DLL.node");

console.log("Module: ", dllModule);
console.log("Greeting: ", dllModule.Greeting());
console.log("Outputting Number: ", dllModule.PrintDouble());
