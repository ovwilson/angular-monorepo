import { Request, Response, NextFunction } from 'express';
import Model from './../models/Schema';

class SchemaRouter {

    constructor() { }

    get(request: Request, response: Response, next: NextFunction) {
        Model.find((err, data) => err ? response.send(err) : response.json(data));
    }

    getById(request: Request, response: Response, next: NextFunction) {
        Model.find({ id: request.params.id }, (err, data) => err ? response.status(500).send(err) : response.json(data));
    }

    create(request: Request, response: Response) {
        Model.create(request.body, (err: any, data: any) => err ? response.status(500).send(err) : response.json(data));
    }

    updateById(request: Request, response: Response) {
        const query = { id: request.params.id },
            update = request.body;
        Model.findOneAndUpdate(query, update, (err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data));
    }

    deleteById(request: Request, response: Response) {
        Model.findOneAndRemove({ id: request.params.id }, (err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data));
    }

    deleteAll(request: Request, response: Response) {
        Model.remove({}, (err) =>
            err ? response.status(500).send(err) : response.json({ status: 'All Records Removed.' }));
    }
}

export default new SchemaRouter();
