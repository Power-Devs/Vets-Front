const db = firebase.database();
const data = db.ref(`clinicas/${id}`);


async function createAvaliacao(avaliacaoTexto, avaliacaoNota){
    if(id!=null){
        await data.push({
            avaliacao: avaliacaoTexto, 
            nota: avaliacaoNota
        })
    
        window.scrollTo(0,document.body.scrollHeight);
        document.getElementById("commentInput").value = " "
    }

    window.location.href = `../map/map.html`
}

async function getComments(){
    await data.on("child_added",snap =>{
        let results = snap.val();
        
        let comentario = criacomentario({
            avaliacaoNome : "Anônimo",
            avaliacaoNota: results.nota,
            avaliacaoTexto: results.avaliacao,
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