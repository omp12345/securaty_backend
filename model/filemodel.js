const mongoose = require("mongoose");
// this is the file model 
// schema for file 
const FileuploadSchema = mongoose.Schema({
  url: { type: String, required: true },
  private_code: { type: String, required: true },
  userId: {
    type: String,
  },
  username: {
    type: String,
  },
  
});
// collection for file

const file_upload = mongoose.model("upload_File", FileuploadSchema);

module.exports = { file_upload };
