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

    if(vet.reviews){
        for (let review of vet.reviews) {
    
            let avaliacao = {
                avaliacaoNome: review.authorName ,
                avaliacaoNota: review.rating ,
                avaliacaoTexto: review.text, 
                avatar: review.profilePhotoUrl
            }
    
            avaliacoes.push(avaliacao);
        }
    }

    let vetDetails = {
        nome: vet.name,
        tipo: vet.types,
        nota: vet.rating,
        telefone: vet.formattedPhoneNumber,
        endereco: vet.formattedAddress,
        abertoEm: vet.openingHours != null ? vet.openingHours.weekdayText : null,
        abertoAgora: vet.openingHours != null ? vet.openingHours.openNow ? "Sim": "Não" : "Não sabemos",
        image: vet.photos,
        qTDAvaliacoes: vet.reviews == null ? 0 : vet.reviews.length ,
        avaliacoes: avaliacoes
    }

    return vetDetails;
}


function getIdVet(){
  
    let vetId =  getQueryStringValue("id");
    
    return vetId;
}