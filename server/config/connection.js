const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost/homemade';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/homemade', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));

module.exports = mongoose.connection;