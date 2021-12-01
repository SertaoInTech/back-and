const excelFile = require("read-excel-file/node");
const Space = require('../models/Space');
const analicts = require('./analictsConflity');



async function processFile(nameFiles) {
    let dados = [];

    for (var i = 0; i < nameFiles.length; i++) {

        //console.log('nome arquivo', nameFiles[i])
        await excelFile(nameFiles[i]).then((rows) => {
    
            rows.shift();
            rows.shift();

            //console.log('rows', nameFiles[i])

            for (const row of rows) {
                //console.log('linha>',excelFile.parseExcelDate(row[4]));
                let values = {
                    materia: row[0],
                    andar: row[1],
                    capacidade: row[2],
                    date: excelFile.parseExcelDate(row[4]),
                    turno: row[5],
                    harario: row[6],
                    professor: row[7],
                }

                //Space.create({ space_name:row[0], floor:row[1], number_capacity:row[2], compart_simult:row[3] });

                dados.push(values);
            }

        });
    }


    var variavel = analicts.analicts(dados);
    console.log(variavel); 
    return {
        qtdLine: dados.length,
        line: dados
    }
    
}
 

module.exports = { processFile }