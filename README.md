# Simple-Authentication-using-JWT-Tokens
This repository contains a Node.js application that uses Express and Mongoose to build a simple authentication system that allows users to sign up, login, and logout.

# Getting Started
To run this application, follow these steps:

1. Clone the repository
2. Install the required dependencies by running npm install
3. Set up the environment variables required for connecting to MongoDB by creating a .env file with the following fields:
```makefile
MONGO_USERNAME=<your_mongodb_username>
MONGO_PASSWORD=<your_mongodb_password>
MONGO_DATABASE=<your_mongodb_database>
PORT=<your_preferred_port>
```
4. Start the server by running npm start
# API Endpoints
This application provides the following API endpoints:

- `POST /api/v1/auth/signup` : allows users to sign up by providing a username, email, and password. Returns a JWT token that is saved in a cookie.
- `POST /api/v1/auth/login` : allows users to log in by providing their username and password. Returns a JWT token that is saved in a cookie.
- `GET /api/v1/auth/logout` : logs the user out by clearing the JWT token saved in the cookie.
- `GET /page` : a sample authenticated route that requires a valid JWT token to access.
# Dependencies
This application uses the following dependencies:

- express
- mongoose
- body-parser
- cookie-parser
- express-validator
- jsonwebtoken
- bcrypt
- validator
