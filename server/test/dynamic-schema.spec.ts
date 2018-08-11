import * as chai from 'chai';
import chaiHttp  = require('chai-http');
import { expect } from 'chai';
import 'mocha';

import * as server from './../src/server';

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return 200 OK', () => {
    chai.request(server).get('/').end((err, response) => {
      expect(response).to.have.status(200);
    });
  });
});
