"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require("shelljs");
const DB_PATH = process.env.DB_PATH;
shell.echo('Starting Mongo Daemon ...');
shell.exec(`mongod --dbpath "${DB_PATH}" --smallfiles`);
//# sourceMappingURL=mongod.js.map