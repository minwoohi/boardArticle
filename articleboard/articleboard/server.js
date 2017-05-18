/**
 * Created by kimhyungwoo on 2017. 5. 16..
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

// 미들웨어 등록해라
app.use( require('./app/routes/index') );

app.listen(3000, function () {
  console.log('Server running at http://localhost:3000');
});
