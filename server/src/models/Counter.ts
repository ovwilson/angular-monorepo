import { Schema, model, Model, Document } from 'mongoose';

const schemaName = 'Counter';

interface IDocument extends Document {
    _id: string;
    seq: number;
}

interface IModel extends Model<IDocument> {
    getNextSequence(name: string, cb: any): any;
}

const schema: Schema = new Schema({
    _id: String,
    seq: { type: Number, default: 0 }
});

schema.statics.getNextSequence = function (name: string, cb: any) { // this function cannot use lamba or arrow function ( => )
    const conditions = { _id: name },
        update = { $inc: { seq: 1 } },
        options = { new: true };
    return this.findOneAndUpdate(conditions, update, options, cb);
};


export default model<IDocument, IModel>(schemaName, schema);
