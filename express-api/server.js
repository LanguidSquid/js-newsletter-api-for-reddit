var express = require("express");
var bodyParser = require("body-parser");
var userManagement = require("./user-management/user-management.js");
var globalInitializer = require("./globals/globals.js");
var scheduler = require("./scheduler/scheduler.js");

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json());

app.listen(PORT, HOST, () => {
 console.log(`Server running on ${HOST}:${PORT}`);
});

globalInitializer.init();
userManagement.init(app);
scheduler.initiateSchedule();
