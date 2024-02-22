import "/style.css";

// use this method to generate random colors with odd color
const getRandomColors = function () {
  var ratio = 0.618033988749895;

  var hue = (Math.random() + ratio) % 1;
  var saturation = Math.round(Math.random() * 100) % 85;
  var lightness = Math.round(Math.random() * 100) % 85;

  var color =
    "hsl(" + Math.round(360 * hue) + "," + saturation + "%," + lightness + "%)";
  var oddColor =
    "hsl(" +
    Math.round(360 * hue) +
    "," +
    saturation +
    "%," +
    (lightness + 10) +
    "%)";

  return {
    color,
    oddColor,
  };
};

const gridContainer = document.querySelector(".grid");
const scoreContainer = document.querySelector(".score");
let size = 4;
let score = 0;

function correctClick() {
  size++;
  score++;
  generateGrid(size);
}

function wrongClick() {
  score--;
  size = 4;
  gridContainer.classList.add("shake");
  setTimeout(function () {
    generateGrid(size);
  }, 800);
}

function generateGrid(size) {
  const { color, oddColor } = getRandomColors();
  scoreContainer.innerHTML = `<p>Score: ${score}</p>`;
  gridContainer.innerHTML = "";
  gridContainer.classList.remove("shake");

  const randomColorRow = Math.floor(Math.random() * size);

  const randomColorCol = Math.floor(Math.random() * size);

  for (let j = 0; j < size; j++) {
    const ROW = document.createElement("div");
    ROW.className = "row";

    for (let i = 0; i < size; i++) {
      const COL = document.createElement("div");
      COL.className = "col";
      COL.style.backgroundColor = color;
      if (randomColorCol == i && randomColorRow == j) {
        COL.style.backgroundColor = oddColor;
      }
      ROW.appendChild(COL);

      COL.addEventListener("click", function () {
        if (randomColorCol == i && randomColorRow == j) {
          correctClick();
        } else {
          wrongClick();
        }
      });
    }
    gridContainer.appendChild(ROW);
  }
}
function init() {
  generateGrid(4);
}
init();
