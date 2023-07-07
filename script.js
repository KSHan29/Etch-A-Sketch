let gridSize = 10;
const gridWidth = document.querySelector(".grids").clientWidth / 16;
console.log(gridWidth);
function init() {
  let grids = document.querySelector(".grids");
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("grids-row");
    for (let j = 0; j < gridSize; j++) {
      let grid = document.createElement("div");
      grid.classList.add("grid");
      //   grid.style.width = gridWidth;
      //   grid.style.height = gridWidth;
      //   cell.style.width =
      //   grid.textContent = `${i} ${j}`;
      row.appendChild(grid);
    }
    grids.appendChild(row);
  }
}

init();
