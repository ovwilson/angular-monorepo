import { Schema, model, Model, Document } from 'mongoose';
import { schema as FieldSchema, IFieldSchema } from './FieldSchema';

export const schemaName = 'SectionSchema';

export interface ISectionSchema {
    name?: string;
    label?: string;
    url?: string;
    description?: string;
    active?: boolean;
    fields?: IFieldSchema[];
}

export interface IDocument extends ISectionSchema, Document { }
export interface IModel extends Model<IDocument> { }

export const schema: Schema = new Schema({
    name: String,
    label: String,
    url: String,
    description: String,
    active: Boolean,
    fields: [FieldSchema]
});

export default model<IDocument, IModel>(schemaName, schema);
