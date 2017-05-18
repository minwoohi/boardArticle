/**
 * Created by Admin on 2017-05-18.
 */
const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  subject: String,
  content: String,
  writer: String,
  readCount: Number
});

// db table 스키마 생성
module.exports = mongoose.model('article', articleSchema);
