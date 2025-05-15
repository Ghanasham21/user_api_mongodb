const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  hobby: {
    type: String,
    required: [true, 'Hobby is required']
  }
});

module.exports = mongoose.model('User', userSchema);
