import { Schema, model, Model, Document } from 'mongoose';
import { IFieldSchema } from './../models/FieldSchema';

export const schemaName = 'DynamicSchema';

export interface IDynamicSchema {
    Id?: number;
    Title?: string;
    Created?: Date;
    Modified?: Date;
}

export interface IDocument extends IDynamicSchema, Document { }

export interface IModel extends Model<IDocument> {
    createModel(name: string): Model<any>;
    createModelWithFields(name: string, fields: IFieldSchema[]): Model<any>;
    setFieldAttrs(name: string, fields: IFieldSchema[]): any;
    getType(type: string): any;
}

export const schema: Schema = new Schema({
    Id: Number,
    Title: String,
    Created: { type: Date, default: () => Date.now() },
    Modified: { type: Date, default: () => Date.now() }
});

schema.statics.createModel = function (name: string) {
    return model<IDocument, IModel>(name, new Schema(schema.obj));
};

schema.statics.createModelWithFields = function (name: string, fields: IFieldSchema[]) {
    // const schemaDynamic = new Schema(this.setFieldAttrs(name, fields));
    // schemaDynamic.add(schema.obj);
    // return model(name, new Schema(schemaDynamic));
};

schema.methods.setFieldAttrs = function (name: string, fields: IFieldSchema[]) {
    let fieldAttributes = {};
    fields.map(field => fieldAttributes = Object.assign(fieldAttributes, { [field.name]: this.getType(field.type) }));
    return fieldAttributes;
};

schema.statics.getType = function (type: string) {
    switch (type) {
        case 'id': return Schema.Types.ObjectId;
        case 'string': return String;
        case 'number': return Number;
        case 'date': return Date;
        case 'boolean': return Boolean;
        case 'any': return Schema.Types.Mixed;
        case 'any[]': return [Schema.Types.Mixed];
        case 'string[]': return [String];
        case 'number[]': return [Number];
        default: return Schema.Types.Mixed;
    }
};

export default model<IDocument, IModel>(schemaName, schema);
