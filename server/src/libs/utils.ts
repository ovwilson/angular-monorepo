import { Request, Response } from 'express';
import { models, model, Model, Schema } from 'mongoose';
import { default as SchemaModel, ISchema } from './../models/Schema';
import { IFieldSchema } from './../models/FieldSchema';
import { default as DynamicSchemaModel, schema as DynamicSchema, IDynamicSchema } from './../models/DynamicSchema';


// export const getModel = (doc: ISchema, request: Request, response: Response) => {
//     if (!doc) {
//         const name = convertName(request.url);
//         createSchemaModel({
//             name: name, url: request.url, description: 'Automatically created. No schema found.',
//             fields: []
//         }, request, response);
//         return createDynamicModel(name, request, response);
//     }
//     if (models && doc.hasOwnProperty('name')) {
//         return models[doc.name] ? models[doc.name] : createDynamicModel(doc.name, request, response);
//     }
//     return DynamicSchemaModel;
// };

export const setModels = () => {
    const schemaModels = getSchemaModels();
    schemaModels.then(docs => docs.map(doc => createModel(doc.name, doc.fields)));
};




// documents.map(d => data = Object.assign(data, { [d.name]: this.getType(d.type) }));
//         let schema = new Schema(data);
//         console.log(data);
//         schema = this.addDefaults(schema);
//         return model(name, schema);