const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  note_id: {
    type: Schema.Types.ObjectId,
    ref: 'Note',
  },
  author_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
