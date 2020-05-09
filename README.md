# Reddit Newsletter API

## Getting Started
cd express-api
docker build -t <your username>/express-api .
docker run -p 49160:3000 -d <your username>/express-api

## Make Volume Shareable for Mongo Container
On Mac
* Docker -> Preferences... -> Resources -> File Sharing
* Select the `+` option
* Navigate to your project directory /mongo/data
* Open
* Apply & Restart

#### Technologies
- node.js
- express.js
- Docker
- MongoDB
-- brew install mongo
- Mongoose
