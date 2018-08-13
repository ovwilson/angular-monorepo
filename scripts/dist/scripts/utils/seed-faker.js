"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const faker = require("faker");
const utils_1 = require("./utils");
const store = {
    fileName: 'cypress/fixtures/db-faker.json',
    fileFormat: 'utf8',
    file: '',
    schema: null,
    schemaFaker: {
        users: {
            incrementId: true,
            quantity: 10,
            attributes: () => Object.assign({}, { name: faker.name.findName(), email: faker.internet.email() })
        },
        settings: {
            incrementId: true,
            quantity: 5,
            attributes: () => Object.assign({}, { title: faker.company.companyName(), description: faker.lorem.paragraph() })
        },
        rules: {
            incrementId: false,
            quantity: 10,
            attributes: () => Object.assign({}, { id: faker.random.number(), value: faker.company.catchPhraseAdjective() })
        }
    },
    contents: {}
};
const seed = new utils_1.FakerSeed(store);
const createSeed$ = rxjs_1.of(seed.addSeed$.pipe(operators_1.take(1)), seed.writeFile$.pipe(operators_1.take(1)))
    .pipe(operators_1.concatAll())
    .subscribe(data => console.log(data));
//# sourceMappingURL=seed-faker.js.map