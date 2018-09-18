import { ISectionSchema } from './../models/SectionSchema';
import { IFieldSchema } from './../models/FieldSchema';

interface SectionDictionary {
    [section: string]: ISectionSchema;
}

interface FieldDictionary {
    [field: string]: IFieldSchema;
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

export const transformSections = (dictionary: SectionDictionary, sections: ISectionSchema[]): ISectionSchema[] => {
    sections.map(section => dictionary[section.label] ? dictionary[section.label] = mergeSection(dictionary[section.label], section) :
        dictionary = appendSection(dictionary, section));
    return createSectionArray(dictionary);
};

export const mergeSection = (origSection: ISectionSchema, section: ISectionSchema): ISectionSchema => {
    return Object.assign({}, origSection, { fields: mergeFields(origSection.fields, section.fields) });
};

export const mergeFields = (origFields: IFieldSchema[], fields: IFieldSchema[]): IFieldSchema[] => {
    const fieldDictionary = createFieldDictionary(fields);
    return origFields.map(field => fieldDictionary[field.name] ? Object.assign({}, fieldDictionary[field.name]) : field);
};

export const appendSection = (dictionary: SectionDictionary, section: ISectionSchema): SectionDictionary => {
    dictionary[section.label] = section;
    return dictionary;
};

export const createFieldDictionary = (fields: IFieldSchema[]): FieldDictionary{
    const dictionary: FieldDictionary = {};
    fields.map(field => dictionary[field.name] = field);
    return dictionary;
};


