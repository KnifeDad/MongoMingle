// Import required packages
const { Schema, model, Types } = require('mongoose');

// Reaction Schema Definition (subdocument of Thought)
const reactionSchema = new Schema(
  {
    // Reaction ID - auto-generated
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    // Reaction body - required, max length 280 characters
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    // Username of the user who created the reaction
    username: {
      type: String,
      required: true
    },
    // Timestamp of when the reaction was created
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    }
  },
  {
    // Enable getters for JSON transformation
    toJSON: {
      getters: true
    },
    id: false
  }
);

// Thought Schema Definition
const thoughtSchema = new Schema(
  {
    // Thought text - required, between 1 and 280 characters
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    // Timestamp of when the thought was created
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp)
    },
    // Username of the user who created the thought
    username: {
      type: String,
      required: true
    },
    // Reactions array - embedded document using reactionSchema
    reactions: [reactionSchema]
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

// Virtual property for reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Helper function to format date
function dateFormat(timestamp) {
  return new Date(timestamp).toLocaleString();
}

// Create and export Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought; 