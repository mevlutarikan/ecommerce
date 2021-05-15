const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, 'Name can not be smaller than 2 characters'],
      maxlength: [64, 'Name can not be greater than 64 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      maxlength: [128, 'Email can not be greater than 128 characters'],
      minlength: [6],
      trim: true,
      index: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    countryCode: {
      type: String,
      maxlength: [2],
    },
    phone: {
      type: String,
      maxlength: [12],
    },
    birthday: {
      type: Date,
    },
    addresses: [
      {
        title: {
          type: String,
          maxlength: [30],
        },
        detail: {
          type: String,
          maxlength: [250],
        },
        cityId: mongoose.Schema.Types.ObjectId,
        country: {
          type: String,
          maxlength: [2],
        },
      },
    ],
    defaultAddressIndex: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// hash the password before save if it is new user
userSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // hash the password using new salt
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err);

    // override the cleartext password with the hashed one
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (candidatePassword, done) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return done(err);
    done(null, isMatch);
  });
};

module.exports = mongoose.model('users', userSchema);
