import { ISectionSchema } from './../models/SectionSchema';
import { IFieldSchema } from './../models/FieldSchema';

interface SectionDictionary {
    [section: string]: { section: ISectionSchema, fields: IFieldSchema[] };
}

export const createSectionDictionary = (sections: ISectionSchema[]) => {
    let dictionary: SectionDictionary = {};
    sections.map(val => dictionary = Object.assign({}, dictionary, { [val.label]: val.fields }));
    return dictionary;
};

export const createSectionArray = (dictionary: SectionDictionary): ISectionSchema[] => {
    let sections: ISectionSchema[] = [];
    const key = Object.keys(dictionary);
    key.map(k => {
        const section = dictionary[k].section;
        section.fields = dictionary[k].fields;
        sections = [...sections, Object.assign({}, section)];
    });
    return sections;
};

