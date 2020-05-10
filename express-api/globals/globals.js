var express = require("express");
var mongoose = require("mongoose");

// Mongo Configs
const MONGO_HOST = 'mongodb://localhost';
const MONGO_DB_NAME = 'reddit_newsletter';

const userSchema = new mongoose.Schema({
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  subreddits: [
    String
  ],
  enrolled: Boolean
});

const User = mongoose.model('User', userSchema);

setTimeout(function() {
  mongoose.connect(MONGO_HOST, {useNewUrlParser: true, dbName: MONGO_DB_NAME, useUnifiedTopology: true}).catch(error => console.log(error));
}, 6000);

var init = function() {
  global.userSchema = userSchema;
  global.User = User;
  global.mongoose = mongoose;
};

var setAccessToken = function(accessToken) {
  global.accessToken = accessToken;
};

exports.setAccessToken = setAccessToken;
exports.init = init;
