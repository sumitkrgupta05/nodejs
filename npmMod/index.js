// const chalk = require("chalk");

// console.log(chalk.blue("Hello world!"));

import chalk from "chalk";

// console.log(chalk.green.underline.inverse("True"));

import validator from "validator";
// const validator = require("validator");

var res = validator.isEmail("sumit@bar.com");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
