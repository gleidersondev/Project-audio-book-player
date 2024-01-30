const audio = document.getElementById('audio-capitulo');
const btnAnterior = document.getElementById('anterior');
const btnOuvirAudio = document.getElementById('play-pause');
const btnProximo = document.getElementById('proximo');

let emReproducao = false;

console.log(btnOuvirAudio);

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

btnOuvirAudio.addEventListener("click", reproducaoDeAudio);

