# Reddit Newsletter API

## Getting Started
1. Go to https://signup.sendgrid.com and sign up for email service
2. Create sendgrid.env file containing
```
export SENDGRID_API_KEY='{your-api-key}'
```
3. run `source ./sendgrid.env` to export key
4. Go to https://www.reddit.com/prefs/apps/ and create an app
5. Create reddit.env file containing
```
export REDDIT_SECRET='{your-app-secret}'
export REDDIT_CLIENT_ID='{you-app-client-id}'
export REDDIT_USERNAME='{your-app-username}'
export REDDIT_PASSWORD='{your-app-password}'
```
6. run `source ./reddit.env` to export values
7. go to `/express-api/mail/mailer.js` and update `msg.from` to be your preferred sender email
8. `docker pull mongo`
9. `docker run -d -p 27017:27017 --name mongo mongo`
10. from `/express-api/` run `node-server.js`
11. Import postman collection and environment from `/postman` directory to execute CRUD operations on emailer data

## Tip

You can configure the time to be other than every day at 8 am by editing `/express-api/scheduler/scheduler.js`  

You can use convenient email services like https://www.dispostable.com to receive multiple emails to several clients  
* See 'easy.to.guess@dispostable.com' for some historical example emails

#### Technologies
* node.js
* express.js
* Docker
* MongoDB
* Mongoose
* SendGrid
* Handlebars
* Postman
