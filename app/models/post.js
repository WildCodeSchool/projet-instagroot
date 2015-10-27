// app/models/post.js

var mongoose = require('mongoose');
var Message = require('./message.js');

module.exports = mongoose.model('Post', {
  title: String,
  author: String,
  description: String,
  tags : [],
  created_at: {type: Date, default: new Date()},
  photo: String,
  message: [Message.schema]
});
