require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb://localhost:27017/cp_tracker`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
      // useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log('error occured in database connection');
  });
