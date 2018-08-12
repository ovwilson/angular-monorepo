// import * as faker from 'faker';
// import { Schema, model, Model, Document } from 'mongoose';

export interface Table {
    name: string;
    attributes(): any;
}

//export const tables: Table[] = [
//    { name: 'Setting', attributes: () => Object.assign({}, { title: faker.company.companyName(), description: faker.lorem.paragraph() }) }
//];

export class NumberGenerator {
    startNum: number;
    constructor() { this.startNum = 0; }
    increment() { this.startNum++; }
    get nextNumber() { this.increment(); return this.startNum; }
}

export const properCase = (str: string): string =>
    str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

export const convertName = (str: string): string => {
    const name = str.slice(1, str.length - 1);
    return properCase(name);
};

