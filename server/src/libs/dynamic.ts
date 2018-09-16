import { Request, Response, NextFunction } from 'express';
import { default as SchemaModel, ISchema } from './../models/Schema';
import { Schema, model, Model, Document } from 'mongoose';
import { default as DynamicModel, IDynamicSchema } from './../models/DynamicSchema';

class Dynamic {

    _dynamicModel: any;
    schemaModel: any;

    constructor(dynamicModel: any, schemaModel: any) {
        this.dynamicModel = dynamicModel;
    }

    get dynamicModel() {
        return this._dynamicModel;
    }

    set dynamicModel(dm: any) {
        this._dynamicModel = dm;
    }

    setModels() {
        // Do rxjs here
        SchemaModel.find({}).then((docs: ISchema[]) => docs.map(doc => this.createDynamicModel(doc.name, doc.fields)));
    }


    createDefaultSchema(name: string, url: string, cb: any) {
        SchemaModel.create({
            name: name,
            url: url,
            description: 'Automatically created. No schema found.',
            fields: []
        }, cb);
    }

    createDynamicModel(name: string, fields: any[]) {
        this.dynamicModel = DynamicModel.createModelWithFields(name, fields);
    }

}

export default new Dynamic(DynamicModel, SchemaModel);


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





// documents.map(d => data = Object.assign(data, { [d.name]: this.getType(d.type) }));
//         let schema = new Schema(data);
//         console.log(data);
//         schema = this.addDefaults(schema);
//         return model(name, schema);
