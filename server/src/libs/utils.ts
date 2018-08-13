import { Request, Response } from 'express';
import { models, model, Model, Schema } from 'mongoose';
import { default as SchemaModel, IDocument as SchemaDocument } from './../models/Schema';
import { IDocument as FieldSchemaDocument } from './../models/FieldSchema';
import { default as DynamicSchemaModel, IDocument as DynamicSchemaDocument, schema as DynamicSchema } from './../models/DynamicSchema';

export const findSchema = (request: Request, response: Response) => {
    const schemaName = convertName(request.url);
    return SchemaModel.findOne({ name: schemaName }, (err: any, data: any) => err ? response.status(500).send(err) : data);
};

export const getModel = (doc: SchemaDocument) => models[doc.name];

export const createModel = (name: string, fields: FieldSchemaDocument[]) => {
    let fieldAttributes = {};
    fields.map(field => fieldAttributes = Object.assign(fieldAttributes, { [field.name]: getType(field.type) }));
    const schema = new Schema(fieldAttributes);
    return model(name, schema);
};

export const getSchemaModels = () => SchemaModel.find({}, (err: any, data: any) => err ? err : data);

export const setModels = () => {
    const schemaModels = getSchemaModels();
    schemaModels.then(docs => docs.map(doc => createModel(doc.name, doc.fields)));
};

export const getType = (type: string) => { // TODO: Create types based on values from Mongod
    switch (type) {
        case 'id': return Schema.Types.ObjectId;
        case 'string': return String;
        case 'number': return Number;
        case 'Date': return Date;
        case 'boolean': return Boolean;
        case 'any': return Schema.Types.Mixed;
        case 'any[]': return [Schema.Types.Mixed];
        case 'string[]': return [String];
        case 'number[]': return [Number];
        default: return Schema.Types.Mixed;
    }
};

export const properCase = (str: string): string =>
    str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });

export const convertName = (str: string): string => {
    const name = str.slice(1, str.length - 1);
    return properCase(name);
};


// documents.map(d => data = Object.assign(data, { [d.name]: this.getType(d.type) }));
//         let schema = new Schema(data);
//         console.log(data);
//         schema = this.addDefaults(schema);
//         return model(name, schema);