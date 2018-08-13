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
