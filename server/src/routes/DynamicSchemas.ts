import { Request, Response, NextFunction } from 'express';
import { default as SchemaModel, ISchema } from './../models/Schema';
import * as fromUtils from './utils';

class DynamicRoutes {

    constructor() { }

    get(request: Request, response: Response, next: NextFunction) {
        const schema = fromUtils.findSchema(request, response);
        schema.then((doc) => fromUtils.getModel(doc, request, response).find({},
            (err: any, data: any) => err ? response.send(err) : response.json(data)));
    }

    getById(request: Request, response: Response, next: NextFunction) {
        const schema = fromUtils.findSchema(request, response);
        schema.then((doc) => fromUtils.getModel(doc, request, response).find({ id: request.params.id },
            (err: any, data: any) => err ? response.status(500).send(err) : response.json(data)));
    }


    create(request: Request, response: Response) {
        const schema = fromUtils.findSchema(request, response);
        schema.then((doc) => fromUtils.getModel(doc, request, response).create(request.body,
            (err: any, data: any) => err ? response.status(500).send(err) : response.json(data)));
    }

    updateById(request: Request, response: Response) {
        const schema = fromUtils.findSchema(request, response);
        schema.then((doc) => {
            const query = { id: request.params.id }, update = request.body;
            fromUtils.getModel(doc, request, response).findOneAndUpdate(query, update, (err: any, data: any) =>
                err ? response.status(500).send(err) : response.json(data));
        });
    }

    deleteById(request: Request, response: Response) {
        const schema = fromUtils.findSchema(request, response);
        schema.then((doc) => fromUtils.getModel(doc, request, response).findOneAndRemove({ id: request.params.id }, (err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data)));
    }

    deleteAll(request: Request, response: Response) {
        const schema = fromUtils.findSchema(request, response);
        schema.then((doc) => fromUtils.getModel(doc, request, response).remove({}, (err: any) =>
            err ? response.status(500).send(err) : response.json({ status: 'All Records Removed.' })));

    }
}

export default new DynamicRoutes();
