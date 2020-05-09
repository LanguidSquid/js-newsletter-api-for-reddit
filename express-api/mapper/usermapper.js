class UserResponse {
  constructor(id, firstname, lastname, email, subreddits, enrolled){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.subreddits = subreddits;
    this.enrolled = enrolled;
  }
}

let mapUserToUserResponse = function(user){
  let response = new UserResponse(
    user.id,
    user.firstname,
    user.lastname,
    user.email,
    user.subreddits,
    user.enrolled,
  );

  return response;
}

exports.mapUserToUserResponse = mapUserToUserResponse;
