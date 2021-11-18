
async function analicts(data){
    let conflito = 0;
    let okay = 0;
    dataMatutino = []
    dataVespertino = []
    dataNoturno = []

    for(const a of data){
        if(a.turno == "manhã"){
            dataMatutino.push(a);
        }else if(a.turno == "vespertino"){
            dataVespertino.push(a);
        }else if (a.turno == "noturno"){
            dataNoturno.push(a);
        }
    
    }

    console.log(dataMatutino);
    console.log(dataNoturno);
    console.log(dataVespertino);


}

module.exports = {analicts}