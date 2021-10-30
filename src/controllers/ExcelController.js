const excelFile = require("read-excel-file/node");
const excel = require("exceljs");

const upload = async (req, res) => {


  try {
    if (req.files.length == 0) {
      return res.status(400).json({
        erro: true,
        message: 'check the file, no is a format xlsx'
      });

    }

    let nameFiles = [];
    let nameOrigs = [];
    let SizeAllfiles = [];
    let dados = [];



    for (const excelData of req.files) {

      nameFiles.push(excelData.path);
      nameOrigs.push(excelData.originalname);
      SizeAllfiles.push(excelData.size);
    }


    for (var i = 0; i < SizeAllfiles.length; i++) {

      console.log('nome arquivo', nameFiles[i])
      await excelFile(nameFiles[i]).then((rows) => {
        console.log('rows', nameFiles[i])

        rows.shift();

        for (const row of rows) {
          //console.log('linha',row);
          let values = {
            curso: row[0],
            professor: row[1],
            sala: row[2],
            data: row[3],
            turno: row[4]
          }

          dados.push(values);

        }

      });

    }

    console.log(SizeAllfiles);
    let size = 0;

    for (const a of SizeAllfiles) {

      size = size + a;

    }

    console.log(dados);
    return res.json({
      erro: false,
      nameOriginalProcess: nameOrigs,
      fileQuantity: SizeAllfiles.length,
      sizeFileAll: (size / 1024),
      dataProcess: dados
    })





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
