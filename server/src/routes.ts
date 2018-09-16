import * as express from 'express';
import { indexRouter } from './routes/Index';
import counterRouter from './routes/Counter';
import schemaRouter from './routes/Schemas';
import dynamicRouter from './routes/DynamicSchemas';

class Routes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.setCounters();
    this.setCommonRoutes();
    this.setDynamicRoutes();
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
  }

  public setDynamicRoutes() {

    this.router.route('/dynamic')
      .get(dynamicRouter.get)
      .post(dynamicRouter.create)
      .delete(dynamicRouter.deleteAll);

    this.router.route('dynamic/:id')
      .get(dynamicRouter.getById)
      .post(dynamicRouter.updateById)
      .delete(dynamicRouter.deleteById);

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
