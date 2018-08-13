import * as express from 'express';
import { indexRouter } from './routes/Index';
import counterRouter from './routes/Counter';
import schemaRouter from './routes/Schemas';
import fieldSchemaRouter from './routes/FieldSchemas';
import crudRoutes from './libs/crudRoutes';
import stores from './libs/stores';

class Routes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.setCounters();
    this.setModels();
    this.setCommonRoutes();
  }

  public setModels() {
    stores.getModels();
  }

  public setCommonRoutes() {
    this.router.route('/').get(indexRouter);

    this.router.route('/schemas')
      .get(schemaRouter.get)
      .post(schemaRouter.create)
      .delete(schemaRouter.deleteAll);

    this.router.route('/schemas/:id')
      .get(schemaRouter.getById)
      .post(schemaRouter.updateById)
      .delete(schemaRouter.deleteById);

      this.router.route('/fieldschemas')
      .get(schemaRouter.get)
      .post(schemaRouter.create)
      .delete(schemaRouter.deleteAll);

    this.router.route('/fieldschemas/:id')
      .get(schemaRouter.getById)
      .post(schemaRouter.updateById)
      .delete(schemaRouter.deleteById);

    this.router.route('*')
      .get(crudRoutes.get)
      .post(crudRoutes.create)
      .delete(crudRoutes.deleteAll);
  }

  public setCounters() {
    this.router.route('/counters')
      .get(counterRouter.getCounters);

    this.router.route('/counter/:name')
      .post(counterRouter.updateCounter);

    this.router
      .route('/counter-create/:name')
      .post(counterRouter.createCounter);
  }
}

export default new Routes().router;
