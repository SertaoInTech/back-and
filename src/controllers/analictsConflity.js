
async function analicts(data){
    let conflito = 0;
    let okay = 0;
    dataMatutino = []
    dataVespertino = []
    dataNoturno = []
    conflictM = []
    conflictV = []
    conflictn = []

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
    for(const b of dataMatutino){

        data = b.data;
        professor = b.professor;
        const obj = b;
        for(const c of dataMatutino){
            if(c.data === data && !c.professor === professor){
                conflictM.push(c);
                conflictM.push(obj);
                break;
            }
        }
    }

    //FAZ UMA RODADA DE COMPARAÇÃO DOS CONFLITOS NO HORÁRIO VESPERTINO
    for(const b of dataVespertino){
        data = b.data;
        professor = b.professor;
        const obj = b;
        for(const c of dataVespertino){
            if(c.data === data && !c.professor === professor){
                conflictV.push(c);
                conflictV.push(obj);
                break;
            }
        }
    }
    
    //FAZ UMA RODADA DE COMPARAÇÃO DOS CONFLITOS NO HORÁRIO NOTURNO
    for(const b of dataNoturno){
        data = b.data;
        professor = b.professor;
        const obj = b;
        for(const c of dataNoturno){
            if(c.data === data && !c.professor === professor){
                conflictN.push(c);
                conflictN.push(obj);
                break;
            }
        }
    }

    console.log(conflictM);
    console.log(conflictV);
    console.log(conflictN);
}

module.exports = {analicts}