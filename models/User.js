// Import required packages
const { Schema, model } = require('mongoose');

// User Schema Definition
const userSchema = new Schema(
  {
    // Username field - required, unique, trimmed
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    // Email field - required, unique, must match email format
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    // Thoughts array - references Thought model
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    // Friends array - references User model (self-referential)
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    // Enable virtuals and JSON transformation
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Virtual property for friend count
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create and export User model
const User = model('User', userSchema);

module.exports = User; 