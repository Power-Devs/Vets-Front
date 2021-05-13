
let clinica = {
    nome : "Clinica Life Dog",
    tipo : "Veterinario",
    nota : 4.9,
    QtdAvaliacoes: 1,
    imgDaClinica: 'http://www.gerare.com.br/wp-content/uploads/2018/02/110ab962-2b34-4dbb-a465-2e50cd068e7d.jpg'
}

let avaliacao1 = {
    nome: "Gustavo",
    avaliacaoTexto: "Os melhores veterinarios que encontramos" ,
    avaliacaoNota: 5.0,
    avatar: 'https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png'
}

let avaliacao2= {
    nome: "Deise",
    avaliacaoTexto: "Os melhores veterinarios que encontramos" ,
    avaliacaoNota: 4.0,
    avatar: 'https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png'
}
let avaliacao3 = {
    nome: "Marcos",
    avaliacaoTexto: "Os melhores veterinarios que encontramos" ,
    avaliacaoNota: 3.7,
    avatar: 'https://www.pinclipart.com/picdir/big/559-5590325_avatar-icon-png-clipart.png'
}

let avaliacoes = [avaliacao1,avaliacao2,avaliacao3] //array com varias avaliações



function alimentaATela(clinica,avaliacoes){
    //implementar a função que insere os dados na pagina
    console.log(avaliacoes)
    
}

window.onload = alimentaATela(clinica,avaliacoes); // executa a função ao abrir a página.