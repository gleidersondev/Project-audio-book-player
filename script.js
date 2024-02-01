const audio = document.getElementById('audio-capitulo');
const btnAnterior = document.getElementById('anterior');
const btnOuvirAudio = document.getElementById('play-pause');
const btnProximo = document.getElementById('proximo');
const elementoCapitulo = document.getElementById('capitulo');

let emReproducao = false;
let capitulo = 1;
console.log('o valor de capitulo é', capitulo);

// console.log(elemento);
// console.log(capituloAtual);
// console.log(btnOuvirAudio);
console.log(audio);

const reproducaoDeAudio = () => {
  if (!emReproducao) {
    emReproducao = true;
    audio.play();
    btnOuvirAudio.classList.add('bi', 'bi-play-circle');
  } else {
    audio.pause();
    btnOuvirAudio.classList.remove('bi', 'bi-play-circle');
    emReproducao = false;
    btnOuvirAudio.classList.add('bi', 'bi-pause-circle');
  }
};

const proximoCapitulo = () => {
  let elemento = audio.attributes.src.nodeValue;
  console.log('elemento é', elemento);
  let capituloAtual = parseInt(elemento.match(/\d+/g)[0]);
  emReproducao = false;

  if (capituloAtual <= 9) {
    capitulo += 1;
    let atualizaSrc = `./books/dom-casmurro/${capitulo}.mp3`;
    console.log(atualizaSrc);
    elementoCapitulo.innerText = `Capítulo ${capitulo}`;
    audio.src = atualizaSrc;
    console.log(audio.src = atualizaSrc);
  } else {
    capitulo = 1;
    elementoCapitulo.innerText = 'Capítulo 1';
  }

  reproducaoDeAudio();
};

btnOuvirAudio.addEventListener("click", reproducaoDeAudio);
btnProximo.addEventListener("click", proximoCapitulo);

