"use strict";
exports.__esModule = true;
var shell = require("shelljs");
var DB_PATH = process.env.DB_PATH;
shell.echo('Starting Mongo Daemon ...');
shell.exec("mongod --dbpath \"" + DB_PATH + "\" --smallfiles");
