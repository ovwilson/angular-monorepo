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
    },
    {
        name: 'Field Types',
        url: '/fieldtypes',
        description: 'Field Types Description',
        fields: [
            { name: 'id', label: 'Id', type: 'Schema.Types.ObjectId', required: false, visible: true },
            { name: 'string', label: 'String', type: 'String', required: false, visible: true },
            { name: 'number', label: 'Number', type: 'Number', required: false, visible: true },
            { name: 'Date', label: 'Date', type: 'Date', required: false, visible: true },
            { name: 'boolean', label: 'Boolean', type: 'Boolean', required: false, visible: true },
            { name: 'any', label: 'Mixed', type: 'Schema.Types.Mixed', required: false, visible: true },
            { name: 'Array', label: 'Array', type: '[]', required: false, visible: true },
            { name: 'string[]', label: 'String Array', type: '[String]', required: false, visible: true },
            { name: 'number[]', label: 'Number Array', type: '[Number]', required: false, visible: true },
            { name: 'any[]', label: 'Mixed Array', type: '[Schema.Types.Mixed]', required: false, visible: true }
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