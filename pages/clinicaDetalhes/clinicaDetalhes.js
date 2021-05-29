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
    {
      nome: "Deise",
      avaliacaoTexto: "Lorem Ipsum is simply dummy text of the printing and typesetting industr",
      avaliacaoNota: 4.0,
      avatar:
        "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
    },
    {
      nome: "Marcos",
      avaliacaoTexto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      avaliacaoNota: 3.7,
      avatar:
        "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
    },
    {
      nome: "Trovao",
      avaliacaoTexto: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      avaliacaoNota: 4.7,
      avatar:
        "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
    }
  ]
};

function alimentaATela(clinica) {
  document.getElementById("titulo").innerHTML = clinica.nome;
  document.getElementById("vet").innerHTML = clinica.tipo;
  document.getElementById("nota").innerHTML = `${clinica.nota} <span class="">(${clinica.avaliacoes.length})</span>`;
  document.getElementById("clinicaImg").src = clinica.imgDaClinica;
  
  //implementar a função que insere os dados na pagina

  for (let avaliacao of clinica.avaliacoes) {
    document
      .getElementById("comentarios")
      .appendChild(criacomentario(avaliacao));
  }
}

// function criacomentario(avaliacao) {

//   let comentario;
//   comentario = document.createElement("div");
//   comentario.className = "avaliacao ";

//   let avatar;
//   avatar = document.createElement("div");
//   avatar.className = "avatar";

//   let img;
//   img = document.createElement("img");
//   img.src = avaliacao.avatar;
//   img.width = "100";
//   img.height = "80";

//   let div;
//   div = document.createElement("div");

//   let pnome;
//   pnome = document.createElement("p");
//   pnome.innerHTML = avaliacao.nome;

//   let pnota;
//   pnota = document.createElement("p");
//   pnota.innerHTML = avaliacao.avaliacaoNota;

//   let pcomentario;
//   pcomentario = document.createElement("p");
//   pcomentario.innerHTML = avaliacao.avaliacaoTexto;
//   avatar.appendChild(img);

//   div.appendChild(pnome);
//   div.appendChild(pnota);
//   div.appendChild(pcomentario);
//   comentario.appendChild(avatar);
//   comentario.appendChild(div);

//   return comentario;
// }

/*
note to add starts
let a = document.querySelector(".commentContainer");
a.children[0]
dai da pra appendar HTMLElements aqui
entao só criar um start Builder
*/

function criacomentario(avaliacao) {

  let comentario;
  comentario = document.createElement("div");
  comentario.className = "avaliacao ";

  let name = avaliacao.nome;
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

  for(let a = 1; a<=5-rate ;a++){

    let img = document.createElement("img");
    img.src = "../../assets/starOff.svg"
    img.className ="starOff";
    ratingStars.push(img);
  }


  return ratingStars;
}

window.onload = alimentaATela(clinica);