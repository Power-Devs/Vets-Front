let clinica = {
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

function alimentaATela(clinica) {
  

  document.getElementById("titulo").innerHTML = clinica.nome;
  document.getElementById("vet").innerHTML = clinica.tipo;
  document.getElementById("nota").innerHTML = `${clinica.nota} <span class="">(${clinica.avaliacoes.length})</span>`;
  document.getElementById("clinicaImg").src = clinica.imgDaClinica == null ? vetImageDefault : clinica.imgDaClinica;
  
  for (let avaliacao of clinica.avaliacoes) {
    document
      .getElementById("comentarios")
      .appendChild(criacomentario(avaliacao));
  }

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

function ratingBuilder(nota){

  let rate = parseInt(nota);
  let ratingStars = [];
  
  for(let a = 1; a<=rate ;a++){

    let img = document.createElement("img");
    img.src = "../../assets/star.svg"
    ratingStars.push(img);

  }

  // for(let a = 1; a<=5-rate ;a++){

  //   let img = document.createElement("img");
  //   img.src = "../../assets/starOff.svg"
  //   img.className ="starOff";
  //   ratingStars.push(img);

  // }

  return ratingStars;

}

async function start(){

  let id = "ChIJzeaQfUVTzpQRGvUGJg3SnSU";
  
  let vet = await getClinicaDetails(id);

  alimentaATela(vet);
}

window.onload = start();