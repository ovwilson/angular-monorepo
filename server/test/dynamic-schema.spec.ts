import 'async';
import * as chai from 'chai';
import { expect } from 'chai';
import { Request, Response } from 'express';

import * as core from 'express-serve-static-core';
import { models, model, Model, Schema } from 'mongoose';
import { default as schemaModel } from './../src/models/Schema';

import { schema, default as DynamicModel } from './../src/models/DynamicSchema';
import { DB } from './../src/libs/db';
import * as faker from 'faker';


describe('Dynamic Schema Utils', () => {

  let connection;

  before((done: any) => {
    connection = new DB().connect();
    connection.on('open', () => done());
  });

  after((done: any) => {
    connection.close(() => done());
  });


  it('should create a model', (async () => {
    const dynModel = DynamicModel.createModel('Content');
    expect(dynModel.modelName).to.eq('Content');
    expect(dynModel.schema.obj).to.have.property('Id');
    expect(dynModel.schema.obj).to.have.property('Title');
    expect(dynModel.schema.obj).to.have.property('Created');
    expect(dynModel.schema.obj).to.have.property('Modified');
  }));

  it('should convert string to String', (async () => {
    const mType = DynamicModel.getType('string'); /* ? */
    console.log(mType);
    expect(mType).to.eq(String);
  }));


  it('should convert number to Number', (async () => {
    const mType = DynamicModel.getType('number'); /* ? */
    console.log(mType);
    expect(mType).to.eq(Number);
  }));


  it('should convert id to Schema.Types.ObjectId', (async () => {
    const mType = DynamicModel.getType('id'); /* ? */
    console.log(mType);
    expect(mType).to.eq(Schema.Types.ObjectId);
  }));


  it('should convert date to Date', (async () => {
    const mType = DynamicModel.getType('date'); /* ? */
    console.log(mType);
    expect(mType).to.eq(Date);
  }));


  it('should convert boolean to Boolean', (async () => {
    const mType = DynamicModel.getType('boolean'); /* ? */
    console.log(mType);
    expect(mType).to.eq(Boolean);
  }));


  it('should convert any to Schema.Types.Mixed', (async () => {
    const mType = DynamicModel.getType('any'); /* ? */
    console.log(mType);
    expect(mType).to.eq(Schema.Types.Mixed);
  }));


  it('should convert any[] to [Schema.Types.Mixed]', (async () => {
    const mType = DynamicModel.getType('any[]'); /* ? */
    console.log(mType);
    expect(mType.shift()).to.eq(Schema.Types.Mixed);
  }));


  it('should convert any[] to [Schema.Types.Mixed]', (async () => {
    const mType = DynamicModel.getType('string[]'); /* ? */
    console.log(mType);
    expect(mType.shift()).to.eq(String);
  }));

  it('should convert any[] to [Schema.Types.Mixed]', (async () => {
    const mType = DynamicModel.getType('number[]'); /* ? */
    console.log(mType);
    expect(mType.shift()).to.eq(Number);
  }));

  it('should convert any[] to [Schema.Types.Mixed]', (async () => {
    const mType = DynamicModel.getType(null); /* ? */
    console.log(mType);
    expect(mType).to.eq(Schema.Types.Mixed);
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



// });
