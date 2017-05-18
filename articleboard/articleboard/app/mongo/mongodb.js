/**
 * Created by Admin on 2017-05-18.
 */
const mongoose = require('mongoose');

module.exports = function(){

  /********************************************************/
  /************ Mongo Connect Use Mongoose ****************/
  /********************************************************/
  function mongoDbConnection() {
    mongoose.connect('mongodb://192.168.99.100:32769/ARTICLE', function(err) {
      console.log("MongoDB 연결");
      if (err) {
        console.log(err);
      }
    });
  }

  function mongoDBDisconnected() {
    mongoose.connection.on('disconnected', mongoDbConnection);
  }

  mongoDbConnection();
  mongoDBDisconnected();

}();
