import "./styles.css";

const notesNames = [
  "c",
  "cis",
  "d",
  "dis",
  "e",
  "f",
  "fis",
  "g",
  "gis",
  "a",
  "b",
  "h"
];

const keysSelector = ".keyboard > div";
document.querySelectorAll(keysSelector).forEach((pianoKey, index) => {
  let noteOrder = index;
  let octaveNum = 4 + Math.floor(noteOrder / notesNames.length);

  while (noteOrder > notesNames.length - 1) {
    noteOrder = noteOrder - notesNames.length;
  }

  let sound = `./src/notes/${notesNames[noteOrder]}${octaveNum}.mp3`;

  pianoKey.innerHTML = `<audio controls>
    <source src=${sound} type="audio/mpeg" />
  </audio>`;

  const music = pianoKey.querySelector("audio");

  pianoKey.addEventListener("mousedown", () => {
    music.play();
    pianoKey.classList.add("pressed");
  });
  pianoKey.addEventListener("touchstart", () => {
    music.play();
    pianoKey.classList.add("pressed");
  });
  pianoKey.addEventListener("mouseup", () => {
    pianoKey.classList.remove("pressed");
    music.currentTime = 0;
  });
  pianoKey.addEventListener("touchend", () => {
    pianoKey.classList.remove("pressed");
    music.currentTime = 0;
  });
});
