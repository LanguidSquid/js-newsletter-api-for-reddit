var btoa = require('btoa');
var querystring = require('querystring');
var requestPromise = require('request-promise');
var globalUtility = require("../globals/globals.js");

const opts = {
    method: 'POST',
    uri: 'https://www.reddit.com/api/v1/access_token',
    body: querystring.stringify({
        grant_type: 'password',
        username: process.env.REDDIT_USERNAME,
        password: process.env.REDDIT_PASSWORD,
    }),
    header: {
      'User-Agent': 'basic newsletter app for reddit'
    },
    auth: {
      'user': process.env.REDDIT_CLIENT_ID,
      'pass': process.env.REDDIT_SECRET
    }
}

let authenticate = function(){
  requestPromise(opts).then((result) => {
      globalUtility.setAccessToken(JSON.parse(result).access_token);
  }).catch(console.error)
};

exports.authenticate = authenticate;
