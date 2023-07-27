// models/thought.js (Thought model definition)

const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (timestamp) {
      // Format the timestamp when querying the thought
      return new Date(timestamp).toISOString();
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Use reactionSchema as a subdocument
});

// Virtual to get reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;

