const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from buisness.js
const buisnessSchema = require('./buisness');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedbuisnesss to be an array of data that adheres to the buisnessSchema
    savedbuisnesss: [buisnessSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `buisnessCount` with the number of saved buisnesss we have
userSchema.virtual('buisnessCount').get(function () {
  return this.savedbuisnesss.length;
});

const User = model('User', userSchema);

module.exports = User;