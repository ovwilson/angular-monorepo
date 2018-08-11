import mongoose = require('mongoose');

export class DB {
  constructor() {
    mongoose.Promise = global.Promise;
  }
  connect() {
    mongoose.connect(
      process.env.LOCAL_DB,
      { useNewUrlParser: true }
    );
    mongoose.connection.on('open', () =>
      console.log(`MongoDb connection made to ${process.env.LOCAL_DB}`)
    );
    mongoose.connection.on('error', () =>
      console.error(`MongoDb connection error for ${process.env.LOCAL_DB}`)
    );
  }
  createConnection() {
    return mongoose.createConnection(process.env.LOCAL_DB, {
      useNewUrlParser: true
    });
  }
}
