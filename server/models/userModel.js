const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add a username.'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password.'],
    },
    fullname: {
      type: String,
      required: [true, 'Please add a fullname.'],
    },
    group: {
      type: String,
      required: [true, 'Please add a group.'],
    },
    phone: {
      type: String,
      required: [true, 'Please add a phone.'],
    },
    address: {
      type: String,
      required: [true, 'Please add a address (city).'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email.'],
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
