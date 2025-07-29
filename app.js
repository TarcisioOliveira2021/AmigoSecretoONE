let amigos = [];

function adicionarAmigo() {
    let nomeInformado = document.getElementById("amigo").value;
    if(validarNome(nomeInformado)) {
        amigos.push(nomeInformado);
        document.getElementById("amigo").value = "";
        atualizarListaAmigos();
    }
}

function validarNome(nomeInformado) {
    if(nomeInformado.trim() === "") {
        alert("Por favor, digite um nome válido.");
        return false;
    }
    return true;
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const amigoSorteado = amigos[parseInt(Math.random() * amigos.length)];
    resultado.textContent = `O amigo sorteado é: ${amigoSorteado}`;
}
