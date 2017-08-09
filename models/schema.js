const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/newdb');


const robotSchema = new mongoose.Schema({
  id: {type: Number, required: true unique: true}
  username: type: String,
  name: String,
  avatar: String,
  email: String,
  university: String,
  job: {type: String, default: null}
  company: String,
  skills: {[String,]},
  phone: {type: String},
  address: [{
    street_num: String,
    street_name: String,
    city: String,
    state_or_province: String,
    postal_code: Number,
    country: String
  }]
})

const robot = mongoose.model('robot', robotSchema)

module.exports = robot;
