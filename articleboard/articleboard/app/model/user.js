/**
 * Created by Admin on 2017-05-18.
 */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: String,
  password: String,
  name: String
});

module.exports = mongoose.model('user', userSchema);
