import { Schema, model, Model, Document } from 'mongoose';
import * as fromUtils from './../libs/utils';
export const schemaName = 'Schema';

export interface IDocumentTypes extends Document {
  name: string;
  type: string;
  index: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export const schemaTypes: Schema = new Schema({
  name: String,
  type: String,
  index: Boolean,
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});

export interface IDocument extends Document {
  id?: number;
  name: string;
  url: string;
  description: string;
  attributes: IDocumentTypes[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IModel extends Model<IDocument> { }

export const schema: Schema = new Schema({
  id: Number,
  name: String,
  url: String,
  description: String,
  attributes: [schemaTypes],
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});


export default model<IDocument, IModel>(schemaName, schema);
