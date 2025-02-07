let amigos = [];
const listaAmigos = document.getElementById("resultado");
const loading = document.getElementById("loading"); // Certifique-se de ter uma div com o ID "loading" no seu HTML

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
 
    loading.style.display = "block";
    listaAmigos.style.display = "none";

    setTimeout(() => {
      const min = 0;
      const max = amigos.length;
      const indiceAleatorio = Math.floor(Math.random() * (max - min) + min);

      loading.style.display = "none";

      listaAmigos.style.display = "block";
      listaAmigos.innerHTML = `<li>O amigo sorteado foi: ${amigos[indiceAleatorio]}</li>`;
    }, 3000);
  }
};
