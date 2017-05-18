/**
 * Created by Admin on 2017-05-18.
 */
// 현재 서버에서 라우터만 가져옴
const route = require('express').Router();

// mongoDB 연결
require('../mongo/mongodb');

// Model (VO) 가져오기
const User = require('../model/user');

route.post("/signup", function(request, response) {

    let id = request.body.id;
    let password = request.body.password;
    let name = request.body.name;

    const user = new User({
      id: id,
      password: password,
      name: name
    });

    user.save();

    response.type('application/json');
    response.send({
      result: true
    });

  });

  route.post('/signin', function(request, response){
    let id = request.body.id;
    let password = request.body.password;

    // 스키마 검색해 맞는 것 가져옴
    // User 컬렉션 문서 중 id, password 키값이 동시에 일치하는 녀석 가져와라
    User.findOne({
      id: id,
      password: password
    }, function(err, user){ // 검색 에러시
      response.type('application/json');

      if( err ) {
        response.send({
          'error': err
        })
      } else {
        if( id === user.id && password === user.password){
          response.send({
            result: true,
            user : user
          });
        } else {
          response.send({
            result: false
          })
        }
      }

    });
  });

exports.router = route;
