/**
 * Created by Admin on 2017-05-18.
 */
const route = require('express').Router();
require('../mongo/mongodb');

// Model (VO) 가져오기
const Article = require('../model/article');

// 크로스 도메인 허용
route.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

route.get("/articles", function(request, response) {

  Article.find( {} , function(err, article) {
    response.type("application/json");
    response.send(article);
  });
});

route.use("/article", require('./article').router);
route.use('/user', require('./user').router);

// 추가 경로 없는 경우
module.exports = route;
