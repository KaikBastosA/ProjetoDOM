let botaoEnviar = document.querySelector("#btn_enviar");
botaoEnviar.addEventListener("click", enviarFeedback);

function enviarFeedback(){
    let input = document.querySelector("#texto");
    if (input.value.trim() === "") {
        alert("Por favor, insira um comentário!");
        return;
    }
    let name = document.querySelector("#nome");
    if (name.value.trim() === "") {
        alert("Por favor, insira seu nome!");
        return;
    }
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