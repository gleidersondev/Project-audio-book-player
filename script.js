const audio = document.getElementById('audio-capitulo');
const btnAnterior = document.getElementById('anterior');
const btnOuvirAudio = document.getElementById('play-pause');
const btnProximo = document.getElementById('proximo');
const elementoCapitulo = document.getElementById('capitulo');

let emReproducao = false;
let capitulo = 1;
console.log('o valor de capitulo é', capitulo);

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
  // capitulo += 1;
  // let elemento = audio.attributes.src.nodeValue;
  let atualizaCapitulo = capitulo +=1;
  console.log('o valor de elemento é', atualizaCapitulo);
  // let capituloAtual = parseInt(atualizaCapitulo.match(/\d+/g)[0]);
  emReproducao = false;

  if (atualizaCapitulo <= 10) {
    let atualizaSrc = `./books/dom-casmurro/${capitulo}.mp3`;
    console.log(atualizaSrc);
    elementoCapitulo.innerText = `Capítulo ${capitulo}`;
    audio.src = atualizaSrc;
    console.log(audio.src = atualizaSrc);
  } else {
    capitulo = 1;
    elementoCapitulo.innerText = 'Capítulo 1';
    audio.src = './books/dom-casmurro/1.mp3';
  }

  reproducaoDeAudio();
};

btnOuvirAudio.addEventListener("click", reproducaoDeAudio);
btnProximo.addEventListener("click", proximoCapitulo);

