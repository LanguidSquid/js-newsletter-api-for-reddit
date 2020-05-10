var schedule = require('node-schedule');
var emailView = require('../views/email-view.js');
var userDataAggregator = require('../reddit/user-data-aggregator.js');

/**
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
*/

let initiateSchedule = function(){
  schedule.scheduleJob('50 * * * * *', function(){
    let getusers = async() => {
      return await User.find();
    }

    getusers().then(userDataAggregator.getDigestAndSendEmailForUsers);

    console.log(new Date());
  });
};

exports.initiateSchedule = initiateSchedule;
