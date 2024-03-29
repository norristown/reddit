const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  comments: [{ type: {} }],
  // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  // need to build seperate schema for replies using linked lists
});

commentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // returnedObject.c_id = returnedObject._id.toString();
    // delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
