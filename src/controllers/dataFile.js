const excelFile = require("read-excel-file/node");

async function processFile(nameFiles) {
    let dados = [];

    for (var i = 0; i < nameFiles.length; i++) {

        //console.log('nome arquivo', nameFiles[i])
        await excelFile(nameFiles[i]).then((rows) => {
            //console.log('rows', nameFiles[i])

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
    return {
        qtdLine: dados.length,
        line: dados
    }

}


module.exports = { processFile }