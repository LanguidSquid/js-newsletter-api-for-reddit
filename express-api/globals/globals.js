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

let sampleUser = new User({
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@mailinator.com",
  "subreddits": [
    "funny"
  ],
  "enrolled": true
});

sampleUser.save(function (err, user) {
  if (err) return console.error(err);
  console.log(user.id + " saved to reddit_newsletter collection.");
});

var init = function() {
  global.userSchema = userSchema;
  global.User = User;
  global.mongoose = mongoose;
};

exports.init = init;
