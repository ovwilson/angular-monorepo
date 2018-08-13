import { of } from 'rxjs';
import { concatAll, take } from 'rxjs/operators';
import * as faker from 'faker';
import { default as Seed } from './utils';
import { Store } from './../models/store';
import { ISchema } from '../../server/src/models/Schema';

const schemas: ISchema[] = [
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

const store: Store = {
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

const seed = new Seed(store);

const createSeed$ = of(
    seed.addSeed$.pipe(take(1)),
    seed.writeFile$.pipe(take(1)))
    .pipe(concatAll())
    .subscribe(data => console.log(data));
