let clinica = {
  nome: "Clinica Devs Dog",
  tipo: "Clinica",
  nota: 5.0,
  QtdAvaliacoes: 1,
  imgDaClinica:
    "http://www.gerare.com.br/wp-content/uploads/2018/02/110ab962-2b34-4dbb-a465-2e50cd068e7d.jpg",
avaliacoes:[
    {
        nome: "Gustavo",
        avaliacaoTexto: "Os melhores veterinarios que encontramos",
        avaliacaoNota: 5.0,
        avatar:
          "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
      },
]
};


let avaliacao2 = {
  nome: "Deise",
  avaliacaoTexto: "Os melhores veterinarios que encontramos",
  avaliacaoNota: 4.0,
  avatar:
    "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
};
let avaliacao3 = {
  nome: "Marcos",
  avaliacaoTexto: "Os melhores veterinarios que encontramos",
  avaliacaoNota: 3.7,
  avatar:
    "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
};
let avaliacao4 = {
  nome: "Trovao",
  avaliacaoTexto: "Os melhores veterinarios que encontramos",
  avaliacaoNota: 4.7,
  avatar:
    "https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png",
};



function alimentaATela(clinica) {
  let avaliacao = clinica.avaliacoes
  document.getElementById("titulo").innerHTML = clinica.nome;
  document.getElementById("vet").innerHTML = clinica.tipo;
  document.getElementById("nota").innerHTML = clinica.nota;
  //implementar a função que insere os dados na pagina
  
  let teste = avaliacao.length;

  for (let i = 0; i < teste; i++) {
    document
      .getElementById("comentarios")
      .appendChild(
        criacomentario(
          avaliacao[i].nome,
          avaliacao[i].avaliacaoNota,
          avaliacao[i].avaliacaoTexto
        )
      );
  }
}
function criacomentario(nome, nota, avaliacao) {
  
  let comentario;
  comentario = document.createElement("div");
  comentario.className = "avaliacao borda";

  let avatar;
  avatar = document.createElement("div");
  avatar.className = "avatar";

  let img;
  img = document.createElement("img");
  img.src = "../../imagens/transferir (1).png";
  img.width = "180";

  let div;
  div = document.createElement("div");

  let pnome;
  pnome = document.createElement("p");
  pnome.innerHTML = nome;

  let pnota;
  pnota = document.createElement("p");
  pnota.innerHTML = nota;

  let pcomentario;
  pcomentario = document.createElement("p");
  pcomentario.innerHTML = avaliacao;
  avatar.appendChild(img);

  div.appendChild(pnome);
  div.appendChild(pnota);
  div.appendChild(pcomentario);
  comentario.appendChild(avatar);
  comentario.appendChild(div);

  return comentario;
}

window.onload = alimentaATela(clinica); // executa a função ao abrir a página.
