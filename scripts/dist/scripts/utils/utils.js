"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const rxjs_1 = require("rxjs");
let Store;
class Files {
    constructor(store) { Store = store; }
    get readFile$() {
        return rxjs_1.Observable.create((observer) => {
            fs.readFile(Store.fileName, Store.fileFormat, (err, file) => {
                err ? observer.error(err) : Store.file = file;
                // tslint:disable-next-line:no-unused-expression
                !err ? observer.next(`Reading ${Store.fileName} ...`) : '';
            });
        });
    }
    get writeFile$() {
        return rxjs_1.Observable.create((observer) => {
            fs.writeFile(Store.fileName, Store.contents, Store.fileFormat, (err) => {
                err ? observer.error(err) : observer.next(`Successfully updated ${Store.fileName}!`);
            });
        });
    }
}
exports.Files = Files;
class FakerSeed extends Files {
    constructor(store) { super(store); }
    get addSeed$() {
        return rxjs_1.Observable.create((observer) => {
            const tables = Object.keys(Store.schemaFaker);
            let records = {};
            tables.map(key => {
                const record = Store.schemaFaker[key];
                const keyRecords = [];
                const seqId = new NumberGenerator();
                for (let i = 0; i < record.quantity; i++) {
                    let entry = Object.create({});
                    if (record.incrementId) {
                        entry = Object.assign({}, { id: seqId.nextNumber });
                    } // Check for sequential numbering
                    entry = Object.assign(entry, record.attributes());
                    keyRecords.push(entry);
                }
                records = Object.assign(records, { [key]: keyRecords });
            });
            exports.setContentReducer(records);
            observer.next(`Records ready to create.`);
        });
    }
}
exports.FakerSeed = FakerSeed;
class Seed extends Files {
    constructor(store) { super(store); }
    get addSeed$() {
        return rxjs_1.Observable.create((observer) => {
            const tables = Object.keys(Store.schema);
            let records = {};
            tables.map(key => {
                const record = Store.schema[key];
                records = Object.assign(records, { [key]: record });
            });
            exports.setContentReducer(records);
            observer.next(`Records ready to create.`);
        });
    }
}
exports.Seed = Seed;
exports.setContentReducer = (records) => Store.contents = JSON.stringify(records, null, 2);
class NumberGenerator {
    constructor() { this.initialNumber = 0; }
    increment() { this.initialNumber++; }
    get nextNumber() { this.increment(); return this.initialNumber; }
}
exports.NumberGenerator = NumberGenerator;
exports.default = Seed;
// module.exports = {
//     PackageJSON: PackageJSON,
//     Seed: Seed
// }
// class PackageJSON extends Files {
//     constructor(store) { super(store); }
//     get fileContents$() {
//         return Rx.Observable.create((observer) => { // Set json to npm script values
//             let contents = JSON.parse(Store.file);
//             Store.contents = JSON.stringify(contentReducer(contents), null, 2);
//             observer.next(`Set ${Store.fileName} attributes ...`);
//         });
//     }
// }
// const addReducer = () => {
//     const user = Object.assign({}, { name: faker.name.findName(), email: faker.internet.email() });
//     Store.users.push(user);
// };
// const contentReducer = (contents) => {
//     const scripts = Object.assign(contents.scripts, Store.scripts);
//     return Object.assign({}, contents, { scripts: scripts });
// }
//# sourceMappingURL=utils.js.map