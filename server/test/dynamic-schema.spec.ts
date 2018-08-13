import 'async';
import * as chai from 'chai';
import { expect } from 'chai';
import { Request, Response } from 'express';

import * as core from 'express-serve-static-core';
import { models, model, Schema } from 'mongoose';
import { default as schemaModel } from './../src/models/Schema';

import { DB } from './../src/libs/db';
import * as fromUtils from './../src/libs/utils';


describe('Dynamic Schema Utils', () => {

  let connection;

  before((done: any) => {
    connection = new DB().connect();
    connection.on('open', () =>  done());
  });

  after((done: any) => {
    connection.close(() => done());
  });

  it('should convert url to schema name', (async () => {
    const schemaName = fromUtils.convertName('/contents');
    expect(schemaName).to.eq('Content');
  }));

  it('should getModel', (async () => {
   // const schemaName = fromUtils.convertName('/contents');
   // expect(schemaName).to.eq('Content');

  }));



});



// describe('Dynamic Schema Routes', () => {

//   let connection;

//   before((done: any) => {
//     connection = new DB().connect();
//     connection.on('open', () => {
//       done();
//     });
//   });

//   after((done: any) => {
//     connection.close(() => done());
//   });

//   it('should delete all Schemas', (async () => {
//     schemaModel.remove({}, (err) => expect(err).to.be.a('null'));
//   }));

//   it('should create Schema', (async () => {

//     schemaModel.create({ name: 'Test', Title: 'tilllll' }, (err: any, data: any) => {
//       expect(data._doc).to.have.property('name');
//       expect(data._doc).to.have.property('Title');
//     });

//   }));



});
