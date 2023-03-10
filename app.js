const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();


app.use(bodyparser.json());
app.use(cookieParser());


//routes
const authRoute = require('./routes/authRoute');
const {auth}=require('./middleware/authMiddleware')
app.use('/api/v1/auth', authRoute);

app.get("/page", auth, (req, res, next) => {
  console.log("userId : ",req.userId);
  res.status(200).json({
    msg: "Success",
  });
});



const dbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.4rl3zmy.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
const port = process.env.PORT;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(port, () => {
    console.log("Server running in port 3000");
  }))
  .catch((err) => console.log(err));

