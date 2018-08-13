import { Schema, model, Model, Document } from 'mongoose';
import { schema as FieldSchema, IFieldSchema  } from './FieldSchema';

export const schemaName = 'Schema';

export interface ISchema {
  Id?: number;
  Title?: string;
  name: string;
  url: string;
  tags?: string[];
  description?: string;
  fields?: IFieldSchema[];
  Created?: Date;
  Modified?: Date;
}

export interface IDocument extends ISchema, Document {}

export interface IModel extends Model<IDocument> { }

export const schema: Schema = new Schema({
  Id: Number,
  Title: String,
  name: String,
  url: String,
  tags: [String],
  description: String,
  fields: [FieldSchema],
  Created: { type: Date, default: () => Date.now() },
  Modified: { type: Date, default: () => Date.now() }
});

export default model<IDocument, IModel>(schemaName, schema);
