// models/thought.js (Thought model definition)

const { Schema, model, Types } = require("mongoose");
const { Reaction } = require('./Reaction');

const thoughtSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
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
  reactions: [{ type: Schema.Types.ObjectId, ref: 'reaction' }], // Use reactionSchema as a subdocument
});

// Virtual to get reactionCount
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = { Thought};

