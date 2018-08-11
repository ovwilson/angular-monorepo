// import { Request, Response, NextFunction } from 'express';
// import Model from './../models/Setting';

// class SettingsRouter {

//     constructor() { }

//     get(request: Request, response: Response, next: NextFunction) {
//         Model.find((err, data) => err ? response.send(err) : response.json(data));
//     }

//     getById(request: Request, response: Response, next: NextFunction) {
//         Model.find({ id: request.params.id }, (err, data) => err ? response.status(500).send(err) : response.json(data));
//     }

//     create(request: Request, response: Response) {
//         Model.create(request.body, (err, data) => err ? response.status(500).send(err) : response.json(data));
//     }

//     createSeed(request: Request, response: Response) {
//         Model.seed(request.params.quantity, (err: any, data: any) =>
//             err ? response.status(500).send(err) : response.send(`<pre>${JSON.stringify(data, undefined, 2)}</pre>`));
//     }

//     updateById(request: Request, response: Response) {
//         const query = { id: request.params.id },
//             update = { title: request.body.title, description: request.body.description };
//         Model.findOneAndUpdate(query, update, (err: any, data: any) =>
//             err ? response.status(500).send(err) : response.json(data));
//     }

//     deleteById(request: Request, response: Response) {
//         Model.findOneAndRemove({ id: request.params.id }, (err: any, data: any) =>
//             err ? response.status(500).send(err) : response.json(data));
//     }

//     deleteAll(request: Request, response: Response) {
//         Model.remove({}, (err) =>
//             err ? response.status(500).send(err) : response.json({ status: 'All Records Removed.' }));
//     }
// }

// export const settingsRouter = new SettingsRouter();