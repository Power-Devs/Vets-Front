async function submitComment(){
   let nota =  document.getElementById("userNota").innerHTML;
   let text = document.getElementById("commentInput").value;
   let comentario;

   await createAvaliacao(text,nota)

   document
      .getElementById("comentarios")
      .appendChild(comentario);

   window.scrollTo(0,document.body.scrollHeight);
   clearComment();
}

function clearComment(){
   document.getElementById("commentInput").value = " ";
}