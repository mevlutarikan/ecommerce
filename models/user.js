const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name can not be smaller than 2 characters'],
    maxlength: [64, 'Name can not be greater than 64 characters'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxlength: [128, 'Email can not be greater than 128 characters'],
    minlength: [6],
    trim: true,
    index: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  countryCode: {
    type: String,
    maxlength: [2]
  },
  addresses: [{
    title: {
      type: String,
      maxlength: [30]
    },
    detail: {
      type: String,
      maxlength: [250]
    },
    cityId:Schema.Types.ObjectId,
    country: {
      type: String,
      maxlength: [2]
    }
  }],
  defaultAddressIndex: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const User = mongoose.model('users', userSchema);

module.exports = User;