/**
 * Created by Admin on 2017-05-18.
 */
// 현재 서버에서 라우터만 가져옴

const route = require('express').Router();

// mongoDB 연결
 require('../mongo/mongodb');

// Model (VO) 가져오기 VO는 js 마다 있어야 한다(?)
const Article = require('../model/article');

route.get("/articles", function(request, response) {

  //console.log("getAllArticles");
  // 단순히 DB에서 가져오기 때문에
  Article.find( {} , function(err, article) {
    response.type("application/json");
    response.send(article);
  });
});

route.post("/", function(request, response) {
  //console.log("post");
  //INSERT INTO
  let newArticle = new Article({
    subject: request.body.subject,
    content: request.body.writer,
    writer: request.body.content,
    readCount: 0
  });

  // insert, update 수행 메소드
  newArticle.save();

  response.type("application/json");
  response.send({
    result: true
  });

});

route.delete("/:id", function(request, response) {
 // console.log("delete");
  let id = request.params.id;

  // 삭제 메소드
  Article.findByIdAndRemove(id, function(err, result){
    // result : 지우려고 하는 대상
    //console.log(result);
    response.type("application/json");
    // express 사용할 때는 setHeader 아닌 set 사용
    response.send({
      result: true
    });
  });
});

route.put("/:id", function(request, response){
  //console.log("put");
  let id = request.params.id;
  //console.log("id : " + id);

  Article.findById(id, function(err, oneArticle){

    oneArticle.subject = request.body.subject;
    oneArticle.writer = request.body.writer;
    oneArticle.content = request.body.content;
    // 수정 메소드
    oneArticle.save();

    response.type("application/json");
    response.send({
      result: true
    });
  })
});

route.get("/:id", function(request, response){
  //console.log("get");
  let id = request.params.id;

  Article.findById(id, function(err, oneArticle){

    response.type("application/json");
    response.send(oneArticle);

  });
});

route.get("/write", function (requset, response) {
  //console.log("write");
  response.type("application/json");
  response.send(response);
});

exports.router = route;

