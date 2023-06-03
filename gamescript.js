document.addEventListener("DOMContentLoaded", function () {
  let letraEscolhida;
  let palavraAdivinha = "CASA";
  let arr = [];
  let pai = document.querySelector(".guess-word");
  let indexes = [];
  let bodyparties = document.querySelectorAll(".figure-part");
  let errorscount = 0;

  function getLetraEscolhida() {
    return letraEscolhida;
  }

  function setLetraEscolhida(letra) {
    letraEscolhida = letra;
  }

  //Função para contar quantas letras tem a palavra
  function contaLetra(palavra) {
    return palavra.length;
  }

  //Função para desenhar na tela traços, de acordo com o tamanho da palavra.
  function desenhaTraco2(qtd) {
    if (arr == "") {
      for (let i = 0; i < qtd; i++) {
        arr.push("_");
      }
    }
    pai.innerHTML = arr.join("");
  }

  /* Verifica se letra existe em palavra a ser adivinhada:
  / Caso positivo, adiciona no array indexes
  / a posição desta(s), podendo ser uma ou mais posições */
  function checkLetra(letraEscolhida) {
    let checked = false;
    for (let i = 0; i < palavraAdivinha.length; i++) {
      if (palavraAdivinha[i] == letraEscolhida) {
        indexes.push(i);
        document.getElementById(letraEscolhida).classList.add("correct");
        checked = true;
      }
    }
    if (checked == false) {
      document.getElementById(letraEscolhida).classList.add("incorrect");
      errorscount = errorscount + 1;
      document.querySelector(".history-letters").append(letraEscolhida);

      for (let i = 0; i < errorscount; i++) {
        bodyparties[i].style.display = "block";
      }
    }

    checked = false;
    console.log(indexes);
  }

  /* Revela a letra na(s) posição(ões) encontrada(s):
  / Percorre o array de posições e adiciona no array pai,
  / na mesma posição do array filho, a letra que se encontra,
  / em tal posição */
  function revelarLetra() {
    for (let i = 0; i < indexes.length; i++) {
      arr[indexes[i]] = palavraAdivinha[indexes[i]];
    }
    console.log(arr);
    pai.innerHTML = arr.join("");
  }

  //Captura qual letra foi clicada
  document.querySelector("#keys").addEventListener("submit", function (item) {
    setLetraEscolhida(item.submitter.value);
    console.log(item);
    console.log(getLetraEscolhida());
    checkLetra(getLetraEscolhida());
    revelarLetra();
  });

  document.querySelector("#play").addEventListener("click", function () {
    let a = document.querySelectorAll(".gm-btn");
    a.forEach(function (element) {
      element.classList.remove("disabled");
    });

    let nrLetras = contaLetra(palavraAdivinha);
    desenhaTraco2(nrLetras);
    console.log("play");
  });
});
