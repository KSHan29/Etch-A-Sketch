let gridSize = 10;
const cellWidth = document.querySelector(".grid").clientWidth / 16;
let colour = "#87cfeb";
let backgroundColour = "white";

/* rainbow, gradient, eraser */
let toggleOn = [false, false, false];
let toggleOnSelector = [".rainbow", ".gradient", ".eraser"];
const rainbowOn = 0;
const gradientOn = 1;
const eraserOn = 2;

function colourCell(e) {
  if (toggleOn[gradientOn]) {
    const brightness = e.target.style.filter;
    if (brightness == "") {
      e.target.style.filter = "brightness(90%)";
    } else {
      const start = brightness.indexOf("(");
      const end = brightness.indexOf(")");
      const newBrightness = brightness.substring(start + 1, end - 1);
      e.target.style.filter = `brightness(${Number(newBrightness) - 10}%)`;
    }
    return;
  } else if (toggleOn[rainbowOn]) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.background = "#" + randomColor;
  } else if (toggleOn[eraserOn]) {
    e.target.style.background = backgroundColour;
  } else {
    e.target.style.background = colour;
  }
  e.target.style.filter = "";
}

function changeColour(e) {
  colour = e.target.value;
}

function changeBackgroundColour(e) {
  backgroundColour = e.target.value;
  setGridColour();
}

function setGridColour() {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.style.background = backgroundColour));
}

function toggleOff() {
  for (i in toggleOnSelector) {
    const curr = document.querySelector(toggleOnSelector[i]);
    curr.style["box-shadow"] = "";
    toggleOn[i] = false;
  }
}

function toggleRainbow() {
  const rainbow = document.querySelector(".rainbow");
  if (!toggleOn[rainbowOn]) {
    toggleOff();
    const rainbowShadow = "0 0 10px 2px rgb(11, 119, 162)";
    rainbow.style["box-shadow"] = rainbowShadow;
    toggleOn[rainbowOn] = true;
  } else {
    rainbow.style["box-shadow"] = "";
    toggleOn[rainbowOn] = false;
  }
}

function toggleGradient() {
  const gradient = document.querySelector(".gradient");
  if (!toggleOn[gradientOn]) {
    toggleOff();
    const gradientShadow = "0 0 10px 2px rgb(11, 119, 162)";
    gradient.style["box-shadow"] = gradientShadow;
    toggleOn[gradientOn] = true;
  } else {
    gradient.style["box-shadow"] = "";
    toggleOn[gradientOn] = false;
  }
}

function toggleEraser() {
  const eraser = document.querySelector(".eraser");
  if (!toggleOn[eraserOn]) {
    toggleOff();
    const eraserShadow = "0 0 10px 2px rgb(11, 119, 162)";
    eraser.style["box-shadow"] = eraserShadow;
    toggleOn[eraserOn] = true;
  } else {
    eraser.style["box-shadow"] = "";
    toggleOn[eraserOn] = false;
  }
}

function changeGridSize(e) {
  let grid = document.querySelector(".grid");
  grid.textContent = "";
  gridSize = e.target.value;
  let gridSizeDisplay = document.querySelector(".grid-size-display");
  gridSizeDisplay.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
  init();
}

function addListeners() {
  let colourClass = document.querySelector(".colour");
  let backgroundClass = document.querySelector(".background-colour");
  let rainbow = document.querySelector(".rainbow");
  let gradient = document.querySelector(".gradient");
  let eraser = document.querySelector(".eraser");
  let clear = document.querySelector(".clear");
  let gridSizeControl = document.querySelector(".grid-size");
  colourClass.addEventListener("input", changeColour);
  backgroundClass.addEventListener("input", changeBackgroundColour);
  rainbow.addEventListener("click", toggleRainbow);
  gradient.addEventListener("click", toggleGradient);
  eraser.addEventListener("click", toggleEraser);
  clear.addEventListener("click", setGridColour);
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
      cell.addEventListener("mouseover", colourCell);
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
  setGridColour();
}

init();
addListeners();
