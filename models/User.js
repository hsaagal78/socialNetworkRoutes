const { Schema, model, Types } = require("mongoose");
const { Thought } = require('./Thought');

// Regular expression for email validation
const EMAIL_REGEX = /^.+@(?:[\w-]+\.)+\w+$/;
// Validate email function
const validateEmail= function(email) {
  // Check if the email matches the regular expression
  return EMAIL_REGEX.test(email);
};

const userSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: EMAIL_REGEX,
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'thought',
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
},
{
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
}
);

// Virtual to retrieve friendCount
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
