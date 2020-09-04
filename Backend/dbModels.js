const mongoose = require("mongoose");

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});
//collection inside the videos
module.exports = mongoose.model("tiktokVideos", tiktokSchema);
