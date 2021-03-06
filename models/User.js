const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  is_staff: {
    type: Boolean,
    default: false,
  },
  is_developer: {
    type: Boolean,
    default: false,
  },
  is_customer: {
    type: Boolean,
    default: true,
  },
  restaurant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant',
  },
});

module.exports = User = mongoose.model('user', UserSchema);
