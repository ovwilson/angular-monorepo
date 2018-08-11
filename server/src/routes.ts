import * as express from 'express';
import { indexRouter } from './routes/Index';
// import { settingsRouter } from './routes/Settings';
import { default as counterRouter } from './routes/Counter';

class Routes {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.setIndex();
    this.setCounters();
  }

  public setIndex() {
    this.router.route('/').get(indexRouter);
  }

  public setCounters() {
    this.router.route('/counters').get(counterRouter.getCounters);

    this.router.route('/counter/:name').post(counterRouter.updateCounter);

    this.router
      .route('/counter-create/:name')
      .post(counterRouter.createCounter);
  }
}

export default new Routes().router;
