import * as chai from 'chai';
import { expect } from 'chai';
import * as faker from 'faker';
const db = require('./db.json');
import { createSectionDictionary, createSectionArray } from './../src/libs/selectors';

describe('Dynamic Schema Utils', () => {

  it('should create sections dictionary from array', () => {
    const sections = db['contentSchemas']
      .filter(schema => schema.name === 'Content')
      .map(schema => schema.sections).shift(); /* ? */
    const dictionary = createSectionDictionary(sections);
    expect(Object.keys(dictionary).length).to.eq(sections.length);
    expect(dictionary['users'].label).to.eq('Users');
    expect(dictionary['users'].hasOwnProperty('fields')).to.eq(true);
  });

  it('should create a sections array from dictionary', () => {
    const sections = db['contentSchemas']
      .filter(schema => schema.name === 'Content')
      .map(schema => schema.sections).shift(); /* ? */
    const dictionary = createSectionDictionary(sections);
    const sectionsArray = createSectionArray(dictionary);
    const section = sectionsArray.filter(s => s.name === 'users').shift();
    expect(Object.keys(dictionary).length).to.eq(sectionsArray.length);
    expect(section.hasOwnProperty('name')).to.eq(true);
    expect(section.hasOwnProperty('label')).to.eq(true);
  });


});


