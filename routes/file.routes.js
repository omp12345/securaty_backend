const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const { postFile,
    getFiles,
    
    getFile,
    deleteFile,
    downloadFile, } = require("../controller/filecontroller");
const { singleUpload } = require("../middleware/file.middleware");
const { auth } = require("../middleware/auth.middleware");

const upload_FileRoute = express.Router();



upload_FileRoute.get("/", getFiles);

upload_FileRoute.post(
  "/upload",singleUpload,auth,
  
  postFile
);

upload_FileRoute.get("/:id", getFile);

upload_FileRoute.delete("/delete/:id", deleteFile);

upload_FileRoute.get("/download/:id/:code", downloadFile);

module.exports = { upload_FileRoute };