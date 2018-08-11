// import { Schema, model, Model, Document } from 'mongoose';
// import { tables } from './../helpers/utils';
// import Counter from './Counter';

// const schemaName = 'Setting';

// interface IDocument extends Document {
//     id: string;
//     title: string;
//     description: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

// interface IModel extends Model<IDocument> {
//     seed(quantity: number, cb: any): any;
// }

// const schema: Schema = new Schema({
//     id: Number,
//     title: String,
//     description: String,
//     createdAt: { type: Date, default: () => Date.now() },
//     updatedAt: { type: Date, default: () => Date.now() }
// });

// schema.pre('save', function (next) {
//     const doc = this;
//     Counter.getNextSequence('Setting', (err: any, data: any) => {
//         doc.id = data.seq;
//         next();
//     });
// });

// schema.statics.seed = function (quantity: number, cb: any) { // this function cannot use lamba or arrow function ( => )
//     const attributes = tables.filter(table => table.name === schemaName)[0].attributes;
//     const settings = [];
//     for (let i = 0; i < quantity; i++) {
//         const setting = Object.assign({}, attributes());
//         settings.push(setting);
//     }
//     return this.collection.insert(settings, cb);
// };

// export default model<IDocument, IModel>(schemaName, schema);
