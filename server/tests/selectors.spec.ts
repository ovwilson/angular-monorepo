import * as chai from 'chai';
import { expect } from 'chai';
import * as faker from 'faker';
const db = require('./../../cypress/fixtures/db.json');
import { createDictionaryArray } from './../src/libs/selectors';

describe('Dynamic Schema Utils', () => {


  it('should create a dictionary', () => {
    const users = db['contentSchemas'].filter(schema => schema.name === 'users');
    const sections = users.sections;
    const dictionary = createDictionaryArray('name', sections.fields);
  });


});


