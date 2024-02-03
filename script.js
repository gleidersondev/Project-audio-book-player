const audio = document.getElementById('audio-capitulo');
const btnAnterior = document.getElementById('anterior');
const btnOuvirAudio = document.getElementById('play-pause');
const btnProximo = document.getElementById('proximo');
const elementoCapitulo = document.getElementById('capitulo');

let emReproducao = false;
let capitulo = 1;
let qtdCliques = 0;

const reproducaoDeAudio = () => {
  emReproducao = true;
  audio.play();
  btnOuvirAudio.classList.remove('bi', 'bi-play-circle');
  btnOuvirAudio.classList.add('bi', 'bi-pause-circle');
};

const reproducaoPausada = () => {
  emReproducao = false;
  audio.pause();
  btnOuvirAudio.classList.remove('bi', 'bi-pause-circle');
  btnOuvirAudio.classList.add('bi', 'bi-play-circle');
};

const proximoCapitulo = () => {
  capitulo +=1;
  
  if(emReproducao && capitulo <= 10) {
    let atualizaSrc = `./books/dom-casmurro/${capitulo}.mp3`;
    audio.src = atualizaSrc;
    elementoCapitulo.innerText = `Capítulo ${capitulo}`;
    reproducaoDeAudio();
  } else if (emReproducao && capitulo >= 11) {
    capitulo = 1;
    elementoCapitulo.innerText = 'Capítulo 1';
    audio.src = './books/dom-casmurro/1.mp3';
    reproducaoDeAudio();
  } else if (!emReproducao && capitulo <= 10) {
    let atualizaSrc = `./books/dom-casmurro/${capitulo}.mp3`;
    audio.src = atualizaSrc;
    elementoCapitulo.innerText = `Capítulo ${capitulo}`;
    reproducaoPausada();
  } else {
    capitulo = 1;
    elementoCapitulo.innerText = 'Capítulo 1';
    audio.src = './books/dom-casmurro/1.mp3';
    reproducaoPausada();
  }
};

const capituloAnterior = () => {
  capitulo -=1;
  
  if(emReproducao && capitulo > 0) {
    let atualizaSrc = `./books/dom-casmurro/${capitulo}.mp3`;
    audio.src = atualizaSrc;
    elementoCapitulo.innerText = `Capítulo ${capitulo}`;
    reproducaoDeAudio();
  } else if (emReproducao && capitulo <= 0) {
    capitulo = 1;
    elementoCapitulo.innerText = 'Capítulo 1';
    audio.src = './books/dom-casmurro/1.mp3';
    reproducaoDeAudio();
  } else if (!emReproducao && capitulo <= 0) {
    capitulo = 1;
    let atualizaSrc = `./books/dom-casmurro/${capitulo}.mp3`;
    audio.src = atualizaSrc;
    elementoCapitulo.innerText = `Capítulo ${capitulo}`;
    reproducaoPausada();
  } else {
    elementoCapitulo.innerText = `Capítulo ${capitulo}`;
    audio.src = `./books/dom-casmurro/${capitulo}.mp3`;
    reproducaoPausada();
  }
};

const cliques = () => {
  qtdCliques += 1;

  if (qtdCliques === 2) {
    reproducaoPausada();
    qtdCliques = 0;
  }
};

btnOuvirAudio.addEventListener("click", reproducaoDeAudio);
btnProximo.addEventListener("click", proximoCapitulo);
btnAnterior.addEventListener("click", capituloAnterior);
btnOuvirAudio.addEventListener("click", cliques);