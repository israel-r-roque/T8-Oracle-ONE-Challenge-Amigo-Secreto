let amigos = [];
const listaAmigos = document.getElementById("resultado");

const adicionarAmigo = () => {
  const amigo = document.getElementById("amigo");

  if (amigo.value != "") {
    amigos.push(amigo.value);
    amigo.value = "";
  } else {
    alert("Por favor, insira um nome.");
  }

  atualizarListaAmigos();
};

const atualizarListaAmigos = () => {
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  });
};

const sortearAmigo = () => {
  if (amigos.length > 0) {
    const min = 0;
    const max = amigos.length;
    const indiceAleatorio = Math.floor(Math.random() * (max - min) + min)
    listaAmigos.innerHTML = `<li>O amigo sorteado foi: ${amigos[indiceAleatorio]}</li>`
  }
}
