const imageCount = 50;
const imageFolder = "assets/images";
const imageExt = "jpg";

const audioFiles = [
  "assets/audio/audio-1.mp3",
  "assets/audio/audio-2.mp3",
  "assets/audio/audio-3.mp3",
  "assets/audio/audio-4.mp3",
];

const animalPhrases = [
  "Hooo-oo-oo, wuuuu, rrrrr",
  "Mmmmmm-oo-whuu, gluuuu",
  "Oooo-whaaa-rrrr, uuuuu",
  "Hruuu-uu-uu, klikkk, klikkk",
  "Woooo-oo-oo-mmmm",
  "Rrrrr-ooo-hoo-uuuu",
  "Glooo-ooo-ooo, wuuuu",
  "Huuuu-huu-huu, mmmm",
  "Ooo-rrr-uuuu, klik-klik",
  "Whuuuu-oooo-rrr",
  "Muuuu-uuuu-oo, glll",
  "Ruuuu-uu-uu, hoo-hooo",
  "Oooo-ooo-mmm-rrrr",
  "Hooo-wuuu-uuu, gluu",
  "Whaa-oo-oo-oooo",
  "Mmmm-wuu-uu-uu, rrrr",
];

const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const toggle = document.getElementById("toggle");
const animalText = document.getElementById("animal-text");

const audioElements = [
  document.getElementById("audio-1"),
  document.getElementById("audio-2"),
  document.getElementById("audio-3"),
  document.getElementById("audio-4"),
];

let index = 1;
let isPlaying = true;
let timer = null;

function imagePath(i) {
  return `${imageFolder}/image-${String(i).padStart(2, "0")}.${imageExt}`;
}

function updateSlide(nextIndex) {
  slide.classList.add("is-fading");
  const safeIndex = ((nextIndex - 1 + imageCount) % imageCount) + 1;
  index = safeIndex;
  const newSrc = imagePath(index);

  window.setTimeout(() => {
    slide.src = newSrc;
    slide.alt = `Slideshow image ${index}`;
    slide.classList.remove("is-fading");
  }, 350);

  updatePhrase();
}

function updatePhrase() {
  const phrase = animalPhrases[(index - 1) % animalPhrases.length];
  animalText.textContent = phrase;
}

function schedule() {
  if (timer) {
    window.clearInterval(timer);
  }
  if (isPlaying) {
    timer = window.setInterval(() => updateSlide(index + 1), 3500);
  }
}

function setupAudio() {
  audioElements.forEach((el, i) => {
    el.src = audioFiles[i];
    el.loop = true;
    el.volume = 0.4;
  });
}

function tryPlayAll() {
  audioElements.forEach((el) => {
    el.play().catch(() => {});
  });
}

function unlockAudio() {
  tryPlayAll();
  window.removeEventListener("pointerdown", unlockAudio);
  window.removeEventListener("keydown", unlockAudio);
}

prev.addEventListener("click", () => {
  updateSlide(index - 1);
});

next.addEventListener("click", () => {
  updateSlide(index + 1);
});

toggle.addEventListener("click", () => {
  isPlaying = !isPlaying;
  toggle.textContent = isPlaying ? "Pause" : "Play";
  schedule();
});

window.addEventListener("load", () => {
  setupAudio();
  updateSlide(index);
  updatePhrase();
  schedule();
  tryPlayAll();
});

window.addEventListener("pointerdown", unlockAudio);
window.addEventListener("keydown", unlockAudio);
