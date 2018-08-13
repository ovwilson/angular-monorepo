import { of } from 'rxjs';
import { concatAll, take } from 'rxjs/operators';
import * as faker from 'faker';
import { FakerSeed } from './utils';
import { Store } from './../models/store';

const store: Store = {
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

const seed = new FakerSeed(store);

const createSeed$ = of(
    seed.addSeed$.pipe(take(1)),
    seed.writeFile$.pipe(take(1)))
    .pipe(concatAll())
    .subscribe(data => console.log(data));
