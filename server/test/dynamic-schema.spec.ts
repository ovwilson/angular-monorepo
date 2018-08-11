import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { expect } from 'chai';
import 'mocha';
import 'request';

import { default as Model, schema } from './../src/models/Dynamic';
import { Schema, model, Document } from 'mongoose';

import { DB } from './../src/helpers/db';

import * as server from './../src/server';

chai.use(chaiHttp);

describe('GET /', () => {
  let connection;

  beforeEach((done: any) => {
    connection = new DB().connect();
    connection.on('open', () => {
      done();
    });
  });

  it('should create name field', () => {

    schema.add({ name: String, title: String });

    Model.create({ name: 'Test', title: 'tilllll' }, (err: any, data: any) => {
      expect(data._doc).to.have.property('name');
      expect(data._doc).to.have.property('title');
    });
    // chai.request(server).get('/').end((err, response) => {
    //   expect(response).to.have.status(200);
    // });
  });
});
