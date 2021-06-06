let id;

function alimentaATela(clinica) {
  
  document.getElementById("titulo").innerHTML = clinica.nome;
  document.getElementById("nota").innerHTML = `Avaliação: ${clinica.nota} <span id="clinicaRating" class="ratingStar"></span>`;
  document.getElementById("clinicaImg").src = clinica.imgDaClinica == null ? vetImageDefault : clinica.imgDaClinica;
  document.getElementById("tel").innerHTML= `Telefone: ${clinica.telefone}`
  document.getElementById("endereco").innerHTML= `Endereço: ${clinica.endereco}`
  document.getElementById("openNow").innerHTML= openNowDisplay(clinica.abertoAgora)
  
  let clinicaStars = ratingBuilder(clinica.nota);

  for (let starIcon of clinicaStars) {
    document.getElementById("clinicaRating").appendChild(starIcon);
  }

  if(clinica.avaliacoes.length == 0){
    document
      .getElementById("comentarios")
      .appendChild(noComentaryWarning());
  }
  
  //Cria Comentários vindos da api
  for (let avaliacao of clinica.avaliacoes) {
    document
      .getElementById("comentarios")
      .appendChild(criacomentario(avaliacao));
  }

  //Cria comentários vindo do firebase
  getComments();
}

function criacomentario(avaliacao) {

  let comentario;
  comentario = document.createElement("div");
  comentario.className = "avaliacao ";

  let name = avaliacao.avaliacaoNome;
  let rating = avaliacao.avaliacaoNota;
  let text = avaliacao.avaliacaoTexto;
  let avatar = avaliacao.avatar;

  comentario.innerHTML = `
    <div class="avatar">
      <img src=${avatar} width="100" height="80" />
    </div>
    <div class="commentContainer">
      <div class="commentHeader">
        <p>${name}</p>
        <div class="rating">
          <p>${rating}</p>
          <div class="ratingStar">
          </div>
        </div>
      </div>
      <div class="commentText">
        <p>${text}</p>
      </div>
    </div>
  `
  let ratingIcons = ratingBuilder(rating);

  for (let starIcon of ratingIcons) {
    comentario.querySelector(".ratingStar").appendChild(starIcon);
  }
  
  return comentario;
}

function noComentaryWarning(){
  
  let comentario;
  comentario = document.createElement("div");
  comentario.className = "avaliacao ";
  
  comentario.innerHTML =  `
  <div class="commentContainer" style="margin:10px;">
    <div class="commentText">
      <p>Nenhuma avaliação encontrada</p>
    </div>
  </div>
  `
  return comentario;
}

function ratingBuilder(nota){

  let rate = parseInt(nota);
  let ratingStars = [];
  
  for(let a = 1; a<=rate ;a++){

    let img = document.createElement("img");
    img.src = "../../assets/star.svg"
    ratingStars.push(img);

  }

  return ratingStars;

}

function openNowDisplay(openStatus){

  if(openStatus == "Sim"){
    return  `Aberto agora: <span class="abertoSim"> ${openStatus}</span>`
  }

  if(openStatus == "Não"){
    return  `Aberto agora: <span class="abertoNao"> ${openStatus}</span>`
  }
  
  return document.getElementById("openNow").style = "display:none;"

}

async function start(){

  id = getIdVet();
  
  let vet = await getClinicaDetails(id);

  alimentaATela(vet);
}

window.onload = start();