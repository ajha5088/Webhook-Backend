const mongoose = require("mongoose");
const env = require("dotenv");
env.config({path:'./.env'});
const DB = process.env.DATABASE_LOCAL;
exports.fn = async() => {
  console.log(DB)
  mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('DB Connection Successful');
  })
};
