import { Schema, model, Model, Document } from 'mongoose';
import { schema as SectionSchema, ISectionSchema } from './SectionSchema';

export const schemaName = 'Schema';

export interface KeyPair {
  key: string;
  value: any;
}

export interface ISchema {
  Id?: number;
  Title?: string;
  name: string;
  url: string;
  tags?: string[];
  description?: string;
  sections?: ISectionSchema[];
  Created?: Date;
  Modified?: Date;
}

export interface IDocument extends ISchema, Document { }

export interface IModel extends Model<IDocument> {
  createDoc(body: any, cb: any): ISchema;
  findByUrl(url: string, cb: any): ISchema;
  convertToName(url: string, cb: any): string;
  properCase(url: string): string;
  getFieldTypes(): any;
}

export const schema: Schema = new Schema({
  Id: Number,
  Title: String,
  name: String,
  url: String,
  tags: [String],
  description: String,
  sections: [SectionSchema],
  Created: { type: Date, default: () => Date.now() },
  Modified: { type: Date, default: () => Date.now() }
});

schema.statics.createDoc = function (body: any, cb: any) {
  return this.create(body, cb);
};

schema.statics.findByUrl = function (url: string, cb: any) {
  return this.findOne({ name: this.convertName(url) }, cb);
};

schema.statics.convertToName = function (url: string) {
  return this.properCase(url.slice(1, url.length - 1));
};

schema.statics.properCase = function (url: string) {
  if (url === undefined) { return ''; }
  return url.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

export default model<IDocument, IModel>(schemaName, schema);
