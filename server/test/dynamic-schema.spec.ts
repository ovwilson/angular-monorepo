
import { Schema, model, Document } from 'mongoose';

import { DB } from './../src/libs/db';

describe('Connect to MongoDB', () => {
  let connection;

  beforeEach((done: any) => {
    connection = new DB().connect();
    connection.on('open', () => {
      done();
    });
  });

  it('should create name field', () => {

    // schema.add({ name: String, title: String });

    // Model.create({ name: 'Test', title: 'tilllll' }, (err: any, data: any) => {
    //   expect(data._doc).to.have.property('name');
    //   expect(data._doc).to.have.property('title');
    // });
    // chai.request(server).get('/').end((err, response) => {
    //   expect(response).to.have.status(200);
    // });
  });
});
