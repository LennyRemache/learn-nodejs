/* MODULES */

// CommonJS, every file is a module (by default)
// Modules -> encapsulated code (only share minimum)
const { john, peter } = require("./lesson2-names.js"); // can destructure
const sayHi = require("./lesson2-utils.js");

sayHi("susan");
sayHi(john);
sayHi(peter);
