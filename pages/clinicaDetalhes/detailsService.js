async function requestHandler( URL_Request ){
    let response = await fetch( URL_Request );
    let data = await response.json();
    return data;
}

async function getClinicaDetails(id){
    
    vet = await apiRequest(id);

    return clinicaBuilder(vet);
}

async function apiRequest(id){

    let requestURL = `${vetsApi}/details?id=${id}`;

    return await requestHandler(requestURL);
}

function clinicaBuilder(vet){
    
    let avaliacoes = [];

    for (let review of vet.reviews) {

        let avaliacao = {
            avaliacaoNome: review.authorName ,
            avaliacaoNota: review.rating ,
            avaliacaoTexto: review.text, 
            avatar: review.profilePhotoUrl
        }

        avaliacoes.push(avaliacao);
    }

    let vetDetails = {
        nome: vet.name,
        tipo: vet.types,
        nota: vet.rating,
        image: vet.photos,
        qTDAvaliacoes: vet.reviews.length,
        avaliacoes: avaliacoes
    }

    console.log(vetDetails);

    return vetDetails;
}


let clin = {
    nome: "Clinica Devs Dog",
    tipo: "Veterinário",
    nota: 5.0,
    QtdAvaliacoes: 1,
    imgDaClinica:
      "http://www.gerare.com.br/wp-content/uploads/2018/02/110ab962-2b34-4dbb-a465-2e50cd068e7d.jpg",
    avaliacoes: [
      {
        nome: "Gustavo",
        avaliacaoTexto: "Os melhores veterinarios que encontramos",
        avaliacaoNota: 5.0,
        avatar:
          "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
      },
    ]
};