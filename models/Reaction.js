// models/reaction.js (Reaction schema definition)

const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (timestamp) {
      // Format the timestamp when querying the reaction
      return new Date(timestamp).toISOString();
    },
  },
});

const Reaction = model('reaction', reactionSchema)

module.exports = { Reaction };

