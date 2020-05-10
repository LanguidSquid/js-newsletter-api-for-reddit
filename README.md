# Reddit Newsletter API

## Getting Started
1. Go to https://signup.sendgrid.com and sign up for email service
2. Create sendgrid.env file containing `export SENDGRID_API_KEY='{your-api-key}'`
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
7. go to express-api/mail/mailer.js and update msg.from to be your preferred sender email
8. 

8. docker build -t <your username>/express-api .  
9. docker run -p 49160:3000 -d <your username>/express-api  

#### Technologies
* node.js
* express.js
* Docker
* MongoDB
* Mongoose
* SendGrid
* Handlebars
