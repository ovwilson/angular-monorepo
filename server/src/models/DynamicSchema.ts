import { Schema, model, Model, Document } from 'mongoose';
export const schemaName = 'DynamicSchema';

export interface IDocument extends Document {
    Id?: number;
    Title?: string;
    Created?: Date;
    Modified?: Date;
}

export interface IModel extends Model<IDocument> { }

export const schema: Schema = new Schema({
    Id: Number,
    Title: String,
    Created: { type: Date, default: () => Date.now() },
    Modified: { type: Date, default: () => Date.now() }
});

export default model<IDocument, IModel>(schemaName, schema);
