var express = require("express");
var userMapper = require("../mapper/usermapper.js");

class ResponseObject {
  constructor(message, data){
    // Whole lotta good this is
    this.code = "USER.001"
    this.message = message;
    this.data = data;
  }
}

let setGetUsers = function(app) {
  app.get("/user", async(req, res, next) => {
    try{
      let all = await User.find();
      let responseArray = [];

      all.forEach((item, i) => {
        responseArray.push(userMapper.mapUserToUserResponse(item));
      });

      let response = new ResponseObject(
        "Users retrieved successfully!",
        responseArray
      );

      res.json(response);
    }catch(error){
      console.log(error);
      return next(error);
    }
  });
}

let setPostUser = function(app) {
  app.post("/user", async(req, res, next) => {
      let exists = await User.find({id: req.body.id});

      let newUser;

      if(exists.length === 0){
        newUser = new User(
          {
            id: req.body.id,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            subreddits: req.body.subreddits,
            enrolled: req.body.enrolled
          }
        );

        newUser = await newUser.save();
      }

      newUser = userMapper.mapUserToUserResponse(newUser);

      let response = new ResponseObject(
        "Users created successfully!",
        newUser
      );

      res.json(response);
  });
}

let setGetUserById = function(app) {
  app.get("/user/:id", async(req, res, next) => {
      let exists = await User.find({id: req.params.id});

      let userResponse;

      let response

      if(exists.length === 0){
          response = new ResponseObject(
            "User not found!",
            null
          );
          res.status(404);
          res.json(response);
      }else{
          userResponse = userMapper.mapUserToUserResponse(exists[0]);

          response = new ResponseObject(
            "User retrieved successfully!",
            userResponse
          );
          res.status(400);
          res.json(response);
      }
  });
}

let setPutUserById = function(app) {
  app.put("/user/:id", async(req, res, next) => {
    try{
      let exists = await User.find({id: req.params.id});

      if(exists.length === 1){
        exists = exists[0];

        exists.firstname = req.body.firstname;
        exists.lastname = req.body.lastname;
        exists.email = req.body.email;
        exists.subreddits = req.body.subreddits;
        exists.enrolled = req.body.enrolled;

        exists = await exists.save();
      }

      exists = userMapper.mapUserToUserResponse(exists);

      let response = new ResponseObject(
        "User updated successfully!",
        exists
      );

      res.json(response);
    }catch(error){
      console.log(error);
      return next(error);
    }
  });
}

let setDeleteUserById = function(app) {
  app.delete("/user/:id", async(req, res, next) => {
    try{
      let deletedUser = await User.find({id: req.params.id});
      await User.deleteOne({id: req.params.id});

      let response = new ResponseObject(
        "User deleted successfully!",
        userMapper.mapUserToUserResponse(deletedUser[0])
      );

      res.json(response);
    }catch(error){
      console.log(error);
      return next(error);
    }
  });
}

var init = function(app) {
  setGetUsers(app);
  setPostUser(app);
  setGetUserById(app);
  setPutUserById(app);
  setDeleteUserById(app);
};

exports.init = init;
