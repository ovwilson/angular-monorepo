import { Schema, model, Model, Document } from 'mongoose';

export const schemaName = 'Schema';

// export interface IDocumentTypes extends Document {
//   name: string;
//   type: string;
//   index: boolean;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

// export const schemaTypes: Schema = new Schema({
//   name: String,
//   type: String,
//   index: Boolean,
//   createdAt: { type: Date, default: () => Date.now() },
//   updatedAt: { type: Date, default: () => Date.now() }
// });

export interface IDocument extends Document {
  Id?: number;
  Title?: string;
  name: string;
  url: string;
  tags: string[];
  description: string;
  documents: any[];
  Created?: Date;
  Modified?: Date;
}

export interface IModel extends Model<IDocument> { }

export const schema: Schema = new Schema({
  Id: Number,
  Title: String,
  name: String,
  url: String,
  tags: [String],
  description: String,
  documents: [Schema.Types.Mixed],
  createdAt: { type: Date, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() }
});


export default model<IDocument, IModel>(schemaName, schema);
