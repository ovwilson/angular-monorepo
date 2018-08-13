"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const utils_1 = require("./utils");
const schemas = [
    {
        name: 'User',
        url: '/users',
        description: 'User description',
        fields: [
            { name: 'firstName', label: 'First Name', type: 'string', required: false, visible: true },
            { name: 'lastName', label: 'Last Name', type: 'string', required: false, visible: true },
            { name: 'email', label: 'Email', type: 'string', required: false, visible: true }
        ]
    }
];
const store = {
    fileName: 'cypress/fixtures/db.json',
    fileFormat: 'utf8',
    file: '',
    schema: {
        schemas: schemas,
        globals: [],
        validations: [],
        selections: []
    },
    schemaFaker: null,
    contents: {}
};
const seed = new utils_1.default(store);
const createSeed$ = rxjs_1.of(seed.addSeed$.pipe(operators_1.take(1)), seed.writeFile$.pipe(operators_1.take(1)))
    .pipe(operators_1.concatAll())
    .subscribe(data => console.log(data));
//# sourceMappingURL=seed.js.map