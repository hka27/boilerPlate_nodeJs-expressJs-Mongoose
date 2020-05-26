const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   description: {
  //     type: String,
  //     required: true
  //   },
  //   date: {
  //     type: Date,
  //     default: Date.now
  //   }
  userId: {
    type: Number,
    require: true
  },
  id: {
    type: Number,
    require: true
  },
  title: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);
