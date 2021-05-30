function submitComment(){
   let nota =  document.getElementById("userNota").innerHTML;
   let text = document.getElementById("commentInput").value;

    //req to backend

    //ifsuccess do:
   let comentario = criacomentario({
    avaliacaoNome : "Anônimo",
    avaliacaoNota: nota,
    avaliacaoTexto: text,
    avatar: defaultAvatar
   });


   document
      .getElementById("comentarios")
      .appendChild(comentario);

   window.scrollTo(0,document.body.scrollHeight);
   clearComment();
}


function clearComment(){
   document.getElementById("commentInput").value = " ";
}