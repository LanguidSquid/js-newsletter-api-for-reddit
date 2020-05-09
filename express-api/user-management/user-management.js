var express = require("express");

let data = {
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@mailinator.com",
  "subreddits": [
    "string"
  ],
  "enrolled": true
};

let getUsers = function(req, res, next) {
  res.json(data);
};

var init = function(app) {
  app.get("/user", getUsers);
};

exports.init = init;
