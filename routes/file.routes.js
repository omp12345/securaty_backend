const express = require("express");
// this file routes where user doing getting api ,postfie api ,delete api and dounload api
const {
  postFile,
  getFiles,
  deleteFile,
  downloadFile,
} = require("../controller/filecontroller");
const { singleUpload } = require("../middleware/file.middleware");
const { auth } = require("../middleware/auth.middleware");

const upload_FileRoute = express.Router();

upload_FileRoute.get("/", getFiles);
// post the file using  file controller and auth middleware and singleupload middleware
upload_FileRoute.post(
  "/upload",
  singleUpload,
  auth,

  postFile
);
// delete by id 
upload_FileRoute.delete("/delete/:id", deleteFile);
// dounload the file using secret 6 digit code and download by using url
upload_FileRoute.get("/download/:id/:code", downloadFile);

module.exports = { upload_FileRoute };
