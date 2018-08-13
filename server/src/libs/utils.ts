import { Request, Response } from 'express';
import { models, model, Model, Schema } from 'mongoose';
import { default as SchemaModel, ISchema } from './../models/Schema';
import { IFieldSchema } from './../models/FieldSchema';
import { default as DynamicSchemaModel, schema as DynamicSchema, IDynamicSchema } from './../models/DynamicSchema';

export const findSchema = (request: Request, response: Response) => {
    const schemaName = convertName(request.url);
    return SchemaModel.findOne({ name: schemaName }, (err: any, data: any) => err ? response.status(500).send(err) : data);
};

export const getModel = (doc: ISchema, request: Request, response: Response) => {
    if (!doc) {
        const name = convertName(request.url);
        createSchemaModel({
            name: name, url: request.url, description: 'Automatically created. No schema found.',
            fields: []
        }, request, response);
        return createDynamicModel(name, request, response);
    }
    if (models && doc.hasOwnProperty('name')) {
        return models[doc.name] ? models[doc.name] : createDynamicModel(doc.name, request, response);
    }
    return DynamicSchemaModel;
};

export const createModel = (name: string, fields: IFieldSchema[]) => {
    let fieldAttributes = {};
    fields.map(field => fieldAttributes = Object.assign(fieldAttributes, { [field.name]: getType(field.type) }));
    const schema = new Schema(fieldAttributes);
    schema.add(DynamicSchema.obj);
    return model(name, schema);
};

export const createDynamicModel = (name: string, request: Request, response: Response) => {
    const schema = new Schema(DynamicSchema.obj);
    return model(name, schema);
};

export const createSchemaModel = (schema: ISchema, request: Request, response: Response) =>
    SchemaModel.create(schema, (err: any, data: any) => err ? response.status(500).send(err) : response.json(data));

export const getSchemaModels = () =>
    SchemaModel.find({}, (err: any, data: any) => err ? err : data);

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

export const properCase = (str: string): string => {
    if (str === undefined) {
        return '';
    }
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

export const convertName = (str: string): string => {
    const name = str.slice(1, str.length - 1);
    return properCase(name);
};


// documents.map(d => data = Object.assign(data, { [d.name]: this.getType(d.type) }));
//         let schema = new Schema(data);
//         console.log(data);
//         schema = this.addDefaults(schema);
//         return model(name, schema);