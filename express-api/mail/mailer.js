// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
var sgMail = require('@sendgrid/mail');
var handlebars = require('handlebars');
var emailView = require('../views/email-view.js');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'hard.to.guess@dispostable.com',
  from: 'blakey.82@mailinator.com',
  subject: 'Reddit Newsletter',
  text: 'Reddit Newsletter',
  html: '',
};

let email = handlebars.compile(emailView.emailStringTemplate);

let sendEmail = function(user, digest){
  msg.to = user.email;
  msg.html = email(digest);

  sgMail.send(msg).then(() => {
      console.log(`Message sent to ${user.firstname} at ${user.email}`);
  }).catch((error) => {
      console.log(error.response.body);
  });
};

exports.sendEmail = sendEmail;
