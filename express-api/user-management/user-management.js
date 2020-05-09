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

let setGetUsers = function(app) {
  app.get("/user", async(req, res, next) => {
    try{
      console.log("hello blakes");

      return("hai");

      let allUsers = await User.find();

      console.log(allUsers);

      res.json(allUsers);

      return res;
    }catch(error){
      console.log(error);
      return next(error);
    }
  });
}

let setGetUsersByName = function(app) {
  app.get("/user/name", (req, res, next) => {
      console.log("hello blakes");

      return("hai");

      res.json("hai")

      return res;
  });
}

var init = function(app) {
  setGetUsers(app);
  setGetUsersByName(app);
};

exports.init = init;
