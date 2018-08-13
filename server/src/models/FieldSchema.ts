import { Schema, model, Model, Document } from 'mongoose';

export const schemaName = 'FieldSchema';

export interface IDocument extends Document {
    Id: number;
    Title: string;
    name: string;
    label?: string;
    description?: string;
    options?: [{ idx: number, key: string, value: string }];
    type: string;
    required: boolean;
    visible: boolean;
    Created?: Date;
    Modified?: Date;
}

export interface IModel extends Model<IDocument> { }

export const schema: Schema = new Schema({
    Id: Number,
    Title: String,
    name: String,
    label: String,
    description: String,
    options: [{ idx: Number, key: String, value: String }],
    type: String,
    required: Boolean,
    visible: Boolean,
    Created: { type: Date, default: () => Date.now() },
    Modified: { type: Date, default: () => Date.now() }
});

export default model<IDocument, IModel>(schemaName, schema);
