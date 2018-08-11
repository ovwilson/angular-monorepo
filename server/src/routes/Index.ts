import { Request, Response, NextFunction } from 'express';

class IndexRouter {

    constructor() { }

    getIndex(request: Request, response: Response) {
        response.send('<h1>Express Server Loaded using TypeScript</h1>');
    }

}

export const indexRouter = new IndexRouter().getIndex;
