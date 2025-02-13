let botaoEnviar = document.querySelector("#btn_enviar");
botaoEnviar.addEventListener("click", enviarFeedback);

function enviarFeedback(){
    let input = document.querySelector("#texto");
    let name = document.querySelector("#nome");
    let feedback = document.createElement("div");
    let nome = document.createElement("h3");
    let comentario = document.createElement("p");
    nome.innerHTML = name.value;
    comentario.innerHTML = input.value;
    feedback.appendChild(nome);
    feedback.appendChild(comentario);
    feedback.classList.add("comentario");
    let secao = document.querySelector(".comentarios");
    secao.appendChild(feedback);
    input.value = '';
    name.value = '';
}