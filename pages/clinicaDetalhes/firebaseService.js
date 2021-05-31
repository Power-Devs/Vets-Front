const db = firebase.database();
const data = db.ref(`clinicas/${id}`);


async function createAvaliacao(avaliacaoTexto, avaliacaoNota){
    
    await data.push({
        avaliacao: avaliacaoTexto, 
        nota: avaliacaoNota
    })
}

async function getComments(){
    await data.on("child_added",snap =>{
        let results = snap.val();
        
        let comentario = criacomentario({
            avaliacaoNome : "Anônimo",
            avaliacaoNota: results.avaliacao,
            avaliacaoTexto: results.nota,
            avatar: defaultAvatar
        });

        document
        .getElementById("comentarios")
        .appendChild(comentario);

    })
}


function funciona(){
    console.log("funciona")
    return "Sim"
}