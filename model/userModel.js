const mongoose = require('mongoose');

// this is the usermodel
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
  
})




const User = mongoose.model('User', userSchema);

module.exports = User;
