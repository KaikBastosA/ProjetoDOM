let contador = 1;
let soma = 0;

let botaoAdicionar = document.querySelector("#btn_adicionar");
botaoAdicionar.addEventListener("click", adicionarMedia);

let botaoCalcular = document.querySelector("#btn_calcular");
botaoCalcular.addEventListener("click", calcularMedia);

function adicionarMedia() {
    let input = document.querySelector("#nota");
    let notas = document.querySelector(".notas");
    let valor = input.value.replace(",", ".")
    if (valor.trim() === "") {
        alert("Por favor, insira uma nota");
        return;
    }

    else if (isNaN(parseFloat(valor))) {
        alert("A nota digitada é invalida, por favor, insira uma nota válida");
        return;
    }

    else if (parseFloat(valor) < 0 || parseFloat(valor) > 10) {
        alert("A nota digitada é invalida, por favor, insira uma nota válida");
        return;
    }

    else {
        let escopo = document.createElement("div");
        let nota = document.createElement("p");
        nota.innerHTML = `A Nota ${contador} foi ${valor}`;
        escopo.appendChild(nota);
        notas.appendChild(escopo);
        soma += parseFloat(valor);
        contador++;
        input.value = '';
    }
}

function calcularMedia() {
    let media = soma / (contador - 1);
    let resultado = document.querySelector("#media");
    resultado.innerHTML = `${media.toFixed(2)}`;
}