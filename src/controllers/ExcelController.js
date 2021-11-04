const infoFiles = require("../controllers/infoFiles");
const dataProcess = require("../controllers/dataFile");

const upload = async (req, res) => {

  try {
    if (req.files.length == 0) {
      return res.status(400).json({
        erro: true,
        message: 'check the file, no is a format xlsx'
      });

    }

    dataFileInfo = await infoFiles.info(req.files);
    dataFileLine = await dataProcess.processFile(dataFileInfo.localFile);


    return res.json({
      erro: false,
      dataDetails: {
        dataFileInfo,
        dataFileLine
      },

    });


  } catch (error) {
    console.log(error);
    return res.status(400).json({
      erro: true,
      message: 'check the file, Could not upload the file'
    });
  }
};


module.exports = {
  upload
};
