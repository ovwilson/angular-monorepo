import mongoose = require('mongoose');

class DB {
  constructor() { mongoose.Promise = global.Promise; }
  connect() {
    mongoose.connect(process.env.LOCAL_DB, { useNewUrlParser: true });
    mongoose.connection.on('open', () => console.log(`MongoDB connection made to ${process.env.LOCAL_DB}`));
    mongoose.connection.on('error', () => console.error(`MongoDB connection error for ${process.env.LOCAL_DB}`));
    return mongoose.connection;
  }
  createConnection() {
    return mongoose.createConnection(process.env.LOCAL_DB, { useNewUrlParser: true });
  }
}

export default new DB();
