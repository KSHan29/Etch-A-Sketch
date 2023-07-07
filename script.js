let gridSize = 10;
const cellWidth = document.querySelector(".grid").clientWidth / 16;

function init() {
  let grid = document.querySelector(".grid");
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    for (let j = 0; j < gridSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

init();
