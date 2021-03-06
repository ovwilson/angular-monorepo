import * as fs from 'fs';
import * as faker from 'faker';
import { Observable, of } from 'rxjs';
import { Store } from './../models/store';

let Store: Store;

export class Files {

    constructor(store: Store) { Store = store; }

    get readFile$() {
        return Observable.create((observer: any) => { // Read package.json file contents
            fs.readFile(Store.fileName, Store.fileFormat, (err, file) => {
                err ? observer.error(err) : Store.file = file;
                // tslint:disable-next-line:no-unused-expression
                !err ? observer.next(`Reading ${Store.fileName} ...`) : '';
            });
        });
    }

    get writeFile$() {
        return Observable.create((observer: any) => { // Write Json to package.json
            fs.writeFile(Store.fileName, Store.contents, Store.fileFormat, (err) => {
                err ? observer.error(err) : observer.next(`Successfully updated ${Store.fileName}!`);
            });
        });
    }

}

export class FakerSeed extends Files {

    constructor(store: Store) { super(store); }

    get addSeed$() {
        return Observable.create((observer: any) => {
            const tables = Object.keys(Store.schemaFaker);
            let records = {};
            tables.map(key => {
                const record = Store.schemaFaker[key];
                const keyRecords = [];
                const seqId = new NumberGenerator();
                for (let i = 0; i < record.quantity; i++) {
                    let entry = Object.create({});
                    if (record.incrementId) { entry = Object.assign({}, { id: seqId.nextNumber }); } // Check for sequential numbering
                    entry = Object.assign(entry, record.attributes());
                    keyRecords.push(entry);
                }
                records = Object.assign(records, { [key]: keyRecords });
            });
            setContentReducer(records);
            observer.next(`Records ready to create.`);
        });
    }

}

export class Seed extends Files {

    constructor(store: Store) { super(store); }

    get addSeed$() {
        return Observable.create((observer: any) => {
            const tables = Object.keys(Store.schema);
            let records = {};
            tables.map(key => {
                const record = Store.schema[key];
                records = Object.assign(records, { [key]: record });
            });
            setContentReducer(records);
            observer.next(`Records ready to create.`);
        });
    }

}

export const setContentReducer = (records: any) => Store.contents = JSON.stringify(records, null, 2);

export class NumberGenerator {
    initialNumber: number;
    constructor() { this.initialNumber = 0; }
    increment() { this.initialNumber++; }
    get nextNumber() { this.increment(); return this.initialNumber; }
}

export default Seed;

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
