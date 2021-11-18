
async function analicts(data){
    let conflito = 0;
    let okay = 0;
    let dataMatutino = []
    let dataVespertino = []
    let dataNoturno = []
    let conflictM = []
    let conflictV = []
    let conflictN = []

    for (const a of data) {
        if (a.turno == "manhã") {

            dataMatutino.push(a);

        } else if (a.turno == "vespertino") {

            dataVespertino.push(a);

        } else if (a.turno == "noturno") {

            dataNoturno.push(a);

        }
    }

    //FAZ UMA RODADA DE COMPARAÇÃO DOS CONFLITOS NO HORÁRIO MATUTINO
    console.log("****************************************CCONFLITOS MATUTINO*********************************************");
    var contConflictM = 0;
    for(let b of dataMatutino){
        var date = b.date;
        var materia = b.materia;
        var obj = b;
        for(let c of dataMatutino){
            if(c.date === date && c.materia === materia){
                conflictM.push(c);
                conflictM.push(obj);
                contConflictM ++;
                break;
            }
        }
    }
    console.log("Total conflitos " + contConflictM);
    console.log(conflictM);
    console.log("*************************************************FIM*****************************************************");
    //FAZ UMA RODADA DE COMPARAÇÃO DOS CONFLITOS NO HORÁRIO VESPERTINO
    console.log("******************************************CONFLITOS VESPERTINOS******************************************");
    var contConflictV = 0;
    for(let b of dataVespertino){
        var date = b.date;
        var materia = b.materia;
        var obj = b;
        for(let c of dataVespertino){
            if(c.data === date && c.materia === materia){
                conflictV.push(c);
                conflictV.push(obj);
                contConflictV ++;
                break;
            }
        }
    }
    console.log("Total conflitos " + contConflictV);
    console.log(conflictV);
    console.log("*************************************************FIM*****************************************************");
    //FAZ UMA RODADA DE COMPARAÇÃO DOS CONFLITOS NO HORÁRIO NOTURNO
    var contConflictN = 0;
    console.log("***************************************CONFLITOS NOTURNO*************************************************");
    for(let b of dataNoturno){
        var date = b.date;
        var materia = b.materia;
        var obj = b;
        for(let c of dataNoturno){
            if(c.date === date && c.materia === materia ){
                conflictN.push(c);
                conflictN.push(obj);
                contConflictN ++;
                break;
            }
        }
    }
    console.log("Total conflitos " + contConflictN);
    console.log(conflictN);
    console.log("***************************************************FIM***************************************************");

}

module.exports = {analicts}