const { file_upload } = require("../model/filemodel");

// getting all file which uploaded by perticular user
const getFiles = async (req, res) => {
  try {
    const userID = req.body.userId;

    const upladed_file_data = await file_upload.find({ userId: userID });
    console.log(upladed_file_data);
    res.status(200).json(upladed_file_data);
  } catch (error) {
    res.json({ msg: error.message });
  }
};


// file add by user
const postFile = async (req, res) => {
  try {
    const upload = new file_upload({
     url: `${process.env.URL}/${req.file?.path}`,
      private_code: Math.floor(100000 + Math.random() * 900000),
      userId: req.body.userId,
      username: req.body.username,
    });

    await upload.save();
    res
      .status(201)
      .json({ message: "File uploaded successfully", data: upload });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// pertucular file deleted by user
const deleteFile = async (req, res) => {
  const { id } = req.params;
  const userID = req.body.userId;

  const file_data = await file_upload.findOne({ _id: id });
 
  const userdataId = file_data.userId;

  if (userdataId === userID) {
    try {
      await file_upload.findByIdAndDelete({ _id: id });
      res.status(200).json(`${id} is deleted`);
    } catch (error) {
      res.status(404).json("file not found");
    }
  } else {
    res.status(403).json("permission denied");
  }
};



// file dounload by user with 6 digit securaty code
const downloadFile = async (req, res) => {
  const { id, code } = req.params;

  try {
    const file_data = await file_upload.findById(id);
    console.log(file_data);

    if (!file_data) {
      return res.status(404).json({ message: "File not found" });
    }

    if (file_data.private_code === code) {
      // The code is correct, allow download
      const filePath = path.join(__dirname, "uploads", file_data.url);

      res.setHeader("Content-Type", "application/octet-stream");
      res.download(file_data.url);
    } else {
      // Incorrect code, deny download
      res.status(403).json({ message: "Incorrect code, permission denied" });
    }
  } catch (error) {
    console.error("Error during download:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { postFile, getFiles, deleteFile, downloadFile };
