import { Schema, model, Model, Document } from 'mongoose';

export const schemaName = 'Dynamic';

export interface IDocument extends Document {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IModel extends Model<IDocument> {}

export const schema: Schema = new Schema({
  id: Number,
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export default model<IDocument, IModel>(schemaName, schema);
