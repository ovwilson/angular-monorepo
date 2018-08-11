const faker = require('faker');

interface Table {
    name: string;
    attributes(): any;
}

export const tables: Table[] = [
    { name: 'Setting', attributes: () => Object.assign({}, { title: faker.company.companyName(), description: faker.lorem.paragraph() }) }
];

export class NumberGenerator {
    startNum: number;
    constructor() { this.startNum = 0; }
    increment() { this.startNum++; }
    get nextNumber() { this.increment(); return this.startNum; }
}
