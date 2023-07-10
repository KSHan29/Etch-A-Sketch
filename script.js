let gridSize = 10;
const cellWidth = document.querySelector(".grid").clientWidth / 16;
let colour = "blue";
let backgroundColour = "white";

function changeColour(e) {
  //   e.target.style.backgroundColour = "black";
  //   console.log(e.target);
  e.target.style.background = colour;
}

function clearGrid() {
  let cell = document.querySelector(".cell");
  cell.style.background = backgroundColour;
}

function changeGridSize(e) {
  let grid = document.querySelector(".grid");
  grid.textContent = "";
  gridSize = e.target.value;
  let gridSizeDisplay = document.querySelector(".grid-size-display");
  gridSizeDisplay.textContent = `Grid Size: ${gridSize}`;
  init();
  //   clearGrid();
}

function addListeners() {
  let gridSizeControl = document.querySelector(".grid-size");
  gridSizeControl.addEventListener("input", changeGridSize);
}

function init() {
  let grid = document.querySelector(".grid");
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseover", changeColour);
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

init();
addListeners();
