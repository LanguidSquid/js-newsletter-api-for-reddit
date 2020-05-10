var requestPromise = require('request-promise');
var mailer = require('../mail/mailer.js');

let topdata = {};

let mapToDigestTemplate = function(raw){
  let digestSubreddit = {};

  digestSubreddit.posts = [];

  raw.data.children.forEach((item, i) => {
    console.log(item);
    digestSubreddit.posts.push({
      title: item.data.title,
      ups: item.data.ups,
      imageurl: item.data.url
    })
  });

  return digestSubreddit;
};

let getUserRedditDigest = async function(user) {
  let opts = {
    method: 'GET',
    header: {
      'User-Agent': 'basic newsletter app for reddit',
      'access_token': accessToken
    }
  };
  var userRedditDigest = {subreddits: []};
  var subRedditResult = {};

  userRedditDigest.name = user.firstname;

  for(let i = 0; i < user.subreddits.length; i++){
    if(topdata[user.subreddits[i]] == undefined){
      opts.uri =  'https://www.reddit.com/r/' + user.subreddits[i] + '/top/.json?limit=3&t=day';

      await requestPromise(opts).then((result) => {
          result = JSON.parse(result);

          topdata[user.subreddits[i]] = result;

          result = mapToDigestTemplate(result);

          result.name = user.subreddits[i];
          userRedditDigest.subreddits.push(result);

          topdata[user.subreddits[i]] = result;
      }).catch(console.error)
    }else{
      subRedditResult = topdata[user.subreddits[i]];
    }
  }

  return userRedditDigest;
};

let getDigestAndSendEmailForUsers = function(users){
  let userDigest = {};

  users.forEach(async (item, i) => {
    userDigest = await getUserRedditDigest(item);
    mailer.sendEmail(item, userDigest);
  });

  topdata = {};
};

exports.getDigestAndSendEmailForUsers = getDigestAndSendEmailForUsers;
