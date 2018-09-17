import { ISectionSchema } from './../models/SectionSchema';
import { IFieldSchema } from './../models/FieldSchema';

interface SectionDictionary {
    [section: string]: ISectionSchema;
}

export const createSectionDictionary = (sections: ISectionSchema[]) => {
    let dictionary: SectionDictionary = {};
    sections.map(val => dictionary = Object.assign({}, dictionary,
        { [val.name]: val }));
    return dictionary;
};

export const createSectionArray = (dictionary: SectionDictionary): ISectionSchema[] => {
    let sections: ISectionSchema[] = [];
    const key = Object.keys(dictionary);
    key.map(k => { sections = [...sections, Object.assign({}, dictionary[k])]; });
    return sections;
};

