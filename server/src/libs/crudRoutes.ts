import { Request, Response, NextFunction } from 'express';
import SchemaModel from './../models/Schema';
import * as fromUtils from './utils';
import stores from './stores';

class CRUDRoutes {

    constructor() { }

    get(request: Request, response: Response, next: NextFunction) {

        const schemaName = fromUtils.convertName(request.url);
        const schema = SchemaModel.findOne({ name: schemaName },
            (err: any, data: any) => err ? response.status(500).send(err) : data);
        schema.then((v) => {
            stores.modelsSubscription$.subscribe(state => {
                state.models.entities[v.name].find({}, (err: any, data: any) => err ? response.send(err) : response.json(data));
            }).unsubscribe();

        });
    }

    getById(request: Request, response: Response, next: NextFunction) {
        SchemaModel.find({ name: request.params.id },
            (err: any, data: any) => err ? response.status(500).send(err) : response.json(data));
    }

    //SchemaModel.find({ id: request.params.id }, (err: any, data: any) => err ? response.status(500).send(err) : response.json(data));


    create(request: Request, response: Response) {
        SchemaModel.create({ name: request.url }, (err: any, data: any) => err ? response.status(500).send(err) : response.json(data));
    }

    updateById(request: Request, response: Response) {
        const query = { id: request.params.id },
            update = request.body;
        SchemaModel.findOneAndUpdate(query, update, (err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data));
    }

    deleteById(request: Request, response: Response) {
        SchemaModel.findOneAndRemove({ id: request.params.id }, (err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data));
    }

    deleteAll(request: Request, response: Response) {

        const schemaName = fromUtils.convertName(request.url);
        const schema = SchemaModel.findOne({ name: schemaName },
            (err: any, data: any) => err ? response.status(500).send(err) : data);
        schema.then((v) => {
            stores.modelsSubscription$.subscribe(state => {
                state.models.entities[v.name].remove({}, (err: any) =>
                    err ? response.status(500).send(err) : response.json({ status: 'All Records Removed.' }));
            }).unsubscribe();
        });
    }
}

export default new CRUDRoutes();
