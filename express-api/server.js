var express = require("express");
// var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var userManagement = require("./user-management/user-management.js");
var globalInitializer = require("./globals/globals.js");

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Mongo Configs
// const MONGO_HOST = 'mongodb://mongodb';
// const MONGO_DB_NAME = 'reddit_newsletter';
//
// const userSchema = new mongoose.Schema({
//   id: String,
//   firstname: String,
//   lastname: String,
//   email: String,
//   subreddits: [
//     String
//   ],
//   enrolled: Boolean
// }, {
//   capped: { size: 1024 }
// });

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json());

// setTimeout(function() {
//   mongoose.connect(MONGO_HOST, {useNewUrlParser: true, dbName: MONGO_DB_NAME, useUnifiedTopology: true}).catch(error => console.log(error));
// }, 6000);

// const USER_MODEL = mongoose.model('user', userSchema);

app.listen(PORT, HOST, () => {
 console.log(`Server running on ${HOST}:${PORT}`);
});

globalInitializer.init();
userManagement.init(app);
