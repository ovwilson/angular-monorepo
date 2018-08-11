import { Request, Response, NextFunction } from 'express';
import Model from './../models/Counter';

class CounterRouter {

    constructor() { }

    getCounters(request: Request, response: Response) {
        Model.find((err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data));
    }

    createCounter(request: Request, response: Response) {
        Model.create({ _id: request.params.name, seq: 0 }, (err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data));
    }

    updateCounter(request: Request, response: Response) {
        Model.getNextSequence(request.params.name, (err: any, data: any) =>
            err ? response.status(500).send(err) : response.json(data));
    }


}

export default new CounterRouter();
