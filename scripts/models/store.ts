
export interface FakerSchema {
    [name: string]: { incrementId: boolean, quantity: number, attributes: () => any };
}

export interface Schema {
    [name: string]: any[];
}

export interface Store {
    fileName: string;
    file: string;
    fileFormat: string;
    schema: Schema;
    schemaFaker: FakerSchema;
    contents: any;
}
