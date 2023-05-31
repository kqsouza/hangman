document.addEventListener("DOMContentLoaded", function () {
  let letraEscolhida;
  let palavraAdivinha = "CASA";
  let arr = [];
  let pai = document.querySelector(".guess-word");
  let indexes = [];

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

  //Função para desenhar na tela traços de acordo com o tmh da letra
  /*function desenhaTraco(qtd) {
    let pai = document.querySelector(".guess-word");

    for (let i = 0; i < qtd; i++) {
      pai.append(document.createTextNode("_"));
    }
  }*/

  //Função para desenhar na tela traços, append em array com posicionamento.
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
    for (let i = 0; i < palavraAdivinha.length; i++) {
      if (palavraAdivinha[i] == letraEscolhida) {
        indexes.push(i);
      }
    }
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
  /*
  document.querySelector("#stop").addEventListener("click", function () {
    console.log("stop");
    isRunning = false;
  });
*/
  //setInterval(main, 5000);
});
